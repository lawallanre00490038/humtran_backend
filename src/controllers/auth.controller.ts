import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';

import { Role } from "../generated/prisma"
import prisma from '../lib/prismaClient';
import { ApiResponsePayload, LoginPayload, RegisterPayload } from '../types/auth.types';
import { comparePasswords, generateToken, hashPassword, verifyToken } from '../utils/auth';

export const register = async (
  req: Request<unknown, unknown, RegisterPayload>,
  res: Response<ApiResponsePayload>
) => {
  const { email, name, password, phone, role } = req.body;

  if (!email && !phone) {
    return res.status(400).json({
      error: "Invalid credentials",
      message: "Email or phone is required",
    });
  }

  const existingUser = await prisma.user.findFirst({
    where: { OR: [{ email }, { phone }] },
  });

  if (existingUser) {
    return res.status(400).json({ error: 'User with email or phone already exists' });
  }

  const hashed = await hashPassword(password);

  const user = await prisma.user.create({
    data: { email, name, password: hashed, phone, role: role as Role },
  });

  let securityAgent = null;
  if (role === Role.SECURITY) {
    securityAgent = await prisma.securityAgent.create({
      data: { lat: 0, lng: 0, name, userId: user.id },
    });

    console.log("The created security agent is", securityAgent)
  }

  const tokenPayload = {
    agentId: securityAgent?.id ?? '',
    email: user.email ?? '',
    id: user.id,
    name: user.name,
    role: user.role,
  };

  const token = generateToken(tokenPayload);

  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });

  res.json({
    message: 'Registration successful.',
    token,
  });
};




export const login = async (
  req: Request<unknown, unknown, LoginPayload>,
  res: Response<ApiResponsePayload>
) => {
  const { identifier, password } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: identifier }, { phone: identifier }],
    },
  });

  if (!user || !(await comparePasswords(password, user.password))) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  console.log("The user from login is", user)

  let securityAgent = null;
  if (user.role === Role.SECURITY) {
    securityAgent = await prisma.securityAgent.findFirst({
      where: { userId: user.id },
    });
  }

  const tokenPayload = {
    agentId: securityAgent?.id ?? '',
    email: user.email ?? '',
    id: user.id,
    name: user.name,
    role: user.role,
  };

  console.log("The token payload from login is", tokenPayload)

  const token = generateToken(tokenPayload);

  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });

  res.json({
    message: 'Login successful.',
    token,
  });
};





export const getCurrentUser = async (req: Request, res: Response) => {

  const authHeader = req.headers.authorization;
  const tokenFromHeader = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
  const token = tokenFromHeader ?? req.cookies.token as string;
  if (!token) { 
    return res.status(401).json({ error: 'Token is missing' });
  }

  try {
    const decoded = verifyToken(token);

    console.log("The decoded token is", decoded)

    if (typeof decoded === 'string' || !('id' in decoded)) {
      return res.status(401).json({ error: 'Invalid token payload' });
    }

    const user = await prisma.user.findUnique({
      where: { id: (decoded as JwtPayload).id as string },
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    const agent = decoded.agentId
      ? await prisma.securityAgent.findUnique({ where: { userId: decoded.id } })
      : null;

    res.json({
      agent,
      user,
    });

  } catch (error) {
    console.error(error);
    return res.status(401).json(
      { error: 'Invalid token' } satisfies ApiResponsePayload);
  }
};
