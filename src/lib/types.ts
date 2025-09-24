// Compartido entre server y client
import { z } from "zod";

/** ---- Roles ---- */
export const Roles = ["RECEPTION", "SPECIALIST", "ADMIN"] as const;
export type Role = typeof Roles[number];
export const RoleSchema = z.enum(Roles);

/** ---- Auth: Login ---- */
export const LoginBodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});
export type LoginBody = z.infer<typeof LoginBodySchema>;

export const UserPublicSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
});

export const LoginSuccessSchema = z.object({
  message: z.string().optional(),
  role: RoleSchema,
  user: UserPublicSchema,
  token: z.string(), // también se setea cookie httpOnly
});
export type LoginSuccess = z.infer<typeof LoginSuccessSchema>;

export const ErrorSchema = z.object({ error: z.string() });
export type ErrorResponse = z.infer<typeof ErrorSchema>;

/** Union útil para el fetch del front */
export const LoginResponseSchema = z.union([LoginSuccessSchema, ErrorSchema]);
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
