'use client'
import { useEffect, useMemo, useState } from 'react'
import { users } from '@/mocks/users'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useRouter } from 'next/navigation'
import Image from "next/image";

export default function LoginPage() {
const router = useRouter()
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const user = useMemo(() => users[username as keyof typeof users], [username])
const valid = user && user.password === password

useEffect(() => {
// si ya está logueado
const raw = localStorage.getItem('session')
if (raw) router.replace('/')
}, [router])

function onSubmit(e: React.FormEvent) {
e.preventDefault()
if (!valid || !user) return
localStorage.setItem('session', JSON.stringify({
username,
role: user.role,
name: user.name,
}))
router.replace('/')
}

return (
<div className="min-h-screen flex">
{/* Izquierda */}
<div className="flex-1 gradient-animated flex flex-col justify-center items-center text-white p-8 relative overflow-hidden">
<div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />
<div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-300/10 rounded-full blur-lg" />
<div className="absolute top-1/2 left-5 w-16 h-16 bg-indigo-300/10 rounded-full blur-md" />

<div className="text-center max-w-lg relative z-10 hero-content">
<div className="mb-12 relative">
<div className="absolute inset-0 w-32 h-32 mx-auto">
<div className="w-full h-full bg-white/20 rounded-full pulse-ring" />
</div>
<div className="absolute inset-0 w-32 h-32 mx-auto">
<div className="w-full h-full bg-purple-300/20 rounded-full pulse-ring" style={{ animationDelay: '.5s' }} />
</div>
<div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-white to-purple-100 rounded-full flex items-center justify-center mb-6 logo-float glow-effect">

  <Image
    src="/imagen/Logo_Valenttine.png"
    alt="Logo Valenttine"
    width={100}
    height={100}
    className="w-220 h-220 object-contain"
    priority
  />
</div>
<div className="space-y-2">
<h1 className="text-4xl font-bold font-display text-white/90 leading-tight">Centro de Atención</h1>
<h2 className="text-3xl font-bold font-display text-purple-200 tracking-wide">Médica</h2>
<div className="relative">
<h3 className="text-5xl font-extrabold font-display bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">Valenttine</h3>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full" />
</div>
</div>
</div>

<div className="space-y-6">
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
<p className="text-xl text-purple-100 leading-relaxed font-medium">Bienvenido a Centro de Atención Médica Valenttine</p>
<div className="mt-4 flex justify-center gap-2">
<div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse" />
<div className="w-2 h-2 bg-indigo-300 rounded-full animate-pulse" style={{ animationDelay: '.2s' }} />
<div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '.4s' }} />
</div>
</div>
<div className="grid grid-cols-3 gap-4 mt-8">
{[
{ icon: '🏥', label: 'Atención Integral' },
{ icon: '👨‍⚕️', label: 'Profesionales' },
{ icon: '💙', label: 'Cuidado Humano' },
].map((f) => (
<div key={f.label} className="text-center">
<div className="w-12 h-12 mx-auto bg-white/20 rounded-xl flex items-center justify-center mb-2"><span className="text-2xl">{f.icon}</span></div>
<p className="text-sm text-purple-200">{f.label}</p>
</div>
))}
</div>
</div>
</div>
</div>

{/* Derecha: Form */}
<div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-bl from-gray-50 to-white">
<div className="w-full max-w-md form-slide-in">
<div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />
<div className="text-center mb-8">
<div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
</svg>
</div>
<h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">Iniciar Sesión</h3>
<p className="text-gray-500">Accede a tu cuenta del sistema</p>
</div>


<form onSubmit={onSubmit} className="space-y-6">
<div>
<label className="block text-sm font-semibold text-gray-700 mb-3">Nombre de usuario</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
</svg>
</div>
<Input value={username} onChange={(e) => setUsername(e.target.value.replace(/\s/g, ''))} placeholder="Ingrese su usuario" className="pl-12 py-4" maxLength={32} />
</div>
{username.length > 0 && (
<div className="mt-3 text-sm">
{user ? (
<span className="text-green-600 font-medium flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>Usuario válido</span>
) : (
<span className="text-red-600 font-medium flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>Usuario inválido</span>
)}
</div>
)}
</div>

<div>
<label className="block text-sm font-semibold text-gray-700 mb-3">Contraseña</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1S15.1 4.29 15.1 6v2z" />
</svg>
</div>
<Input type="password" value={password} onChange={(e) => setPassword(e.target.value.replace(/\s/g, ''))} placeholder="Ingrese su contraseña" className="pl-12 py-4" maxLength={64} />
</div>
</div>

<div className="pt-2">
<Button type="submit" disabled={!valid} className={valid ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white' : ''}>
<span className="flex items-center justify-center">
<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M10 17l5-5-5-5v3H3v4h7v3zm11-14h-9l3.59 3.59L9 13.17V15h2v-1.17l6.59-6.59L21 11V3z" /></svg>
Acceder
</span>
</Button>
</div>
</form>
</div>
</div>
</div>
</div>
)
}