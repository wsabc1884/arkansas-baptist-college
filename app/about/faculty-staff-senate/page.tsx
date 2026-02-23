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
        <div className="mx-auto max-w-3xl">
          {/* CONTENT PENDING VERIFICATION */}
          <div className="rounded-lg border-2 border-dashed border-amber-400 bg-amber-50 p-6">
            <h2 className="text-lg font-bold text-amber-800">CONTENT PENDING VERIFICATION</h2>
            <ul className="mt-3 space-y-1 text-sm text-amber-700">
              <li><strong>Intended page title:</strong> Faculty & Staff Senate</li>
              <li><strong>Intended route:</strong> /about/faculty-staff-senate</li>
              <li><strong>Suspected source URL(s):</strong> arkansasbaptist.edu/about/faculty-staff-senate/ and arkansasbaptist.edu/faculty-staff-senate/ (both returned empty)</li>
              <li><strong>What is missing:</strong> Senate membership, meeting schedule, bylaws, and contact information</li>
            </ul>
          </div>

          <div className="mt-10 prose-abc">
            <h2>Purpose</h2>
            <p>
              The Faculty & Staff Senate serves as the representative governance body for faculty and staff at Arkansas Baptist College. The Senate provides a formal channel for communication between faculty, staff, and the administration on matters of institutional policy, academic standards, and campus operations.
            </p>

            <h2>Contact</h2>
            <p>
              For more information about the Faculty & Staff Senate, contact the Office of Academic Affairs at{" "}
              <a href="tel:5014201200">501-420-1200</a> or email{" "}
              <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a>.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Migration Note */}
      {/* Source: arkansasbaptist.edu/faculty-staff-senate/ (no content returned) */}
      {/* Confidence: Low - no source content available */}
      {/* Missing: Full senate membership, meeting schedule, bylaws, constitution */}

      <CTABand
        heading="Join Our Academic Community"
        description="Explore career opportunities at Arkansas Baptist College."
        primaryAction={{ label: "Human Resources", href: "/resources/human-resources" }}
        secondaryAction={{ label: "Administration", href: "/about/administration" }}
      />
    </main>
  )
}
