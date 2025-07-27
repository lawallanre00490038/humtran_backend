import { error } from "console";
import {Role as RoleEnum } from "../generated/prisma"
import { z } from 'zod';

export const RegisterSchema = z.object({
  email: z.string().email().optional(),
  phone: z.string().optional(),
  password: z.string().min(6),
  name: z.string(),
  role: z.enum(Object.values(RoleEnum)),
});
export type RegisterPayload = z.infer<typeof RegisterSchema>;


export const LoginSchema = z.object({
  identifier: z.string().email(),
  password: z.string().min(6),
});
export type LoginPayload = z.infer<typeof LoginSchema>;


export const SuccessResponseSchema = z.object({
  message: z.string().optional(),
  token: z.string().optional(),
  data: z.unknown().optional(),
  error: z.unknown().optional(),
});
export type SuccessResponsePayload = z.infer<typeof SuccessResponseSchema>;


export const ErrorResponseSchema = z.object({
  message: z.string(),
  error: z.string(),
});
export type ErrorResponsePayload = z.infer<typeof ErrorResponseSchema>;


export const ApiResponseSchema = z.union([SuccessResponseSchema, ErrorResponseSchema]);
export type ApiResponsePayload = z.infer<typeof ApiResponseSchema>;

