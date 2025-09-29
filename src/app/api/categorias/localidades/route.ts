import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
export const runtime = 'nodejs'
export const revalidate = 0

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const provinciaId = Number(url.searchParams.get('provinciaId') || '0')
  if (!provinciaId) return NextResponse.json([], { status: 200 })

  const localidades = await prisma.localidad.findMany({
    where: { provinciaId },
    select: { id: true, nombre: true, provinciaId: true },
    orderBy: { nombre: 'asc' },
  })
  return NextResponse.json(localidades)
}
