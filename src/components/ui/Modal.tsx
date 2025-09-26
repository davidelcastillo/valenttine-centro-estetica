import type { ReactNode } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-effect rounded-2xl p-8 max-w-md w-full bg-white/95 backdrop-blur-sm border border-white/20">
        {title && (
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
