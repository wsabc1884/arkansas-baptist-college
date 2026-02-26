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
    <div className="min-h-screen">
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

      {/* Primary Apply CTA */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">Start Your Application</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Ready to become a Buffalo? Complete your application online through our admissions portal.
          </p>
          <a
            href="https://arkansasbaptistcolleg.my.site.com/application"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            Apply Now
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
          <p className="mt-4 text-sm text-muted-foreground">Application fee: $25 (non-refundable)</p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <div className="mx-auto max-w-3xl prose-abc">
          <h2>How to Apply</h2>
          <p>
            Applying to Arkansas Baptist College is straightforward. Follow the steps below to complete your application:
          </p>
          <ol>
            <li><strong>Complete the Online Application:</strong> Fill out the <a href="https://arkansasbaptistcolleg.my.site.com/application" target="_blank" rel="noopener noreferrer">online application for admission</a>.</li>
            <li><strong>Submit Required Documents:</strong> Provide official high school transcripts or GED certificate, and official transcripts from all previously attended colleges (transfer students). Official transcripts must be sent via Parchment or the National Student Clearinghouse.</li>
            <li><strong>Submit Official ACT/SAT Scores:</strong> First-time freshmen are required to submit official test scores.</li>
            <li><strong>Pay the Application Fee:</strong> The application fee is $25.</li>
            <li><strong>Apply for Financial Aid:</strong> Complete the <Link href="/enrollment/apply-for-financial-aid">FAFSA</Link> to determine your eligibility for grants, scholarships, and loans. School code: <strong>001087</strong>.</li>
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
            <a href="tel:5014201234">(501) 420-1234</a> or email{" "}
            <a href="mailto:admissions@arkansasbaptist.edu">admissions@arkansasbaptist.edu</a>.
          </p>
        </div>
      </SectionWrapper>

      <CTABand
        heading="Need Help with Financial Aid?"
        description="Learn about scholarships, grants, and other funding opportunities."
        primaryAction={{ label: "Financial Aid", href: "/enrollment/financial-aid" }}
        secondaryAction={{ label: "Scholarships", href: "/enrollment/scholarships" }}
      />
      </main>
    </div>
  )
}
