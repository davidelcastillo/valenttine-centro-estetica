// src/hooks/useAuth.ts
'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

/** Roles posibles */
export type Role = 'RECEPCIONISTA' | 'MEDICO' | 'GERENTE'

/** Lo mínimo que necesitamos mostrar en la cabecera */
export type Session = { username: string; role: Role; email: string }

/**
 * Hook principal de autenticación (cliente)
 * - Lee el usuario desde /api/yo usando la cookie httpOnly 
 * - Expone helpers de rol y un logout que pega a /api/logout
 */
export function useAuth() {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchMe = useCallback(async () => {
    setLoading(true)
    try {
      // /api/me devuelve { username, role, email } si el JWT es válido
      const res = await fetch('/api/yo', { method: 'POST' })
      if (!res.ok) {
        setSession(null)
        return
      }
      const data = await res.json()
      if (data && !data.error) {
        const s: Session = {
          username: String(data.username),
          role: data.role as Role,
          email: String(data.email),
        }
        setSession(s)
      } else {
        setSession(null)
      }
    } catch {
      setSession(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchMe()
  }, [fetchMe])

  const logout = useCallback(async () => {
    try {
      await fetch('/api/logout', { method: 'POST' })
    } catch {
      /* ignore */
    } finally {
      setSession(null)
    }
  }, [])

  // Helpers de rol para habilitar/ocultar UI
  const isRecepcionista = session?.role === 'RECEPCIONISTA'
  const isMedico = session?.role === 'MEDICO'
  const isGerente = session?.role === 'GERENTE'

  return {
    session,
    loading,
    logout,
    refresh: fetchMe,
    isRecepcionista,
    isMedico,
    isGerente,
  }
}

/**
 * Auto-logout por inactividad (default 15 minutos)
 * - Al dispararse, hace POST /api/logout y redirige a /login
 * - Deja un “flash” para mostrar el banner rojo 5s en el login
 */
export function useInactivityLogout(minutes = 15) {
  const timer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const ms = minutes * 60 * 1000
    const reset = () => {
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(async () => {
        try {
          await fetch('/api/logout', { method: 'POST' })
        } catch {
          /* ignore */
        } finally {
          // mensaje de advertencia para /login
          if (typeof window !== 'undefined') {
            sessionStorage.setItem('flash-danger', 'Sesión finalizada por inactividad.')
            window.location.replace('/login')
          }
        }
      }, ms)
    }

    const events = ['click', 'keydown', 'mousemove', 'scroll', 'touchstart']
    events.forEach((ev) => window.addEventListener(ev, reset))
    reset()

    return () => {
      if (timer.current) clearTimeout(timer.current)
      events.forEach((ev) => window.removeEventListener(ev, reset))
    }
  }, [minutes])
}
