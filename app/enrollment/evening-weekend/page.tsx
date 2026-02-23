import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Evening & Weekend College - Arkansas Baptist College",
  description: "Evening and Weekend College adult degree program at Arkansas Baptist College for working adults and non-traditional students.",
}

export default function EveningWeekendPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Evening & Weekend College Adult Degree"
        subtitle="Enrollment"
        description="Flexible scheduling for working adults who want to earn their degree without putting life on hold."
        breadcrumbs={[
          { label: "Enrollment", href: "/enrollment/office-of-admissions" },
          { label: "Evening & Weekend College", href: "/enrollment/evening-weekend" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl prose-abc">
          <h2>Program Overview</h2>
          <p>
            The Evening & Weekend College at Arkansas Baptist College is designed for working adults and non-traditional students who need flexible scheduling to complete their degree. Classes are offered during evening hours and on weekends to accommodate work and family commitments.
          </p>

          <h2>Who Should Apply?</h2>
          <ul>
            <li>Working adults looking to complete their degree</li>
            <li>Students returning to college after time away</li>
            <li>Professionals seeking career advancement through education</li>
            <li>Non-traditional students balancing work, family, and school</li>
          </ul>

          <h2>Getting Started</h2>
          <p>
            To enroll in the Evening & Weekend College, contact the{" "}
            <Link href="/enrollment/office-of-admissions">Office of Admissions</Link> or the{" "}
            <Link href="/academics/adult-education">Adult Education</Link> program for more information about available courses and schedules.
          </p>

          <h2>Contact</h2>
          <p>
            <strong>Evening & Weekend College</strong><br />
            Arkansas Baptist College<br />
            Phone: <a href="tel:5014201200">501-420-1200</a><br />
            Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a>
          </p>
        </div>
      </SectionWrapper>

      {/* Migration Note */}
      {/* Source: arkansasbaptist.edu/evening-weekend-college-adult-degree/ (no direct content) */}
      {/* Confidence: Low-Medium - synthesized from program name and general structure */}
      {/* Missing: Specific course offerings, schedules, faculty, pricing */}

      <CTABand
        heading="Ready to Go Back to School?"
        description="Start your application and take the next step in your career."
        primaryAction={{ label: "Apply to ABC", href: "/enrollment/apply" }}
        secondaryAction={{ label: "Adult Education", href: "/academics/adult-education" }}
      />
    </main>
  )
}
