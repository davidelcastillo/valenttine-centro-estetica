"use client"

import { useState } from "react"

interface Patient {
  id: string
  patientId: string
  registrationDate: string
  fullName: string
  lastName: string
  dni: string
  birthDate: string
  gender: "Femenino" | "Masculino" | "Otro"
  maritalStatus: "Soltero/a" | "Casado/a" | "Divorciado/a" | "Viudo/a" | "Unión Libre / Convivencia"
  country: string
  province: string
  locality: string
  neighborhood: string
  street: string
  streetNumber: string
  phone: string
  email: string
  healthInsurance: string
  memberNumber: string
  plan: string
  status: "Activo" | "Inactivo" | "Suspendido"
  registeredBy: string
  history: HistoryEvent[]
}

interface HistoryEvent {
  date: string
  action: string
  user: string
}

export default function PatientManagementModule() {
  const [currentView, setCurrentView] = useState<"list" | "create" | "detail">("list")
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [showSidebar, setShowSidebar] = useState(false)

  const [newPatientForm, setNewPatientForm] = useState({
    fullName: "",
    lastName: "",
    dni: "",
    birthDate: "",
    gender: "",
    maritalStatus: "",
    country: "",
    province: "",
    locality: "",
    neighborhood: "",
    street: "",
    streetNumber: "",
    phone: "",
    email: "",
    healthInsurance: "",
    memberNumber: "",
    plan: "",
  })

  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const patients: Patient[] = [
    {
      id: "1",
      patientId: "PAC-001",
      registrationDate: "2024-01-10 14:30:00",
      fullName: "María Elena",
      lastName: "González Rodríguez",
      dni: "12345678",
      birthDate: "15/03/1985",
      gender: "Femenino",
      maritalStatus: "Casado/a",
      country: "Argentina",
      province: "Buenos Aires",
      locality: "La Plata",
      neighborhood: "Centro",
      street: "Calle 7",
      streetNumber: "1234",
      phone: "(221)4567890",
      email: "maria.gonzalez@email.com",
      healthInsurance: "Swiss Medical",
      memberNumber: "123456789",
      plan: "210",
      status: "Activo",
      registeredBy: "Ana García",
      history: [{ date: "2024-01-10 14:30", action: "Paciente registrado", user: "Ana García" }],
    },
    {
      id: "2",
      patientId: "PAC-002",
      registrationDate: "2024-01-12 09:15:00",
      fullName: "Carlos Alberto",
      lastName: "Martínez López",
      dni: "87654321",
      birthDate: "22/07/1978",
      gender: "Masculino",
      maritalStatus: "Soltero/a",
      country: "Argentina",
      province: "Córdoba",
      locality: "Córdoba Capital",
      neighborhood: "Nueva Córdoba",
      street: "Av. Hipólito Yrigoyen",
      streetNumber: "567",
      phone: "(351)2345678",
      email: "carlos.martinez@email.com",
      healthInsurance: "Osde",
      memberNumber: "987654321",
      plan: "450",
      status: "Activo",
      registeredBy: "Carlos López",
      history: [
        { date: "2024-01-12 09:15", action: "Paciente registrado", user: "Carlos López" },
        { date: "2024-01-15 16:45", action: "Datos actualizados", user: "María Rodríguez" },
      ],
    },
    {
      id: "3",
      patientId: "PAC-003",
      registrationDate: "2023-12-28 11:20:00",
      fullName: "Ana Sofía",
      lastName: "Fernández Castro",
      dni: "11223344",
      birthDate: "10/11/1992",
      gender: "Femenino",
      maritalStatus: "Divorciado/a",
      country: "Argentina",
      province: "Santa Fe",
      locality: "Rosario",
      neighborhood: "Centro",
      street: "San Martín",
      streetNumber: "890",
      phone: "(341)6789012",
      email: "ana.fernandez@email.com",
      healthInsurance: "Federada",
      memberNumber: "456789123",
      plan: "300",
      status: "Suspendido",
      registeredBy: "María Rodríguez",
      history: [
        { date: "2023-12-28 11:20", action: "Paciente registrado", user: "María Rodríguez" },
        { date: "2024-01-20 10:30", action: "Estado cambiado a Suspendido", user: "Ana García" },
      ],
    },
  ]

  const provinces = [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán",
  ]

  const healthInsurances = ["Swiss Medical", "Osde", "Federada", "Omint", "Sacor Salud", "Ospit", "Ospe"]

  const totalPatients = patients.length
  const activePatients = patients.filter((p) => p.status === "Activo").length
  const inactivePatients = patients.filter((p) => p.status === "Inactivo").length
  const suspendedPatients = patients.filter((p) => p.status === "Suspendido").length

  const validateForm = () => {
    const errors: Record<string, string> = {}

    // Validaciones de datos personales
    if (!newPatientForm.fullName.trim()) {
      errors.fullName = "El nombre completo es obligatorio"
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(newPatientForm.fullName)) {
      errors.fullName = "Solo se permiten caracteres alfabéticos"
    }

    if (!newPatientForm.lastName.trim()) {
      errors.lastName = "El apellido completo es obligatorio"
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(newPatientForm.lastName)) {
      errors.lastName = "Solo se permiten caracteres alfabéticos"
    }

    if (!newPatientForm.dni.trim()) {
      errors.dni = "El DNI es obligatorio"
    } else if (!/^\d{8}$/.test(newPatientForm.dni)) {
      errors.dni = "Formato Incorrecto"
    } else if (patients.some((p) => p.dni === newPatientForm.dni)) {
      errors.dni = "Paciente registrado en el sistema"
    }

    if (!newPatientForm.birthDate.trim()) {
      errors.birthDate = "La fecha de nacimiento es obligatoria"
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(newPatientForm.birthDate)) {
      errors.birthDate = "Formato debe ser DD/MM/AAAA"
    }

    if (!newPatientForm.gender) {
      errors.gender = "El género es obligatorio"
    }

    if (!newPatientForm.maritalStatus) {
      errors.maritalStatus = "El estado civil es obligatorio"
    }

    // Validaciones de contacto
    if (!newPatientForm.country.trim()) {
      errors.country = "El país es obligatorio"
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(newPatientForm.country)) {
      errors.country = "No se permiten números ni caracteres alfanuméricos"
    }

    if (!newPatientForm.province) {
      errors.province = "La provincia es obligatoria"
    }

    if (!newPatientForm.locality.trim()) {
      errors.locality = "La localidad es obligatoria"
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(newPatientForm.locality)) {
      errors.locality = "No se permiten números ni caracteres alfanuméricos"
    }

    if (!newPatientForm.neighborhood.trim()) {
      errors.neighborhood = "El barrio es obligatorio"
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(newPatientForm.neighborhood)) {
      errors.neighborhood = "No se permiten números ni caracteres alfanuméricos"
    }

    if (!newPatientForm.street.trim()) {
      errors.street = "La calle es obligatoria"
    }

    if (!newPatientForm.streetNumber.trim()) {
      errors.streetNumber = "El número es obligatorio"
    } else if (!/^\d+$/.test(newPatientForm.streetNumber)) {
      errors.streetNumber = "Solo se permiten dígitos"
    }

    if (!newPatientForm.phone.trim()) {
      errors.phone = "El número de celular es obligatorio"
    } else if (!/^$$\d{3}$$\d{7}$/.test(newPatientForm.phone)) {
      errors.phone = "Número inválido, revise el formato"
    }

    if (!newPatientForm.email.trim()) {
      errors.email = "El correo electrónico es obligatorio"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newPatientForm.email)) {
      errors.email = "Correo electrónico no válido"
    }

    // Validaciones administrativas
    if (!newPatientForm.healthInsurance) {
      errors.healthInsurance = "La obra social es obligatoria"
    }

    if (!newPatientForm.memberNumber.trim()) {
      errors.memberNumber = "El número de socio es obligatorio"
    } else if (!/^\d+$/.test(newPatientForm.memberNumber)) {
      errors.memberNumber = "Solo se permiten dígitos"
    }

    if (!newPatientForm.plan.trim()) {
      errors.plan = "El plan es obligatorio"
    } else if (!/^\d+$/.test(newPatientForm.plan)) {
      errors.plan = "Solo se permiten dígitos"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isFormValid = () => {
    return (
      Object.values(newPatientForm).every((value) => value.toString().trim() !== "") &&
      Object.keys(formErrors).length === 0
    )
  }

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 3) {
      return `(${numbers}`
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 3)})${numbers.slice(3)}`
    }
    return `(${numbers.slice(0, 3)})${numbers.slice(3, 10)}`
  }

  const renderCreateView = () => (
    <div className="screen-transition">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <button onClick={() => setCurrentView("list")} className="text-purple-600 hover:text-purple-800">
          Gestión de Pacientes
        </button>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-purple-500 font-medium">Registrar nuevo paciente</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
            Registrar Nuevo Paciente
          </h2>
          <p className="text-gray-600 text-lg">Complete la información del paciente</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Datos Personales */}
        <div className="glass-effect rounded-2xl p-8 bg-white/95 backdrop-blur-sm border border-white/20">
          <h3 className="text-2xl font-bold text-purple-800 mb-6">Datos Personales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo *</label>
              <input
                type="text"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.fullName ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.fullName}
                onChange={(e) => {
                  setNewPatientForm({ ...newPatientForm, fullName: e.target.value })
                  if (formErrors.fullName) {
                    const newErrors = { ...formErrors }
                    delete newErrors.fullName
                    setFormErrors(newErrors)
                  }
                }}
                placeholder="Ingrese el nombre completo"
              />
              {formErrors.fullName && <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Apellido Completo *</label>
              <input
                type="text"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.lastName ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.lastName}
                onChange={(e) => {
                  setNewPatientForm({ ...newPatientForm, lastName: e.target.value })
                  if (formErrors.lastName) {
                    const newErrors = { ...formErrors }
                    delete newErrors.lastName
                    setFormErrors(newErrors)
                  }
                }}
                placeholder="Ingrese el apellido completo"
              />
              {formErrors.lastName && <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">DNI *</label>
              <input
                type="text"
                maxLength={8}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.dni ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.dni}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "")
                  setNewPatientForm({ ...newPatientForm, dni: value })
                  if (formErrors.dni) {
                    const newErrors = { ...formErrors }
                    delete newErrors.dni
                    setFormErrors(newErrors)
                  }
                }}
                placeholder="12345678"
              />
              {formErrors.dni && <p className="text-red-500 text-sm mt-1">{formErrors.dni}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Nacimiento *</label>
              <input
                type="text"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.birthDate ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.birthDate}
                onChange={(e) => {
                  setNewPatientForm({ ...newPatientForm, birthDate: e.target.value })
                  if (formErrors.birthDate) {
                    const newErrors = { ...formErrors }
                    delete newErrors.birthDate
                    setFormErrors(newErrors)
                  }
                }}
                placeholder="DD/MM/AAAA"
              />
              {formErrors.birthDate && <p className="text-red-500 text-sm mt-1">{formErrors.birthDate}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Género *</label>
              <select
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.gender ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.gender}
                onChange={(e) => {
                  setNewPatientForm({ ...newPatientForm, gender: e.target.value })
                  if (formErrors.gender) {
                    const newErrors = { ...formErrors }
                    delete newErrors.gender
                    setFormErrors(newErrors)
                  }
                }}
              >
                <option value="">Seleccionar género</option>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
                <option value="Otro">Otro</option>
              </select>
              {formErrors.gender && <p className="text-red-500 text-sm mt-1">{formErrors.gender}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Estado Civil *</label>
              <select
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.maritalStatus ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.maritalStatus}
                onChange={(e) => {
                  setNewPatientForm({ ...newPatientForm, maritalStatus: e.target.value })
                  if (formErrors.maritalStatus) {
                    const newErrors = { ...formErrors }
                    delete newErrors.maritalStatus
                    setFormErrors(newErrors)
                  }
                }}
              >
                <option value="">Seleccionar estado civil</option>
                <option value="Soltero/a">Soltero/a</option>
                <option value="Casado/a">Casado/a</option>
                <option value="Divorciado/a">Divorciado/a</option>
                <option value="Viudo/a">Viudo/a</option>
                <option value="Unión Libre / Convivencia">Unión Libre / Convivencia</option>
              </select>
              {formErrors.maritalStatus && <p className="text-red-500 text-sm mt-1">{formErrors.maritalStatus}</p>}
            </div>
          </div>
        </div>

        {/* Datos de Contacto */}
        <div className="glass-effect rounded-2xl p-8 bg-white/95 backdrop-blur-sm border border-white/20">
          <h3 className="text-2xl font-bold text-purple-800 mb-6">Datos de Contacto</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">País *</label>
              <input
                type="text"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.country ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.country}
                onChange={(e) => {
                  setNewPatientForm({ ...newPatientForm, country: e.target.value })
                  if (formErrors.country) {
                    const newErrors = { ...formErrors }
                    delete newErrors.country
                    setFormErrors(newErrors)
                  }
                }}
                placeholder="Argentina"
              />
              {formErrors.country && <p className="text-red-500 text-sm mt-1">{formErrors.country}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Provincia *</label>
              <select
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.province ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.province}
                onChange={(e) => {
                  setNewPatientForm({ ...newPatientForm, province: e.target.value })
                  if (formErrors.province) {
                    const newErrors = { ...formErrors }
                    delete newErrors.province
                    setFormErrors(newErrors)
                  }
                }}
              >
                <option value="">Seleccionar provincia</option>
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
              {formErrors.province && <p className="text-red-500 text-sm mt-1">{formErrors.province}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Localidad *</label>
              <input
                type="text"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.locality ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.locality}
                onChange={(e) => {
                  setNewPatientForm({ ...newPatientForm, locality: e.target.value })
                  if (formErrors.locality) {
                    const newErrors = { ...formErrors }
                    delete newErrors.locality
                    setFormErrors(newErrors)
                  }
                }}
                placeholder="Ingrese la localidad"
              />
              {formErrors.locality && <p className="text-red-500 text-sm mt-1">{formErrors.locality}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Barrio *</label>
              <input
                type="text"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.neighborhood ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.neighborhood}
                onChange={(e) => {
                  setNewPatientForm({ ...newPatientForm, neighborhood: e.target.value })
                  if (formErrors.neighborhood) {
                    const newErrors = { ...formErrors }
                    delete newErrors.neighborhood
                    setFormErrors(newErrors)
                  }
                }}
                placeholder="Ingrese el barrio"
              />
              {formErrors.neighborhood && <p className="text-red-500 text-sm mt-1">{formErrors.neighborhood}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Calle *</label>
              <input
                type="text"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.street ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.street}
                onChange={(e) => {
                  setNewPatientForm({ ...newPatientForm, street: e.target.value })
                  if (formErrors.street) {
                    const newErrors = { ...formErrors }
                    delete newErrors.street
                    setFormErrors(newErrors)
                  }
                }}
                placeholder="Ingrese la calle"
              />
              {formErrors.street && <p className="text-red-500 text-sm mt-1">{formErrors.street}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Número *</label>
              <input
                type="text"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.streetNumber ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.streetNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "")
                  setNewPatientForm({ ...newPatientForm, streetNumber: value })
                  if (formErrors.streetNumber) {
                    const newErrors = { ...formErrors }
                    delete newErrors.streetNumber
                    setFormErrors(newErrors)
                  }
                }}
                placeholder="1234"
              />
              {formErrors.streetNumber && <p className="text-red-500 text-sm mt-1">{formErrors.streetNumber}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Número de Celular *</label>
              <input
                type="text"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.phone ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.phone}
                onChange={(e) => {
                  const formatted = formatPhoneNumber(e.target.value)
                  setNewPatientForm({ ...newPatientForm, phone: formatted })
                  if (formErrors.phone) {
                    const newErrors = { ...formErrors }
                    delete newErrors.phone
                    setFormErrors(newErrors)
                  }
                }}
                placeholder="(387)4624673"
              />
              {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
              {newPatientForm.phone && /^$$\d{3}$$\d{7}$/.test(newPatientForm.phone) && (
                <p className="text-green-600 text-sm mt-1">Número válido: {newPatientForm.phone}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico *</label>
              <input
                type="email"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.email}
                onChange={(e) => {
                  setNewPatientForm({ ...newPatientForm, email: e.target.value })
                  if (formErrors.email) {
                    const newErrors = { ...formErrors }
                    delete newErrors.email
                    setFormErrors(newErrors)
                  }
                }}
                placeholder="usuario@dominio.com"
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
            </div>
          </div>
        </div>

        {/* Datos Administrativos */}
        <div className="glass-effect rounded-2xl p-8 bg-white/95 backdrop-blur-sm border border-white/20">
          <h3 className="text-2xl font-bold text-purple-800 mb-6">Datos Administrativos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Obra Social *</label>
              <select
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.healthInsurance ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.healthInsurance}
                onChange={(e) => {
                  setNewPatientForm({ ...newPatientForm, healthInsurance: e.target.value })
                  if (formErrors.healthInsurance) {
                    const newErrors = { ...formErrors }
                    delete newErrors.healthInsurance
                    setFormErrors(newErrors)
                  }
                }}
              >
                <option value="">Seleccionar obra social</option>
                {healthInsurances.map((insurance) => (
                  <option key={insurance} value={insurance}>
                    {insurance}
                  </option>
                ))}
              </select>
              {formErrors.healthInsurance && <p className="text-red-500 text-sm mt-1">{formErrors.healthInsurance}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Número de Socio *</label>
              <input
                type="text"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.memberNumber ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.memberNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "")
                  setNewPatientForm({ ...newPatientForm, memberNumber: value })
                  if (formErrors.memberNumber) {
                    const newErrors = { ...formErrors }
                    delete newErrors.memberNumber
                    setFormErrors(newErrors)
                  }
                }}
                placeholder="123456789"
              />
              {formErrors.memberNumber && <p className="text-red-500 text-sm mt-1">{formErrors.memberNumber}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Plan *</label>
              <input
                type="text"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.plan ? "border-red-500" : "border-gray-300"
                }`}
                value={newPatientForm.plan}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "")
                  setNewPatientForm({ ...newPatientForm, plan: value })
                  if (formErrors.plan) {
                    const newErrors = { ...formErrors }
                    delete newErrors.plan
                    setFormErrors(newErrors)
                  }
                }}
                placeholder="210"
              />
              {formErrors.plan && <p className="text-red-500 text-sm mt-1">{formErrors.plan}</p>}
            </div>
          </div>

          <div className="flex justify-between pt-6 border-t mt-8">
            <button
              onClick={() => setCurrentView("list")}
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                if (validateForm()) {
                  // Aquí se guardaría el paciente
                  setCurrentView("list")
                }
              }}
              className={`px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all ${
                isFormValid()
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-gray-400 text-gray-600 cursor-not-allowed"
              }`}
              disabled={!isFormValid()}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderListView = () => (
    <div className="screen-transition">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <span>Inicio</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-purple-500 font-medium">Gestión de Pacientes</span>
      </div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
            Gestión de Pacientes
          </h2>
          <p className="text-gray-600 text-lg">Administra y controla el registro de pacientes</p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => setCurrentView("create")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>Registrar nuevo paciente</span>
          </button>
        </div>
      </div>

      {/* Key Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-effect rounded-2xl p-6 card-hover bg-white/95 backdrop-blur-sm border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Pacientes Activos</p>
              <p className="text-3xl font-bold text-green-600">{activePatients}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-300 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6 card-hover bg-white/95 backdrop-blur-sm border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Pacientes Inactivos</p>
              <p className="text-3xl font-bold text-gray-600">{inactivePatients}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6 card-hover bg-white/95 backdrop-blur-sm border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Pacientes Suspendidos</p>
              <p className="text-3xl font-bold text-red-600">{suspendedPatients}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="glass-effect rounded-2xl p-8 mb-8 card-hover bg-white/95 backdrop-blur-sm border border-white/20">
        <h3 className="text-xl font-semibold text-purple-800 mb-6">Filtros de Búsqueda</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">DNI</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="12345678"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Nacimiento</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="DD/MM/AAAA"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Nombre y apellido"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
            Limpiar Filtros
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
            Buscar Pacientes
          </button>
        </div>
      </div>

      {/* Patients Table */}
      <div className="glass-effect rounded-2xl overflow-hidden card-hover bg-white/95 backdrop-blur-sm border border-white/20">
        <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-6">
          <h3 className="text-xl font-bold text-white">Lista de Pacientes</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-purple-800">ID Paciente</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-purple-800">Nombre Completo</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-purple-800">DNI</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-purple-800">Fecha de Nacimiento</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-purple-800">Obra Social</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-purple-800">Estado</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-purple-800">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={patient.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 font-semibold text-purple-800">{patient.patientId}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {patient.fullName} {patient.lastName}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{patient.dni}</td>
                  <td className="px-6 py-4 text-gray-700">{patient.birthDate}</td>
                  <td className="px-6 py-4 text-gray-700">{patient.healthInsurance}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        patient.status === "Activo"
                          ? "bg-green-100 text-green-800"
                          : patient.status === "Inactivo"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setSelectedPatient(patient)
                          setCurrentView("detail")
                        }}
                        className="bg-purple-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-purple-600 transition-colors"
                      >
                        Ver
                      </button>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                        Editar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderDetailView = () => {
    if (!selectedPatient) return null

    return (
      <div className="screen-transition">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <button onClick={() => setCurrentView("list")} className="text-purple-600 hover:text-purple-800">
            Gestión de Pacientes
          </button>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-purple-500 font-medium">Detalle {selectedPatient.patientId}</span>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
              Paciente {selectedPatient.patientId}
            </h2>
            <p className="text-gray-600 text-lg">Información completa del paciente</p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentView("list")}
              className="bg-gradient-to-r from-gray-400 to-gray-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all font-semibold"
            >
              Volver
            </button>
          </div>
        </div>

        {/* Patient Details */}
        <div className="space-y-8">
          <div className="glass-effect rounded-2xl p-8 bg-white/95 backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-bold text-purple-800 mb-6">Información del Paciente</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Nombre Completo</label>
                  <p className="text-lg font-semibold text-gray-900">
                    {selectedPatient.fullName} {selectedPatient.lastName}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">DNI</label>
                  <p className="text-lg font-semibold text-gray-900">{selectedPatient.dni}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Fecha de Nacimiento</label>
                  <p className="text-lg font-semibold text-gray-900">{selectedPatient.birthDate}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Género</label>
                  <p className="text-lg font-semibold text-gray-900">{selectedPatient.gender}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Estado Civil</label>
                  <p className="text-lg font-semibold text-gray-900">{selectedPatient.maritalStatus}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Estado</label>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      selectedPatient.status === "Activo"
                        ? "bg-green-100 text-green-800"
                        : selectedPatient.status === "Inactivo"
                          ? "bg-gray-100 text-gray-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {selectedPatient.status}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Teléfono</label>
                  <p className="text-lg font-semibold text-gray-900">{selectedPatient.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Email</label>
                  <p className="text-lg font-semibold text-gray-900">{selectedPatient.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Obra Social</label>
                  <p className="text-lg font-semibold text-gray-900">{selectedPatient.healthInsurance}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Número de Socio</label>
                  <p className="text-lg font-semibold text-gray-900">{selectedPatient.memberNumber}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-8 bg-white/95 backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-bold text-purple-800 mb-6">Dirección</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">País</label>
                  <p className="text-lg font-semibold text-gray-900">{selectedPatient.country}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Provincia</label>
                  <p className="text-lg font-semibold text-gray-900">{selectedPatient.province}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Localidad</label>
                  <p className="text-lg font-semibold text-gray-900">{selectedPatient.locality}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Barrio</label>
                  <p className="text-lg font-semibold text-gray-900">{selectedPatient.neighborhood}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Dirección</label>
                  <p className="text-lg font-semibold text-gray-900">
                    {selectedPatient.street} {selectedPatient.streetNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-8 bg-white/95 backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-bold text-purple-800 mb-6">Historial de Movimientos</h3>
            <div className="space-y-4">
              {selectedPatient.history.map((event, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{event.action}</p>
                    <p className="text-sm text-gray-500">
                      Por: {event.user} - {event.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 p-8">
      {showSidebar && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>}

      <main className="container mx-auto">
        {currentView === "list" && renderListView()}
        {currentView === "create" && renderCreateView()}
        {currentView === "detail" && renderDetailView()}
      </main>
    </div>
  )
}
