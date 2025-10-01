'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import AuthShell from '@/components/layout/AuthShell';

export default function PacientesLayoutClient({ children }: { children: React.ReactNode }) {
  const sp = useSearchParams();
  const view = sp.get('view') ?? 'list';

  const isActive = (v: string) => (view === v) || (v === 'list' && view === 'list');

  return (
    <AuthShell>
      <div className="space-y-6">
        {/* Sub-navegación por query param: list / create */}
        <section className="rounded-2xl p-4 glass-effect border border-white/40">
          <nav className="flex flex-wrap gap-2">
            <Link
              href="/Pacientes?view=list"
              aria-current={isActive('list') ? 'page' : undefined}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition-all
                ${isActive('list')
                  ? 'text-white bg-gradient-to-r from-primary-pink to-primary-blue shadow'
                  : 'text-gray-700 bg-white/70 hover:bg-white border border-gray-200'}`}
            >
              Listado
            </Link>
            <Link
              href="/Pacientes?view=create"
              aria-current={isActive('create') ? 'page' : undefined}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition-all
                ${isActive('create')
                  ? 'text-white bg-gradient-to-r from-primary-pink to-primary-blue shadow'
                  : 'text-gray-700 bg-white/70 hover:bg-white border border-gray-200'}`}
            >
              Nuevo
            </Link>
          </nav>
        </section>

        {children}
      </div>
    </AuthShell>
  );
}
