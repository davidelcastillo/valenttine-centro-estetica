import type { Appointment } from "@/lib/types"
import { patients } from "./patients"
import { professionals } from "./professionals"

export const appointments: Appointment[] = [
  {
    id: "1",
    appointmentId: "TURN-001",
    patient: patients[0],
    professional: professionals[0],
    date: "2024-02-15",
    time: "10:00",
    reason: "Consulta por tratamiento facial",
    serviceType: "consulta",
    estimatedDuration: 30,
    status: "Confirmado",
    uniqueCode: "ABC123",
    registrationDate: "2024-02-10 14:30:00",
    registeredBy: "Ana García",
    history: [
      { date: "2024-02-10 14:30", action: "Turno registrado", user: "Ana García" },
      { date: "2024-02-10 14:35", action: "Notificación enviada por email", user: "Sistema" },
    ],
  },
  {
    id: "2",
    appointmentId: "TURN-002",
    patient: patients[2],
    professional: professionals[1],
    date: "2024-02-16",
    time: "11:30",
    reason: "Control post-tratamiento",
    serviceType: "control",
    estimatedDuration: 20,
    status: "Pendiente",
    uniqueCode: "DEF456",
    registrationDate: "2024-02-12 09:15:00",
    registeredBy: "Carlos López",
    history: [{ date: "2024-02-12 09:15", action: "Turno registrado", user: "Carlos López" }],
  },
]
