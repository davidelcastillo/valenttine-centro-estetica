import type { Professional } from "@/lib/types"

export const professionals: Professional[] = [
  {
    id: "1",
    fullName: "Dra. Martina",
    lastName: "Fernandez",
    specialty: "Médico Estético",
    status: "Activo",
    photo: "/medico_estetico.jpg",
    workSchedule: [
      { day: "Lunes", startTime: "09:00", endTime: "17:00" },
      { day: "Martes", startTime: "09:00", endTime: "17:00" },
      { day: "Miércoles", startTime: "09:00", endTime: "17:00" },
      { day: "Jueves", startTime: "09:00", endTime: "17:00" },
      { day: "Viernes", startTime: "09:00", endTime: "17:00" },
    ],
  },
  {
    id: "2",
    fullName: "Dra Liliana Marianela",
    lastName: "Saiz",
    specialty: "Especialista en dermatología",
    status: "Activo",
    photo: "/dermatologa.jpg",
    workSchedule: [
      { day: "Lunes", startTime: "08:00", endTime: "16:00" },
      { day: "Martes", startTime: "08:00", endTime: "16:00" },
      { day: "Miércoles", startTime: "08:00", endTime: "16:00" },
      { day: "Jueves", startTime: "08:00", endTime: "16:00" },
      { day: "Viernes", startTime: "08:00", endTime: "16:00" },
    ],
  },
]
