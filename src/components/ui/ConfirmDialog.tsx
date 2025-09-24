'use client'
import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

type Props = {
  open: boolean
  title?: string
  description?: string
  confirmText?: string
  cancelText?: string
  onConfirm: () => void
  onCancel: () => void
  className?: string
}

export function ConfirmDialog({
  open,
  title = '¿Estás seguro?',
  description = 'Esta acción no se puede deshacer.',
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  onConfirm,
  onCancel,
  className
}: Props) {
  // Cerrar con ESC
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onCancel()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onCancel])

  if (!open) return null

  const modal = (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onCancel}
      />
      {/* Card */}
      <div
        className={cn(
          'relative z-[101] w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl',
          'animate-fade-in',
          className
        )}
      >
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>

        <div className="mt-6 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  )

  // Portal para evitar problemas de stacking/contexto
  return createPortal(modal, document.body)
}
