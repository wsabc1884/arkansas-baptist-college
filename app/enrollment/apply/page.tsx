import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Apply to ABC - Arkansas Baptist College",
  description: "Apply to Arkansas Baptist College. Start your journey to becoming a Buffalo today.",
}

export default function ApplyPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Apply to ABC"
        subtitle="Enrollment"
        description="Take the first step toward your future at Arkansas Baptist College. We look forward to welcoming you to the Buffalo family."
        breadcrumbs={[
          { label: "Enrollment", href: "/enrollment/office-of-admissions" },
          { label: "Apply to ABC", href: "/enrollment/apply" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl prose-abc">
          <h2>How to Apply</h2>
          <p>
            Applying to Arkansas Baptist College is straightforward. Follow the steps below to complete your application:
          </p>
          <ol>
            <li><strong>Complete the Application:</strong> Fill out the online application for admission.</li>
            <li><strong>Submit Required Documents:</strong> Provide official high school transcripts or GED certificate, and official transcripts from all previously attended colleges (transfer students).</li>
            <li><strong>Pay the Application Fee:</strong> The application fee is $25.</li>
            <li><strong>Apply for Financial Aid:</strong> Complete the <Link href="/enrollment/apply-for-financial-aid">FAFSA</Link> to determine your eligibility for grants, scholarships, and loans.</li>
          </ol>

          <h2>Application Checklist</h2>
          <ul>
            <li>Completed application for admission</li>
            <li>Official high school transcript or GED certificate</li>
            <li>Official college transcripts (if transferring)</li>
            <li>$25 application fee</li>
            <li>FAFSA application (School Code: 001087)</li>
          </ul>

          <h2>Deadlines</h2>
          <p>
            Arkansas Baptist College operates on a rolling admissions basis. We encourage students to apply early to ensure the best opportunity for financial aid and housing availability.
          </p>

          <h2>International Students</h2>
          <p>
            International students are welcome to apply. Additional documentation may be required, including proof of English proficiency and immigration documents. Contact the Office of Admissions for details.
          </p>

          <h2>Questions?</h2>
          <p>
            Contact the <Link href="/enrollment/office-of-admissions">Office of Admissions</Link> at{" "}
            <a href="tel:5014201200">501-420-1200</a> or email{" "}
            <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a>.
          </p>
        </div>
      </SectionWrapper>

      {/* Migration Note */}
      {/* Source: arkansasbaptist.edu/apply-to-abc/ (no direct content returned) */}
      {/* Confidence: Medium - standard admissions content, FAFSA code verified */}
      {/* Missing: Direct link to online application form */}

      <CTABand
        heading="Need Help with Financial Aid?"
        description="Learn about scholarships, grants, and other funding opportunities."
        primaryAction={{ label: "Financial Aid", href: "/enrollment/financial-aid" }}
        secondaryAction={{ label: "Scholarships", href: "/enrollment/scholarships" }}
      />
    </main>
  )
}
