export interface Paciente {
  id: string
  nombre: string
  telefono: string
  email?: string
  // podés sumar más campos: dirección, fechaNacimiento, etc.
}

// "Base de datos" temporal en memoria
export const pacientes: Paciente[] = [
  { id: "1", nombre: "Juan Pérez", telefono: "(123)4567890", email: "juan@test.com" },
  { id: "2", nombre: "María López", telefono: "(987)6543210", email: "maria@test.com" },
]
