// src/app/profesionales/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { listProfesionales, getProfesionalesStats } from '@/lib/profesionales/api';
import type { ProfesionalesList } from '@/lib/profesionales/types';
import { getProvincias } from '@/lib/categorias/api';
import type { Provincia } from '@/lib/categorias/types';

export default function Page() {
  const [data, setData] = useState<ProfesionalesList | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // HU-PRF-04: filtros independientes
  const [dni, setDni] = useState('');
  const [nombre, setNombre] = useState('');
  const [matricula, setMatricula] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [provinciaNombre, setProvinciaNombre] = useState('');

  // Catálogo para autocompletar provincia
  const [provincias, setProvincias] = useState<Provincia[]>([]);

  // HU-PRF-05: tarjetas (stats)
  const [stats, setStats] = useState({ activos: 0, inactivos: 0, vacaciones: 0, licencia: 0 });

  // ==== Validaciones HU-PRF-04 ====
  const dniOk = dni === '' || /^\d{8}$/.test(dni);
  const nombreRegexOk = nombre === '' || /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/.test(nombre);
  const nombreLenOk = nombre === '' || nombre.trim().length >= 3;
  const matriculaOk = matricula === '' || /^\d+$/.test(matricula);
  const provinciaOk = provinciaNombre === '' || /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/.test(provinciaNombre);

  const filtrosValidos = dniOk && nombreRegexOk && nombreLenOk && matriculaOk && provinciaOk;
  const hayAlguno = [dni, nombre, matricula, especialidad, provinciaNombre].some(v => String(v).trim() !== '');

  const refresh = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await listProfesionales({
        dni: dni || undefined,
        nombre: nombre || undefined,
        matricula: matricula || undefined,
        especialidad: especialidad || undefined,
        provinciaNombre: provinciaNombre || undefined,
        page: 1,
        pageSize: 20,
      });
      setData(res);
    } catch (e: any) {
      setError(e?.message ?? 'Error cargando profesionales');
    } finally {
      setLoading(false);
    }
  };

  // Carga inicial de lista, provincias (para autocomplete) y stats
  useEffect(() => {
    refresh();
    (async () => {
      try { setProvincias(await getProvincias()); } catch {}
      try { setStats(await getProfesionalesStats()); } catch {}
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="screen-transition">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <span>Inicio</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-purple-500 font-medium">Gestión de Profesionales</span>
      </div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
            Gestión de Profesionales
          </h2>
          <p className="text-gray-600 text-lg">Administra y controla el registro de profesionales médicos</p>
        </div>
        <div className="flex space-x-4">
          <Link
            href="/profesionales/nuevo"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>Registrar nuevo profesional</span>
          </Link>
        </div>
      </div>

      {/* HU-PRF-05: Tarjetas estado */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Profesionales Activos" value={stats.activos} color="from-green-500 to-green-300" icon="check" />
        <StatCard title="Profesionales Inactivos" value={stats.inactivos} color="from-gray-400 to-gray-600" icon="minus" />
        <StatCard title="De Vacaciones" value={stats.vacaciones} color="from-blue-400 to-blue-600" icon="sun" />
        <StatCard title="Con Licencia Médica" value={stats.licencia} color="from-orange-400 to-orange-600" icon="doc" />
      </div>

      {/* HU-PRF-04: Filtros avanzados */}
      <div className="glass-effect rounded-2xl p-8 mb-8 card-hover">
        <h3 className="text-xl font-semibold text-purple-800 mb-6">Filtros de Búsqueda</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
          {/* DNI */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">DNI</label>
            <input
              value={dni}
              onChange={(e) => setDni(e.target.value.replace(/\D/g, '').slice(0, 8))}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="8 dígitos"
            />
            {dni !== '' && !dniOk && <p className="text-xs text-red-600 mt-1">Formato Incorrecto</p>}
          </div>

          {/* Nombre Completo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="búsqueda parcial"
            />
            {nombre !== '' && !nombreRegexOk && (
              <p className="text-xs text-red-600 mt-1">Solo letras y espacios</p>
            )}
            {nombre !== '' && nombreRegexOk && !nombreLenOk && (
              <p className="text-xs text-red-600 mt-1">Ingrese al menos 3 caracteres para buscar por nombre</p>
            )}
          </div>

          {/* Matrícula */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Número de Matrícula</label>
            <input
              value={matricula}
              onChange={(e) => setMatricula(e.target.value.replace(/\D/g, ''))}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="solo dígitos"
            />
            {matricula !== '' && !matriculaOk && <p className="text-xs text-red-600 mt-1">Solo dígitos</p>}
          </div>

          {/* Especialidad */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Especialidad</label>
            <input
              value={especialidad}
              onChange={(e) => setEspecialidad(e.target.value)}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="una opción"
              list="especialidad-list"
            />
            <datalist id="especialidad-list" />
          </div>

          {/* Provincia (Nombre) con autocompletar */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Provincia (Nombre)</label>
            <input
              value={provinciaNombre}
              onChange={(e) => setProvinciaNombre(e.target.value)}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Ej: Salta, Córdoba…"
              list="prov-list"
            />
            <datalist id="prov-list">
              {provincias.map(p => <option key={p.id} value={p.nombre} />)}
            </datalist>
            {provinciaNombre !== '' && !provinciaOk && (
              <p className="text-xs text-red-600 mt-1">Solo letras y espacios</p>
            )}
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => {
              setDni(''); setNombre(''); setMatricula(''); setEspecialidad(''); setProvinciaNombre('');
              refresh();
            }}
            className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Limpiar Filtros
          </button>
          <button
            onClick={refresh}
            disabled={!hayAlguno || !filtrosValidos}
            className={`px-8 py-3 rounded-xl font-semibold shadow-lg transition-all text-white ${
              (!hayAlguno || !filtrosValidos)
                ? 'bg-purple-300 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700'
            }`}
          >
            Buscar Profesionales
          </button>
        </div>
      </div>

      {/* Tabla */}
      <div className="glass-effect rounded-2xl overflow-hidden card-hover">
        <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-6">
          <h3 className="text-xl font-bold text-white">Lista de Profesionales</h3>
        </div>

        {loading && <div className="p-6">Cargando…</div>}
        {error && <div className="p-6 text-red-600">{error}</div>}

        {!loading && !error && (
          data?.items.length ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <TH>ID Profesional</TH>
                    <TH>Nombre Completo</TH>
                    <TH>Email</TH>
                    <TH>Matrícula</TH>
                    <TH>Especialidad</TH>
                    <TH>Provincia</TH>
                    <TH>Acciones</TH>
                  </tr>
                </thead>
                <tbody>
                  {data.items.map((p, i) => (
                    <tr key={p.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <TD className="font-semibold text-purple-800">{`PROF-${p.id}`}</TD>
                      <TD><div className="font-medium text-gray-900">{p.nombre} {p.apellido}</div></TD>
                      <TD className="font-semibold text-gray-900">{p.email}</TD>
                      <TD className="font-semibold text-gray-900">{p.matricula}</TD>
                      <TD className="text-gray-700">{p.especialidad}</TD>
                      <TD className="text-gray-700">{p.provincia?.nombre ?? '-'}</TD>
                      <TD>
                        <div className="flex space-x-2">
                          <Link
                            href={`/profesionales/${p.id}`}
                            className="bg-purple-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-purple-600 transition-colors"
                          >
                            Ver
                          </Link>
                          <Link
                            href={`/profesionales/${p.id}/editar`}
                            className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors"
                          >
                            Editar
                            </Link>
                          
                        </div>
                      </TD>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-6 text-gray-700">No se encontraron profesionales con los criterios ingresados</div>
          )
        )}
      </div>
    </div>
  );
}

function StatCard({ title, value, color, icon }: { title: string; value: number; color: string; icon: 'check'|'minus'|'sun'|'doc'}) {
  return (
    <div className="glass-effect rounded-2xl p-6 card-hover">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center`}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {icon === 'check' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />}
            {icon === 'minus' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />}
            {icon === 'sun' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />}
            {icon === 'doc' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
          </svg>
        </div>
      </div>
    </div>
  );
}

function TH({ children }: { children: React.ReactNode }) {
  return <th className="px-6 py-4 text-left text-sm font-bold text-purple-800">{children}</th>;
}
function TD({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-6 py-4 ${className}`}>{children}</td>;
}
