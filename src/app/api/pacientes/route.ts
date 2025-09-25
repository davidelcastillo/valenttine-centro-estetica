// app/api/pacientes/route.ts
import { NextResponse } from "next/server";

// Simulación de pacientes (luego reemplazás con DB) DESACTIVAR CUANDO ESTÉ LA BDD
const pacientes = [
  { id: 1, nombre: "Juan Pérez", edad: 30 },
  { id: 2, nombre: "Ana Gómez", edad: 25 },
];

export async function GET() {
  // const pacientes = await prisma.paciente.findMany();  ACTIVAR CUANDO YA ESTE LA BBD
    return NextResponse.json(pacientes);
  
}
