// tests/auth.test.ts

import request from 'supertest';
import { describe, expect, it  } from 'vitest';

import app from '../app';
import { PrismaClient } from '../generated/prisma';
import { comparePasswords, hashPassword } from '../utils/auth';


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
  // beforeAll(async () => {
  //   await prisma.emergencyRequest.deleteMany();
  //   await prisma.message.deleteMany();
  //   await prisma.securityAgent.deleteMany();

  //   await prisma.user.deleteMany(); // clear before test
  // });

  // afterAll(async () => {
  //   await prisma.user.deleteMany(); // clean up

  //   await prisma.message.deleteMany();
  //   await prisma.securityAgent.deleteMany();
  //   await prisma.user.deleteMany();
    
  //   await prisma.$disconnect();
  // });

  // it('should register a user and return a token and message', async () => {
  //   const res = await request(app).post('/api/auth/register').send({
  //     email: 'test2@example.com',
  //     name: 'Test User',
  //     password: 'Password123',
  //     role: 'USER',
  //   });
  //   expect(res.status).toBe(200);
  //   expect(res.body).toHaveProperty('token');
  //   expect(res.body).toHaveProperty('message', 'Registration successful.');

  //   console.log(Object.prototype.hasOwnProperty.call(res.body, 'token'));
  //   console.log(Object.prototype.hasOwnProperty.call(res.body, 'message'));

  //   const userInDb = await prisma.user.findUnique({
  //     where: { email: 'test2@example.com' },
  //   });

  //   expect(userInDb).not.toBeNull();
  //   expect(userInDb?.name).toBe('Test User');
  // });

  it('should login a user and return a token and message', async () => {
    const res = await request(app).post('/api/auth/login').send({
      identifier: 'test2@example.com',
      password: 'Password123',
    });

    // expect(res.status).toBe(200);
    // expect(res.body.token).toBeDefined();
    // expect(res.body.message).toBe('Login successful.');
    // console.log(res.body.token);
    // console.log(res.body.message);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
    expect(res.body).toHaveProperty('message', 'Login successful.');

    console.log(Object.hasOwnProperty.call(res.body, 'token'));
    console.log(Object.hasOwnProperty.call(res.body, 'message'));

    const userInDb = await prisma.user.findUnique({
      where: { email: 'test@example.com' },
    });

    expect(userInDb).not.toBeNull();
  });

  
  it('should not login a user with invalid credentials', async () => {
    const res = await request(app).post('/api/auth/login').send({
      identifier: 'test@example.com',
      password: 'invalid',
    });

    expect(res.status).toBe(400);
    expect((res.body as { error: string }).error).toBe('Invalid credentials');
    
    const userInDb = await prisma.user.findUnique({
      where: { email: 'test@example.com' },
    });

    expect(userInDb).not.toBeNull();
  });
});