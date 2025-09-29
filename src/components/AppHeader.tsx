'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useAuth, type Role } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

const ROLE_LABEL: Record<Role, string> = {
  RECEPCIONISTA: 'Recepcionista',
  MEDICO: 'Médico',
  GERENTE: 'Gerente',
}

export default function AppHeader() {
  const { session, loading, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const router = useRouter()
  const menuRef = useRef<HTMLDivElement>(null)

  // Cerrar el menú si se hace click fuera
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRef.current) return
      if (!menuRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Izquierda */}
        <div className="flex items-center gap-3">
          <Image src="/imagen/Logo_Valenttine.png" alt="logo" width={28} height={28}/>
          <span className="font-semibold">ERP Valenttine</span>
        </div>

        {/* Derecha */}
        <div className="flex items-center gap-3 relative" ref={menuRef}>
          {!loading && session && (
            <div className="text-right">
              <div className="text-sm font-medium">{session.username}</div>
              <div className="text-xs text-gray-500">{ROLE_LABEL[session.role]}</div>
            </div>
          )}

          {/* Ícono Modificar (✏️) */}
          <button
            aria-label="Modificar"
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="text-lg"
          >
            ✏️
          </button>

          {/* Menú */}
          {open && (
            <div
              role="menu"
              className="absolute right-0 top-12 bg-white border shadow rounded p-2 w-44"
            >
              <button
                onClick={() => { setOpen(false); setConfirm(true) }}
                className="w-full text-left px-3 py-2 rounded bg-red-50 hover:bg-red-100 text-red-700"
                role="menuitem"
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal confirmación */}
      {confirm && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center"
          onClick={(e) => {
            // cerrar si clickea el fondo
            if (e.target === e.currentTarget) setConfirm(false)
          }}
        >
          <div className="bg-white rounded-lg shadow p-5 w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-2">¿Cerrar sesión?</h3>
            <p className="text-sm text-gray-600 mb-4">Se cerrará tu sesión actual</p>
            <div className="flex justify-end gap-2">
              <button
                className="px-3 py-2 rounded bg-gray-100"
                onClick={() => setConfirm(false)}
              >
                Cancelar
              </button>
              <button
                className="px-3 py-2 rounded bg-purple-600 text-white"
                onClick={async () => {
                  await logout() // POST /api/logout
                  sessionStorage.setItem('flash', 'Sesión cerrada correctamente')
                  router.replace('/login')
                }}
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
