'use client'
import { ReactNode } from 'react'


export function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) {
if (!open) return null
return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
<div className="bg-white rounded-2xl p-6 shadow-2xl min-w-[320px] max-w-lg">
<button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">✕</button>
{children}
</div>
</div>
)
}