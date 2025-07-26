// server.ts
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import prisma from './lib/prismaClient';
import app from './app';

const server = createServer(app);


export const io = new Server(server, {
  cors: { origin: '*' },
});


export const initSocketHandlers = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log('User connected:', socket.id);


    socket.on('join', (userId: string) => {
      socket.join(userId);
      console.log(`User ${userId} joined their socket room`);
    });

    socket.on('location-update', async ({ userId, lat, lng }) => {
      await prisma.securityAgent.update({
        where: { userId },
        data: { lat, lng },
      });

      // Broadcast to user
      const user = await prisma.emergencyRequest.findFirst({
        where: { userId: userId, status: 'ASSIGNED' },
      });

      if (user) {
        socket.to(user.userId).emit('agent-location', { lat, lng });
      }
    });



    socket.on('chat', async ({ from, to, message }) => {
      io.to(to).emit('chat', { from, message });
    
      await prisma.message.create({
        data: {
          senderId: from,
          receiverId: to,
          content: message,
          type: 'TEXT',
        },
      });
    });

    

    socket.on('disconnect', () => {
      console.log('Disconnected:', socket.id);
    });
  });
};



initSocketHandlers(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));