import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Financial Aid Forms | Arkansas Baptist College",
  description: "Download and submit required financial aid forms for Arkansas Baptist College.",
}

const forms = [
  { name: "FAFSA Application", description: "Free Application for Federal Student Aid. ABC school code: 001087.", link: "https://studentaid.gov", external: true },
  { name: "Verification Worksheet", description: "Required if your FAFSA is selected for verification by the U.S. Department of Education.", link: "#", external: false },
  { name: "Dependency Override Form", description: "For students requesting independent status due to special circumstances.", link: "#", external: false },
  { name: "Satisfactory Academic Progress (SAP) Appeal", description: "Appeal form for students who have lost financial aid eligibility due to SAP standing.", link: "#", external: false },
  { name: "FERPA Release Authorization", description: "Authorizes the college to share educational records with designated individuals.", link: "#", external: false },
  { name: "Scholarship Application", description: "Application for institutional scholarship consideration.", link: "#", external: false },
]

export default function FinancialAidFormsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero
          title="Financial Aid Forms"
          subtitle="Download and submit the required forms to complete your financial aid file."
          label="Financial Aid"
        />

        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <p>
              The following forms may be required as part of your financial aid application. Not all forms
              apply to every student. The Office of Financial Aid will notify you of any additional documentation
              required for your file. All forms should be submitted to the Office of Financial Aid.
            </p>
          </div>

          <div className="mt-8 max-w-4xl mx-auto grid gap-4">
            {forms.map((form) => (
              <a
                key={form.name}
                href={form.link}
                target={form.external ? "_blank" : undefined}
                rel={form.external ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 rounded-lg border bg-card p-5 transition-colors hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{form.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{form.description}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="prose-abc max-w-4xl mx-auto mt-12">
            <h2>Submitting Your Forms</h2>
            <p>Completed forms can be submitted by:</p>
            <ul>
              <li><strong>In Person:</strong> Office of Financial Aid, Administration Building, Main Campus</li>
              <li><strong>Email:</strong> <a href="mailto:financialaid@arkansasbaptist.edu">financialaid@arkansasbaptist.edu</a></li>
              <li><strong>Fax:</strong> 501-420-1200</li>
              <li><strong>Mail:</strong> Office of Financial Aid, Arkansas Baptist College, 1600 Dr. Martin Luther King Jr. Drive, Little Rock, AR 72202</li>
            </ul>
          </div>
        </SectionWrapper>

        <CTABand
          title="Need Help?"
          description="The financial aid team is here to walk you through every step."
          primaryLabel="Contact Financial Aid"
          primaryHref="/enrollment/financial-aid"
          secondaryLabel="Apply for Financial Aid"
          secondaryHref="/enrollment/apply-for-financial-aid"
        />
      </main>
      <Footer />
    </div>
  )
}
