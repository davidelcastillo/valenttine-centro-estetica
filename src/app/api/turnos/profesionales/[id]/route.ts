import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    _req: Request,
    ctx: { params: Promise<{ id: string }> }
) {
    
    const { id } = await ctx.params;
    const profesionalId = Number(id);

    if (!Number.isInteger(profesionalId)) {
        return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const profesional = await prisma.profesional.findUnique({
        where: { id: profesionalId },
        include: {
            obrasSociales: {
                include: { obraSocial: { select: { id: true, nombre: true } } },
            },
            prestaciones: {
                include: { prestacion: { select: { id: true, nombre: true } } },
            },
        },
    });

    if (!profesional) {
        return NextResponse.json({ error: "Profesional no encontrado" }, { status: 404 });
    }

    const data = {
        id: profesional.id,
        nombre: profesional.nombre,
        apellido: profesional.apellido,
        nombreCompleto: `${profesional.nombre} ${profesional.apellido}`.trim(),
        especialidad: profesional.especialidad,
        horarioTrabajo: profesional.horarioTrabajo, // string (JSON)
        obrasSociales: profesional.obrasSociales.map((x) => x.obraSocial),
        prestaciones: profesional.prestaciones.map((x) => x.prestacion),
    };

    return NextResponse.json(data);
}
