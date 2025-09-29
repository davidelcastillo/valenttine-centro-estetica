"use client"

import { useEffect, useMemo, useState } from "react"
import { Modal } from "@/components/ui/Modal"
import { Button } from "@/components/ui/button"
import type { TimeSlot } from "@/lib/turnos/types"

type PacienteMini = {
  id: number
  nombre: string
  apellido: string
  dni: string
  email: string
}

interface PatientSearchModalProps {
  open: boolean
  onClose: () => void
  professionalId: number
  selectedSlot: TimeSlot
  onConfirm: () => void
}

export function PatientSearchModal({
  open,
  onClose,
  professionalId,
  selectedSlot,
  onConfirm,
}: PatientSearchModalProps) {
  const [term, setTerm] = useState("")
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<PacienteMini[]>([])
  const [selected, setSelected] = useState<PacienteMini | null>(null)
  const [confirming, setConfirming] = useState(false)

  // búsqueda simple por DNI o nombre (reusa tu /api/pacientes/busqueda)
  useEffect(() => {
    let abort = false
    const run = async () => {
      if (!term) {
        setResults([])
        return
      }
      setLoading(true)
      try {
        const q = new URLSearchParams()
        if (/^\d+$/.test(term)) q.set("dni", term)
        else q.set("fullName", term)
        const res = await fetch(`/api/pacientes/busqueda?${q.toString()}`)
        const data = (await res.json()) as any[]
        if (!abort) {
          setResults(
            (data || []).map((p) => ({
              id: p.id,
              nombre: p.nombre,
              apellido: p.apellido,
              dni: p.dni,
              email: p.email,
            })),
          )
        }
      } catch {
        if (!abort) setResults([])
      } finally {
        if (!abort) setLoading(false)
      }
    }
    run()
    return () => {
      abort = true
    }
  }, [term])

  const canConfirm = !!selected

  const handleConfirm = async () => {
    if (!selected) return
    setConfirming(true)
    try {
      // Crear turno en tu API
      const body = {
        pacienteId: selected.id,
        profesionalId: professionalId,
        fecha: new Date().toISOString().slice(0, 10), // la fecha real la arma el backend con selectedSlot si prefieres
        hora: selectedSlot.time,
      }
      const r = await fetch("/api/turnos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      if (!r.ok) {
        const j = await r.json().catch(() => ({}))
        throw new Error(j?.error || "No se pudo crear el turno")
      }
      onConfirm()
    } catch (e) {
      // podrías mostrar un toast
      console.error(e)
    } finally {
      setConfirming(false)
    }
  }

  return (
    <Modal open={open} onClose={onClose} title="Buscar Paciente">
      <div className="space-y-4">
        {/* Buscar */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Buscar por DNI o Nombre</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Ingrese DNI o nombre del paciente"
          />
        </div>

        {/* Resultados */}
        {term && (
          <div className="border border-gray-200 rounded-lg max-h-48 overflow-y-auto">
            {loading && <div className="p-3 text-sm text-gray-500">Buscando…</div>}
            {!loading &&
              results.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelected(p)
                    setTerm(`${p.nombre} ${p.apellido}`)
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                >
                  <div className="font-medium">{p.nombre} {p.apellido}</div>
                  <div className="text-sm text-gray-500">DNI: {p.dni}</div>
                </button>
              ))}
            {!loading && results.length === 0 && (
              <div className="p-3 text-sm text-gray-500">Sin resultados</div>
            )}
          </div>
        )}

        {/* Resumen */}
        {selected && (
          <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700">
            <p><strong>Paciente:</strong> {selected.nombre} {selected.apellido} (DNI {selected.dni})</p>
            <p><strong>Horario:</strong> {selectedSlot.time} hs</p>
          </div>
        )}

        <div className="flex gap-3">
          <Button onClick={onClose} variant="outline" className="flex-1 bg-transparent">
            Cancelar
          </Button>
          <Button onClick={handleConfirm} disabled={!canConfirm || confirming} className="flex-1 bg-purple-600 hover:bg-purple-700">
            {confirming ? "Guardando…" : "Confirmar Turno"}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
