import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // prisma.usuario
import { verifyPassword, signJwt } from "@/lib/usuarios/auth";
import { LoginBodySchema, LoginSuccessSchema, type Role } from "@/lib/usuarios/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = LoginBodySchema.parse(body);

    type Usuario = {
      id: number;
      email: string;
      username: string;
      contraseña: string;
      rol: Role;
    };

    const user = await prisma.usuario.findUnique({ where: { email } }) as Usuario | null;
    if (!user) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
    }

    const ok = await verifyPassword(password, user.contraseña);
    if (!ok) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
    }

    const token = signJwt({
      sub: String(user.id),
      email: user.email,
      role: user.rol as Role, // RECEPCIONISTA | MEDICO | GERENTE
    });

    const res = NextResponse.json(
      LoginSuccessSchema.parse({
        message: "Login OK",
        role: user.rol,
        user: { id: String(user.id), name: user.username, email: user.email },
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
      maxAge: 60 * 60 * 24, // 1 día
    });

    return res;
  } catch (err) {
    console.error("[LOGIN]", err);
    return NextResponse.json({ error: "Error en login" }, { status: 400 });
  }
}
