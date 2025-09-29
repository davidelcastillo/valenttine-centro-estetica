"use client"
import { TIME_SLOTS } from "@/lib/constants"
import type { TimeSlot } from "@/lib/types"

interface AppointmentCalendarProps {
  onSlotClick: (slot: TimeSlot) => void
}

export function AppointmentCalendar({ onSlotClick }: AppointmentCalendarProps) {
  const daysWithDates = [
    { name: "Dom", date: "12/10" },
    { name: "Lun", date: "13/10" },
    { name: "Mar", date: "14/10" },
    { name: "Mié", date: "15/10" },
    { name: "Jue", date: "16/10" },
    { name: "Vie", date: "17/10" },
    { name: "Sáb", date: "18/10" },
  ]

  const generateTimeSlots = () => {
    const slots: TimeSlot[] = []
    const unavailableSlots = [
      { day: 1, time: "10:40" }, // Lunes 10:40
      { day: 2, time: "11:20" }, // Martes 11:20
      { day: 3, time: "10:40" }, // Miércoles 10:40
      { day: 4, time: "11:20" }, // Jueves 11:20
    ]

    daysWithDates.forEach((dayInfo, dayIndex) => {
      if (dayIndex === 0 || dayIndex === 6) {
        // Sunday and Saturday - no slots
        return
      }

      TIME_SLOTS.forEach((time) => {
        const isUnavailable = unavailableSlots.some((slot) => slot.day === dayIndex && slot.time === time)

        slots.push({
          id: `${dayIndex}-${time}`,
          day: dayInfo.name,
          time,
          status: isUnavailable ? "unavailable" : "available",
        })
      })
    })

    return slots
  }

  const timeSlots = generateTimeSlots()

  const getSlotsByDay = (day: string) => {
    return timeSlots.filter((slot) => slot.day === day)
  }

  const handleSlotClick = (slot: TimeSlot) => {
    onSlotClick(slot)
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-7 gap-2">
        {/* Day Headers with dates */}
        {daysWithDates.map((dayInfo) => (
          <div key={dayInfo.name} className="text-center">
            <div className="font-bold text-gray-800 text-lg mb-1">{dayInfo.name}</div>
            <div className="text-sm text-gray-600 mb-3">{dayInfo.date}</div>
          </div>
        ))}

        {/* Time Slots */}
        {daysWithDates.map((dayInfo) => (
          <div key={dayInfo.name} className="space-y-1">
            {dayInfo.name === "Sáb" || dayInfo.name === "Dom" ? (
              // Weekend - empty cells
              <div className="h-96"></div>
            ) : (
              // Weekdays - time slots
              getSlotsByDay(dayInfo.name).map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => handleSlotClick(slot)}
                  className={`
                    w-full p-2 text-sm font-medium rounded transition-all duration-200
                    ${
                      slot.status === "available"
                        ? "bg-green-500 hover:bg-green-600 text-white cursor-pointer"
                        : "bg-orange-400 text-white cursor-not-allowed"
                    }
                  `}
                  disabled={slot.status !== "available"}
                  style={{
                    cursor: slot.status === "available" ? "pointer" : "not-allowed",
                  }}
                  title={slot.status === "available" ? "Turno disponible" : "Turno no disponible"}
                >
                  {slot.time}
                </button>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
