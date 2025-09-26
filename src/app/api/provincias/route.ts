import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const provincias = await prisma.provincia.findMany({
      orderBy: {
        nombre: 'asc'
      }
    })
    return NextResponse.json(provincias)
  } catch (error) {
    console.error('Error al obtener provincias:', error)
    return NextResponse.json(
      { error: "Error al obtener provincias" },
      { status: 500 }
    )
  }
}