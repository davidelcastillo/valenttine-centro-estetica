"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to turnos dashboard
    router.push("/turnos")
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
          </svg>
        </div>
        <p className="text-gray-600">Cargando sistema de turnos...</p>
      </div>
    </div>
  )
}
