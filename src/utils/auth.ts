import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface JWTPayload {
  email: string;
  exp: number;
  iat: number;
  id: string;
  name: string;
  role: string;
}

export const hashPassword = async (password: string) =>
  await bcrypt.hash(password, 10);

export const comparePasswords = async (password: string, hash: string) =>
  await bcrypt.compare(password, hash);

export const generateToken = (payload: Omit<JWTPayload, 'exp' | 'iat'>) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is not defined');
  }
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
};

export const verifyToken = (token: string): JWTPayload => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is not defined');
  }
  return jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;
};
