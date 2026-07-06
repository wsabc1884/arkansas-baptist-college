"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MapPin, Clock, CalendarDays } from "lucide-react"
import {
  COLLEGE_EVENTS,
  eventOccursOn,
  toDateKey,
  parseDateKey,
  type CollegeEvent,
} from "@/lib/college-events"

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

function startOfMonth(year: number, month: number) {
  return new Date(year, month, 1)
}

export function EventsCalendar() {
  const today = new Date()
  const todayKey = toDateKey(today)

  // Default to the month of the next upcoming event, else current month.
  const initial = useMemo(() => {
    const upcoming = [...COLLEGE_EVENTS]
      .sort((a, b) => a.date.localeCompare(b.date))
      .find((e) => (e.endDate ?? e.date) >= todayKey)
    const seed = upcoming ? parseDateKey(upcoming.date) : today
    return { year: seed.getFullYear(), month: seed.getMonth() }
  }, [todayKey])

  const [view, setView] = useState(initial)
  const [selectedKey, setSelectedKey] = useState<string | null>(null)

  const { year, month } = view
  const firstDay = startOfMonth(year, month)
  const leadingBlanks = firstDay.getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells: (number | null)[] = [
    ...Array(leadingBlanks).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  while (cells.length % 7 !== 0) cells.push(null)

  function eventsForDay(day: number): CollegeEvent[] {
    const key = toDateKey(new Date(year, month, day))
    return COLLEGE_EVENTS.filter((e) => eventOccursOn(e, key))
  }

  function goToMonth(delta: number) {
    setSelectedKey(null)
    setView((v) => {
      const d = new Date(v.year, v.month + delta, 1)
      return { year: d.getFullYear(), month: d.getMonth() }
    })
  }

  const selectedEvents = selectedKey
    ? COLLEGE_EVENTS.filter((e) => eventOccursOn(e, selectedKey)).sort((a, b) => a.title.localeCompare(b.title))
    : []

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
      {/* Calendar grid */}
      <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-xl font-bold text-foreground sm:text-2xl">
            {MONTH_NAMES[month]} {year}
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToMonth(-1)}
              className="rounded-md border border-border p-2 text-foreground transition-colors hover:bg-muted"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setView(initial)}
              className="rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Today
            </button>
            <button
              type="button"
              onClick={() => goToMonth(1)}
              className="rounded-md border border-border p-2 text-foreground transition-colors hover:bg-muted"
              aria-label="Next month"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {WEEKDAYS.map((wd) => (
            <div key={wd} className="pb-2 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <span className="hidden sm:inline">{wd}</span>
              <span className="sm:hidden">{wd[0]}</span>
            </div>
          ))}

          {cells.map((day, i) => {
            if (day === null) return <div key={`blank-${i}`} className="aspect-square" />
            const key = toDateKey(new Date(year, month, day))
            const dayEvents = eventsForDay(day)
            const hasEvents = dayEvents.length > 0
            const isToday = key === todayKey
            const isSelected = key === selectedKey

            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedKey(hasEvents ? key : null)}
                disabled={!hasEvents}
                aria-label={`${MONTH_NAMES[month]} ${day}${hasEvents ? `, ${dayEvents.length} event(s)` : ""}`}
                className={[
                  "flex aspect-square flex-col items-center justify-start gap-1 rounded-md border p-1 text-sm transition-colors sm:p-2",
                  hasEvents ? "cursor-pointer hover:border-primary" : "cursor-default",
                  isSelected ? "border-primary bg-primary/10" : "border-transparent",
                  isToday && !isSelected ? "bg-muted" : "",
                ].join(" ")}
              >
                <span
                  className={[
                    "flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium sm:text-sm",
                    isToday ? "bg-primary text-primary-foreground" : "text-foreground",
                  ].join(" ")}
                >
                  {day}
                </span>
                {hasEvents && (
                  <span className="flex flex-wrap justify-center gap-0.5">
                    {dayEvents.slice(0, 3).map((e) => (
                      <span
                        key={e.id}
                        className={`h-1.5 w-1.5 rounded-full ${e.featured ? "bg-primary" : "bg-primary/50"}`}
                        aria-hidden="true"
                      />
                    ))}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Detail sidebar */}
      <aside className="rounded-lg border border-border bg-card p-5">
        <h3 className="flex items-center gap-2 font-semibold text-foreground">
          <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
          {selectedKey
            ? parseDateKey(selectedKey).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })
            : "Event Details"}
        </h3>

        {selectedEvents.length > 0 ? (
          <ul className="mt-4 space-y-4">
            {selectedEvents.map((e) => (
              <li key={e.id} className="border-l-2 border-primary pl-3">
                <p className="font-semibold text-foreground">{e.title}</p>
                <div className="mt-1 space-y-1 text-sm text-muted-foreground">
                  {e.time && (
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {e.time}
                    </span>
                  )}
                  {e.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {e.location}
                    </span>
                  )}
                </div>
                {e.description && <p className="mt-2 text-sm text-muted-foreground">{e.description}</p>}
                {e.href && (
                  <Link href={e.href} className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
                    Learn more
                  </Link>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-muted-foreground">
            Select a highlighted date to view event details. Dates with a dot have scheduled events.
          </p>
        )}
      </aside>
    </div>
  )
}
