import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "1098-T Tuition Statement | Arkansas Baptist College",
  description: "Information about the IRS Form 1098-T Tuition Statement and how to access yours from Arkansas Baptist College.",
}

export default function TuitionStatementPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero
          title="1098-T Tuition Statement"
          subtitle="Information about your IRS Form 1098-T for education tax credits."
          label="Enrollment"
        />

        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>What Is the 1098-T?</h2>
            <p>
              The IRS Form 1098-T, Tuition Statement, is an informational tax document issued to students
              who have made qualifying tuition and related expense payments during the calendar year. This
              form may be used when filing federal income taxes to claim education-related tax credits such
              as the American Opportunity Credit or the Lifetime Learning Credit.
            </p>

            <h2>Who Receives a 1098-T?</h2>
            <p>
              Arkansas Baptist College is required to issue a 1098-T to all students who had qualifying
              tuition transactions during the tax year. Forms are typically mailed to students by January 31
              for the previous tax year and are also available electronically.
            </p>

            <h2>How to Access Your 1098-T</h2>
            <ul>
              <li><strong>Online:</strong> Log in to the myABC student portal and navigate to Student Financials to view and download your 1098-T.</li>
              <li><strong>By Mail:</strong> Forms are mailed to your address on file. Ensure your address is current in the student portal.</li>
              <li><strong>In Person:</strong> Visit the Business Office to request a copy.</li>
            </ul>

            <h2>Understanding Your 1098-T</h2>
            <p>Key boxes on the form include:</p>
            <ul>
              <li><strong>Box 1:</strong> Payments received for qualified tuition and related expenses.</li>
              <li><strong>Box 5:</strong> Scholarships or grants received.</li>
              <li><strong>Box 7:</strong> Indicates whether Box 1 includes amounts for an academic period beginning in January through March of the next year.</li>
            </ul>
            <p>
              <strong>Important:</strong> Arkansas Baptist College cannot provide tax advice. Please consult
              a qualified tax professional or visit{" "}
              <a href="https://www.irs.gov/credits-deductions/individuals/education-credits" target="_blank" rel="noopener noreferrer">irs.gov</a>{" "}
              for information about education tax credits.
            </p>

            <h2>Questions?</h2>
            <p>
              Contact the Business Office at <a href="tel:5014201200">501-420-1200</a> or{" "}
              <a href="mailto:businessoffice@arkansasbaptist.edu">businessoffice@arkansasbaptist.edu</a>.
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
