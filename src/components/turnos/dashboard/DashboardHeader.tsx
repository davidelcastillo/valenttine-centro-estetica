// src/components/turnos/dashboard/DashboardHeader.tsx
"use client"

import { Button } from "@/components/ui/button"

interface DashboardHeaderProps {
  onRegisterClick: () => void
  onCalendarClick: () => void
}

export function DashboardHeader({ onRegisterClick, onCalendarClick }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
      <div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
          Gestión de Turnos
        </h2>
        <p className="text-gray-600 text-lg">Sistema de gestión de turnos médicos</p>
      </div>
      <div className="flex space-x-4">
        <Button variant="primary" onClick={onRegisterClick}>Registrar Turno</Button>
        <Button variant="outline" onClick={onCalendarClick}>
          Ver Calendario
        </Button>
      </div>
    </div>
  )
}
