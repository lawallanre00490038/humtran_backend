import { z } from 'zod';

import { Role as RoleEnum } from "../generated/prisma"

export const RegisterSchema = z.object({
  email: z.email().optional(),
  name: z.string(),
  password: z.string().min(6),
  phone: z.string().optional(),
  role: z.enum(Object.values(RoleEnum)),
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


export const ApiResponseSchema = z.union([SuccessResponseSchema, ErrorResponseSchema]);
export type ApiResponsePayload = z.infer<typeof ApiResponseSchema>;

