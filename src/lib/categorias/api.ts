// src/lib/categorias/api.ts
import { ProvinciaDto, LocalidadDto, ObraSocialDto, PrestacionDto } from './types';
import { NuevoProfesionalInitDto, type NuevoProfesionalInit } from '@/lib/profesionales/types';
import { z } from 'zod';

export async function getProvincias() {
  const r = await fetch('/api/categorias/provincias', { cache: 'no-store' });
  const j = await r.json(); const p = z.array(ProvinciaDto).safeParse(j);
  if (!p.success) throw new Error('Error en provincias'); return p.data;
}

export async function getLocalidades(provinciaId: number) {
  const r = await fetch(`/api/categorias/localidades?provinciaId=${provinciaId}`, { cache: 'no-store' });
  const j = await r.json(); const p = z.array(LocalidadDto).safeParse(j);
  if (!p.success) throw new Error('Error en localidades'); return p.data;
}

export async function getPrestaciones() {
  const r = await fetch('/api/categorias/prestaciones', { cache: 'no-store' });
  const j = await r.json(); const p = z.array(PrestacionDto).safeParse(j);
  if (!p.success) throw new Error('Error en prestaciones'); return p.data;
}

export async function getObrasSociales() {
  const r = await fetch('/api/categorias/obras-sociales', { cache: 'no-store' });
  const j = await r.json(); const p = z.array(ObraSocialDto).safeParse(j);
  if (!p.success) throw new Error('Error en obras sociales'); return p.data;
}

// agregador para la pantalla "nuevo profesional"
export async function getNuevoProfesionalInit(): Promise<NuevoProfesionalInit> {
  const r = await fetch('/api/profesionales/nuevo', { cache: 'no-store' });
  const j = await r.json(); const p = NuevoProfesionalInitDto.safeParse(j);
  if (!p.success) throw new Error('Error en datos iniciales'); return p.data;
}
