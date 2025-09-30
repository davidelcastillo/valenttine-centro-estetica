import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const profesionales = await prisma.profesional.findMany({
        orderBy: [{ apellido: "asc" }, { nombre: "asc" }],
        select: {
            id: true,
            nombre: true,
            apellido: true,
            especialidad: true,
            email: true,
            // ajustar cuando tenganmos fotos
        },
    });

    // Opcional: añadir nombreCompleto para el front
    const data = profesionales.map(p => ({
        ...p,
        nombreCompleto: `${p.nombre} ${p.apellido}`.trim(),
    }));

    return NextResponse.json(data);
}
