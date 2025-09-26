// src/app/api/pacientes/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const pacientes = await prisma.paciente.findMany({
      include: {
        usuario: true,       // incluye los datos de usuario vinculado
        provincia: true,     // incluye provincia
        localidad: true,     // incluye localidad
        obraSocial: true,    // incluye obra social
      },
    });

    return NextResponse.json(pacientes);
  } catch (error) {
    console.error("Error al obtener pacientes:", error);
    return NextResponse.json(
      { error: "Error al obtener pacientes" },
      { status: 500 }
    );
  }
}
