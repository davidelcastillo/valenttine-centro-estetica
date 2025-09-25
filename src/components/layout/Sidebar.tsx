'use client'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'


const NAV = [
{ label: 'Dashboard', href: '/dashboard', roles: ['Recepcionista','Médico','Gerente'] },
{ label: 'Pacientes', href: '/pacientes', roles: ['Recepcionista','Gerente'] },
{ label: 'Profesionales', href: '/profesionales', roles: ['Gerente'] },
{ label: 'Turnos', href: '/turnos', roles: ['Recepcionista','Médico','Gerente'] },
]


export function Sidebar() {
const { session } = useAuth()
const role = session?.role ?? ''
return (
<aside className="w-64 shrink-0 border-r bg-white min-h-[calc(100vh-64px)] p-4">
<nav className="space-y-1">
{NAV.filter(n => n.roles.includes(role)).map((n) => (
<Link key={n.href} href={n.href} className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
{n.label}
</Link>
))}
</nav>
</aside>
)
}