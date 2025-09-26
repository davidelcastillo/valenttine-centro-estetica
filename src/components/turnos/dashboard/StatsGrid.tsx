import { StatsCard } from "./StatsCard"
import { appointments } from "@/data/appointments"

export function StatsGrid() {
  const totalAppointments = appointments.length
  const canceledAppointments = appointments.filter((a) => a.status === "Cancelado").length
  const confirmedAppointments = appointments.filter((a) => a.status === "Confirmado").length
  const todayAppointments = appointments.filter((a) => a.date === new Date().toISOString().split("T")[0]).length

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatsCard
        title="Turnos de Hoy"
        value={todayAppointments}
        color="purple"
        icon={
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
            />
          </svg>
        }
      />

      <StatsCard
        title="Turnos Cancelados"
        value={canceledAppointments}
        color="red"
        icon={
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        }
      />

      <StatsCard
        title="Turnos Confirmados"
        value={confirmedAppointments}
        color="green"
        icon={
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        }
      />
    </div>
  )
}
