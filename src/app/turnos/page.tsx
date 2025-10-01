"use client"

import { DashboardHeader } from "@/components/turnos/dashboard/DashboardHeader"
import { StatsGrid } from "@/components/turnos/dashboard/StatsGrid"
import { RecentAppointmentsTable } from "@/components/turnos/dashboard/RecentAppointmentsTable"
import { useRouter } from "next/navigation"

export default function TurnosDashboard() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 p-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <span>Inicio</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-purple-500 font-medium">Gestión de turnos</span>
      </div>
      <div className="screen-transition">
        <DashboardHeader
          onRegisterClick={() => router.push("/turnos/profesionales")}
          onCalendarClick={() => router.push("/turnos/calendario")}
        />
        <StatsGrid />
        <RecentAppointmentsTable />
      </div>
    </main>
  )
}
