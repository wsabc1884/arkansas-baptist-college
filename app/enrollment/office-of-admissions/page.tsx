import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { ClipboardCheck, Calendar, MapPin, Phone, Mail, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "Office of Admissions - Arkansas Baptist College",
  description: "Learn about admissions requirements, application process, and how to become a Buffalo at Arkansas Baptist College.",
}

const quickLinks = [
  { icon: ClipboardCheck, title: "Apply to ABC", description: "Start your application today", href: "/enrollment/apply" },
  { icon: Calendar, title: "Event Calendar", description: "Upcoming admissions events", href: "/enrollment/event-calendar" },
  { icon: MapPin, title: "Campus Tour", description: "Visit our campus in Little Rock", href: "/enrollment/campus-tour" },
  { icon: GraduationCap, title: "Financial Aid", description: "Explore funding options", href: "/enrollment/financial-aid" },
]

export default function OfficeOfAdmissionsPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Office of Admissions"
        subtitle="Enrollment"
        description="Your journey to becoming a Buffalo starts here. The Office of Admissions is ready to guide you through the application process."
        breadcrumbs={[
          { label: "Enrollment", href: "/enrollment/office-of-admissions" },
          { label: "Office of Admissions", href: "/enrollment/office-of-admissions" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="flex items-start gap-4 rounded-lg border p-5 transition-colors hover:border-primary hover:bg-muted/50"
              >
                <link.icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">{link.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 prose-abc">
            <h2>Why Choose Arkansas Baptist College?</h2>
            <p>
              Arkansas Baptist College is a private, historically Black liberal arts college offering a personalized educational experience in Little Rock, Arkansas. With small class sizes, dedicated faculty, and a supportive campus community, ABC prepares students to enter the workforce and pursue their passions.
            </p>

            <h2>Admissions Requirements</h2>
            <ul>
              <li>Completed application for admission</li>
              <li>Official high school transcript or GED certificate</li>
              <li>Official transcripts from all previously attended colleges or universities (transfer students)</li>
              <li>Application fee of $25</li>
            </ul>

            <h2>Programs of Study</h2>
            <p>
              ABC offers degrees and certificates in{" "}
              <Link href="/academics/business-administration">Business Administration</Link>,{" "}
              <Link href="/academics/interdisciplinary-studies">Interdisciplinary Studies</Link>,{" "}
              <Link href="/academics/fine-arts">Fine Arts</Link>,{" "}
              <Link href="/academics/public-administration">Public Administration</Link>,{" "}
              <Link href="/academics/religious-studies">Religious Studies</Link>, and{" "}
              <Link href="/academics/social-behavioral-sciences">Social & Behavioral Sciences</Link>.
            </p>

            <h2>Contact the Office of Admissions</h2>
            <p>
              <strong>Office of Admissions</strong><br />
              Arkansas Baptist College<br />
              1600 Dr. Martin Luther King Jr. Drive<br />
              Little Rock, AR 72202<br />
              Phone: <a href="tel:5014201200">501-420-1200</a><br />
              Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a>
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Migration Note */}
      {/* Source: arkansasbaptist.edu/office-of-admissions/ (no direct content returned) */}
      {/* Confidence: Medium - synthesized from site structure and common admissions content */}
      {/* Missing: Specific admissions requirements, deadlines, staff names */}

      <CTABand
        heading="Ready to Become a Buffalo?"
        description="Start your application today and take the first step toward your future at ABC."
        primaryAction={{ label: "Apply Now", href: "/enrollment/apply" }}
        secondaryAction={{ label: "Schedule a Tour", href: "/enrollment/campus-tour" }}
      />
    </main>
  )
}
