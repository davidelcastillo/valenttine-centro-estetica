import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const obrasSociales = await prisma.obraSocial.findMany({
      orderBy: {
        nombre: 'asc'
      }
    })
    return NextResponse.json(obrasSociales)
  } catch (error) {
    console.error('Error al obtener obras sociales:', error)
    return NextResponse.json(
      { error: "Error al obtener obras sociales" },
      { status: 500 }
    )
  }
}