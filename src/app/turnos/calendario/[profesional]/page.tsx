"use client"
import { useRouter, useParams } from "next/navigation"
import { useState } from "react"
import { professionals } from "@/data/professionals"
import { AppointmentCalendar } from "@/components/turnos/calendar/AppointmentCalendar"
import { PatientSearchModal } from "@/components/turnos/modals/PatientSearchModal"
import type { TimeSlot } from "@/lib/types"

export default function CalendarPage() {
  const router = useRouter()
  const params = useParams()
  const professionalId = params.profesional as string

  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)
  const [showPatientModal, setShowPatientModal] = useState(false)

  const professional = professionals.find((p) => p.id === professionalId)

  if (!professional) {
    return <div>Profesional no encontrado</div>
  }

  const handleSlotClick = (slot: TimeSlot) => {
    if (slot.status === "available") {
      setSelectedSlot(slot)
      setShowPatientModal(true)
    }
  }

  const handleAppointmentConfirmed = () => {
    setShowPatientModal(false)
    setSelectedSlot(null)
    router.push("/")
  }

  return (
    <div className="screen-transition min-h-screen p-6">
      <div className="flex items-center space-x-2 text-sm text-purple-600 mb-6">
        <button onClick={() => router.push("/")} className="hover:text-purple-800">
          Gestión de Turnos
        </button>
        <span className="text-gray-400">›</span>
        <button onClick={() => router.push("/turnos/profesionales")} className="hover:text-purple-800">
          Seleccionar Profesional
        </button>
        <span className="text-gray-400">›</span>
        <span className="text-purple-500 font-medium">Seleccione un Turno</span>
      </div>

      <div className="flex gap-6">
        {/* Left Column - Professional Card */}
        <div className="w-80 flex-shrink-0">
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-6 text-white mb-4">
            <h3 className="text-xl font-bold mb-2">Turno para</h3>
            <p className="text-lg">
              {professional.fullName} {professional.lastName}
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <img src="/medico_estetico.jpg" alt="Mini calendario" className="w-full h-auto rounded" />
          </div>
        </div>

        {/* Right Column - Main Calendar */}
        <div className="flex-1">
          <div className="bg-gray-600 rounded-t-2xl p-4">
            <div className="flex items-center justify-between text-white">
              <h2 className="text-xl font-bold">Seleccione un Turno</h2>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span>Referencias</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span>Turno disponible</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-400 rounded"></div>
                  <span>Turno no disponible</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-b-2xl p-6 shadow-lg">
            <AppointmentCalendar onSlotClick={handleSlotClick} />
          </div>
        </div>
      </div>

      {/* Patient Search Modal */}
      {showPatientModal && selectedSlot && (
        <PatientSearchModal
          isOpen={showPatientModal}
          onClose={() => setShowPatientModal(false)}
          selectedSlot={selectedSlot}
          professional={professional}
          onConfirm={handleAppointmentConfirmed}
        />
      )}
    </div>
  )
}
