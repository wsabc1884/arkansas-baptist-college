import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Faculty & Staff Senate - Arkansas Baptist College",
  description: "The Faculty & Staff Senate at Arkansas Baptist College serves as the representative governance body for faculty and staff.",
}

export default function FacultyStaffSenatePage() {
  return (
    <main id="main-content">
      <PageHero
        title="Faculty & Staff Senate"
        subtitle="About Us"
        description="The representative governance body for faculty and staff at Arkansas Baptist College."
        breadcrumbs={[
          { label: "About Us", href: "/about/history" },
          { label: "Faculty & Staff Senate", href: "/about/faculty-staff-senate" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl prose-abc">
          <h2>Purpose</h2>
          <p>
            The Faculty & Staff Senate serves as the representative governance body for faculty and staff at Arkansas Baptist College. The Senate provides a formal channel for communication between faculty, staff, and the administration on matters of institutional policy, academic standards, and campus operations.
          </p>

          <h2>Responsibilities</h2>
          <ul>
            <li>Advise the administration on academic policies, curriculum development, and institutional planning</li>
            <li>Serve as a forum for faculty and staff concerns and recommendations</li>
            <li>Promote academic freedom, professional development, and shared governance</li>
            <li>Review and recommend policies related to faculty and staff welfare</li>
            <li>Facilitate communication between divisions and departments</li>
          </ul>

          <h2>Contact</h2>
          <p>
            For more information about the Faculty & Staff Senate, contact the Office of Academic Affairs at{" "}
            <a href="tel:5014201200">501-420-1200</a> or email{" "}
            <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a>.
          </p>
        </div>
      </SectionWrapper>

      <CTABand
        heading="Join Our Academic Community"
        description="Explore career opportunities at Arkansas Baptist College."
        primaryAction={{ label: "Human Resources", href: "/resources/human-resources" }}
        secondaryAction={{ label: "Administration", href: "/about/administration" }}
      />
    </main>
  )
}
