export const SERVICE_TYPES = [
  { value: "consulta", label: "Consulta" },
  { value: "control", label: "Control" },
  { value: "estudio", label: "Estudio" },
  { value: "tratamiento", label: "Tratamiento" },
]

export const APPOINTMENT_STATUSES = {
  PENDING: "Pendiente",
  CONFIRMED: "Confirmado",
  CANCELED: "Cancelado",
  ATTENDED: "Asistido",
  ABSENT: "Ausente",
} as const

export const PROFESSIONAL_STATUSES = {
  ACTIVE: "Activo",
  INACTIVE: "Inactivo",
  ON_VACATION: "De vacaciones",
  MEDICAL_LEAVE: "Con licencia médica",
} as const

export const DAYS_ORDER = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

export const TIME_SLOTS = [
  "09:00",
  "09:20",
  "09:40",
  "10:00",
  "10:20",
  "10:40",
  "11:00",
  "11:20",
  "11:40",
  "12:00",
  "12:20",
  "12:40",
  "13:00",
  "13:20",
  "13:40",
  "14:00",
  "14:20",
  "14:40",
  "15:00",
  "15:20",
  "15:40",
  "16:00",
  "16:20",
  "16:40",
]
