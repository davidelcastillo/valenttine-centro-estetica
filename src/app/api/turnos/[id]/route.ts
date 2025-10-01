import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    _req: Request,
    ctx: { params: Promise<{ id: string }> }
) {
    const { params } = await ctx;
    const id = Number(params.id);
    if (!Number.isInteger(id)) return NextResponse.json({ error: "ID inválido" }, { status: 400 });

    const t = await prisma.turno.findUnique({
        where: { id },
        include: {
            paciente: { select: { id: true, nombre: true, apellido: true } },
            profesional: { select: { id: true, nombre: true, apellido: true, especialidad: true } },
            detalles: true,
        },
    });
    if (!t) return NextResponse.json({ error: "Turno no encontrado" }, { status: 404 });
    return NextResponse.json(t);
}

export async function PATCH(
    req: Request,
    ctx: { params: Promise<{ id: string }> }
) {
    const { params } = await ctx;
    const id = Number(params.id);
    if (!Number.isInteger(id)) return NextResponse.json({ error: "ID inválido" }, { status: 400 });

    const body = await req.json().catch(() => ({})) as {
        estado?: "PENDIENTE" | "CONFIRMADO" | "CANCELADO" | "COMPLETADO";
        fecha?: string; // YYYY-MM-DD
        hora?: string;  // HH:mm
    };

    const data: any = {};
    if (body.estado) data.estado = body.estado;
    if (body.fecha && /^\d{4}-\d{2}-\d{2}$/.test(body.fecha)) data.fecha = new Date(`${body.fecha}T00:00:00.000Z`);
    if (body.hora && /^([01]\d|2[0-3]):[0-5]\d$/.test(body.hora)) data.hora = body.hora;

    if (Object.keys(data).length === 0) {
        return NextResponse.json({ error: "Sin cambios" }, { status: 400 });
    }

    const upd = await prisma.turno.update({
        where: { id },
        data,
        include: {
            paciente: { select: { id: true, nombre: true, apellido: true } },
            profesional: { select: { id: true, nombre: true, apellido: true, especialidad: true } },
        },
    });

    return NextResponse.json(upd);
}

export async function DELETE(
    _req: Request,
    ctx: { params: Promise<{ id: string }> }
) {
    const { params } = await ctx;
    const id = Number(params.id);
    if (!Number.isInteger(id)) return NextResponse.json({ error: "ID inválido" }, { status: 400 });

    await prisma.turno.update({ where: { id }, data: { estado: "CANCELADO" } });
    return NextResponse.json({ ok: true });
}
