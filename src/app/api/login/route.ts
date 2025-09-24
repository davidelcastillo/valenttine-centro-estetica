import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword, signJwt } from "@/lib/auth";
import { LoginBodySchema, LoginSuccessSchema, Role } from "@/lib/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = LoginBodySchema.parse(body);

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { error: "Credenciales inválidas" },
        { status: 401 }
      );
    }

    const ok = await verifyPassword(password, user.passwordHash);
    if (!ok) {
      return NextResponse.json(
        { error: "Credenciales inválidas, la " },
        { status: 401 }
      );
    }

    const token = signJwt({
      sub: user.id,
      email: user.email,
      role: user.role as Role,
    });

    const res = NextResponse.json(
      LoginSuccessSchema.parse({
        message: "Login OK",
        role: user.role,
        user: { id: user.id, name: user.name, email: user.email },
        token,
      })
    );

    res.cookies.set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return res;
  } catch {
    console.error('[LOGIN]');
    return NextResponse.json({ error: "Error en login" }, { status: 400 });
  }
}
