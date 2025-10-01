// src/app/profesionales/nuevo/page.tsx
'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getNuevoProfesionalInit, getLocalidades } from '@/lib/categorias/api';
import type { Provincia, Localidad, ObraSocial, Prestacion } from '@/lib/categorias/types';
import Link from "next/link";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";


// ==== Helpers (iguales a editar) ====

const onlyLetters = (s: string) => /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/.test((s ?? '').trim());
const toDate = (ddmmyyyy: string) => {
    const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec((ddmmyyyy ?? '').trim());
    if (!m) return new Date('Invalid');
    const [, dd, mm, yyyy] = m;
    const d = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
    if (d.getFullYear() !== Number(yyyy) || d.getMonth() + 1 !== Number(mm) || d.getDate() !== Number(dd)) return new Date('Invalid');
    return d;
};
const isFuture = (d: Date) => { const T = new Date(); T.setHours(0, 0, 0, 0); const D = new Date(d); D.setHours(0, 0, 0, 0); return D.getTime() > T.getTime(); };
const atLeastOneYearOld = (d: Date) => { const T = new Date(); const cut = new Date(T.getFullYear() - 1, T.getMonth(), T.getDate()); return d.getTime() <= cut.getTime(); };
const normalizePhoneAR = (raw: string) => raw.replace(/\D/g, '');
const validatePhoneAR = (raw: string) => {
    const digits = normalizePhoneAR(raw);
    const no54 = digits.startsWith('54') ? digits.slice(2) : digits;
    if (!/^\d{8,10}$/.test(no54)) return { ok: false as const };
    const areaLen = Math.min(4, Math.max(2, no54.length - 6));
    const area = no54.slice(0, areaLen);
    const local = no54.slice(areaLen);
    const ok = area.length >= 2 && area.length <= 4 && local.length === 6;
    return ok ? { ok: true as const, area, local, full: `(${area})${local}` } : { ok: false as const };
};
const HOURS = Array.from({ length: 24 }, (_, h) => String(h).padStart(2, "0"));
const MINUTES = ["00", "30"];

type TimeFieldProps = {
    value: string;
    onChange: (v: string) => void;
    disabled?: boolean;
    "aria-label"?: string;
};

function TimeField({ value, onChange, disabled, ...a11y }: TimeFieldProps) {
    const [hh = "", mm = ""] = (value ?? "").split(":");
    const set = (h: string, m: string) => onChange(`${h || "00"}:${m || "00"}`);

    return (
        <div className="flex items-center gap-2">
            {/* Horas */}
            <Select value={hh || ""} disabled={disabled} onValueChange={(h) => set(h, mm || "00")}>
                <SelectTrigger className="w-[90px] h-10 rounded-xl" {...a11y}>
                    <SelectValue placeholder="--" />
                </SelectTrigger>
                <SelectContent className="max-h-64">
                    {HOURS.map((h) => (
                        <SelectItem key={h} value={h}>
                            {h}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <span className="text-gray-500">:</span>

            {/* Minutos */}
            <Select value={mm || ""} disabled={disabled} onValueChange={(m) => set(hh || "00", m)}>
                <SelectTrigger className="w-[80px] h-10 rounded-xl">
                    <SelectValue placeholder="--" />
                </SelectTrigger>
                <SelectContent>
                    {MINUTES.map((m) => (
                        <SelectItem key={m} value={m}>
                            {m}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}


// ==== Estado de formulario ====
type FormState = {
    // Personales
    nombre: string;
    apellido: string;
    dni: string; // 8 dígitos
    fechaNacimiento: string; // DD/MM/AAAA
    genero: 'FEMENINO' | 'MASCULINO' | 'OTRO' | '';
    estadoCivil: 'SOLTERO' | 'CASADO' | 'DIVORCIADO' | 'VIUDO' | 'UNION_LIBRE' | '';

    // Contacto
    pais: string;
    provinciaId: string;
    localidadId: string;
    barrio: string;
    calle: string;
    numero: string;
    celular: string;
    email: string;

    // Profesionales
    titulo: string;
    matricula: string;
    especialidad: string;
    certificaciones: string;
    universidad: string;
    fechaGraduacion: string; // DD/MM/AAAA

    // Laborales
    obraSocialId: string;      // combobox (1); backend acepta array
    prestacionIds: number[];   // checkboxes

    // Horario
    horario: Array<{ day: string; enabled: boolean; start: string; end: string }>;

    // Usuario médico opcional
    username: string;
    userEmail: string;
    password: string;
};

type Errors = Partial<Record<keyof FormState, string>> & {
    _celular?: string;
    _obra?: string;
    _prestaciones?: string;
    _horario?: string;
};

export default function NuevoProfesionalPage() {
    const router = useRouter();

    // catálogos
    const [provincias, setProvincias] = useState<Provincia[]>([]);
    const [localidades, setLocalidades] = useState<Localidad[]>([]);
    const [prestaciones, setPrestaciones] = useState<Prestacion[]>([]);
    const [obras, setObras] = useState<ObraSocial[]>([]);

    const [form, setForm] = useState<FormState | null>(null);
    const [errors, setErrors] = useState<Errors>({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [serverMsg, setServerMsg] = useState<string | null>(null);

    // Carga inicial de catálogos + estado base (con 7 días)
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const init = await getNuevoProfesionalInit();
                setProvincias(init.provincias);
                setPrestaciones(init.prestaciones);
                setObras(init.obrasSociales);

                // horario con los 7 días
                const weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] as const;
                const horario = weekDays.map(day => ({
                    day,
                    enabled: false,
                    start: '',
                    end: '',
                }));

                const base: FormState = {
                    nombre: '',
                    apellido: '',
                    dni: '',
                    fechaNacimiento: '',
                    genero: '',
                    estadoCivil: '',

                    pais: '',
                    provinciaId: '',
                    localidadId: '',
                    barrio: '',
                    calle: '',
                    numero: '',
                    celular: '',
                    email: '',

                    titulo: '',
                    matricula: '',
                    especialidad: '',
                    certificaciones: '',
                    universidad: '',
                    fechaGraduacion: '',

                    obraSocialId: '',
                    prestacionIds: [],

                    horario,

                    username: "",
                    userEmail: "",
                    password: "",

                };

                setForm({ ...base }); // mutable
            } catch {
                setServerMsg('No se pudo cargar datos iniciales');
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    // localidades dependientes
    useEffect(() => {
        (async () => {
            if (!form?.provinciaId) return;
            try {
                const locs = await getLocalidades(Number(form.provinciaId));
                setLocalidades(locs);
                if (form && locs.every(l => String(l.id) !== form.localidadId)) {
                    setForm({ ...form, localidadId: '' });
                }
            } catch { /* noop */ }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form?.provinciaId]);

    const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setForm(f => (f ? { ...f, [k]: v } : f));
    const togglePrestacion = (id: number) => setForm(f => f ? ({ ...f, prestacionIds: f.prestacionIds.includes(id) ? f.prestacionIds.filter(x => x !== id) : [...f.prestacionIds, id] }) : f);
    const toggleDia = (i: number, on: boolean) => setForm(f => {
        if (!f) return f; const h = [...f.horario]; h[i] = { ...h[i], enabled: on }; return { ...f, horario: h };
    });
    const setHora = (i: number, field: 'start' | 'end', val: string) => setForm(f => {
        if (!f) return f; const h = [...f.horario]; h[i] = { ...h[i], [field]: val }; return { ...f, horario: h };
    });

    const celular = form?.celular ?? '';
    const telPreview = useMemo(() => {
        const v = validatePhoneAR(celular);
        return v.ok ? v.full : '';
    }, [celular]);

    // Validaciones
    const validateAll = (): Errors => {
        const e: Errors = {};
        if (!form) return e;

        // Personales
        if (!form.nombre.trim()) e.nombre = 'Obligatorio';
        else if (!onlyLetters(form.nombre)) e.nombre = 'Solo letras';
        if (!form.apellido.trim()) e.apellido = 'Obligatorio';
        else if (!onlyLetters(form.apellido)) e.apellido = 'Solo letras';

        if (!/^\d{8}$/.test(form.dni)) e.dni = 'Debe tener 8 dígitos';

        if (!form.fechaNacimiento.trim()) e.fechaNacimiento = 'Obligatorio';
        else {
            const d = toDate(form.fechaNacimiento);
            if (isNaN(d.getTime())) e.fechaNacimiento = 'Formato DD/MM/AAAA';
            else if (isFuture(d)) e.fechaNacimiento = 'No puede ser futura';
            else if (!atLeastOneYearOld(d)) e.fechaNacimiento = 'Edad mínima: 1 año';
        }
        if (!form.genero) e.genero = 'Obligatorio';
        if (!form.estadoCivil) e.estadoCivil = 'Obligatorio';

        // Contacto
        if (!form.pais.trim()) e.pais = 'Obligatorio';
        else if (!onlyLetters(form.pais)) e.pais = 'Solo letras';
        if (!form.provinciaId) e.provinciaId = 'Obligatorio';
        if (!form.localidadId) e.localidadId = 'Obligatorio';
        if (form.barrio && !onlyLetters(form.barrio)) e.barrio = 'Solo letras';
        if (!form.calle.trim()) e.calle = 'Obligatorio';
        if (!form.numero.trim()) e.numero = 'Obligatorio';
        else if (!/^\d+$/.test(form.numero.trim())) e.numero = 'Solo dígitos';
        if (!form.email.trim()) e.email = 'Obligatorio';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Correo electrónico no válido';

        const tel = validatePhoneAR(form.celular);
        if (!tel.ok) e._celular = 'Número inválido, revise el formato';

        // Profesionales
        if (!form.titulo.trim()) e.titulo = 'Obligatorio';
        else if (!onlyLetters(form.titulo)) e.titulo = 'Solo letras';
        if (!form.matricula.trim()) e.matricula = 'Obligatorio';
        else if (!/^\d+$/.test(form.matricula.trim())) e.matricula = 'Solo dígitos';
        if (!form.especialidad.trim()) e.especialidad = 'Obligatorio';
        if (!form.universidad.trim()) e.universidad = 'Obligatorio';
        else if (!onlyLetters(form.universidad)) e.universidad = 'Solo letras';

        if (!form.fechaGraduacion.trim()) e.fechaGraduacion = 'Obligatorio';
        else {
            const g = toDate(form.fechaGraduacion);
            const n = toDate(form.fechaNacimiento);
            if (isNaN(g.getTime())) e.fechaGraduacion = 'Formato DD/MM/AAAA';
            else if (isFuture(g)) e.fechaGraduacion = 'No puede ser futura';
            else if (!isNaN(n.getTime()) && g.getTime() <= n.getTime())
                e.fechaGraduacion = 'Debe ser posterior al nacimiento';
        }

        // Laborales
        if (!form.obraSocialId) e._obra = 'Selecciona una obra social';
        if (!form.prestacionIds.length) e._prestaciones = 'Selecciona al menos una prestación';

        // Horario
        const enabled = form.horario.filter(h => h.enabled);
        if (!enabled.length) e._horario = 'Selecciona al menos un día con rango horario';
        else if (enabled.some(h => !h.start || !h.end || h.start >= h.end))
            e._horario = 'Revisa los rangos (HH:mm – HH:mm)';

        // Usuario médico (opcional)
        // Usuario médico (obligatorio)
        if (!form.username.trim()) e.username = 'Usuario obligatorio';
        else if (!/^\S{1,11}$/.test(form.username.trim())) e.username = 'Hasta 11, sin espacios';

        if (!form.userEmail.trim()) e.userEmail = 'Email obligatorio';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.userEmail.trim())) e.userEmail = 'Correo electrónico no válido';

        if (!form.password.trim()) e.password = 'Contraseña obligatoria';
        else if (form.password.length < 6) e.password = 'Mínimo 6 caracteres';


        return e;
    };

    // Recalcular errores en vivo
    useEffect(() => {
        if (form) setErrors(validateAll());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form]);

    const canSubmit = form !== null && Object.keys(errors).length === 0 && !saving;

    const handleSubmit = async (ev: React.FormEvent) => {
        ev.preventDefault();
        if (!form) return;
        const val = validateAll();
        setErrors(val);
        if (Object.keys(val).length) return;

        setSaving(true);
        setServerMsg(null);

        const nac = toDate(form.fechaNacimiento);
        const grad = toDate(form.fechaGraduacion);
        const tel = validatePhoneAR(form.celular);

        const payload: any = {
            // usuario (opcional)
            usuarioNuevo: {
                username: form.username.trim(),
                email: form.userEmail.trim(),
                contraseña: form.password, // ojo con el backend (nombre de clave)
            },
            // datos obligatorios
            nombre: form.nombre.trim(),
            apellido: form.apellido.trim(),
            dni: form.dni.trim(),
            fechaNacimiento: nac.toISOString(),
            genero: form.genero,
            estadoCivil: form.estadoCivil,
            pais: form.pais.trim(),
            provinciaId: Number(form.provinciaId),
            localidadId: Number(form.localidadId),
            barrio: form.barrio.trim() || null,
            calle: form.calle.trim(),
            numero: form.numero.trim(),
            celular: tel.ok ? `+54${tel.area}${tel.local}` : form.celular.trim(),
            email: form.email.trim(),
            titulo: form.titulo.trim(),
            matricula: form.matricula.trim(),
            especialidad: form.especialidad.trim(),
            universidad: form.universidad.trim(),
            fechaGraduacion: grad.toISOString(),
            horarioTrabajo: JSON.stringify(
                form.horario.filter(h => h.enabled).map(h => ({ day: h.day, start: h.start, end: h.end }))
            ),
            obraSocialIds: form.obraSocialId ? [Number(form.obraSocialId)] : [],
            prestacionIds: form.prestacionIds,
        };

        try {
            const r = await fetch('/api/profesionales/nuevo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(payload),
            });
            const j = await r.json();
            if (!r.ok) throw new Error(j?.error || 'Error al crear profesional');
            // OK → redirigir con mensaje
            router.push('/profesionales?created=1');
        } catch (e: any) {
            const msg = e?.message || 'Error al crear';
            const low = String(msg).toLowerCase();
            const e2 = { ...val } as Errors;
            if (low.includes('dni')) e2.dni = 'Profesional registrado en el sistema';
            if (low.includes('matr')) e2.matricula = 'Matrícula ya registrada';
            if (low.includes('email')) e2.email = 'Email ya registrado';
            setErrors(e2);
            setServerMsg(msg);
        } finally {
            setSaving(false);
        }
    };

    if (loading || !form) return <div className="p-8">Cargando…</div>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-violet-800">Registrar nuevo profesional</h1>
                    <p className="text-sm text-gray-500">Completá los datos y guardá el registro.</p>
                </div>
                <Link
                    href="/profesionales"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 hover:from-gray-300 hover:to-gray-400 shadow"
                >
                    Volver
                </Link>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* DATOS PERSONALES */}
                <section className="bg-white/70 backdrop-blur rounded-2xl shadow p-5">
                    <h2 className="text-violet-700 font-semibold mb-4">Datos Personales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Nombre */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Nombre Completo *</label>
                            <input className="w-full border rounded-xl px-3 py-2" value={form.nombre} onChange={e => set('nombre', e.target.value)} />
                            {errors.nombre && <p className="text-xs text-red-600 mt-1">{errors.nombre}</p>}
                        </div>
                        {/* Apellido */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Apellido Completo *</label>
                            <input className="w-full border rounded-xl px-3 py-2" value={form.apellido} onChange={e => set('apellido', e.target.value)} />
                            {errors.apellido && <p className="text-xs text-red-600 mt-1">{errors.apellido}</p>}
                        </div>
                        {/* DNI */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">DNI *</label>
                            <input className="w-full border rounded-xl px-3 py-2" value={form.dni} onChange={e => set('dni', e.target.value.replace(/\D/g, '').slice(0, 8))} placeholder="8 dígitos" />
                            {errors.dni && <p className="text-xs text-red-600 mt-1">{errors.dni}</p>}
                        </div>
                        {/* Fecha Nacimiento */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Fecha de Nacimiento (DD/MM/AAAA) *</label>
                            <input className="w-full border rounded-xl px-3 py-2" value={form.fechaNacimiento} onChange={e => set('fechaNacimiento', e.target.value)} placeholder="DD/MM/AAAA" />
                            {errors.fechaNacimiento && <p className="text-xs text-red-600 mt-1">{errors.fechaNacimiento}</p>}
                        </div>
                        {/* Género */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Género *</label>
                            <select className="w-full border rounded-xl px-3 py-2" value={form.genero} onChange={e => set('genero', e.target.value as FormState['genero'])}>
                                <option value="">Seleccionar…</option>
                                <option value="FEMENINO">Femenino</option>
                                <option value="MASCULINO">Masculino</option>
                                <option value="OTRO">Otro</option>
                            </select>
                            {errors.genero && <p className="text-xs text-red-600 mt-1">{errors.genero}</p>}
                        </div>
                        {/* Estado Civil */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Estado Civil *</label>
                            <select className="w-full border rounded-xl px-3 py-2" value={form.estadoCivil} onChange={e => set('estadoCivil', e.target.value as FormState['estadoCivil'])}>
                                <option value="">Seleccionar…</option>
                                <option value="SOLTERO">Soltero/a</option>
                                <option value="CASADO">Casado/a</option>
                                <option value="DIVORCIADO">Divorciado/a</option>
                                <option value="VIUDO">Viudo/a</option>
                                <option value="UNION_LIBRE">Unión Libre / Convivencia</option>
                            </select>
                            {errors.estadoCivil && <p className="text-xs text-red-600 mt-1">{errors.estadoCivil}</p>}
                        </div>
                    </div>
                </section>

                {/* CONTACTO */}
                <section className="bg-white/70 backdrop-blur rounded-2xl shadow p-5">
                    <h2 className="text-violet-700 font-semibold mb-4">Datos de Contacto</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* País */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">País *</label>
                            <input className="w-full border rounded-xl px-3 py-2" value={form.pais} onChange={e => set('pais', e.target.value)} />
                            {errors.pais && <p className="text-xs text-red-600 mt-1">{errors.pais}</p>}
                        </div>
                        {/* Provincia */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Provincia *</label>
                            <select className="w-full border rounded-xl px-3 py-2" value={form.provinciaId} onChange={e => set('provinciaId', e.target.value)}>
                                <option value="">Seleccionar…</option>
                                {provincias.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
                            </select>
                            {errors.provinciaId && <p className="text-xs text-red-600 mt-1">{errors.provinciaId}</p>}
                        </div>
                        {/* Localidad */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Localidad *</label>
                            <select className="w-full border rounded-xl px-3 py-2" value={form.localidadId} onChange={e => set('localidadId', e.target.value)} disabled={!form.provinciaId}>
                                <option value="">{form.provinciaId ? 'Seleccionar…' : 'Selecciona provincia'}</option>
                                {localidades.map(l => <option key={l.id} value={l.id}>{l.nombre}</option>)}
                            </select>
                            {errors.localidadId && <p className="text-xs text-red-600 mt-1">{errors.localidadId}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                        {/* Barrio */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Barrio</label>
                            <input className="w-full border rounded-xl px-3 py-2" value={form.barrio} onChange={e => set('barrio', e.target.value)} />
                            {errors.barrio && <p className="text-xs text-red-600 mt-1">{errors.barrio}</p>}
                        </div>
                        {/* Calle */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Calle *</label>
                            <input className="w-full border rounded-xl px-3 py-2" value={form.calle} onChange={e => set('calle', e.target.value)} />
                            {errors.calle && <p className="text-xs text-red-600 mt-1">{errors.calle}</p>}
                        </div>
                        {/* Número */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Número *</label>
                            <input className="w-full border rounded-xl px-3 py-2" value={form.numero} onChange={e => set('numero', e.target.value.replace(/\D/g, ''))} />
                            {errors.numero && <p className="text-xs text-red-600 mt-1">{errors.numero}</p>}
                        </div>
                        {/* Celular */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Número de Celular (+54) *</label>
                            <input className="w-full border rounded-xl px-3 py-2" value={form.celular} onChange={e => set('celular', e.target.value)} placeholder="(XXX)XXXXXX o similar" />
                            {telPreview
                                ? <p className="text-xs text-green-600 mt-1">Número válido: {telPreview}</p>
                                : (errors._celular && <p className="text-xs text-red-600 mt-1">Número inválido, revise el formato</p>)
                            }
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {/* Email */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Correo Electrónico *</label>
                            <input
                                type="email"
                                className="w-full border rounded-xl px-3 py-2"
                                value={form.email}
                                onChange={(e) => {
                                    const v = e.target.value;
                                    set('email', v);          // contacto
                                    set('userEmail', v);      // usuario médico
                                    const uname = v.split('@')[0]
                                        .replace(/[^A-Za-z0-9_]/g, '')
                                        .slice(0, 11);
                                    set('username', uname);   // usuario autogenerado (máx 11, sin espacios)
                                }}
                            />
                            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                        </div>
                    </div>
                </section>

                {/* DATOS PROFESIONALES */}
                <section className="bg-white/70 backdrop-blur rounded-2xl shadow p-5">
                    <h2 className="text-violet-700 font-semibold mb-4">Datos Profesionales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Título Profesional *</label>
                            <input className="w-full border rounded-xl px-3 py-2" value={form.titulo} onChange={e => set('titulo', e.target.value)} />
                            {errors.titulo && <p className="text-xs text-red-600 mt-1">{errors.titulo}</p>}
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Número de Matrícula *</label>
                            <input className="w-full border rounded-xl px-3 py-2" value={form.matricula} onChange={e => set('matricula', e.target.value.replace(/\D/g, ''))} />
                            {errors.matricula && <p className="text-xs text-red-600 mt-1">{errors.matricula}</p>}
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Especialidad *</label>
                            <input className="w-full border rounded-xl px-3 py-2" value={form.especialidad} onChange={e => set('especialidad', e.target.value)} />
                            {errors.especialidad && <p className="text-xs text-red-600 mt-1">{errors.especialidad}</p>}
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Universidad de Egreso *</label>
                            <input className="w-full border rounded-xl px-3 py-2" value={form.universidad} onChange={e => set('universidad', e.target.value)} />
                            {errors.universidad && <p className="text-xs text-red-600 mt-1">{errors.universidad}</p>}
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Fecha de Graduación (DD/MM/AAAA) *</label>
                            <input className="w-full border rounded-xl px-3 py-2" value={form.fechaGraduacion} onChange={e => set('fechaGraduacion', e.target.value)} placeholder="DD/MM/AAAA" />
                            {errors.fechaGraduacion && <p className="text-xs text-red-600 mt-1">{errors.fechaGraduacion}</p>}
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Certificaciones Adicionales</label>
                            <input className="w-full border rounded-xl px-3 py-2" value={form.certificaciones} onChange={e => set('certificaciones', e.target.value)} />
                        </div>
                    </div>
                </section>

                {/* DATOS LABORALES */}
                <section className="bg-white/70 backdrop-blur rounded-2xl shadow p-5">
                    <h2 className="text-violet-700 font-semibold mb-4">Datos Laborales</h2>

                    <div className="mb-4">
                        <label className="block text-sm text-gray-600 mb-1">Obra Social que recibe *</label>
                        <select className="w-full md:w-1/2 border rounded-xl px-3 py-2" value={form.obraSocialId} onChange={e => set('obraSocialId', e.target.value)}>
                            <option value="">Seleccionar…</option>
                            {obras.map(o => <option key={o.id} value={o.id}>{o.nombre}</option>)}
                        </select>
                        {errors._obra && <p className="text-xs text-red-600 mt-1">{errors._obra}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm text-gray-600 mb-2">Servicios de Prestación *</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {prestaciones.map(p => (
                                <label key={p.id} className="flex items-center gap-2 border rounded-xl px-3 py-2 hover:bg-gray-50">
                                    <input type="checkbox" checked={form.prestacionIds.includes(p.id)} onChange={() => togglePrestacion(p.id)} />
                                    <span>{p.nombre}</span>
                                </label>
                            ))}
                        </div>
                        {errors._prestaciones && <p className="text-xs text-red-600 mt-1">{errors._prestaciones}</p>}
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-2">Horario de Trabajo *</label>
                        <div className="space-y-2">
                            {form.horario.map((h, i) => (
                                <div key={h.day} className="flex items-center gap-3 border rounded-xl px-3 py-2">
                                    <label className="flex items-center gap-2 w-40">
                                        <input type="checkbox" checked={h.enabled} onChange={e => toggleDia(i, e.target.checked)} />
                                        <span className="font-medium">{h.day}</span>
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <TimeField
                                            aria-label="Hora inicio"
                                            value={h.start}
                                            onChange={(v) => setHora(i, "start", v)}
                                            disabled={!h.enabled}
                                        />
                                        <span>—</span>
                                        <TimeField
                                            aria-label="Hora fin"
                                            value={h.end}
                                            onChange={(v) => setHora(i, "end", v)}
                                            disabled={!h.enabled}
                                        />

                                    </div>
                                </div>
                            ))}
                        </div>
                        {errors._horario && <p className="text-xs text-red-600 mt-2">{errors._horario}</p>}
                    </div>
                </section>

                {/* USUARIO MÉDICO (opcional) */}
                <section className="bg-white/70 backdrop-blur rounded-2xl shadow p-5">
                    <h3 className="text-violet-700 font-semibold mb-3">Usuario médico</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Usuario *</label>
                            <input
                                className="w-full border rounded-xl px-3 py-2 bg-gray-50"
                                value={form.username}
                                readOnly
                                title="Se genera automáticamente desde el email"
                            />
                            {errors.username && <p className="text-xs text-red-600 mt-1">{errors.username}</p>}
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Email *</label>
                            <input
                                className="w-full border rounded-xl px-3 py-2"
                                value={form.userEmail}
                                onChange={(e) => {
                                    const v = e.target.value;
                                    set('userEmail', v);
                                    set('email', v); // si querés que siempre estén en sync
                                    const uname = v.split('@')[0].replace(/[^A-Za-z0-9_]/g, '').slice(0, 11);
                                    set('username', uname);
                                }}
                            />
                            {errors.userEmail && <p className="text-xs text-red-600 mt-1">{errors.userEmail}</p>}
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Contraseña *</label>
                            <input
                                className="w-full border rounded-xl px-3 py-2"
                                type="password"
                                value={form.password}
                                onChange={(e) => set('password', e.target.value)}
                                placeholder="mínimo 6 caracteres"
                            />
                            {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password}</p>}
                        </div>
                    </div>
                </section>


                {/* RESUMEN DE ERRORES (opcional) */}
                {form && Object.keys(errors).length > 0 && (
                    <div className="mb-3 rounded-xl bg-yellow-50 border border-yellow-200 px-4 py-3 text-sm text-yellow-800">
                        <p className="font-medium mb-1">Revisá estos puntos antes de guardar:</p>
                        <ul className="list-disc ml-5 space-y-1">
                            {Object.entries(errors).map(([k, v]) => v && (
                                <li key={k}>{v}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* FOOTER */}
                <div className="flex items-center justify-end gap-3">
                    <Link href="/profesionales" className="px-4 py-2 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 hover:from-gray-300 hover:to-gray-400 shadow">
                        Cancelar
                    </Link>
                    <button
                        type="submit"
                        disabled={!canSubmit}
                        className={`px-5 py-2 rounded-xl shadow text-white ${!canSubmit ? 'bg-violet-300 cursor-not-allowed'
                            : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700'
                            }`}
                    >
                        {saving ? 'Guardando…' : 'Guardar'}
                    </button>
                </div>
            </form>

            {serverMsg && (
                <div className={`mt-3 text-sm ${serverMsg.includes('Error') ? 'text-red-700' : 'text-green-700'}`}>
                    {serverMsg}
                </div>
            )}
        </div>
    );
}
