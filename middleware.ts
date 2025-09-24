import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJwt, JwtUser } from '@/lib/auth';

// Rutas que requieren auth
const PROTECTED = [
  '/reception',   // dashboard de mesa de entrada
  '/specialist',  // dashboard de especialista
  '/admin'        // etc, las que hagan falta
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Solo filtra si la ruta está en PROTECTED
  if (!PROTECTED.some(p => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const token = req.cookies.get('auth_token')?.value;
  if (!token) {
    const url = new URL('/login', req.url);
    url.searchParams.set('next', pathname);
    return NextResponse.redirect(url);
  }

  const payload = verifyJwt<JwtUser>(token);
  if (!payload) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Gate simple por rol según la ruta
  if (pathname.startsWith('/reception') && payload.role !== 'RECEPTION' && payload.role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }
  if (pathname.startsWith('/specialist') && payload.role !== 'SPECIALIST' && payload.role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  // Pasar claims al request (headers) para Server Components si hace falta
  const res = NextResponse.next();
  res.headers.set('x-user-id', payload.sub);
  res.headers.set('x-user-role', payload.role);
  return res;
}

export const config = {
  matcher: ['/reception/:path*', '/specialist/:path*', '/admin/:path*']
};
