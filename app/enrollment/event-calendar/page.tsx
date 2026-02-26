import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { sanityFetch } from "@/sanity/lib/live"
import { UPCOMING_EVENTS_QUERY } from "@/lib/queries"
import type { Event } from "@/lib/types"
import { CalendarDays, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Event Calendar - Arkansas Baptist College",
  description: "Upcoming events, important dates, and registration deadlines at Arkansas Baptist College.",
}

function formatEventDate(dateString?: string) {
  if (!dateString) return ""
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

function formatEventTime(dateString?: string) {
  if (!dateString) return ""
  return new Date(dateString).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  })
}

export default async function EventCalendarPage() {
  let events: Event[] = []
  try {
    const result = await sanityFetch({ query: UPCOMING_EVENTS_QUERY })
    events = result.data ?? []
  } catch {
    // Sanity unreachable -- show fallback content
  }

  return (
    <div className="min-h-screen">
      <main id="main-content">
      <PageHero
        title="Event Calendar"
        subtitle="Enrollment"
        description="Stay up to date with important events, registration periods, and key dates at Arkansas Baptist College."
        breadcrumbs={[
          { label: "Enrollment", href: "/enrollment/office-of-admissions" },
          { label: "Event Calendar", href: "/enrollment/event-calendar" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg text-muted-foreground">
            Below are key dates and events for students, parents, and prospective Buffaloes. Dates and times are subject to change.
          </p>

          {events.length > 0 ? (
            <div className="mt-8 grid gap-4">
              {events.map((event) => (
                <div
                  key={event._id}
                  className="flex items-start gap-4 rounded-lg border bg-card p-5 transition-colors hover:border-primary/30 hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-md bg-primary/10 text-primary">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{event.title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {formatEventDate(event.date)}
                        {event.date && ` at ${formatEventTime(event.date)}`}
                        {event.endDate && ` - ${formatEventTime(event.endDate)}`}
                      </span>
                      {event.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {event.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-lg border bg-card p-8 text-center">
              <CalendarDays className="mx-auto h-10 w-10 text-muted-foreground" />
              <p className="mt-3 font-semibold text-foreground">No upcoming events</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Check back soon for new events, or contact the Office of Admissions at{" "}
                <a href="tel:5014201200" className="text-primary hover:underline">501-420-1200</a>.
              </p>
            </div>
          )}

          <div className="mt-8 rounded-lg border-l-4 border-amber-400 bg-amber-50 p-4">
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> For the most current event information, please contact the Office of Admissions at{" "}
              <a href="tel:5014201200" className="underline">501-420-1200</a>.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <CTABand
        heading="Plan Your Visit"
        description="Schedule a campus tour to experience ABC in person."
        primaryAction={{ label: "Campus Tour", href: "/enrollment/campus-tour" }}
        secondaryAction={{ label: "Apply to ABC", href: "/enrollment/apply" }}
      />
      </main>
    </div>
  )
}
