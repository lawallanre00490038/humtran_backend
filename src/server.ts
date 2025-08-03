// server.ts
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import app from './app';
import prisma from './lib/prismaClient';

const server = createServer(app);


export const io = new Server(server, {
  cors: { origin: '*' },
});


export const initSocketHandlers = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log('User connected:', socket.id);


    socket.on('join', (userId: string) => {
      void socket.join(userId);
      console.log(`User ${userId} joined their socket room`);
    });


    socket.on('update-agent-location', async ({ agentId, lat, lng, requesterUserId }: { agentId: string, lat: number; lng: number; requesterUserId: string }) => {
      await prisma.securityAgent.update({
        data: { lat, lng },
        where: { id: agentId },
      });

      // Broadcast to user
      const user = await prisma.emergencyRequest.findFirst({
        where: { status: 'ASSIGNED', userId: requesterUserId },
      });

      if (user) {
        void socket.to(user.userId).emit('updated-agent-location', { lat, lng });
      }
    });

    socket.on('chat', async ({ from, message, to }: { from: string; message: string; to: string }) => {
      void io.to(to).emit('chat', { from, message });

      const [senderExists, receiverExists] = await Promise.all([
        prisma.user.findUnique({ where: { id: from } }),
        prisma.user.findUnique({ where: { id: to } }),
      ]);
      
      if (!senderExists || !receiverExists) {
        console.error('Sender or receiver not found:', { from, to });
        return;
      }
      
      await prisma.message.create({
        data: {
          content: message,
          receiverId: to,
          senderId: from,
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

const PORT = Number(process.env.PORT) || 3000;
server.listen(PORT, () => {
  console.log(`Server running on ${String(PORT)}`);
});