'use client'
import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { UserPen } from 'lucide-react';

// shadcn/ui
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog'

import { Button } from '@/components/ui/Button'

export function Header() {
  const { session, logout } = useAuth()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleConfirm = useCallback(() => {
    logout()
    setOpen(false)
    router.replace('/login')
  }, [logout, router])

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-medium text-gray-800">{session?.name}</p>
            <p className="text-sm text-gray-600">{session?.role}</p>
          </div>

          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
              <Button className="px-3 py-2 rounded-lg hover:bg-gray-100 text-red-600">
                Cerrar sesión
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>¿Cerrar sesión?</AlertDialogTitle>
                <AlertDialogDescription>
                  Perderás el acceso hasta volver a iniciar sesión.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-600 hover:bg-red-700"
                  onClick={handleConfirm}
                >
                  Cerrar sesión
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </header>
  )
}
