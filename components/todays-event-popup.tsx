"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
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

interface Flyer {
  id: string
  src: string
  alt: string
  width: number
  height: number
  deadline: Date
}

// Promotional flyers shown at the top of the popup until their deadline.
// Arkansas is Central Time; September is CDT (UTC-5). Edit the deadlines here.
const FLYERS: Flyer[] = [
  {
    id: "buffalo-stampede",
    src: "/buffalo-stampede.png",
    alt: "Arkansas Baptist College Buffalo Stampede mini-semester, September 28 to November 24, 2026. Pre-registration begins September 8, 2026. Enroll for Fall 2026 in online or in-person courses and complete up to 12 hours of academic course work. For more information call Financial Aid at (501) 420-1225 or Admissions at (501) 420-1231, or Residence Life at (501) 402-1227. Apply online at www.ArkansasBaptist.edu.",
    width: 1242,
    height: 1242,
    deadline: new Date("2026-10-01T23:59:59-05:00"),
  },
  {
    id: "open-house",
    src: "/open-house.jpg",
    alt: "Arkansas Adult Education Open House. Thursday, September 17, 11 AM to 1 PM. Free event at Arkansas Baptist College Adult Education, 1600 Dr. Martin Luther King Jr. Drive, Old Main Building Room B107, Little Rock, AR 72202.",
    width: 1275,
    height: 1650,
    deadline: new Date("2026-09-17T11:00:00-05:00"),
  },
  {
    id: "war-fitness",
    src: "/war-fitness.jpg",
    alt: "WAR Boxing & Fitness Grand Opening. Saturday, September 26, 10 AM to 2 PM at 1515 Martin Luther King Jr. Drive, Little Rock, AR 72202. A day of fun, fitness and community with a DJ, exhibitions, and food and drinks.",
    width: 855,
    height: 1265,
    deadline: new Date("2026-09-27T09:00:00-05:00"),
  },
]
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

// Helper to parse time string (e.g., "6:00 PM") and return minutes since midnight
function timeToMinutes(timeStr: string): number {
  const match = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i)
  if (!match) return 0

  let hours = parseInt(match[1], 10)
  const minutes = parseInt(match[2], 10)
  const period = match[3]?.toUpperCase()

  if (period === "PM" && hours !== 12) hours += 12
  if (period === "AM" && hours === 12) hours = 0

  return hours * 60 + minutes
}

// Helper to calculate if we're past an event + 2 hours
function isEventExpired(eventTime: string | undefined): boolean {
  if (!eventTime) return false

  const now = new Date()
  const currentMinutes = now.getHours() * 60 + now.getMinutes()
  const eventMinutes = timeToMinutes(eventTime)
  const expiryTime = eventMinutes + 120 // 2 hours after event starts

  return currentMinutes >= expiryTime
}

export function TodaysEventPopup() {
  const [open, setOpen] = useState(false)
  const [events, setEvents] = useState<UnifiedEvent[]>([])
  const [flyers, setFlyers] = useState<Flyer[]>([])
  const [dateKey, setDateKey] = useState("")

  useEffect(() => {
    const todayKey = toDateKey(new Date())
    const collegeEvents = getEventsOnDate(todayKey)
    const academicEvents = getAcademicEventsOnDate(todayKey)

    // Flyers stay up until their individual deadline passes.
    const nowMs = Date.now()
    const activeFlyers = FLYERS.filter((f) => nowMs < f.deadline.getTime())

    if (collegeEvents.length === 0 && academicEvents.length === 0 && activeFlyers.length === 0) return

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
    setFlyers(activeFlyers)
    setDateKey(todayKey)
    setOpen(true)

    // If a flyer is active we always show, regardless of event timing.
    if (activeFlyers.length > 0) return

    // Check if all events have expired (2 hours after start time)
    const allExpired = unified.length > 0 && unified.every((e) => isEventExpired(e.collegeEvent?.time))
    if (allExpired) {
      setOpen(false)
      return
    }

    // Auto-dismiss the popup 2 hours after the earliest event starts
    if (unified.length > 0) {
      const earliestEvent = unified.reduce((prev, curr) => {
        const prevTime = prev.collegeEvent?.time ? timeToMinutes(prev.collegeEvent.time) : Infinity
        const currTime = curr.collegeEvent?.time ? timeToMinutes(curr.collegeEvent.time) : Infinity
        return currTime < prevTime ? curr : prev
      })

      if (earliestEvent.collegeEvent?.time) {
        const now = new Date()
        const currentMinutes = now.getHours() * 60 + now.getMinutes()
        const eventMinutes = timeToMinutes(earliestEvent.collegeEvent.time)
        const expiryTime = eventMinutes + 120 // 2 hours

        if (expiryTime > currentMinutes) {
          const millisecondsUntilExpiry = (expiryTime - currentMinutes) * 60 * 1000
          const timer = setTimeout(() => {
            setOpen(false)
            try {
              window.localStorage.setItem(`abc-event-popup-dismissed:${todayKey}`, "1")
            } catch {
              // ignore
            }
          }, millisecondsUntilExpiry)

          return () => clearTimeout(timer)
        }
      }
    }
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

  if (events.length === 0 && flyers.length === 0) return null

  const multiple = events.length > 1
  const hasFlyers = flyers.length > 0

  // Route each "View Calendar" action to the calendar the event actually lives on.
  const ACADEMIC_CALENDAR_HREF = "/academics/academic-calendar#calendar-view"
  const EVENTS_CALENDAR_HREF = "/student-life/campus-life#events-calendar"
  // "both" events appear on each calendar, so they enable both links.
  const showAcademicLink = events.some((e) => e.type === "academic" || e.type === "both")
  const showEventsLink = events.some((e) => e.type === "college" || e.type === "both")
  const showBothLinks = showAcademicLink && showEventsLink

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className={
          hasFlyers
            ? `max-h-[92vh] overflow-y-auto ${flyers.length >= 3 ? "sm:max-w-5xl" : "sm:max-w-3xl"}`
            : "sm:max-w-md"
        }
      >
        {hasFlyers && (
          <div
            className={`grid items-start gap-4 ${
              flyers.length >= 3 ? "sm:grid-cols-3" : flyers.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"
            }`}
          >
            {flyers.map((f) => (
              <div key={f.id} className="overflow-hidden rounded-lg border border-border bg-muted/30">
                <Image
                  src={f.src || "/placeholder.svg"}
                  alt={f.alt}
                  width={f.width}
                  height={f.height}
                  priority
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        )}

        <DialogHeader className={events.length === 0 ? "sr-only" : undefined}>
          <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#3d1a5c]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#3d1a5c]">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {events.length > 0 ? "Happening Today" : "Upcoming at ABC"}
          </span>
          <DialogTitle className="font-serif text-xl">
            {events.length === 0
              ? "Upcoming events at ABC"
              : multiple
                ? `${events.length} events today at ABC`
                : events[0].title}
          </DialogTitle>
          {events.length === 1 && !multiple && events[0].collegeEvent?.description && (
            <DialogDescription>{events[0].collegeEvent.description}</DialogDescription>
          )}
          {multiple && (
            <DialogDescription>Here&apos;s what&apos;s happening on campus today.</DialogDescription>
          )}
        </DialogHeader>

        {events.length > 0 && (
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
        )}

        <DialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={() => handleOpenChange(false)}>
            Dismiss
          </Button>
          <div className="flex flex-col gap-2 sm:flex-row">
            {showAcademicLink && (
              <Button asChild>
                <Link href={ACADEMIC_CALENDAR_HREF} onClick={() => handleOpenChange(false)}>
                  {showBothLinks ? "Academic Calendar" : "View Calendar"}
                </Link>
              </Button>
            )}
            {showEventsLink && (
              <Button asChild variant={showBothLinks ? "outline" : "default"}>
                <Link href={EVENTS_CALENDAR_HREF} onClick={() => handleOpenChange(false)}>
                  {showBothLinks ? "Events Calendar" : "View Calendar"}
                </Link>
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
