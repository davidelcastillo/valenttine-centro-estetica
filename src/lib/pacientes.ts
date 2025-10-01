import { pacientes, Paciente } from "./baseDeDatos"

export function crearPaciente(nuevo: Paciente): Paciente {
  pacientes.push(nuevo)
  return nuevo
}

export function obtenerPacientes(): Paciente[] {
  return pacientes
}

export function obtenerPacientePorId(id: string): Paciente | null {
  return pacientes.find((p) => p.id === id) || null
}

export function actualizarPaciente(id: string, cambios: Partial<Paciente>): Paciente | null {
  const index = pacientes.findIndex((p) => p.id === id)
  if (index === -1) return null

  pacientes[index] = {
    ...pacientes[index],
    ...cambios,
  }

  return pacientes[index]
}

export function eliminarPaciente(id: string): boolean {
  const index = pacientes.findIndex((p) => p.id === id)
  if (index === -1) return false

  pacientes.splice(index, 1)
  return true
}
