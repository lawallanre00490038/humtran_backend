import {Role}  from  '@prisma/client';
import {  SecurityStatus } from '@prisma/client';
import { z } from 'zod';

export const RegisterSchema = z.object({
  email: z.email().optional(),
  name: z.string(),
  password: z.string().min(6),
  phone: z.string().optional(),
  role: z.enum(Object.values(Role)),
});
export type RegisterPayload = z.infer<typeof RegisterSchema>;


export const LoginSchema = z.object({
  identifier: z.email(),
  password: z.string().min(6),
});
export type LoginPayload = z.infer<typeof LoginSchema>;


export const SuccessResponseSchema = z.object({
  data: z.unknown().optional(),
  error: z.unknown().optional(),
  message: z.string().optional(),
  token: z.string().optional(),
});
export type SuccessResponsePayload = z.infer<typeof SuccessResponseSchema>;


export const ErrorResponseSchema = z.object({
  error: z.string(),
  message: z.string(),
});
export type ErrorResponsePayload = z.infer<typeof ErrorResponseSchema>;


export const MailerResponseSchema = z.object({
  message: z.string(),
  token: z.string(),
})
export type MailerResponseSchemaPayload = z.infer<typeof MailerResponseSchema>



export const UserSchema = z.object({
  email: z.string().nullable(),
  id: z.string(),
  name: z.string(),
  phone: z.string().nullable(),
  role: z.enum(Object.values(Role)),
});

export const SecurityAgentSchema = z.object({
  id: z.string(),
  lastUpdated: z.date(),
  lat: z.number(),
  lng: z.number(),
  name: z.string(),
  role: z.enum(Object.values(Role)),
  status: z.enum(Object.values(SecurityStatus)),
  userId: z.string(),
});

export const AuthSuccessResponseSchema  = z.object({
  agent: SecurityAgentSchema.nullable(),
  message: z.string().optional(),
  token: z.string().optional(),
  user: UserSchema,
});

export type AuthResponsePayload = z.infer<typeof AuthSuccessResponseSchema>;


export const ApiResponseSchema = z.union([
  AuthSuccessResponseSchema,
  ErrorResponseSchema,
]);
export type ApiResponsePayload = z.infer<typeof ApiResponseSchema>;

