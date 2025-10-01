'use client';
import { useState, useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';

type Props = {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
  title?: string;
  subtitle?: string;
};

export function Header({
  onToggleSidebar,
  isSidebarOpen = false,
  title = 'ERP Valenttine',
  subtitle = 'Centro de Atención Médica',
}: Props) {
  const { session, logout } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleConfirmLogout = useCallback(() => {
    logout();
    setOpen(false);
    router.replace('/login');
  }, [logout, router]);

  return (
    <header className="glass-effect shadow-lg border-b border-white/40 sticky top-0 z-40">
      <div className="w-full max-w-none px-3 sm:px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Botón hamburguesa */}
          <div className="flex items-center">
            <button
              onClick={onToggleSidebar}
              className={`p-2 rounded-lg hover:bg-white/70 transition-colors ${isSidebarOpen ? 'hamburger-active' : ''}`}
              aria-label="Abrir/Cerrar menú"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <div className="hamburger-line w-6 h-0.5 bg-slate-900" />
                <div className="hamburger-line w-6 h-0.5 bg-slate-900" />
                <div className="hamburger-line w-6 h-0.5 bg-slate-900" />
              </div>
            </button>
          </div>

          {/* Marca */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-pink to-primary-blue flex items-center justify-center logo-glow">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="text-xs text-gray-600 font-medium">{subtitle}</p>
            </div>
          </div>

          {/* Usuario + salir */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-medium text-gray-800">{session?.name}</p>
              <p className="text-sm text-gray-600">{session?.role}</p>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="px-3 py-2 rounded-lg hover:bg-red-50 text-red-600"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>

      <ConfirmDialog
        open={open}
        title="Cerrar sesión"
        description="Seguro queres cerrar la sesión?"
        confirmText="Cerrar sesión"
        cancelText="Cancelar"
        onConfirm={handleConfirmLogout}
        onCancel={() => setOpen(false)}
      />
    </header>
  );
}
