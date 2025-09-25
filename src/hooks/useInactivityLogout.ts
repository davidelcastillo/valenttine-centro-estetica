'use client'
import { useEffect, useRef } from 'react'
import { useAuth } from './useAuth'
import { useRouter } from 'next/navigation'

export function useInactivityLogout(minutes = 15) {
  const { logout } = useAuth()                 // ← usa el logout real (POST /api/logout)
  const router = useRouter()
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null) // compatible browser/Node

  useEffect(() => {
    const ms = Math.max(1, minutes) * 60 * 1000

    const arm = () => {
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(async () => {
        await logout()
        sessionStorage.setItem('flash-danger', 'Sesión finalizada por inactividad.')
        router.replace('/login')
      }, ms)
    }

    // Eventos de actividad del usuario
    const winEvents: (keyof WindowEventMap)[] = ['click', 'keydown', 'mousemove', 'scroll', 'touchstart']
    const onActivity = () => arm()

    winEvents.forEach(ev => window.addEventListener(ev, onActivity))
    // (opcional) si vuelve a estar visible, rearmamos el temporizador
    const onVisible = () => { if (document.visibilityState === 'visible') arm() }
    document.addEventListener('visibilitychange', onVisible)

    arm()

    return () => {
      if (timer.current) clearTimeout(timer.current)
      winEvents.forEach(ev => window.removeEventListener(ev, onActivity))
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [minutes, logout, router])
}
