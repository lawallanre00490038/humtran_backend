// middlewares.ts
import { NextFunction, Request, RequestHandler, Response } from 'express';

export const middleware: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  console.log('Response sent');
  next();
};