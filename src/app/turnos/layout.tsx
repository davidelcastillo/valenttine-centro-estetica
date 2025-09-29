import type React from "react"
export default function TurnosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 p-8">
      <main className="container mx-auto">{children}</main>
    </div>
  )
}
