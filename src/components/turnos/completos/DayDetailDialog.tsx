// src/components/turnos/completos/DayDetailDialog.tsx
'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

type Props = {
  open: boolean;
  dateISO: string;              // 'YYYY-MM-DD'
  onOpenChange: (open: boolean) => void;
};

// Maqueta de datos para diseño (podés borrar cuando conectes)
const MOCK: Record<string, any[]> = {
  '2025-12-01': [
    { id: 1, time: '09:00', patient: 'Ana Pérez', doctor: 'Dr. García', status: 'registrado' },
    { id: 2, time: '10:30', patient: 'Carlos Ruiz', doctor: 'Dra. Martínez', status: 'en-espera' },
    { id: 3, time: '14:00', patient: 'María González', doctor: 'Dr. López', status: 'atendido' },
    { id: 4, time: '15:30', patient: 'Juan Silva', doctor: 'Dra. Rodríguez', status: 'en-consulta' },
  ],
};

const estados: Record<string, { bg: string; text: string; label: string }> = {
  'registrado': { bg: 'bg-[#D8B6F5]', text: 'text-[#301247]', label: 'Registrado' },
  'en-espera': { bg: 'bg-yellow-100', text: 'text-yellow-900', label: 'En Espera' },
  'en-consulta': { bg: 'bg-cyan-100', text: 'text-cyan-900', label: 'En Consulta' },
  'atendido': { bg: 'bg-green-100', text: 'text-green-900', label: 'Atendido' },
};

export default function DayDetailDialog({ open, dateISO, onOpenChange }: Props) {
  const [status, setStatus] = React.useState('');
  const [doctor, setDoctor] = React.useState('');
  const [patient, setPatient] = React.useState('');

  const list = React.useMemo(() => MOCK[dateISO] ?? [], [dateISO]);
  const doctores = React.useMemo(
    () => Array.from(new Set(list.map((x) => x.doctor))),
    [list]
  );
  const pacientes = React.useMemo(
    () => Array.from(new Set(list.map((x) => x.patient))),
    [list]
  );

  const filtrados = list.filter((x) =>
    (!status || x.status === status) &&
    (!doctor || x.doctor === doctor) &&
    (!patient || x.patient === patient)
  );

  const fechaBonita = React.useMemo(() => {
    try {
      const [y, m, d] = dateISO.split('-').map(Number);
      return format(new Date(y, m - 1, d), "d 'de' MMMM, yyyy", { locale: es });
    } catch {
      return dateISO;
    }
  }, [dateISO]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl overflow-hidden rounded-2xl p-0 bg-gradient-to-br from-white to-[#f8f9ff]">
        <div className="bg-gradient-to-r from-[#301247] via-[#6b2c7a] to-[#AC5BF3] px-6 py-5 text-white">
          <DialogHeader className="p-0">
            <DialogTitle className="text-xl font-bold">
              Turnos del {fechaBonita}
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap items-center justify-center gap-4 border-b border-[#AC5BF3]/20 bg-gradient-to-r from-[#f8f9ff] via-[#eee7f7] to-[#E7D5F9] p-4">
          <div className="flex flex-col">
            <label className="text-xs font-semibold uppercase tracking-wide text-[#301247]">Estado</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="min-w-[170px] rounded-xl border-0 bg-white px-3 py-2 shadow-sm outline-none ring-1 ring-[#AC5BF3]/30 focus:ring-2 focus:ring-[#AC5BF3]"
            >
              <option value="">Todos</option>
              <option value="registrado">Registrado</option>
              <option value="en-espera">En Espera</option>
              <option value="en-consulta">En Consulta</option>
              <option value="atendido">Atendido</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-semibold uppercase tracking-wide text-[#301247]">Profesional</label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="min-w-[170px] rounded-xl border-0 bg-white px-3 py-2 shadow-sm outline-none ring-1 ring-[#AC5BF3]/30 focus:ring-2 focus:ring-[#AC5BF3]"
            >
              <option value="">Todos</option>
              {doctores.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-semibold uppercase tracking-wide text-[#301247]">Paciente</label>
            <select
              value={patient}
              onChange={(e) => setPatient(e.target.value)}
              className="min-w-[170px] rounded-xl border-0 bg-white px-3 py-2 shadow-sm outline-none ring-1 ring-[#AC5BF3]/30 focus:ring-2 focus:ring-[#AC5BF3]"
            >
              <option value="">Todos</option>
              {pacientes.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>

        {/* Contenido */}
        <div className="max-h-[65vh] overflow-y-auto p-5">
          {filtrados.length === 0 ? (
            <div className="py-16 text-center text-sm italic text-gray-500">
              No hay turnos para esta fecha
            </div>
          ) : (
            <Tabs defaultValue="todos" className="w-full">
              <TabsList className="flex max-w-full flex-wrap gap-2 bg-transparent p-0">
                <TabsTrigger value="todos" className="rounded-full border px-3 py-1 text-xs">
                  Todos
                </TabsTrigger>
                {doctores.map((d) => (
                  <TabsTrigger key={d} value={d} className="rounded-full border px-3 py-1 text-xs">
                    {d}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="todos" className="mt-4 space-y-3">
                {filtrados.map((a, i) => (
                  <div
                    key={a.id}
                    style={{ animationDelay: `${i * 60}ms` }}
                    className="animate-[slideIn_.5s_ease-out_forwards] translate-x-[-40px] opacity-0 rounded-xl border-l-4 border-[#AC5BF3] bg-white p-4 shadow-sm"
                  >
                    <div className="mb-1 text-sm font-semibold text-[#301247]">🕐 {a.time}</div>
                    <div className="text-sm text-[#AC5BF3]">👤 {a.patient}</div>
                    <div className="text-xs text-gray-600">👨‍⚕️ {a.doctor}</div>
                    <div className={`mt-2 inline-block rounded-full px-3 py-1 text-[11px] font-semibold ${estados[a.status]?.bg} ${estados[a.status]?.text}`}>
                      {estados[a.status]?.label ?? a.status}
                    </div>
                  </div>
                ))}
              </TabsContent>

              {doctores.map((d) => {
                const porDoc = filtrados.filter((a) => a.doctor === d);
                return (
                  <TabsContent key={d} value={d} className="mt-4 space-y-3">
                    {porDoc.map((a, i) => (
                      <div
                        key={a.id}
                        style={{ animationDelay: `${i * 60}ms` }}
                        className="animate-[slideIn_.5s_ease-out_forwards] translate-x-[-40px] opacity-0 rounded-xl border-l-4 border-[#AC5BF3] bg-white p-4 shadow-sm"
                      >
                        <div className="mb-1 text-sm font-semibold text-[#301247]">🕐 {a.time}</div>
                        <div className="text-sm text-[#AC5BF3]">👤 {a.patient}</div>
                        <div className="text-xs text-gray-600">👨‍⚕️ {a.doctor}</div>
                        <div className={`mt-2 inline-block rounded-full px-3 py-1 text-[11px] font-semibold ${estados[a.status]?.bg} ${estados[a.status]?.text}`}>
                          {estados[a.status]?.label ?? a.status}
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                );
              })}
            </Tabs>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
