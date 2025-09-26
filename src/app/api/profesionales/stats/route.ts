import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const total = await prisma.profesional.count();
    // TODO: cuando implementes HU-PRF-03, calcular de verdad cada estado.
    return NextResponse.json({
      activos: total,
      inactivos: 0,
      vacaciones: 0,
      licencia: 0,
    });
  } catch (e) {
    console.error('[GET /api/profesionales/stats]', e);
    return NextResponse.json({ activos: 0, inactivos: 0, vacaciones: 0, licencia: 0 });
  }
}
