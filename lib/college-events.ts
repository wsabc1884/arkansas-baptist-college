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
    id: "new-student-shuttle-schedule-2026-08-11",
    title: "New Student Shuttle Schedule Available",
    date: "2026-08-11",
    endDate: "2026-08-22",
    location: "18th & Bishop St.",
    category: "Announcement",
    description:
      "New Student Shuttle Schedule available! Go to the Campus Life page to see when the bus is scheduled to run.",
    href: "/student-life/campus-life#events-calendar",
    featured: true,
  },
  {
    id: "jenzabar-mobile-app-2026-08-11",
    title: "New Jenzabar Mobile App Available",
    date: "2026-08-11",
    endDate: "2026-08-22",
    location: "Available on iOS & Android",
    category: "Announcement",
    description:
      "Add our new Jenzabar Mobile app to access Blackboard. Click on the \u201CInstall Jenzabar Mobile\u201D link at the top of the page.",
    href: "/mobile-app",
    featured: true,
  },
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
    id: "magic-springs-reservation-deadline-2026-07-15",
    title: "Magic Springs Reservation Deadline",
    date: "2026-07-15",
    time: "4:00 PM",
    location: "Office of Student Life",
    category: "Campus",
    description:
      "Deadline to reserve your spot for the Friday, July 17 Magic Springs Theme & Water Park trip. Reservations must be made by 4:00 p.m. today. Space is limited, and reservations are accepted on a first-come, first-served basis.",
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

  // ---- Royal Stampede Homecoming 2026 (Sept 20 - Sept 26) ----
  {
    id: "homecoming-sunday-kickoff-2026-09-20",
    title: "Sunday Kickoff",
    date: "2026-09-20",
    time: "11:00 AM",
    location: "Saint Mark Baptist Church",
    category: "Homecoming",
    description: "Royal Stampede Homecoming week kicks off with worship at Saint Mark Baptist Church.",
    featured: true,
  },
  {
    id: "homecoming-lunch-2026-09-20",
    title: "Homecoming Lunch",
    date: "2026-09-20",
    time: "2:00 PM",
    category: "Homecoming",
    description: "Gather with the Buffalo family for lunch during Royal Stampede Homecoming.",
  },
  {
    id: "homecoming-comedy-on-the-yard-2026-09-20",
    title: "Comedy on the Yard",
    date: "2026-09-20",
    time: "5:00 PM",
    category: "Homecoming",
    description: "Enjoy an afternoon of laughs with Comedy on the Yard.",
  },
  {
    id: "homecoming-lunch-with-alumni-2026-09-21",
    title: "Lunch with Alumni",
    date: "2026-09-21",
    time: "11:30 AM",
    category: "Homecoming",
    description: "Current students connect with ABC alumni over lunch.",
  },
  {
    id: "homecoming-lip-sync-karaoke-2026-09-21",
    title: "Lip-Sync Battle and Karaoke",
    date: "2026-09-21",
    time: "7:00 PM",
    category: "Homecoming",
    description: "Take the stage for a night of Lip-Sync Battle and Karaoke.",
  },
  {
    id: "homecoming-carnival-games-2026-09-22",
    title: "Carnival Games",
    date: "2026-09-22",
    time: "11:00 AM",
    category: "Homecoming",
    description: "Play carnival games on the yard during Homecoming week.",
  },
  {
    id: "homecoming-students-vs-staff-hoop-2026-09-22",
    title: "Students vs. Staff Hoop Contest",
    date: "2026-09-22",
    time: "7:00 PM",
    category: "Homecoming",
    description: "Cheer on students and staff as they face off in a hoop contest.",
  },
  {
    id: "homecoming-ultimate-game-night-2026-09-22",
    title: "Ultimate Game Night",
    date: "2026-09-22",
    time: "9:00 PM",
    category: "Homecoming",
    description: "Cap off the night with the Ultimate Game Night.",
  },
  {
    id: "homecoming-groom-and-glow-2026-09-23",
    title: "Buffaloes Groom & Glow Day",
    date: "2026-09-23",
    time: "All Day",
    category: "Homecoming",
    description: "Get ready for the big day! Ladies: nails and lashes. Men: haircuts and grooming.",
  },
  {
    id: "homecoming-chapel-2026-09-24",
    title: "Homecoming Chapel",
    date: "2026-09-24",
    time: "11:00 AM",
    category: "Homecoming",
    description: "Join the community for Homecoming Chapel.",
  },
  {
    id: "homecoming-royal-coronation-2026-09-24",
    title: "The Royal Coronation",
    date: "2026-09-24",
    time: "7:00 PM",
    category: "Homecoming",
    description: "Celebrate the crowning of Homecoming royalty at The Royal Coronation.",
    featured: true,
  },
  {
    id: "homecoming-parade-pep-rally-2026-09-25",
    title: "Parade and Pep Rally",
    date: "2026-09-25",
    time: "1:00 PM",
    category: "Homecoming",
    description: "Line up for the Homecoming Parade and Pep Rally.",
    featured: true,
  },
  {
    id: "homecoming-battle-of-the-bands-2026-09-25",
    title: "Battle of the Bands",
    date: "2026-09-25",
    time: "7:00 PM",
    category: "Homecoming",
    description: "Bands go head-to-head in the Homecoming Battle of the Bands.",
  },
  {
    id: "homecoming-street-party-greek-stroll-2026-09-25",
    title: "ABC Campus Street Party & Greek Stroll-Off",
    date: "2026-09-25",
    time: "Immediately following the Battle of the Bands",
    category: "Homecoming",
    description: "Keep the celebration going with the ABC Campus Street Party & Greek Stroll-Off, immediately following the Battle of the Bands.",
  },
  {
    id: "homecoming-car-show-judging-2026-09-26",
    title: "Car Show Judging",
    date: "2026-09-26",
    time: "9:00 AM",
    category: "Homecoming",
    description: "Watch the Homecoming Car Show judging.",
  },
  {
    id: "homecoming-tailgate-2026-09-26",
    title: "Tailgate",
    date: "2026-09-26",
    time: "12:00 PM",
    category: "Homecoming",
    description: "Join the Buffalo family for the Homecoming Tailgate.",
  },
  {
    id: "homecoming-football-game-2026-09-26",
    title: "Homecoming Football Game",
    date: "2026-09-26",
    time: "6:00 PM",
    category: "Homecoming",
    description: "Cheer on the Buffaloes at the Homecoming Football Game.",
    featured: true,
  },
  {
    id: "homecoming-alumni-mixer-2026-09-26",
    title: "Alumni Mixer",
    date: "2026-09-26",
    time: "9:00 PM",
    category: "Homecoming",
    description: "Close out Royal Stampede Homecoming with the Alumni Mixer.",
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
