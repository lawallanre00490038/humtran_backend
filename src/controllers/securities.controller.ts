import { Request, Response } from 'express';

import prisma from '../lib/prismaClient';

export const getSecuritiesWithLocation = async (_req: Request, res: Response) => {
  const securities = await prisma.securityAgent.findMany({
    select: {
      id: true,
      lat: true,
      lng: true,
      name: true,  
      user: {
        select: {
          email: true,
          phone: true,
        }
      },
      userId: true,
      
    }
  });

  return res.status(200).json({ securities });
};
