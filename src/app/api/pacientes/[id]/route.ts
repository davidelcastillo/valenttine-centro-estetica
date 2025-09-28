import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
// import { Prisma } from "@prisma/client"  // <- no se usa; podés borrarlo

// ── Helpers mínimos ────────────────────────────────────────────────────────────
function toDateYMD(s?: string) {
  // "2025-09-28" → Date, o null si no matchea
  if (typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s)) {
    return new Date(s);
  }
  return null;
}
function toDateDMY(s?: string) {
  // "28/09/2025" → Date, o null si no matchea
  if (typeof s === "string" && /^\d{2}\/\d{2}\/\d{4}$/.test(s)) {
    const [dd, mm, yyyy] = s.split("/");
    return new Date(`${yyyy}-${mm}-${dd}`);
  }
  return null;
}

// ── GET /api/pacientes/:id  (detalle) ─────────────────────────────────────────
export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (!Number.isInteger(id)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  const paciente = await prisma.paciente.findUnique({
    where: { id },
    include: {
      provincia: { select: { id: true, nombre: true } },
      localidad: { select: { id: true, nombre: true, provinciaId: true } },
      obraSocial: { select: { id: true, nombre: true} },
      creadoPor: { select: { id: true, username: true } },
    },
  });

  if (!paciente) {
    return NextResponse.json({ error: "Paciente no encontrado" }, { status: 404 });
  }
  return NextResponse.json(paciente);
}

// ── PATCH /api/pacientes/:id  (actualizar) ─────────────────────────────────────
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    if (!Number.isInteger(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const cambios: any = await req.json();

    // validar existencia
    const existe = await prisma.paciente.findUnique({ where: { id } });
    if (!existe) {
      return NextResponse.json({ error: "Paciente no encontrado" }, { status: 404 });
    }

    // Normalizar fecha (acepta birthDate "DD/MM/YYYY" o fechaNacimiento "YYYY-MM-DD")
    if (typeof cambios.birthDate === "string") {
      const d = toDateDMY(cambios.birthDate);
      if (d) cambios.fechaNacimiento = d;
      delete cambios.birthDate;
    }
    if (typeof cambios.fechaNacimiento === "string") {
      const d = toDateYMD(cambios.fechaNacimiento) || toDateDMY(cambios.fechaNacimiento);
      if (d) cambios.fechaNacimiento = d;
    }

    // Validaciones básicas
    const validarDNI = (dni: string) => {
      if (!/^\d{8}$/.test(dni)) throw new Error("El DNI debe tener 8 dígitos");
    };
    const validarNombre = (s: string, label: string) => {
      if (!s || /\d/.test(s)) throw new Error(`${label} no puede estar vacío ni contener números`);
    };
    const validarEmail = (email: string) => {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Email no válido");
    };

    if (cambios.fullName) validarNombre(cambios.fullName, "Nombre");
    if (cambios.lastName) validarNombre(cambios.lastName, "Apellido");
    if (cambios.dni) validarDNI(cambios.dni);
    if (cambios.email) validarEmail(cambios.email);

    // Mapear del front → DB (solo campos definidos)
    const datosActualizados = {
      ...(cambios.fullName !== undefined && { nombre: cambios.fullName }),
      ...(cambios.lastName !== undefined && { apellido: cambios.lastName }),
      ...(cambios.dni !== undefined && { dni: cambios.dni }),
      ...(cambios.fechaNacimiento !== undefined && { fechaNacimiento: cambios.fechaNacimiento }),
      ...(cambios.gender !== undefined && { genero: cambios.gender }),
      ...(cambios.maritalStatus !== undefined && { estadoCivil: cambios.maritalStatus }),
      ...(cambios.country !== undefined && { pais: cambios.country }),
      ...(cambios.neighborhood !== undefined && { barrio: cambios.neighborhood }),
      ...(cambios.street !== undefined && { calle: cambios.street }),
      ...(cambios.streetNumber !== undefined && { numero: cambios.streetNumber }),
      ...(cambios.phone !== undefined && { celular: cambios.phone }),
      ...(cambios.email !== undefined && { email: cambios.email }),
      ...(cambios.memberNumber !== undefined && { numeroSocio: cambios.memberNumber }),
      ...(cambios.plan !== undefined && { plan: cambios.plan }),
      ...(cambios.province && { provinciaId: parseInt(cambios.province) }),
      ...(cambios.locality && { localidadId: parseInt(cambios.locality) }),
      ...(cambios.healthInsurance && { obraSocialId: parseInt(cambios.healthInsurance) }),
    };

    const actualizado = await prisma.paciente.update({
      where: { id },
      data: datosActualizados,
      include: {
        provincia: true,
        localidad: true,
        obraSocial: true,
        creadoPor: { select: { username: true } },
      },
    });

    return NextResponse.json(actualizado);
  } catch (error: any) {
    console.error("Error al actualizar paciente:", error);
    const msg = error?.message ?? "Error al actualizar el paciente";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}

// Compatibilidad si tu front envía PUT
export const PUT = PATCH;
