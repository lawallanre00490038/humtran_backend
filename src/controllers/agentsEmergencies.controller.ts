import { Request, Response } from 'express';

import { SecurityStatus } from '../generated/prisma'
import prisma from '../lib/prismaClient'

export const updateAgentLocation = async (req: Request, res: Response) => {
  const { agentId, location } = req.body as { agentId: string; location: { lat: number; lng: number } };
  const { lat, lng } = location;

  if (!agentId || !lat || !lng) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const agent = await prisma.securityAgent.update({
      data: {
        lastUpdated: new Date(),
        lat: lat,
        lng: lng,
        status: SecurityStatus.ON_LINE
      },
      where: { id: agentId },
     
    });

    res.status(200).json({ agent, message: 'Location updated' });
  } catch (error) {
    res.status(500).json({ error, message: 'Error updating location' });
  }
};




