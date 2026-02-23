import Link from "next/link"
import { MapPin, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface EventItem {
  title: string
  date: string
  time?: string
  location?: string
  category?: string
  href?: string
}

interface EventsListProps {
  events: EventItem[]
  emptyMessage?: string
}

export function EventsList({ events, emptyMessage = "No upcoming events at this time." }: EventsListProps) {
  if (events.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-12 text-center">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-card overflow-hidden">
      {events.map((event, index) => {
        const dateObj = new Date(event.date)
        const month = dateObj.toLocaleDateString("en-US", { month: "short" }).toUpperCase()
        const day = dateObj.getDate()

        const content = (
          <div className="flex gap-5 p-5 transition-colors hover:bg-muted/50">
            {/* Date badge */}
            <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-[#3d1a5c] text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider">{month}</span>
              <span className="text-2xl font-bold leading-none">{day}</span>
            </div>

            {/* Event details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-foreground">{event.title}</h3>
                {event.category && (
                  <span className="shrink-0 rounded-full bg-[#3d1a5c]/10 px-2.5 py-0.5 text-xs font-medium text-[#3d1a5c]">
                    {event.category}
                  </span>
                )}
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                {event.time && (
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {event.time}
                  </span>
                )}
                {event.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {event.location}
                  </span>
                )}
              </div>
            </div>
          </div>
        )

        return event.href ? (
          <Link key={index} href={event.href} className="block">
            {content}
          </Link>
        ) : (
          <div key={index}>{content}</div>
        )
      })}
    </div>
  )
}
