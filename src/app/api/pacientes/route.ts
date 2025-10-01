import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"  //cliente Prisma

export async function GET() {
  try {
    const pacientes = await prisma.paciente.findMany({
      include: {
        provincia: true,
        localidad: true,
        obraSocial: true,
      },
    })
    return NextResponse.json(pacientes)
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener pacientes" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('Datos recibidos:', body)

    // Validar campos requeridos
    const camposRequeridos = [
      'nombre', 'apellido', 'dni', 'fechaNacimiento', 'genero', 'estadoCivil',
      'pais', 'provinciaId', 'localidadId', 'calle', 'numero', 'celular',
      'email', 'obraSocialId', 'numeroSocio', 'plan'
    ]
    
    const camposFaltantes = camposRequeridos.filter(campo => !body[campo])
    if (camposFaltantes.length > 0) {
      return NextResponse.json({
        error: "Campos requeridos faltantes",
        details: `Faltan los siguientes campos: ${camposFaltantes.join(', ')}`
      }, { status: 400 })
    }

    // Validar DNI (8 caracteres)
    if (body.dni.length !== 8) {
      return NextResponse.json({
        error: "DNI inválido",
        details: "El DNI debe tener exactamente 8 caracteres"
      }, { status: 400 })
    }

    // Validar género
    if (!['FEMENINO', 'MASCULINO', 'OTRO'].includes(body.genero)) {
      return NextResponse.json({
        error: "Género inválido",
        details: "El género debe ser FEMENINO, MASCULINO u OTRO"
      }, { status: 400 })
    }

    // Validar estado civil
    if (!['SOLTERO', 'CASADO', 'DIVORCIADO', 'VIUDO', 'UNION_LIBRE'].includes(body.estadoCivil)) {
      return NextResponse.json({
        error: "Estado civil inválido",
        details: "El estado civil debe ser SOLTERO, CASADO, DIVORCIADO, VIUDO o UNION_LIBRE"
      }, { status: 400 })
    }

    // Verificar que los IDs son números válidos
    const provinciaId = Number(body.provinciaId)
    const localidadId = Number(body.localidadId)
    const obraSocialId = Number(body.obraSocialId)

    if (isNaN(provinciaId) || isNaN(localidadId) || isNaN(obraSocialId)) {
      return NextResponse.json({
        error: "IDs inválidos",
        details: "provinciaId, localidadId y obraSocialId deben ser números válidos"
      }, { status: 400 })
    }

    // Verificar que la fecha es válida
    if (!body.fechaNacimiento || isNaN(new Date(body.fechaNacimiento).getTime())) {
      return NextResponse.json({
        error: "Fecha inválida",
        details: "fechaNacimiento debe ser una fecha válida"
      }, { status: 400 })
    }

    // Verificar que los IDs existen en la base de datos
    const [provincia, localidad, obraSocial] = await Promise.all([
      prisma.provincia.findUnique({ where: { id: provinciaId } }),
      prisma.localidad.findUnique({ where: { id: localidadId } }),
      prisma.obraSocial.findUnique({ where: { id: obraSocialId } })
    ])

    if (!provincia || !localidad || !obraSocial) {
      return NextResponse.json({
        error: "Referencia inválida",
        details: "La provincia, localidad u obra social especificada no existe"
      }, { status: 400 })
    }

    // Crear usuario y paciente en una transacción
    const result = await prisma.$transaction(async (tx) => {
      // Paso 1: Crear un usuario para el paciente
      const nuevoUsuario = await tx.usuario.create({
        data: {
          username: body.dni, // Usamos el DNI como username
          contraseña: "temporal123", // TODO: Generar contraseña aleatoria segura
          email: body.email,
          rol: "RECEPCIONISTA", // Usamos un rol válido del enum
        },
      })

      // Paso 2: Crear paciente vinculado al nuevo usuario
      const pacienteCreado = await tx.paciente.create({
        data: {
          userId: nuevoUsuario.id,
          numeroInterno: "TEMP",
          nombre: body.nombre,
          apellido: body.apellido,
          dni: body.dni,
          fechaNacimiento: new Date(body.fechaNacimiento),
          genero: body.genero,
          estadoCivil: body.estadoCivil,
          pais: body.pais,
          provinciaId,
          localidadId,
          barrio: body.barrio || "",
          calle: body.calle,
          numero: body.numero,
          celular: body.celular,
          email: body.email,
          obraSocialId,
          numeroSocio: body.numeroSocio,
          plan: body.plan,
        },
      })

      // Paso 3: Actualizar con numeroInterno
      const pacienteFinal = await tx.paciente.update({
        where: { id: pacienteCreado.id },
        data: { numeroInterno: `PAC-${pacienteCreado.id}` },
      })

      return pacienteFinal
    })

    return NextResponse.json(result, { status: 201 })

  } catch (error: any) {
    console.error("Error al crear paciente:", {
      message: error.message,
      code: error.code,
      meta: error.meta,
      name: error.name,
      stack: error.stack
    })

    // Si es un error de Prisma, dar un mensaje más específico
    if (error.code) {
      switch (error.code) {
        case 'P2002':
          return NextResponse.json({
            error: "Dato duplicado",
            details: `Ya existe un registro con este ${error.meta?.target?.[0] || 'valor'}`
          }, { status: 400 })
        case 'P2003':
          return NextResponse.json({
            error: "Referencia inválida",
            details: `No existe el registro relacionado (${error.meta?.field_name})`
          }, { status: 400 })
        default:
          return NextResponse.json({
            error: "Error de base de datos",
            details: error.message,
            code: error.code
          }, { status: 500 })
      }
    }

    // Para otros tipos de errores
    return NextResponse.json(
      { 
        error: "No se pudo crear el paciente", 
        details: error.message || "Error desconocido",
        type: error.name || "Unknown"
      },
      { status: 500 }
    )
  }
}
