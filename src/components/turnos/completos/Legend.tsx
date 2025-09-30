// src/components/turnos/completos/Legend.tsx
'use client';

export default function Legend() {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/15 px-4 py-2 text-white ring-1 ring-white/30 backdrop-blur">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-[#AC5BF3]" />
        <span className="text-sm">Cantidad de turnos</span>
      </div>
      <div className="hidden items-center gap-2 md:flex">
        <span className="inline-block h-3 w-3 rounded-full bg-[#301247]" />
        <span className="text-sm">Profesionales (marcadores)</span>
      </div>
      <div className="hidden items-center gap-2 md:flex">
        <span className="inline-block h-3 w-3 rounded-full bg-gray-300" />
        <span className="text-sm">Sin turnos</span>
      </div>
    </div>
  );
}
