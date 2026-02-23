import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Scholarships | Arkansas Baptist College",
  description: "Learn about scholarship opportunities at Arkansas Baptist College including institutional, athletic, and external scholarships.",
}

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero
          title="Scholarships"
          subtitle="Arkansas Baptist College offers a range of scholarship opportunities to help students fund their education."
          label="Financial Aid"
        />

        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Institutional Scholarships</h2>
            <p>
              Arkansas Baptist College awards institutional scholarships based on academic achievement,
              leadership, community involvement, and financial need. Scholarship amounts and eligibility
              criteria vary. All applicants who complete the admissions process and submit a FAFSA are
              automatically considered for available institutional scholarships.
            </p>

            <h2>Athletic Scholarships</h2>
            <p>
              As a member of the National Association of Intercollegiate Athletics (NAIA), Arkansas Baptist
              College offers athletic scholarships across our competitive sports programs. Student-athletes
              interested in scholarship opportunities should contact the Athletic Department directly at{" "}
              <a href="https://abcbuffaloes.com" target="_blank" rel="noopener noreferrer">abcbuffaloes.com</a>.
            </p>

            <h2>External Scholarships</h2>
            <p>
              Students are encouraged to seek additional scholarship funding through external organizations.
              Below are some recommended resources:
            </p>
            <ul>
              <li><a href="https://www.fastweb.com" target="_blank" rel="noopener noreferrer">Fastweb</a> - Free scholarship search engine</li>
              <li><a href="https://www.scholarships.com" target="_blank" rel="noopener noreferrer">Scholarships.com</a> - Comprehensive scholarship database</li>
              <li><a href="https://www.tmcf.org" target="_blank" rel="noopener noreferrer">Thurgood Marshall College Fund</a> - Scholarships for HBCU students</li>
              <li><a href="https://uncf.org" target="_blank" rel="noopener noreferrer">UNCF</a> - United Negro College Fund scholarships</li>
              <li>State of Arkansas scholarship programs through{" "}
                <a href="https://scholarships.adhe.edu" target="_blank" rel="noopener noreferrer">ADHE</a>
              </li>
            </ul>

            <h2>How to Apply</h2>
            <ul>
              <li>Complete your <a href="/enrollment/apply">application to ABC</a></li>
              <li>Submit the FAFSA at <a href="https://studentaid.gov" target="_blank" rel="noopener noreferrer">studentaid.gov</a> using school code <strong>001087</strong></li>
              <li>Submit all required financial aid documents to the Office of Financial Aid</li>
              <li>Maintain satisfactory academic progress to retain scholarship awards</li>
            </ul>

            <h2>Questions?</h2>
            <p>
              Contact the Office of Student Financial Aid at{" "}
              <a href="tel:5014201200">501-420-1200</a> or{" "}
              <a href="mailto:financialaid@arkansasbaptist.edu">financialaid@arkansasbaptist.edu</a>.
            </p>
          </div>
        </SectionWrapper>

        <CTABand
          title="Start Your Application"
          description="Apply to Arkansas Baptist College and be automatically considered for institutional scholarships."
          primaryLabel="Apply to ABC"
          primaryHref="/enrollment/apply"
          secondaryLabel="Apply for Financial Aid"
          secondaryHref="/enrollment/apply-for-financial-aid"
        />
      </main>
      <Footer />
    </div>
  )
}
