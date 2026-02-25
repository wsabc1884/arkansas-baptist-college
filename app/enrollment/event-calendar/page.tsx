import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Event Calendar - Arkansas Baptist College",
  description: "Upcoming events, important dates, and registration deadlines at Arkansas Baptist College.",
}

export default function EventCalendarPage() {
  return (
    <div className="min-h-screen">
      <Header />
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
        <div className="mx-auto max-w-3xl prose-abc">
          <p className="text-lg">
            Below are key dates and events for students, parents, and prospective Buffaloes. Dates and times are subject to change.
          </p>

          <div className="mt-8 rounded-lg border-l-4 border-amber-400 bg-amber-50 p-4 not-prose">
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> For the most current event information, please contact the Office of Admissions at{" "}
              <a href="tel:5014201200" className="underline">501-420-1200</a> or check the{" "}
              <a href="https://www.arkansasbaptist.edu/event-calendar/" target="_blank" rel="noopener noreferrer" className="underline">
                official ABC event calendar
              </a>.
            </p>
          </div>

          <h2>Important Dates</h2>
          <p>
            Arkansas Baptist College operates on a semester system with fall, spring, and summer terms. Key dates typically include:
          </p>
          <ul>
            <li><strong>Residence Hall Check-in</strong> - Occurs at the start of each semester</li>
            <li><strong>Classes Begin</strong> - First day of instruction for each term</li>
            <li><strong>Late Registration</strong> - Limited window after classes begin</li>
            <li><strong>Final Exams</strong> - End of each semester examination period</li>
            <li><strong>Residence Hall Checkout</strong> - End of semester move-out</li>
            <li><strong>Buffalo Stampede</strong> - Mini-term registration and classes</li>
            <li><strong>Summer Bridge</strong> - Pre-fall semester program for incoming students</li>
          </ul>

          <h2>Admissions Events</h2>
          <ul>
            <li>Open House Days</li>
            <li>Campus Tours (available year-round)</li>
            <li>Preview Days for prospective students</li>
            <li>New Student Orientation</li>
          </ul>
        </div>
      </SectionWrapper>

      <CTABand
        heading="Plan Your Visit"
        description="Schedule a campus tour to experience ABC in person."
        primaryAction={{ label: "Campus Tour", href: "/enrollment/campus-tour" }}
        secondaryAction={{ label: "Apply to ABC", href: "/enrollment/apply" }}
      />
      </main>
      <Footer />
    </div>
  )
}
