// middlewares/auth.ts
import { NextFunction, Request, Response } from 'express';

import { verifyToken } from '../utils/auth';

export const requireAuth = (roles: string[] = []) => {
  return (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });

    try {
      const user = verifyToken(token);
      if (roles.length && !roles.includes(user.role)) {
        return res.status(403).json({ error: 'Forbidden' });
      }
      req.user = user;
      next();
      
    } catch {
      res.status(401).json({ error: 'Invalid token' });
    }
  };
};
