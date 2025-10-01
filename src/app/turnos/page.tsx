"use client"

import { DashboardHeader } from "@/components/turnos/dashboard/DashboardHeader"
import { StatsGrid } from "@/components/turnos/dashboard/StatsGrid"
import { RecentAppointmentsTable } from "@/components/turnos/dashboard/RecentAppointmentsTable"
import { useRouter } from "next/navigation"

export default function TurnosDashboard() {
  const router = useRouter()

  return (
    <div className="screen-transition">
      <DashboardHeader
        onRegisterClick={() => router.push("/turnos/profesionales")}
        onCalendarClick={() => router.push("/turnos/calendario")}
      />
      <StatsGrid />
      <RecentAppointmentsTable />
    </div>
  )
}
