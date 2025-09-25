//cambiar los roles mas adelante por los de la base
export type Role = 'Recepcionista' | 'Médico' | 'Gerente'

export const permissions = {
dashboard: ['Recepcionista','Médico','Gerente'],
pacientes: ['Recepcionista','Gerente'],
profesionales: ['Gerente'],
turnos: ['Recepcionista','Médico','Gerente'],
} as const