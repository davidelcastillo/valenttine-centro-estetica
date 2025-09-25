import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'ERP Valenttine',
  description: 'Centro de Atención Médica Valenttine',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen page-enter">{children}</body>
    </html>
)
}