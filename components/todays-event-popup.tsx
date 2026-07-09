"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, MapPin, Star } from "lucide-react"
import { getEventsOnDate, toDateKey, type CollegeEvent } from "@/lib/college-events"
import {
  getAcademicEventsOnDate,
  isSameEvent,
  type AcademicEvent,
} from "@/lib/academic-calendar-events"

interface UnifiedEvent {
  type: "college" | "academic" | "both"
  collegeEvent?: CollegeEvent
  academicEvent?: AcademicEvent
  title: string
  id: string
}

export function TodaysEventPopup() {
  const [open, setOpen] = useState(false)
  const [events, setEvents] = useState<UnifiedEvent[]>([])
  const [dateKey, setDateKey] = useState("")

  useEffect(() => {
    const todayKey = toDateKey(new Date())
    const collegeEvents = getEventsOnDate(todayKey)
    const academicEvents = getAcademicEventsOnDate(todayKey)

    if (collegeEvents.length === 0 && academicEvents.length === 0) return

    // Only show once per day per browser (until dismissed key changes).
    const dismissedKey = `abc-event-popup-dismissed:${todayKey}`
    let dismissed = false
    try {
      dismissed = window.localStorage.getItem(dismissedKey) === "1"
    } catch {
      // localStorage unavailable (private mode) -- still show the popup.
    }
    if (dismissed) return

    // Create unified event list with priority sorting
    const unified: UnifiedEvent[] = []
    const processedAcademic = new Set<string>()

    // First: events on both calendars (highest priority)
    collegeEvents.forEach((ce) => {
      const matching = academicEvents.find((ae) => isSameEvent(ae.title, ce.title))
      if (matching) {
        unified.push({
          type: "both",
          collegeEvent: ce,
          academicEvent: matching,
          title: ce.title,
          id: `both-${ce.id}`,
        })
        processedAcademic.add(matching.title)
      }
    })

    // Second: academic-only events
    academicEvents.forEach((ae) => {
      if (!processedAcademic.has(ae.title)) {
        unified.push({
          type: "academic",
          academicEvent: ae,
          title: ae.title,
          id: `academic-${ae.title}`,
        })
      }
    })

    // Third: college-only events
    collegeEvents.forEach((ce) => {
      const matching = academicEvents.find((ae) => isSameEvent(ae.title, ce.title))
      if (!matching) {
        unified.push({
          type: "college",
          collegeEvent: ce,
          title: ce.title,
          id: ce.id,
        })
      }
    })

    setEvents(unified)
    setDateKey(todayKey)
    setOpen(true)
  }, [])

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (!next && dateKey) {
      try {
        window.localStorage.setItem(`abc-event-popup-dismissed:${dateKey}`, "1")
      } catch {
        // ignore
      }
    }
  }

  if (events.length === 0) return null

  const bothCount = events.filter((e) => e.type === "both").length
  const multiple = events.length > 1

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#3d1a5c]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#3d1a5c]">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            Happening Today
          </span>
          <DialogTitle className="font-serif text-xl">
            {multiple ? `${events.length} events today at ABC` : events[0].title}
          </DialogTitle>
          {!multiple && events[0].collegeEvent?.description && (
            <DialogDescription>{events[0].collegeEvent.description}</DialogDescription>
          )}
          {multiple && (
            <DialogDescription>Here&apos;s what&apos;s happening on campus today.</DialogDescription>
          )}
        </DialogHeader>

        <ul className="space-y-3">
          {events.map((e) => {
            const isBoth = e.type === "both"
            const isAcademic = e.type === "academic"

            return (
              <li
                key={e.id}
                className={`rounded-lg border p-3 ${
                  isBoth
                    ? "border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-50 shadow-sm"
                    : isAcademic
                      ? "border-purple-200 bg-purple-50"
                      : "border-border bg-muted/40"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    {multiple && (
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-foreground">{e.title}</p>
                        {isBoth && (
                          <span
                            className="inline-flex items-center gap-1 rounded-full bg-amber-200 px-2 py-0.5 text-xs font-semibold text-amber-900"
                            title="This event is on both calendars"
                          >
                            <Star className="h-3 w-3" aria-hidden="true" />
                            Priority
                          </span>
                        )}
                        {isAcademic && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-purple-200 px-2 py-0.5 text-xs font-semibold text-purple-900">
                            Academic
                          </span>
                        )}
                      </div>
                    )}
                    {!multiple && isBoth && (
                      <div className="mb-2 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-200 px-2 py-0.5 text-xs font-semibold text-amber-900">
                          <Star className="h-3 w-3" aria-hidden="true" />
                          On Both Calendars
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  {e.collegeEvent?.time && (
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {e.collegeEvent.time}
                    </span>
                  )}
                  {e.collegeEvent?.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {e.collegeEvent.location}
                    </span>
                  )}
                </div>

                {multiple && e.collegeEvent?.description && (
                  <p className="mt-1.5 text-sm text-muted-foreground">{e.collegeEvent.description}</p>
                )}
              </li>
            )
          })}
        </ul>

        <DialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={() => handleOpenChange(false)}>
            Dismiss
          </Button>
          <Button asChild>
            <Link href="/student-life/campus-life#events-calendar" onClick={() => handleOpenChange(false)}>
              View Calendar
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
