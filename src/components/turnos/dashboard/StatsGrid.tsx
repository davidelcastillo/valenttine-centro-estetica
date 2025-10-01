"use client"

import { useEffect, useMemo, useState } from "react"
import { StatsCard } from "./StatsCard"
import { getDashboard } from "@/lib/turnos/api"
import type { DashboardResponse } from "@/lib/turnos/types"
import { CalendarRange, CalendarCheck2, UserX, XCircle } from "lucide-react"

type NormalizedStats = {
  total: number
  confirmados: number
  ausentes: number
  cancelados: number
}

/** Normaliza el shape del backend a los 4 KPIs requeridos */
function normalizeStats(data: DashboardResponse | null): NormalizedStats {
  if (!data) return { total: 0, confirmados: 0, ausentes: 0, cancelados: 0 }

  // Toleramos distintas estructuras durante la transición del backend
  /*@ts-expect-error: admitimos shapes flexibles
  // */
  const s: any = data.stats ?? {}

  // Caso ideal: ya vienen exactos
  if (
    typeof s.total === "number" &&
    typeof s.confirmados === "number" &&
    typeof s.ausentes === "number" &&
    typeof s.cancelados === "number"
  ) {
    return s as NormalizedStats
  }

  // Fallback con campos comunes
  const byEstado = s.byEstado as Record<string, number> | undefined
  const confirmados =
    typeof byEstado?.confirmado === "number" ? byEstado!.confirmado : (s.confirmados ?? s.confirmadosHoy ?? 0)
  const ausentes =
    typeof byEstado?.ausente === "number" ? byEstado!.ausente : (s.ausentes ?? 0)
  const cancelados =
    typeof byEstado?.cancelado === "number" ? byEstado!.cancelado : (s.cancelados ?? 0)

  const total =
    typeof s.total === "number"
      ? s.total
      : [confirmados, ausentes, cancelados, s.pendientes, s.completadosMes]
          .filter((n) => typeof n === "number" && !Number.isNaN(n))
          .reduce((a, b) => a + (b as number), 0)

  return { total, confirmados, ausentes, cancelados }
}

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

  const stats = useMemo(() => normalizeStats(data), [data])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-2xl border p-6 h-28 bg-gray-50 animate-pulse" />
        ))}
      </div>
    )
  }

  if (error) return <div className="text-sm text-red-600 mb-8">{error}</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <StatsCard
        title="Total de turnos"
        value={stats.total}
        color="indigo"
        icon={<CalendarRange className="w-6 h-6" aria-hidden />}
      />
      <StatsCard
        title="Turnos confirmados"
        value={stats.confirmados}
        color="green"
        icon={<CalendarCheck2 className="w-6 h-6" aria-hidden />}
      />
      <StatsCard
        title="Ausentes"
        value={stats.ausentes}
        color="yellow"
        icon={<UserX className="w-6 h-6" aria-hidden />}
      />
      <StatsCard
        title="Turnos cancelados"
        value={stats.cancelados}
        color="red"
        icon={<XCircle className="w-6 h-6" aria-hidden />}
      />
    </div>
  )
}
