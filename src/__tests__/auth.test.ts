// tests/auth.test.ts
import { hashPassword, comparePasswords } from '../utils/auth';
import request from 'supertest';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import app from '../app';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();


describe('Password Hashing', () => {
  it('should hash and verify password', async () => {
    const password = '123456';
    const hashed = await hashPassword(password);
    const isMatch = await comparePasswords(password, hashed);
    expect(isMatch).toBe(true);
  });
});

describe('Email and Password Validation', () => {
  it('should validate email and password format', () => {
    const email = 'test@example.com';
    const password = 'securePass123';

    // Simple validations (you can replace these with actual validators later)
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 6;

    expect(isEmailValid).toBe(true);
    expect(isPasswordValid).toBe(true);
  });
});



describe('Auth Endpoints', () => {
  beforeAll(async () => {
    await prisma.user.deleteMany(); // clear before test
  });

  afterAll(async () => {
    await prisma.user.deleteMany(); // clean up
    await prisma.$disconnect();
  });

  it('should register a user and return a token and message', async () => {
    const res = await request(app).post('/api/auth/register').send({
      email: 'test@example.com',
      password: 'Password123',
      name: 'Test User',
      role: 'USER',
    });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
    expect(res.body.message).toBe('Registration successful.');
    console.log(res.body.token);
    console.log(res.body.message);

    const userInDb = await prisma.user.findUnique({
      where: { email: 'test@example.com' },
    });

    expect(userInDb).not.toBeNull();
    expect(userInDb?.name).toBe('Test User');
  });
});