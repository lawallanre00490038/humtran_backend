import { Request, Response } from 'express';

import { EMERGENCY_TYPES } from '../constants/emergencyTypes';
import { EmergencyStatus } from '../generated/prisma'
import prisma from '../lib/prismaClient';
import {io} from "../server"
import { findNearestAgent } from '../utils/geo';



export const requestHelp = async (req: Request, res: Response) => {
  const { location, type } = req.body as { location: { lat: number; lng: number }; type: string };
  const userId = req.user.id;
  


  // Step 1: Delete all previous chat sessions involving this user
  const existingSessions = await prisma.chatSession.findMany({
    include: { participants: true },
    where: {
      participants: {
        some: { userId },
      },
    },
  });

  const sessionIds = existingSessions.map(session => session.id);

  if (sessionIds.length > 0) {
    // Delete all messages related to these sessions (if applicable)
    await prisma.message.deleteMany({
      where: {
        sessionId: { in: sessionIds },
      },
    });

    // Delete all participants first
    await prisma.chatParticipant.deleteMany({
      where: {
        sessionId: { in: sessionIds },
      },
    });

    // Delete the sessions themselves
    await prisma.chatSession.deleteMany({
      where: {
        id: { in: sessionIds },
      },
    });
  }




  const emergency = await prisma.emergencyRequest.create({
    data: {
      lat: location.lat,
      lng: location.lng,
      status: EmergencyStatus.PENDING,
      type,
      userId,
    },
  });

  const agents = await prisma.securityAgent.findMany();
  console.log("All the agents: ", agents)
  const agentsWithLocation = agents.map(agent => ({
    ...agent,
    agentUserId: agent.userId,
    location: { lat: agent.lat, lng: agent.lng }
  }));

  console.log("Agent with location: ", agentsWithLocation)

  const nearest = findNearestAgent(location, agentsWithLocation);

  if (nearest) {
    const updatedEmergency = await prisma.emergencyRequest.update({
      data: { securityId: nearest.id, status: EmergencyStatus.ASSIGNED },
      where: { id: emergency.id },
    });

    // Emit socket event to specific agent room (agentId)
    io.to(nearest.agentUserId).emit('new-emergency', { emergency: updatedEmergency });

    return res.status(200).json({
      emergency: updatedEmergency,
      message: 'Emergency created and agent assigned',
      nearestAgent: nearest
    });
  }

  return res.status(200).json({
    emergency,
    message: 'Emergency created but no agent found',
  });
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




export const getEmergencyTypes = (_req: Request, res: Response) => {
  return res.status(200).json({ types: EMERGENCY_TYPES });
};
