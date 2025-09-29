import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const hoy = new Date();
    const ymd = new Date(Date.UTC(hoy.getUTCFullYear(), hoy.getUTCMonth(), hoy.getUTCDate()));

    const [pendientes, confirmadosHoy, completadosMes] = await Promise.all([
        prisma.turno.count({ where: { estado: "PENDIENTE" } }),
        prisma.turno.count({
            where: {
                estado: "CONFIRMADO",
                fecha: { gte: ymd, lte: new Date(ymd.getTime() + 86400000 - 1) },
            },
        }),
        prisma.turno.count({
            where: {
                estado: "COMPLETADO",
                fecha: {
                    gte: new Date(Date.UTC(hoy.getUTCFullYear(), hoy.getUTCMonth(), 1)),
                    lte: new Date(Date.UTC(hoy.getUTCFullYear(), hoy.getUTCMonth() + 1, 0, 23, 59, 59, 999)),
                },
            },
        }),
    ]);

    const recientes = await prisma.turno.findMany({
        orderBy: [{ fecha: "desc" }],
        take: 10,
        include: {
            paciente: { select: { id: true, nombre: true, apellido: true } },
            profesional: { select: { id: true, nombre: true, apellido: true, especialidad: true } },
        },
    });

    const mapped = recientes.map(t => ({
        id: t.id,
        fecha: t.fecha,
        hora: t.hora,
        estado: t.estado,
        paciente: `${t.paciente.nombre} ${t.paciente.apellido}`.trim(),
        profesional: `${t.profesional.nombre} ${t.profesional.apellido}`.trim(),
        especialidad: t.profesional.especialidad,
    }));

    return NextResponse.json({
        stats: { pendientes, confirmadosHoy, completadosMes },
        recientes: mapped,
    });
}
