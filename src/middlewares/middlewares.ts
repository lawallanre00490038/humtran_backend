// middlewares.ts
import { RequestHandler } from "express";
import { Response, Request, NextFunction } from "express";

export const middleware: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  console.log("Response sent");
  next();
};