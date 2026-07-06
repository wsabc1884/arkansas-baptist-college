import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { EventsCalendar } from "@/components/events-calendar"
import { EventsList } from "@/components/events-list"
import { getUpcomingEvents, toDateKey } from "@/lib/college-events"

export const metadata: Metadata = {
  title: "College Events Calendar - Arkansas Baptist College",
  description:
    "Browse upcoming events, ceremonies, and important dates at Arkansas Baptist College on our interactive events calendar.",
}

export default function EventsCalendarPage() {
  const todayKey = toDateKey(new Date())
  const upcoming = getUpcomingEvents(todayKey).map((e) => ({
    title: e.title,
    date: e.date,
    time: e.time,
    location: e.location,
    category: e.category,
    href: e.href,
  }))

  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="College Events Calendar"
          subtitle="Arkansas Baptist College"
          description="Stay connected with everything happening on campus. Browse the calendar to explore convocations, ceremonies, open houses, and more."
          breadcrumbs={[{ label: "Events Calendar", href: "/events" }]}
        />

        <SectionWrapper>
          <EventsCalendar />
        </SectionWrapper>

        <SectionWrapper variant="muted">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Upcoming Events</h2>
            <p className="mt-2 text-muted-foreground">
              A running list of what&apos;s next at Arkansas Baptist College. Dates and times are subject to change.
            </p>
            <div className="mt-6">
              <EventsList events={upcoming} emptyMessage="No upcoming events are scheduled at this time. Check back soon." />
            </div>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
