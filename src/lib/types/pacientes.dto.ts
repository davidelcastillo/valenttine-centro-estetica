// src/lib/types/paciente.dto.ts
export interface PacienteDTO {
  nombre: string
  apellido: string
  dni: string
  fechaNacimiento: string
  genero: string
  estadoCivil: string
  pais: string
  provinciaId: number
  localidadId: number
  barrio?: string
  calle: string
  numero: string
  celular: string
  email: string
  obraSocialId: number
  numeroSocio: string
  plan: string
}