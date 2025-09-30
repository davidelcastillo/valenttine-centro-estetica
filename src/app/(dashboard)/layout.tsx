import AuthShell from '@/components/layout/AuthShell';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <AuthShell>{children}</AuthShell>;
}
