import * as z from "zod"

export const newPatientSchema = z.object({
  fullName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  dni: z.string().min(7).max(8),
  birthdate: z.date(),
  gender: z.enum(["masculino", "femenino", "otro"]),
  maritalStatus: z.enum(["soltero", "casado", "divorciado", "viudo"]),
  country: z.string().min(2).max(50),
  province: z.string().optional(),
  locality: z.string().optional(),
  neighborhood: z.string().optional(),
  street: z.string().min(2).max(50),
  streetNumber: z.string().min(1).max(10),
  phone: z.string().min(8).max(15),
  healthInsurance: z.string().optional(),
  affiliateNumber: z.string().optional(),
})

export type NewPatientFormValues = z.infer<typeof newPatientSchema>