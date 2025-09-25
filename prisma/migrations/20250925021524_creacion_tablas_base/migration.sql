-- CreateEnum
CREATE TYPE "public"."Rol" AS ENUM ('RECEPCIONISTA', 'MEDICO', 'GERENTE');

-- CreateEnum
CREATE TYPE "public"."Genero" AS ENUM ('FEMENINO', 'MASCULINO', 'OTRO');

-- CreateEnum
CREATE TYPE "public"."EstadoCivil" AS ENUM ('SOLTERO', 'CASADO', 'DIVORCIADO', 'VIUDO', 'UNION_LIBRE');

-- CreateEnum
CREATE TYPE "public"."EstadoPaciente" AS ENUM ('ACTIVO', 'INACTIVO', 'SUSPENDIDO', 'FALLECIDO');

-- CreateEnum
CREATE TYPE "public"."EstadoTurno" AS ENUM ('PENDIENTE', 'CONFIRMADO', 'CANCELADO', 'COMPLETADO');

-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(11) NOT NULL,
    "contraseña" VARCHAR(72) NOT NULL,
    "rol" "public"."Rol" NOT NULL,
    "email" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Provincia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Provincia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Localidad" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "provinciaId" INTEGER NOT NULL,

    CONSTRAINT "Localidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ObraSocial" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "ObraSocial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Prestacion" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "Prestacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Paciente" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "creadoPorId" INTEGER,
    "numeroInterno" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "dni" VARCHAR(8) NOT NULL,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "genero" "public"."Genero" NOT NULL,
    "estadoCivil" "public"."EstadoCivil" NOT NULL,
    "pais" TEXT NOT NULL,
    "provinciaId" INTEGER NOT NULL,
    "localidadId" INTEGER NOT NULL,
    "barrio" TEXT,
    "calle" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "celular" VARCHAR(15) NOT NULL,
    "email" TEXT NOT NULL,
    "obraSocialId" INTEGER NOT NULL,
    "numeroSocio" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "estado" "public"."EstadoPaciente" NOT NULL DEFAULT 'ACTIVO',
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Profesional" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "creadoPorId" INTEGER,
    "numeroInterno" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "dni" VARCHAR(8) NOT NULL,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "genero" "public"."Genero" NOT NULL,
    "estadoCivil" "public"."EstadoCivil" NOT NULL,
    "pais" TEXT NOT NULL,
    "provinciaId" INTEGER NOT NULL,
    "localidadId" INTEGER NOT NULL,
    "barrio" TEXT,
    "calle" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "celular" VARCHAR(15) NOT NULL,
    "email" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,
    "universidad" TEXT NOT NULL,
    "fechaGraduacion" TIMESTAMP(3) NOT NULL,
    "horarioTrabajo" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profesional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PrestacionXProfesional" (
    "id" SERIAL NOT NULL,
    "profesionalId" INTEGER NOT NULL,
    "prestacionId" INTEGER NOT NULL,

    CONSTRAINT "PrestacionXProfesional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ObraSocialXProfesional" (
    "id" SERIAL NOT NULL,
    "profesionalId" INTEGER NOT NULL,
    "obraSocialId" INTEGER NOT NULL,

    CONSTRAINT "ObraSocialXProfesional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Turno" (
    "id" SERIAL NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "profesionalId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TEXT NOT NULL,
    "estado" "public"."EstadoTurno" NOT NULL DEFAULT 'PENDIENTE',
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Turno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DetalleTurno" (
    "id" SERIAL NOT NULL,
    "turnoId" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "observacion" TEXT,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DetalleTurno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CentroMedico" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "CentroMedico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "public"."Usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "public"."Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Provincia_nombre_key" ON "public"."Provincia"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "ObraSocial_nombre_key" ON "public"."ObraSocial"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_userId_key" ON "public"."Paciente"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_numeroInterno_key" ON "public"."Paciente"("numeroInterno");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_dni_key" ON "public"."Paciente"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Profesional_userId_key" ON "public"."Profesional"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Profesional_numeroInterno_key" ON "public"."Profesional"("numeroInterno");

-- CreateIndex
CREATE UNIQUE INDEX "Profesional_dni_key" ON "public"."Profesional"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Profesional_email_key" ON "public"."Profesional"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profesional_matricula_key" ON "public"."Profesional"("matricula");

-- AddForeignKey
ALTER TABLE "public"."Localidad" ADD CONSTRAINT "Localidad_provinciaId_fkey" FOREIGN KEY ("provinciaId") REFERENCES "public"."Provincia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Paciente" ADD CONSTRAINT "Paciente_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Paciente" ADD CONSTRAINT "Paciente_creadoPorId_fkey" FOREIGN KEY ("creadoPorId") REFERENCES "public"."Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Paciente" ADD CONSTRAINT "Paciente_provinciaId_fkey" FOREIGN KEY ("provinciaId") REFERENCES "public"."Provincia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Paciente" ADD CONSTRAINT "Paciente_localidadId_fkey" FOREIGN KEY ("localidadId") REFERENCES "public"."Localidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Paciente" ADD CONSTRAINT "Paciente_obraSocialId_fkey" FOREIGN KEY ("obraSocialId") REFERENCES "public"."ObraSocial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Profesional" ADD CONSTRAINT "Profesional_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Profesional" ADD CONSTRAINT "Profesional_creadoPorId_fkey" FOREIGN KEY ("creadoPorId") REFERENCES "public"."Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Profesional" ADD CONSTRAINT "Profesional_provinciaId_fkey" FOREIGN KEY ("provinciaId") REFERENCES "public"."Provincia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Profesional" ADD CONSTRAINT "Profesional_localidadId_fkey" FOREIGN KEY ("localidadId") REFERENCES "public"."Localidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PrestacionXProfesional" ADD CONSTRAINT "PrestacionXProfesional_profesionalId_fkey" FOREIGN KEY ("profesionalId") REFERENCES "public"."Profesional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PrestacionXProfesional" ADD CONSTRAINT "PrestacionXProfesional_prestacionId_fkey" FOREIGN KEY ("prestacionId") REFERENCES "public"."Prestacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ObraSocialXProfesional" ADD CONSTRAINT "ObraSocialXProfesional_profesionalId_fkey" FOREIGN KEY ("profesionalId") REFERENCES "public"."Profesional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ObraSocialXProfesional" ADD CONSTRAINT "ObraSocialXProfesional_obraSocialId_fkey" FOREIGN KEY ("obraSocialId") REFERENCES "public"."ObraSocial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Turno" ADD CONSTRAINT "Turno_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "public"."Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Turno" ADD CONSTRAINT "Turno_profesionalId_fkey" FOREIGN KEY ("profesionalId") REFERENCES "public"."Profesional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DetalleTurno" ADD CONSTRAINT "DetalleTurno_turnoId_fkey" FOREIGN KEY ("turnoId") REFERENCES "public"."Turno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
