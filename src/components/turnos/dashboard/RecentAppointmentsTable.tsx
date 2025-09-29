import { appointments } from "@/data/appointments"

export function RecentAppointmentsTable() {
  return (
    <div className="glass-effect rounded-2xl overflow-hidden card-hover bg-white/95 backdrop-blur-sm border border-white/20">
      <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-6">
        <h3 className="text-xl font-bold text-white">Turnos Recientes</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-purple-800">ID Turno</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-purple-800">Paciente</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-purple-800">Profesional</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-purple-800">Fecha</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-purple-800">Hora</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-purple-800">Estado</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={appointment.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-6 py-4 font-semibold text-purple-800">{appointment.appointmentId}</td>
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">
                    {appointment.patient.fullName} {appointment.patient.lastName}
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {appointment.professional.fullName} {appointment.professional.lastName}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">{appointment.date}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">{appointment.time}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      appointment.status === "Confirmado"
                        ? "bg-green-100 text-green-800"
                        : appointment.status === "Pendiente"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
