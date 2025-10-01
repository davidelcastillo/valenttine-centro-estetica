"use client"
import { useState } from "react"
import type { Appointment } from "@/lib/types"

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  const addAppointment = (appointment: Omit<Appointment, "id">) => {
    const newAppointment: Appointment = {
      ...appointment,
      id: Date.now().toString(),
    }
    setAppointments((prev) => [...prev, newAppointment])
  }

  const updateAppointment = (id: string, updates: Partial<Appointment>) => {
    setAppointments((prev) => prev.map((apt) => (apt.id === id ? { ...apt, ...updates } : apt)))
  }

  const deleteAppointment = (id: string) => {
    setAppointments((prev) => prev.filter((apt) => apt.id !== id))
  }

  return {
    appointments,
    addAppointment,
    updateAppointment,
    deleteAppointment,
  }
}
