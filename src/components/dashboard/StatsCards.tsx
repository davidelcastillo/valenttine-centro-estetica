export default function StatsCards() {
return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{[ 'Pacientes', 'Turnos hoy', 'Pendientes' ].map((k) => (
<div key={k} className="bg-white p-4 rounded-xl border shadow-sm">
<div className="text-sm text-gray-500">{k}</div>
<div className="text-2xl font-bold">0</div>
</div>
))}
</div>
)
}