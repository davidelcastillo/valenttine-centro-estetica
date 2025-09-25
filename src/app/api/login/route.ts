import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword, signJwt } from "@/lib/usuarios/auth";
import { LoginBodySchema, LoginSuccessSchema, type Role } from "@/lib/usuarios/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password } = LoginBodySchema.parse(body);

    type UsuarioWithPassword = {
      id: number | string;
      username: string;
      email: string;
      rol: Role;
      passwordHash?: string;
      contraseña?: string;
    };

    const user = await prisma.usuario.findUnique({ where: { username } }) as UsuarioWithPassword | null;
    if (!user) return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });

    
    const ok = await verifyPassword(password, (user as any)['contraseña'])
    if (!ok) return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });

    const token = signJwt({
      sub: String(user.id),
      email: user.email,
      role: user.rol as Role,
      username: user.username,
    });

    const res = NextResponse.json(
      LoginSuccessSchema.parse({
        message: "Login OK",
        role: user.rol,
        user: {
          id: String(user.id),
          username: user.username,
          email: user.email,
          role: user.rol as Role,
        },
        token,
      })
    );

    res.cookies.set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 15, // 15 min por HU-GAS-02 (inactividad)
    });

    return res;
  } catch (err) {
    console.error("[LOGIN]", err);
    return NextResponse.json({ error: "Error en login" }, { status: 400 });
  }
}
