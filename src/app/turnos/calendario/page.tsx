// src/components/turnos/completos/TurnosCalendar.tsx
'use client';

import dynamic from 'next/dynamic';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { useEffect } from 'react';

const FullCalendar = dynamic(
  () => import('@fullcalendar/react').then(m => m.default),
  { ssr: false }
) as any;

type DiaResumen = { total: number; porProfesional: { id: number; count: number }[] };
type Props = { resumen?: Record<string, DiaResumen>; onDayClick?: (isoDate: string) => void };

export default function TurnosCalendar({ resumen = {}, onDayClick }: Props) {

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .fc .fc-toolbar-title { font-weight: 700; color: #301247; text-shadow: 0 2px 10px rgba(48,18,71,.08) }
      .fc-theme-standard td, .fc-theme-standard th { border-color: rgba(172,91,243,.25) }
      .fc-daygrid-day-frame { border-radius: 16px; overflow: hidden }
      .fc .fc-daygrid-day-number { font-weight: 600 }
      .fc .fc-button-primary {
        background: linear-gradient(135deg,#AC5BF3 0%,#8b3d98 100%); border: none; border-radius: 12px;
        box-shadow: 0 6px 20px rgba(172,91,243,.24);
      }
      .fc .fc-button-primary:hover {
        background: linear-gradient(135deg,#301247 0%,#4a1a5c 100%); transform: translateY(-1px);
      }
      .fc .fc-col-header-cell-cushion { color: #fff; }
      .fc .fc-col-header-cell {
        background: linear-gradient(135deg,#301247 0%,#4a1a5c 100%);
        border-radius: 12px;
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <div className="space-y-4">
      <FullCalendar
        locales={[esLocale]}
        locale="es"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        firstDay={1}
        fixedWeekCount={false}
        height="auto"
        headerToolbar={{ left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridDay' }}
        // ⛔️ quitado datesSet
        dayMaxEventRows={3}
        events={[]}
        dateClick={(arg: any) => onDayClick?.(arg.dateStr)}
        dayCellContent={(arg: any) => {
          const iso = arg.date.toISOString().slice(0, 10);
          const info = resumen[iso];

          return (
            <div className="relative flex h-full flex-col items-center justify-center rounded-2xl bg-white py-6 transition hover:scale-[1.02] hover:shadow-md">
              <div className="text-base font-semibold text-[#301247]">{arg.date.getDate()}</div>
              {info?.total ? (
                <>
                  <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white shadow-md"
                       style={{ background: '#AC5BF3' }}>
                    {info.total}
                  </div>
                  <div className="mt-2 flex gap-1">
                    {info.porProfesional.slice(0, 3).map(p => (
                      <span key={p.id} className="inline-block h-2 w-2 rounded-full bg-[#301247]" />
                    ))}
                    {info.porProfesional.length > 3 && (
                      <span className="text-[10px] text-[#301247]/70">+{info.porProfesional.length - 3}</span>
                    )}
                  </div>
                </>
              ) : (
                <div className="mt-2 text-[11px] text-gray-400">Sin turnos</div>
              )}
            </div>
          );
        }}
      />
    </div>
  );
}
