// College Events Calendar - code-managed event list.
//
// HOW TO ADD OR EDIT EVENTS:
// Add an object to the COLLEGE_EVENTS array below. Keep the list in any order;
// it is sorted automatically. Dates must be in "YYYY-MM-DD" format (local time).
//
//   {
//     id: "unique-string",              // any unique value
//     title: "Event name",
//     date: "2026-04-15",               // required, YYYY-MM-DD
//     time: "6:00 PM",                  // optional display time
//     endDate: "2026-04-17",            // optional, for multi-day events (YYYY-MM-DD)
//     location: "Old Main Auditorium",  // optional
//     category: "Academic",             // optional label/badge
//     description: "Short summary...",   // optional, shown on calendar + popup
//     href: "/enrollment/apply",        // optional link for "Learn more"
//     featured: true,                    // optional, highlights the event
//   }

export interface CollegeEvent {
  id: string
  title: string
  /** Start date in YYYY-MM-DD format (local time). */
  date: string
  /** Optional end date in YYYY-MM-DD for multi-day events. */
  endDate?: string
  /** Optional display time, e.g. "6:00 PM" or "9:00 AM - 3:00 PM". */
  time?: string
  location?: string
  category?: string
  description?: string
  href?: string
  featured?: boolean
}

// ---------------------------------------------------------------------------
// EDIT THIS LIST to manage what appears on the College Events Calendar.
// ---------------------------------------------------------------------------
export const COLLEGE_EVENTS: CollegeEvent[] = [
  {
    id: "yoga-2026-07-09",
    title: "Yoga",
    date: "2026-07-09",
    time: "3:00 PM",
    location: "Student Union",
    category: "Wellness",
    description: "Relax, recharge, and improve your mind and body through a guided yoga session.",
  },
  {
    id: "line-dancing-2026-07-10",
    title: "Line Dancing",
    date: "2026-07-10",
    time: "7:00 PM",
    location: "Student Union",
    category: "Campus",
    description: "Bring your energy and learn the latest line dances while enjoying an evening of music and fun.",
  },
  {
    id: "healthy-nutrition-chat-2026-07-11",
    title: "Healthy Nutrition Chat",
    date: "2026-07-11",
    time: "3:00 PM",
    location: "Student Union",
    category: "Wellness",
    description:
      "Join us for an engaging conversation about healthy eating, wellness, and practical nutrition tips for college students.",
  },
  {
    id: "vision-board-party-2026-07-11",
    title: "Vision Board Party",
    date: "2026-07-11",
    time: "7:00 PM",
    location: "Student Union",
    category: "Campus",
    description:
      "Create a vision board that reflects your goals, dreams, and aspirations while connecting with your fellow Buffaloes.",
  },
  {
    id: "magic-springs-2026-07-17",
    title: "Magic Springs Theme & Water Park",
    date: "2026-07-17",
    location: "Magic Springs Theme & Water Park",
    category: "Campus",
    description:
      "Join us for a day of fun at Magic Springs Theme & Water Park! All students must reserve their spot by Wednesday, July 15, at 4:00 p.m. Space is limited, and reservations will be accepted on a first-come, first-served basis. All participants must present a valid Arkansas Baptist College Student ID.",
    featured: true,
  },
]

// ---------------------------------------------------------------------------
// Helpers (no need to edit below).
// ---------------------------------------------------------------------------

/** Returns a local YYYY-MM-DD string for a given Date. */
export function toDateKey(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, "0")
  const d = String(date.getDate()).padStart(2, "0")
  return `${y}-${m}-${d}`
}

/** Parses a YYYY-MM-DD string as a local Date (avoids UTC offset bugs). */
export function parseDateKey(key: string): Date {
  const [y, m, d] = key.split("-").map(Number)
  return new Date(y, (m ?? 1) - 1, d ?? 1)
}

/** True if the given date key falls within the event's date range (inclusive). */
export function eventOccursOn(event: CollegeEvent, dateKey: string): boolean {
  const start = event.date
  const end = event.endDate ?? event.date
  return dateKey >= start && dateKey <= end
}

/** All events occurring on a given date key, sorted by featured then title. */
export function getEventsOnDate(dateKey: string): CollegeEvent[] {
  return COLLEGE_EVENTS.filter((e) => eventOccursOn(e, dateKey)).sort(
    (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false) || a.title.localeCompare(b.title),
  )
}

/** Events sorted chronologically by start date. */
export function getSortedEvents(): CollegeEvent[] {
  return [...COLLEGE_EVENTS].sort((a, b) => a.date.localeCompare(b.date))
}

/** Upcoming events (occurring today or later), sorted chronologically. */
export function getUpcomingEvents(fromDateKey: string): CollegeEvent[] {
  return getSortedEvents().filter((e) => (e.endDate ?? e.date) >= fromDateKey)
}
