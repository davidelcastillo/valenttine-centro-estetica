import type { ReactNode } from "react"

interface StatsCardProps {
  title: string
  value: number
  icon: ReactNode
  color: "purple" | "red" | "green" | "blue"
}

export function StatsCard({ title, value, icon, color }: StatsCardProps) {
  const colorClasses = {
    purple: "text-purple-600 from-purple-500 to-purple-300",
    red: "text-red-600 from-red-500 to-red-300",
    green: "text-green-600 from-green-500 to-green-300",
    blue: "text-blue-600 from-blue-500 to-blue-300",
  }

  return (
    <div className="glass-effect rounded-2xl p-6 card-hover bg-white/95 backdrop-blur-sm border border-white/20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className={`text-3xl font-bold ${colorClasses[color].split(" ")[0]}`}>{value}</p>
        </div>
        <div
          className={`w-12 h-12 bg-gradient-to-br ${colorClasses[color].split(" ").slice(1).join(" ")} rounded-xl flex items-center justify-center`}
        >
          <div className="w-6 h-6 text-white">{icon}</div>
        </div>
      </div>
    </div>
  )
}
