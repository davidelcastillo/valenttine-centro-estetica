import { NextResponse } from "next/server"
import { actualizarPaciente } from "@/lib/pacientes"

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const cambios = await req.json()

  const pacienteActualizado = actualizarPaciente(id, cambios)

  if (!pacienteActualizado) {
    return NextResponse.json({ error: "Paciente no encontrado" }, { status: 404 })
  }

  return NextResponse.json(pacienteActualizado)
}
