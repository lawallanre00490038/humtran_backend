// utils/auth.ts
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const hashPassword = async (password: string) =>
  await bcrypt.hash(password, 10);

export const comparePasswords = async (password: string, hash: string) =>
  await bcrypt.compare(password, hash);

export const generateToken = (payload: object) =>
  jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '7d' });

export const verifyToken = (token: string) =>
  jwt.verify(token, process.env.JWT_SECRET!);
