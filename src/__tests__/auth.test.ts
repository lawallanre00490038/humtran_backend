// tests/auth.test.ts

// import request from 'supertest';
import {  describe, expect, it  } from 'vitest';

// import app from '../app';
// import { PrismaClient } from '../generated/prisma';
import { comparePasswords, hashPassword } from '../utils/auth';


// const prisma = new PrismaClient();


describe('Password Hashing', () => {
  it('should hash and verify password', async () => {
    const password = '123456';
    const hashed = await hashPassword(password);
    const isMatch = await comparePasswords(password, hashed);
    expect(isMatch).toBe(true);
  });
});
