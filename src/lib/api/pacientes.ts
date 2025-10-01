// src/lib/api/pacientes.ts

/*

CODIGO REAL UNA VEZ HECHA LA BDD:

import { PacienteDTO } from '@/lib/types/pacientes.dto'

export async function crearPaciente(paciente: PacienteDTO) {
  const res = await fetch('/api/pacientes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(paciente),
  })

  if (!res.ok) {
    throw new Error('Error al registrar el paciente')
  }

  return res.json()
}

*/


// CODIGO TEMPORAL //
import { NextResponse } from "next/server";

let pacientes: any[] = []; // 🟢 Esto es temporal, vive solo mientras corre el servidor

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // simular guardado
    const nuevoPaciente = { id: pacientes.length + 1, ...body };
    pacientes.push(nuevoPaciente);

    return NextResponse.json(
      { message: "Paciente guardado", data: nuevoPaciente },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Error al guardar" }, { status: 500 });
  }
}

export async function GET() {
  // devuelve todos los pacientes guardados
  return NextResponse.json(pacientes);
}