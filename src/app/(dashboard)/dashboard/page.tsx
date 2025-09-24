'use client'
import { useAuth } from '@/hooks/useAuth'
import { modulesByRole } from '@/mocks/modules'


export default function DashboardHome() {
const { session } = useAuth()
const modules = modulesByRole[session?.role ?? ''] ?? []


return (
<div className="max-w-7xl mx-auto">
<div className="mb-8">
<h2 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h2>
<p className="text-gray-600">Bienvenido al sistema de gestión médica</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{modules.map((m) => (
<div key={m.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
<div className="text-3xl mb-4">{m.icon}</div>
<h3 className="text-lg font-semibold text-gray-800 mb-2">{m.name}</h3>
<p className="text-gray-600 text-sm">{m.description}</p>
</div>
))}
</div>
</div>
)
}