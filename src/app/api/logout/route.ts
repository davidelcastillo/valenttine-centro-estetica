import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "Logged out" });
  res.cookies.set({ name: "auth_token", value: "", path: "/", httpOnly: true, maxAge: 0 });
  return res;
}
