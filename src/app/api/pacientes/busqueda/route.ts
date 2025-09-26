import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    // Obtener los parámetros de búsqueda de la URL
    const { searchParams } = new URL(request.url)
    const dni = searchParams.get("dni")
    const birthDate = searchParams.get("birthDate")
    const fullName = searchParams.get("fullName")

    // Construir el objeto de filtros para Prisma
    const where: any = {}

    // Aplicar filtros solo si los parámetros están presentes
    if (dni) {
      where.dni = {
        contains: dni,
      }
    }

    if (birthDate) {
      // Convertir la fecha DD/MM/YYYY a YYYY-MM-DD para Prisma
      const [day, month, year] = birthDate.split("/")
      where.fechaNacimiento = new Date(`${year}-${month}-${day}`)
    }

    if (fullName) {
      // Buscar tanto en nombre como en apellido
      where.OR = [
        {
          nombre: {
            contains: fullName,
            mode: "insensitive", // Case-insensitive
          },
        },
        {
          apellido: {
            contains: fullName,
            mode: "insensitive", // Case-insensitive
          },
        },
      ]
    }

    // Buscar pacientes con los filtros aplicados
    const pacientes = await prisma.paciente.findMany({
      where,
      include: {
        provincia: true,
        localidad: true,
        obraSocial: true,
        creadoPor: {
          select: {
            username: true,
          },
        },
      },
    })

    return NextResponse.json(pacientes)
  } catch (error) {
    console.error("Error en la búsqueda de pacientes:", error)
    return NextResponse.json(
      { error: "Error al buscar pacientes" },
      { status: 500 }
    )
  }
}
