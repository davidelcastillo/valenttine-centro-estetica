"use client"
import { useState } from "react"
import { Modal } from "@/components/ui/Modal"
import { Button } from "@/components/ui/Button"
import { patients } from "@/data/patients"
import type { TimeSlot, Professional, Patient } from "@/lib/types"

interface PatientSearchModalProps {
  isOpen: boolean
  onClose: () => void
  selectedSlot: TimeSlot
  professional: Professional
  onConfirm: () => void
}

export function PatientSearchModal({
  isOpen,
  onClose,
  selectedSlot,
  professional,
  onConfirm,
}: PatientSearchModalProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const filteredPatients = patients.filter(
    (patient) => patient.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || patient.dni.includes(searchTerm),
  )

  const handlePatientSelect = (patient: Patient) => {
    setSelectedPatient(patient)
    setSearchTerm(patient.fullName)
  }

  const handleConfirm = () => {
    setShowConfirmation(true)
  }

  const handleFinalConfirm = () => {
    onConfirm()
  }

  if (showConfirmation) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Turno Confirmado">
        <div className="space-y-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-600 mb-2">¡Turno Confirmado!</h3>
            <p className="text-gray-600">El turno ha sido registrado exitosamente.</p>
          </div>

          <div className="flex justify-center">
            <Button onClick={handleFinalConfirm} className="bg-purple-600 hover:bg-purple-700">
              Finalizar
            </Button>
          </div>
        </div>
      </Modal>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Buscar Paciente">
      <div className="space-y-4">
        {/* Search Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Buscar por DNI o Nombre</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Ingrese DNI o nombre del paciente"
          />
        </div>

        {/* Patient Dropdown */}
        {searchTerm && filteredPatients.length > 0 && (
          <div className="border border-gray-200 rounded-lg max-h-40 overflow-y-auto">
            {filteredPatients.map((patient) => (
              <button
                key={patient.id}
                onClick={() => handlePatientSelect(patient)}
                className="w-full text-left px-3 py-2 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
              >
                <div className="font-medium">{patient.fullName}</div>
                <div className="text-sm text-gray-500">DNI: {patient.dni}</div>
              </button>
            ))}
          </div>
        )}

        {/* Selected Patient Details */}
        {selectedPatient && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Detalles del Turno:</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p>
                <strong>Paciente:</strong> {selectedPatient.fullName}
              </p>
              <p>
                <strong>DNI:</strong> {selectedPatient.dni}
              </p>
              <p>
                <strong>Médico:</strong> {professional.fullName} {professional.lastName}
              </p>
              <p>
                <strong>Día:</strong> {selectedSlot.day}
              </p>
              <p>
                <strong>Horario:</strong> {selectedSlot.time}
              </p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button onClick={onClose} variant="outline" className="flex-1 bg-transparent">
            Cancelar
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={!selectedPatient}
            className="flex-1 bg-purple-600 hover:bg-purple-700"
          >
            Confirmar Turno
          </Button>
        </div>
      </div>
    </Modal>
  )
}
