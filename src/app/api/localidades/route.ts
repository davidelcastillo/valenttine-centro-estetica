import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const provinciaId = searchParams.get('provinciaId')

    if (!provinciaId) {
      return NextResponse.json(
        { error: "provinciaId es requerido" },
        { status: 400 }
      )
    }

    const localidades = await prisma.localidad.findMany({
      where: {
        provinciaId: Number(provinciaId)
      },
      orderBy: {
        nombre: 'asc'
      }
    })
    return NextResponse.json(localidades)
  } catch (error) {
    console.error('Error al obtener localidades:', error)
    return NextResponse.json(
      { error: "Error al obtener localidades" },
      { status: 500 }
    )
  }
}