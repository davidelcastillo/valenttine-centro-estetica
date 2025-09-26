import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
export const runtime = 'nodejs'
export const revalidate = 0

export async function GET() {
  const provincias = await prisma.provincia.findMany({
    select: { id: true, nombre: true },
    orderBy: { nombre: 'asc' },
  })
  return NextResponse.json(provincias)
}
