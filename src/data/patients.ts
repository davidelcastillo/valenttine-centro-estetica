import type { Patient } from "@/lib/types"

export const patients: Patient[] = [
  {
    id: "1",
    fullName: "María Elena",
    lastName: "González",
    dni: "12345678",
    phone: "(221)4567890",
    email: "maria.gonzalez@email.com",
    hasAdministrativeBlock: false,
  },
  {
    id: "2",
    fullName: "Carlos Alberto",
    lastName: "Martínez",
    dni: "87654321",
    phone: "(351)2345678",
    email: "carlos.martinez@email.com",
    hasAdministrativeBlock: true,
  },
  {
    id: "3",
    fullName: "Ana Sofía",
    lastName: "Fernández",
    dni: "11223344",
    phone: "(341)6789012",
    email: "ana.fernandez@email.com",
    hasAdministrativeBlock: false,
  },
]
