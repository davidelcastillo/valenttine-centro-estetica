"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { getDisponibilidad, getProfesionalDetalle } from "@/lib/turnos/api"
import type { DisponibilidadResponse, ProfesionalDetalle, TimeSlot } from "@/lib/turnos/types"
import { PatientSearchModal } from "@/components/turnos/modals/PatientSearchModal"

function todayYMD() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`
}

export default function CalendarPage() {
  const router = useRouter()
  const params = useParams<{ profesional: string }>()
  const profesionalId = Number(params.profesional)

  const [profesional, setProfesional] = useState<ProfesionalDetalle | null>(null)
  const [fecha, setFecha] = useState<string>(todayYMD())
  const [disp, setDisp] = useState<DisponibilidadResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)
  const [showPatientModal, setShowPatientModal] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const det = await getProfesionalDetalle(profesionalId)
        setProfesional(det)
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "No se pudo cargar el profesional")
      } finally {
        setLoading(false)
      }
    })()
  }, [profesionalId])

  useEffect(() => {
    ;(async () => {
      if (!profesionalId || !/^\d{4}-\d{2}-\d{2}$/.test(fecha)) return
      try {
        setLoadingSlots(true)
        const d = await getDisponibilidad(profesionalId, fecha)
        setDisp(d)
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "No se pudo cargar la disponibilidad")
      } finally {
        setLoadingSlots(false)
      }
    })()
  }, [profesionalId, fecha])

  const slots: TimeSlot[] = useMemo(() => {
    if (!disp) return []
    return disp.disponibles.map((h) => ({ date: fecha, time: h, status: "available" }))
  }, [disp, fecha])

  const handleSlotClick = (slot: TimeSlot) => {
    if (slot.status === "available") {
      setSelectedSlot(slot)
      setShowPatientModal(true)
    }
  }

  const handleAppointmentConfirmed = () => {
    setShowPatientModal(false)
    setSelectedSlot(null)
    router.push("/turnos")
  }

  if (loading) return <div className="p-6">Cargando…</div>
  if (error) return <div className="p-6 text-red-600">{error}</div>
  if (!profesional) return <div className="p-6">Profesional no encontrado</div>

  return (
    <div className="screen-transition min-h-screen p-6">
      {/* … UI … */}

      <div className="bg-white rounded-b-2xl p-6 shadow-lg">
        {loadingSlots ? (
          <div>Cargando disponibilidad…</div>
        ) : slots.length === 0 ? (
          <div>No hay turnos disponibles para la fecha seleccionada.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {slots.map((s) => (
              <button
                key={s.time}
                onClick={() => handleSlotClick(s)}
                className="px-3 py-2 rounded-lg bg-green-100 hover:bg-green-200 text-green-800 font-medium"
              >
                {s.time} hs
              </button>
            ))}
          </div>
        )}
      </div>

      {showPatientModal && selectedSlot && (
        <PatientSearchModal
          open={showPatientModal}
          onClose={() => setShowPatientModal(false)}
          professionalId={profesionalId}                    // <- usa la variable correcta
          professionalName={profesional.nombreCompleto}      // para mostrar en el modal
          selectedSlot={selectedSlot}
          onConfirm={handleAppointmentConfirmed}
        />
      )}
    </div>
  )
}
