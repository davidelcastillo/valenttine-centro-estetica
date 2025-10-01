import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function toHHMM(input?: string | null): string {
  if (!input) return "00:00";
  const s = String(input).trim().toLowerCase().replace(/\s*h(?:s)?$/, ""); // quita "h"/"hs"
  // 08:30:00, 8:30, 08.30, 08:30
  const m = s.match(/^(\d{1,2})[:\.]([0-5]\d)(?::[0-5]\d)?$/);
  if (m) {
    const hh = m[1].padStart(2, "0");
    const mm = m[2];
    return `${hh}:${mm}`;
  }
  // fallback: si justo ya viene bien (HH:mm), lo dejamos
  const ok = s.match(/^([01]\d|2[0-3]):[0-5]\d$/);
  return ok ? s : "00:00";
}

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
    hora: toHHMM(t.hora),            // ⬅️ normalizamos aquí
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
