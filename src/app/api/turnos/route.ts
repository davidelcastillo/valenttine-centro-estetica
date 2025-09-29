import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    const body = await req.json().catch(() => null) as {
        pacienteId?: number;
        profesionalId?: number;
        fecha?: string;  // YYYY-MM-DD
        hora?: string;   // HH:mm
        observacion?: string;
    } | null;

    if (!body) return NextResponse.json({ error: "JSON inválido" }, { status: 400 });

    const pacienteId = Number(body.pacienteId);
    const profesionalId = Number(body.profesionalId);
    const fechaStr = String(body.fecha ?? "");
    const hora = String(body.hora ?? "");

    if (!Number.isInteger(pacienteId) || !Number.isInteger(profesionalId) ||
        !/^\d{4}-\d{2}-\d{2}$/.test(fechaStr) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(hora)) {
        return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    // Validar existencia básica
    const [pac, pro] = await Promise.all([
        prisma.paciente.findUnique({ where: { id: pacienteId }, select: { id: true } }),
        prisma.profesional.findUnique({ where: { id: profesionalId }, select: { id: true } }),
    ]);
    if (!pac) return NextResponse.json({ error: "Paciente no encontrado" }, { status: 404 });
    if (!pro) return NextResponse.json({ error: "Profesional no encontrado" }, { status: 404 });

    // Evitar doble booking exacto
    const inicio = new Date(`${fechaStr}T00:00:00.000Z`);
    const fin = new Date(`${fechaStr}T23:59:59.999Z`);
    const yaExiste = await prisma.turno.findFirst({
        where: { profesionalId, fecha: { gte: inicio, lte: fin }, hora, estado: { not: "CANCELADO" } },
        select: { id: true },
    });
    if (yaExiste) return NextResponse.json({ error: "Horario ya ocupado" }, { status: 409 });

    const nuevo = await prisma.turno.create({
        data: {
            pacienteId, profesionalId,
            fecha: new Date(`${fechaStr}T00:00:00.000Z`),
            hora,
            estado: "PENDIENTE",
            detalles: body.observacion ? {
                create: [{ descripcion: body.observacion }],
            } : undefined,
        },
        include: {
            paciente: { select: { id: true, nombre: true, apellido: true } },
            profesional: { select: { id: true, nombre: true, apellido: true, especialidad: true } },
        },
    });

    return NextResponse.json(nuevo, { status: 201 });
}
