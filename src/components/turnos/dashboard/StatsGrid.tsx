"use client"

import { useEffect, useState } from "react"
import { StatsCard } from "./StatsCard"
import { getDashboard } from "@/lib/turnos/api"
import type { DashboardResponse } from "@/lib/turnos/types"

export function StatsGrid() {
  const [data, setData] = useState<DashboardResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const d = await getDashboard()
        setData(d)
      } catch (e: any) {
        setError(e?.message || "No se pudieron cargar las métricas")
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[...Array(3)].map((_, i) => <div key={i} className="rounded-2xl border p-6 h-28 bg-gray-50 animate-pulse" />)}
      </div>
    )
  }
  if (error || !data) return <div className="text-sm text-red-600 mb-8">{error ?? "Sin datos"}</div>

  const { pendientes, confirmadosHoy, completadosMes } = data.stats

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatsCard
        title="Turnos Pendientes"
        value={pendientes}
        color="orange"
        icon={
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
          </svg>
        }
      />
      <StatsCard
        title="Confirmados Hoy"
        value={confirmadosHoy}
        color="green"
        icon={
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        }
      />
      <StatsCard
        title="Completados (Mes)"
        value={completadosMes}
        color="purple"
        icon={
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18M3 12h18" />
          </svg>
        }
      />
    </div>
  )
}
