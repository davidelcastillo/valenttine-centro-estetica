import { z } from "zod";

export const Roles = ["RECEPCIONISTA", "MEDICO", "GERENTE"] as const;
export type Role = typeof Roles[number];
export const RoleSchema = z.enum(Roles);

export type JwtUser = { sub: string; email: string; role: Role };

export const LoginBodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});
export type LoginBody = z.infer<typeof LoginBodySchema>;

export const UserPublicSchema = z.object({
  id: z.string(),            // id viene como number en BD, lo convertimos a string al responder
  name: z.string(),
  email: z.string().email(),
});

export const LoginSuccessSchema = z.object({
  message: z.string().optional(),
  role: RoleSchema,
  user: UserPublicSchema,
  token: z.string(),
});
export type LoginSuccess = z.infer<typeof LoginSuccessSchema>;

export const ErrorSchema = z.object({ error: z.string() });
export type ErrorResponse = z.infer<typeof ErrorSchema>;

export const LoginResponseSchema = z.union([LoginSuccessSchema, ErrorSchema]);
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
