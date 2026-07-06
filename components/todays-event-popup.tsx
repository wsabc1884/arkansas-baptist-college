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
import { CalendarDays, Clock, MapPin } from "lucide-react"
import { getEventsOnDate, toDateKey, type CollegeEvent } from "@/lib/college-events"

export function TodaysEventPopup() {
  const [open, setOpen] = useState(false)
  const [events, setEvents] = useState<CollegeEvent[]>([])
  const [dateKey, setDateKey] = useState("")

  useEffect(() => {
    const todayKey = toDateKey(new Date())
    const todaysEvents = getEventsOnDate(todayKey)
    if (todaysEvents.length === 0) return

    // Only show once per day per browser (until dismissed key changes).
    const dismissedKey = `abc-event-popup-dismissed:${todayKey}`
    let dismissed = false
    try {
      dismissed = window.localStorage.getItem(dismissedKey) === "1"
    } catch {
      // localStorage unavailable (private mode) -- still show the popup.
    }
    if (dismissed) return

    setEvents(todaysEvents)
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
          {!multiple && events[0].description && (
            <DialogDescription>{events[0].description}</DialogDescription>
          )}
          {multiple && (
            <DialogDescription>Here&apos;s what&apos;s happening on campus today.</DialogDescription>
          )}
        </DialogHeader>

        <ul className="space-y-3">
          {events.map((e) => (
            <li key={e.id} className="rounded-lg border border-border bg-muted/40 p-3">
              {multiple && <p className="font-semibold text-foreground">{e.title}</p>}
              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
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
              {multiple && e.description && (
                <p className="mt-1.5 text-sm text-muted-foreground">{e.description}</p>
              )}
            </li>
          ))}
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
