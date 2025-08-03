// middlewares/auth.ts
import { NextFunction, Request, Response } from 'express';
import { RequestHandler } from 'express';

import { verifyToken } from '../utils/auth';

export const requireAuth = (roles: string[] = []): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization;
    const tokenFromHeader = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    const token = tokenFromHeader ?? req.cookies.token as string;

    console.log("This is the token from the cookies: ", token);
    if (!token) return res.status(401).json({ error: 'No token' });

    try {
      const user = verifyToken(token);
      console.log("This is the user: ", user);
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
