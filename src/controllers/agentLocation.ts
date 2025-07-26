// controllers/agentLocation.ts
import { Request, Response } from 'express';
import { SecurityStatus } from '../generated/prisma'
import prisma from '../lib/prismaClient';



export const updateAgentLocation = async (req: Request, res: Response) => {
  const { agentId, lat, lng } = req.body;

  if (!agentId || !lat || !lng) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const agent = await prisma.securityAgent.update({
      where: { id: agentId },
      data: {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        lastUpdated: new Date(),
        status: SecurityStatus.ON_LINE
      },
    });

    res.status(200).json({ message: 'Location updated', agent });
  } catch (error) {
    res.status(500).json({ message: 'Error updating location', error });
  }
};
