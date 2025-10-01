import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  header?: ReactNode
}

export function Card({ children, className = "", header }: CardProps) {
  return (
    <div className={`glass-effect rounded-2xl bg-white/95 backdrop-blur-sm border border-white/20 ${className}`}>
      {header && (
        <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-6 rounded-t-2xl -m-0 mb-0">{header}</div>
      )}
      <div className="p-6">{children}</div>
    </div>
  )
}
