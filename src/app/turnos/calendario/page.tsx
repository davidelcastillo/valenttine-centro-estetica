'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import TurnosCalendar from '@/components/turnos/completos/TurnosCalendar';
import DayDetailDialog from '@/components/turnos/completos/DayDetailDialog';
import Legend from '@/components/turnos/completos/Legend';

export default function CalendarioTurnosPage() {
  const [openDay, setOpenDay] = useState<string | null>(null);

  return (
    <div className="min-h-[100svh] bg-gradient-to-br from-[#301247] via-[#6b2c7a] to-[#AC5BF3] p-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-4">
          <Link
            href="/turnos"
            className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-purple-900 shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Turnos
          </Link>
        </div>

        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-sm">Calendario de Turnos</h1>
          <Legend />
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-white to-[#f8f9ff] p-6 shadow-2xl">
          <TurnosCalendar onDayClick={setOpenDay} />
        </div>
      </div>

      <DayDetailDialog
        open={!!openDay}
        dateISO={openDay ?? ''}
        onOpenChange={(o) => !o && setOpenDay(null)}
      />
    </div>
  );
}
