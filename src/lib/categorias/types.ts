// src/lib/categorias/types.ts
import { z } from 'zod';

export const ProvinciaDto = z.object({ id: z.number(), nombre: z.string() });
export const LocalidadDto = z.object({ id: z.number(), nombre: z.string(), provinciaId: z.number() });
export const ObraSocialDto = z.object({ id: z.number(), nombre: z.string() });
export const PrestacionDto = z.object({ id: z.number(), nombre: z.string() });

export type Provincia = z.infer<typeof ProvinciaDto>;
export type Localidad = z.infer<typeof LocalidadDto>;
export type ObraSocial = z.infer<typeof ObraSocialDto>;
export type Prestacion = z.infer<typeof PrestacionDto>;
