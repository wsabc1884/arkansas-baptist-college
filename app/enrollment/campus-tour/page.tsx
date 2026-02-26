import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Campus Tour - Arkansas Baptist College",
  description: "Schedule a campus tour and visit Arkansas Baptist College in Little Rock, Arkansas.",
}

export default function CampusTourPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
      <PageHero
        title="Campus Tour"
        subtitle="Enrollment"
        description="Visit our campus in the heart of Little Rock and see firsthand what makes ABC home."
        breadcrumbs={[
          { label: "Enrollment", href: "/enrollment/office-of-admissions" },
          { label: "Campus Tour", href: "/enrollment/campus-tour" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Take a tour of Arkansas Baptist College and make ABC your home! Whether you are a prospective student, parent, or community member, we welcome you to visit our historic campus and meet our faculty, staff, and students.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-5">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">Location</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                1600 Dr. Martin Luther King Jr. Drive<br />
                Little Rock, AR 72202
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">Tour Hours</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Monday - Friday<br />
                9:00 AM - 4:00 PM
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <Phone className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">Phone</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                <a href="tel:5014201234" className="text-primary hover:underline">(501) 420-1234</a>
              </p>
            </div>
            <div className="rounded-lg border p-5">
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">Email</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                <a href="mailto:admissions@arkansasbaptist.edu" className="text-primary hover:underline">admissions@arkansasbaptist.edu</a>
              </p>
            </div>
          </div>

          <div className="mt-10 prose-abc">
            <h2>Schedule Your Visit</h2>
            <p>
              To schedule a campus tour, contact the Office of Admissions. Tours include visits to academic buildings, residence halls, the library, athletic facilities, and common areas. We recommend scheduling your visit in advance to ensure an admissions counselor is available to answer your questions.
            </p>

            <h2>What to Expect</h2>
            <ul>
              <li>Guided tour of campus facilities and academic buildings</li>
              <li>Meeting with an admissions counselor</li>
              <li>Information about degree programs and financial aid</li>
              <li>Opportunity to meet current students and faculty</li>
              <li>Overview of campus life, housing, and student organizations</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <CTABand
        heading="Ready to Apply?"
        description="After your visit, start your application to join the Buffalo family."
        primaryAction={{ label: "Apply to ABC", href: "/enrollment/apply" }}
        secondaryAction={{ label: "Financial Aid", href: "/enrollment/financial-aid" }}
      />
      </main>
    </div>
  )
}
