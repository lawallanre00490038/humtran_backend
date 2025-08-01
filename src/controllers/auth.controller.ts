import { NextFunction, Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';

import { Role } from "../generated/prisma"
import prisma from '../lib/prismaClient';
import { ApiResponsePayload, LoginPayload, RegisterPayload } from '../types/auth.types';
import { comparePasswords, generateToken, hashPassword, verifyToken } from '../utils/auth';

export const register = async (req: Request<object, object, RegisterPayload>, res: Response<ApiResponsePayload>) => {
  const { email, name, password, phone, role } = req.body;

  if (!email && !phone) {
    res.status(400).json({
      error: "Invalid credentials",
      message: "Email or phone is required",
    } satisfies ApiResponsePayload)
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { phone }],
    },
  });

  if (existingUser) {
    return res.status(400).json({ error: 'User with email or phone already exists' });
  }

  const hashed = await hashPassword(password);

  const user = await prisma.user.create({
    data: { email, name, password: hashed, phone, role: Role.USER },
  });

  // Attach SecurityAgent if role is SECURITY
  if (role === Role.SECURITY) {
    await prisma.securityAgent.create({
      data: { lat: 0, lng: 0, name,  userId: user.id },
    });
  }


  res.cookie('token', generateToken({ email: user.email ?? '', id: user.id, name: user.name, role: user.role }), {
    httpOnly: true,
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });

   res.json({
    message: 'Registration successful.',
    token: generateToken({ email: user.email ?? '', id: user.id, name: user.name, role: user.role }), // Add this
  } satisfies ApiResponsePayload);
  
};



export const login = async (req: Request<object, object, LoginPayload>, res: Response<ApiResponsePayload>) => {
  const { identifier, password } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { email: identifier },
        { phone: identifier }
      ]
    },
  });

  if (!user || !(await comparePasswords(password, user.password))) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  res.cookie('token', generateToken({ email: user.email ?? '', id: user.id, name: user.name, role: user.role }), {
    httpOnly: true,
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });

  res.json({
    message: 'Login successful.',
    token: generateToken({ email: user.email ?? '', id: user.id, name: user.name, role: user.role }), // Add this
  } satisfies ApiResponsePayload);
  
};





export const getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {

  const authHeader = req.headers.authorization;
  const tokenFromHeader = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
  const token = tokenFromHeader ?? req.cookies.token as string;
  if (!token) { 
    return res.status(401).json({ error: 'Token is missing' });
  }

  try {
    const decoded = verifyToken(token);

    if (typeof decoded === 'string' || !('id' in decoded)) {
      return res.status(401).json({ error: 'Invalid token payload' });
    }

    const user = await prisma.user.findUnique({
      where: { id: (decoded as JwtPayload).id as string },
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    res.json({ user });
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json(
      { error: 'Invalid token' } satisfies ApiResponsePayload);
  }
};
