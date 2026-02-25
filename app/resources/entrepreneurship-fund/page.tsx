import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DollarSign, Clock, ShieldCheck, FileCheck, Users, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "ABC Entrepreneurship Fund | Arkansas Baptist College",
  description:
    "The ABC Entrepreneurship Fund is a revolving micro-loan fund supporting current and former ABC students starting small businesses.",
}

const loanHighlights = [
  { icon: DollarSign, title: "Up to $5,000", description: "Maximum loan amount. Borrowers who perform as agreed may apply for additional loans." },
  { icon: Clock, title: "Up to 3.5 Years", description: "Loan term based on amount and cash flow. Up to 6 months interest-only. No early repayment penalty." },
  { icon: ShieldCheck, title: "No Collateral", description: "No collateral required. Borrowers sign a personal guarantee." },
  { icon: TrendingUp, title: "No Credit Check", description: "Loan decisions are not based on credit history. A credit improvement plan may be developed after approval." },
  { icon: Users, title: "Mentorship Included", description: "Approved borrowers are matched with a mentor and training opportunities." },
  { icon: FileCheck, title: "Revolving Fund", description: "All payments and interest revolve back into the fund for future entrepreneurs." },
]

export default function EntrepreneurshipFundPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero
          title="ABC Entrepreneurship Fund"
          subtitle="Resources"
          description="A revolving micro-loan fund supporting the start and growth of small businesses owned by current and former students of Arkansas Baptist College."
          breadcrumbs={[
            { label: "Resources", href: "/resources/entrepreneurship-fund" },
            { label: "Entrepreneurship Fund" },
          ]}
        />

        {/* About */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>About the Fund</h2>
            <p>
              The ABC Entrepreneurship Fund was established as a revolving micro-loan fund specifically to support the start and growth of small businesses owned by current and former students of Arkansas Baptist College (ABC) by providing loans that revolve and are re-loaned.
            </p>
            <p>
              ABC anticipates a minimum of 3 rounds of funding each year. To meet that goal and respond to demand, all loan payments and interest will be revolving&mdash;meaning they will be available for future entrepreneurs. ABC will not require collateral but will require a personal guarantee by the borrower and regular reporting. Additionally, ABC will provide access to a range of resources including, but not limited to, mentors, technical assistance providers, and training opportunities.
            </p>
            <h3>Goal</h3>
            <p>
              The goal of the ABC Entrepreneurship Fund is to support opportunities for current and former ABC Business students, especially those interested in starting their own businesses.
            </p>
            <h3>Eligible Businesses</h3>
            <p>Startup or existing businesses owned by current or former students of ABC in the state of Arkansas.</p>
          </div>
        </SectionWrapper>

        {/* Loan Highlights */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Loan Highlights</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {loanHighlights.map((item) => (
                <div key={item.title} className="rounded-lg border bg-card p-5">
                  <item.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Requirements & Process */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Additional Requirements</h2>
            <ul>
              <li>Borrowers must provide documentation of their business model and a detailed budget of how funds will be used.</li>
              <li>Approved borrowers will be matched with a Mentor, training opportunities, and may be asked to engage in one-on-one technical assistance.</li>
              <li>Quarterly reports will be required throughout the life of the loan and a final report will be required when the loan has been repaid.</li>
              <li>Borrowers must provide proof of appropriate business license, Federal Tax ID, evidence of personal or business checking account, and legal entities must register with Arkansas Secretary of State.</li>
              <li>Borrowers will sign a photo/marketing release document to enable ABC to use their story and image for marketing purposes.</li>
              <li>Borrowers must acknowledge the ABC Entrepreneurship Fund as a source of funding in their activities.</li>
              <li>Borrowers may be asked to engage in community outreach and marketing efforts on behalf of ABC.</li>
            </ul>

            <h2>Loan Approval</h2>
            <p>A committee will review all applications and make final decisions by a majority vote. Applicants may be asked to provide additional information or may be asked to meet with the committee.</p>

            <h2>Loan Closing Process</h2>
            <p>Borrowers will execute loan closing documents including:</p>
            <ul>
              <li>Promissory Note</li>
              <li>Loan Agreement</li>
              <li>Personal Guarantee</li>
              <li>Bank account information</li>
              <li>Photo/Marketing Release Form</li>
            </ul>
            <p>Upon receipt of the fully executed loan closing documents, a check will be issued to the borrower from ABC.</p>

            <h2>Interest Rate</h2>
            <p>Borrowers will be charged an Annual Percentage Rate that is competitive with the market. There will be no closing fees and the interest rate will remain the same throughout the term of the loan.</p>

            <h2>Contact</h2>
            <p>
              For more information, call <a href="tel:5014201317">501-420-1317</a> or email <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a>.
            </p>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Ready to Apply?"
          description="Take the first step toward funding your business idea with the ABC Entrepreneurship Fund."
          primaryAction={{ label: "Loan Application", href: "/resources/entrepreneurship-fund/apply" }}
          secondaryAction={{ label: "Contact Us", href: "/about/administration" }}
        />
      </main>
      <Footer />
    </div>
  )
}
