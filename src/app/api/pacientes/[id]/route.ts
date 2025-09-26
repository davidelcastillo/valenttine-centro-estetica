import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

import { Prisma } from "@prisma/client"

// Definimos un tipo parcial basado en el modelo de Prisma
type DatosActualizados = Partial<{
  nombre: string;
  apellido: string;
  dni: string;
  fechaNacimiento: Date;
  genero: "FEMENINO" | "MASCULINO" | "OTRO";
  estadoCivil: "SOLTERO" | "CASADO" | "DIVORCIADO" | "VIUDO" | "UNION_LIBRE";
  pais: string;
  provinciaId: number;
  localidadId: number;
  barrio?: string;
  calle: string;
  numero: string;
  celular: string;
  email: string;
  obraSocialId: number;
  numeroSocio: string;
  plan: string;
  estado?: "ACTIVO" | "INACTIVO" | "SUSPENDIDO" | "FALLECIDO";
}> & {
  [key: string]: any;
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const cambios = await req.json()

    // Validar que el paciente existe
    const pacienteExistente = await prisma.paciente.findUnique({
      where: { id: parseInt(id) },
    })

    if (!pacienteExistente) {
      return NextResponse.json(
        { error: "Paciente no encontrado" },
        { status: 404 }
      )
    }

    // Convertir la fecha si viene en formato DD/MM/YYYY
    if (cambios.birthDate) {
      const [day, month, year] = cambios.birthDate.split("/")
      cambios.fechaNacimiento = new Date(`${year}-${month}-${day}`)
      delete cambios.birthDate
    }

    // Mapear los campos del frontend a los campos de la base de datos
    // Funciones de validación
    const validarDNI = (dni: string) => {
      if (!dni || dni.length !== 8 || !/^\d+$/.test(dni)) {
        throw new Error("El DNI debe tener exactamente 8 dígitos numéricos")
      }
      return true
    }

    const validarNombre = (nombre: string) => {
      if (!nombre || /\d/.test(nombre)) {
        throw new Error("El nombre no puede estar vacío ni contener números")
      }
      return true
    }

    const validarEmail = (email: string) => {
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error("El formato del email no es válido")
      }
      return true
    }

    // Realizar validaciones
    if (cambios.fullName) validarNombre(cambios.fullName)
    if (cambios.lastName) validarNombre(cambios.lastName)
    if (cambios.dni) validarDNI(cambios.dni)
    if (cambios.email) validarEmail(cambios.email)

    const datosActualizados = {
      nombre: cambios.fullName,
      apellido: cambios.lastName,
      dni: cambios.dni,
      fechaNacimiento: cambios.fechaNacimiento,
      genero: cambios.gender,
      estadoCivil: cambios.maritalStatus,
      pais: cambios.country,
      provinciaId: cambios.province ? parseInt(cambios.province) : undefined,
      localidadId: cambios.locality ? parseInt(cambios.locality) : undefined,
      barrio: cambios.neighborhood,
      calle: cambios.street,
      numero: cambios.streetNumber,
      celular: cambios.phone,
      email: cambios.email,
      obraSocialId: cambios.healthInsurance ? parseInt(cambios.healthInsurance) : undefined,
      numeroSocio: cambios.memberNumber,
      plan: cambios.plan,
    }

    // Filtrar campos undefined
    const datosLimpios = Object.fromEntries(
      Object.entries(datosActualizados).filter(([_, value]) => value !== undefined)
    )

    // Actualizar el paciente
    const pacienteActualizado = await prisma.paciente.update({
      where: { id: parseInt(id) },
      data: datosLimpios,
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

    return NextResponse.json(pacienteActualizado)
  } catch (error: any) {
    console.error("Error al actualizar paciente:", error)
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : "Error al actualizar el paciente",
        details: error instanceof Error ? error.message : error?.toString()
      },
      { status: error instanceof Error ? 400 : 500 }
    )
  }
}
