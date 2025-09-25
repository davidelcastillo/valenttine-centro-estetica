'use client'
import { useState, useCallback } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { ConfirmDialog } from '@/components/ui/ConfirmDialog'

export function Header() {
  const { session, logout } = useAuth()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleConfirmLogout = useCallback(() => {
    logout()
    setOpen(false)
    router.replace('/login')
  }, [logout, router])

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-800">ERP Valenttine</h1>
        </div>        


        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-medium text-gray-800">{session?.name}</p>
            <p className="text-sm text-gray-600">{session?.role}</p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="px-3 py-2 rounded-lg hover:bg-red-50 text-red-600"
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      <ConfirmDialog
        open={open}
        title="Cerrar sesión"
        description="Seguro queres cerrar la sesión?"
        confirmText="Cerrar sesión"
        cancelText="Cancelar"
        onConfirm={handleConfirmLogout}
        onCancel={() => setOpen(false)}
      />
    </header>
  )
}
