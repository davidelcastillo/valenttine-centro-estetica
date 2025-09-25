// src/hooks/useAuth.ts
'use client'
import { useCallback, useEffect, useState } from 'react'

type Session = { username: string; role: 'Recepcionista'|'Médico'|'Gerente'; name: string }

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('session')
      setSession(raw ? JSON.parse(raw) : null)
    } catch {
      setSession(null)
    } finally {
      setLoading(false)
    }
  }, [])

  // NO redirige aquí. Solo helpers puros.
  const logout = useCallback(() => {
    try { localStorage.removeItem('session') } catch {}
    setSession(null)
  }, [])

  return { session, loading, logout }
}
