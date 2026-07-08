"use client"

import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, CalendarDays, Download } from "lucide-react"
import {
  ACADEMIC_EVENTS,
  academicEventOccursOn,
  getUpcomingAcademicEvents,
  toDateKey,
  parseDateKey,
  type AcademicEvent,
} from "@/lib/academic-calendar-events"

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

const PDF_HREF = "/documents/ABC-Academic-Calendar-2026-2028.pdf"

function startOfMonth(year: number, month: number) {
  return new Date(year, month, 1)
}

export function AcademicCalendar() {
  const today = new Date()
  const todayKey = toDateKey(today)

  // Default to the month of the next upcoming event, else the earliest event month.
  const initial = useMemo(() => {
    const sorted = [...ACADEMIC_EVENTS].sort((a, b) => a.date.localeCompare(b.date))
    const upcoming = sorted.find((e) => (e.endDate ?? e.date) >= todayKey)
    const seed = parseDateKey((upcoming ?? sorted[0])?.date ?? todayKey)
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

  function eventsForDay(day: number): AcademicEvent[] {
    const key = toDateKey(new Date(year, month, day))
    return ACADEMIC_EVENTS.filter((e) => academicEventOccursOn(e, key))
  }

  function goToMonth(delta: number) {
    setSelectedKey(null)
    setView((v) => {
      const d = new Date(v.year, v.month + delta, 1)
      return { year: d.getFullYear(), month: d.getMonth() }
    })
  }

  const selectedEvents = selectedKey
    ? ACADEMIC_EVENTS.filter((e) => academicEventOccursOn(e, selectedKey)).sort((a, b) =>
        a.title.localeCompare(b.title),
      )
    : []

  const upcomingEvents = useMemo(() => getUpcomingAcademicEvents(todayKey), [todayKey])

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
      {/* Calendar grid */}
      <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-serif text-xl font-bold text-foreground sm:text-2xl">
            {MONTH_NAMES[month]} {year}
          </h3>
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
                    {dayEvents.slice(0, 3).map((e, idx) => (
                      <span
                        key={`${e.term}-${e.title}-${idx}`}
                        className="h-1.5 w-1.5 rounded-full bg-primary/60"
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

      {/* Detail / upcoming events sidebar with download link */}
      <aside className="flex flex-col rounded-lg border border-border bg-card p-5">
        <a
          href={PDF_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground! transition-colors hover:bg-primary/90"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download Full Calendar (PDF)
        </a>

        <div className="flex items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 font-semibold text-foreground">
            <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
            {selectedKey
              ? parseDateKey(selectedKey).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : "Upcoming Dates"}
          </h3>
          {selectedKey && (
            <button
              type="button"
              onClick={() => setSelectedKey(null)}
              className="text-xs font-medium text-primary hover:underline"
            >
              Show all
            </button>
          )}
        </div>

        <div className="mt-4 max-h-[28rem] overflow-y-auto pr-1">
          {selectedKey ? (
            selectedEvents.length > 0 ? (
              <ul className="space-y-4">
                {selectedEvents.map((e, idx) => (
                  <li key={`${e.term}-${e.title}-${idx}`} className="border-l-2 border-primary pl-3">
                    <p className="font-semibold text-foreground">{e.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{e.term}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">No dates scheduled for this day.</p>
            )
          ) : upcomingEvents.length > 0 ? (
            <ul className="space-y-4">
              {upcomingEvents.map((e, idx) => (
                <li key={`${e.term}-${e.title}-${idx}`} className="border-l-2 border-primary pl-3">
                  <button
                    type="button"
                    onClick={() => {
                      const d = parseDateKey(e.date)
                      setView({ year: d.getFullYear(), month: d.getMonth() })
                      setSelectedKey(e.date)
                    }}
                    className="text-left font-semibold text-foreground hover:text-primary"
                  >
                    {e.title}
                  </button>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {parseDateKey(e.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                    {e.endDate && e.endDate !== e.date
                      ? ` \u2013 ${parseDateKey(e.endDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}`
                      : ""}
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{e.term}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">
              No upcoming dates are scheduled. Browse previous months using the arrows above.
            </p>
          )}
        </div>
      </aside>
    </div>
  )
}
