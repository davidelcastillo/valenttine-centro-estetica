export interface Patient {
  id: string
  fullName: string
  lastName: string
  dni: string
  phone: string
  email: string
  hasAdministrativeBlock: boolean
}

export interface Professional {
  id: string
  fullName: string
  lastName: string
  specialty: string
  status: "Activo" | "Inactivo" | "De vacaciones" | "Con licencia médica"
  workSchedule: WorkSchedule[]
  photo?: string
}

export interface WorkSchedule {
  day: string
  startTime: string
  endTime: string
}

export interface Appointment {
  id: string
  appointmentId: string
  patient: Patient
  professional: Professional
  date: string
  time: string
  reason: string
  serviceType: "consulta" | "control" | "estudio" | "tratamiento"
  estimatedDuration: number
  status: "Pendiente" | "Confirmado" | "Cancelado" | "Asistido" | "Ausente"
  uniqueCode: string
  registrationDate: string
  registeredBy: string
  history: HistoryEvent[]
}

export interface HistoryEvent {
  date: string
  action: string
  user: string
}

export interface AppointmentForm {
  reason: string
  serviceType: string
  estimatedDuration: string
}
