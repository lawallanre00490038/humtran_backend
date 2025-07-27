import { EmergencyStatus } from '../generated/prisma'
import prisma from '../lib/prismaClient';

import { Request, Response } from 'express';
import { findNearestAgent } from '../utils/geo';

import { Socket } from 'socket.io';
import {io} from "../server"




export const requestHelp = async (req: Request, res: Response) => {
  const { type, location } = req.body;
  const userId = req.user.id;

  const emergency = await prisma.emergencyRequest.create({
    data: {
      type,
      lat: location.lat,
      lng: location.lng,
      userId,
      status: EmergencyStatus.PENDING,
    },
  });

  // Find nearest available agent using utils/geo.ts
  const agents = await prisma.securityAgent.findMany();
  const nearest = findNearestAgent(location, agents); // Haversine formula inside

  if (nearest) {
    await prisma.emergencyRequest.update({
      where: { id: emergency.id },
      data: { userId: nearest.userId, status: EmergencyStatus.ASSIGNED },
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
  const { emergencyId, agentId } = req.body;

  const assigned = await prisma.emergencyRequest.update({
    where: { id: emergencyId },
    data: {
      status: EmergencyStatus.ASSIGNED,
      securityId: agentId,
    },
  });

  res.json(assigned);
};
