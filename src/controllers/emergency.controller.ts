import { Request, Response } from 'express';
import { Socket } from 'socket.io';

import { EmergencyStatus } from '../generated/prisma'
import prisma from '../lib/prismaClient';
import {io} from "../server"
import { findNearestAgent } from '../utils/geo';




  
export const requestHelp = async (req: Request, res: Response) => {
  const { location, type } = req.body as { location: { lat: number; lng: number }; type: string };
  const userId = req.user.id;

  const emergency = await prisma.emergencyRequest.create({
    data: {
      lat: location.lat,
      lng: location.lng,
      status: EmergencyStatus.PENDING,
      type,
      userId,
    },
  });

  // Find nearest available agent using utils/geo.ts
  const agents = await prisma.securityAgent.findMany();
  const agentsWithLocation = agents.map(agent => ({
    ...agent,
    location: { lat: agent.lat, lng: agent.lng }
  }));
  const nearest = findNearestAgent(location, agentsWithLocation);

  if (nearest) {
    await prisma.emergencyRequest.update({
      data: { securityId: nearest.userId, status: EmergencyStatus.ASSIGNED },
      where: { id: emergency.id },
      
    });

    // Notify via socket

    io.on('connection', (socket: Socket) => {
      console.log('Client connected:', socket.id);

      socket.to(nearest.userId).emit('new-emergency', { emergency });

      socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
      });
    });
    
  }

  res.json(emergency);
};







export const assignAgent = async (req: Request, res: Response) => {
  const { agentId, emergencyId } = req.body as { agentId: string; emergencyId: string };

  const assigned = await prisma.emergencyRequest.update({
    data: {
      securityId: agentId,
      status: EmergencyStatus.ASSIGNED,
    },
    where: { id: emergencyId },
    
  });

  res.json(assigned);
};
