import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Default Prevention | Arkansas Baptist College",
  description: "Information about student loan default prevention, resources for repayment, and ABC's commitment to helping borrowers manage their educational debt.",
}

export default function DefaultPreventionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero
          title="Default Prevention"
          subtitle="Arkansas Baptist College is committed to helping borrowers understand their repayment options and avoid student loan default."
          label="Financial Aid"
        />

        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>What Is Student Loan Default?</h2>
            <p>
              A federal student loan goes into default when a borrower fails to make payments for 270 days
              or more. Defaulting on a student loan has serious consequences including damage to credit scores,
              wage garnishment, loss of eligibility for future federal aid, and withholding of tax refunds.
            </p>

            <h2>Avoiding Default</h2>
            <p>
              Arkansas Baptist College works proactively with students and alumni to prevent loan default.
              If you are having trouble making your loan payments, contact your loan servicer immediately.
              Several options are available:
            </p>
            <ul>
              <li><strong>Income-Driven Repayment Plans:</strong> Monthly payments are based on your income and family size, making them more manageable.</li>
              <li><strong>Deferment:</strong> Temporary postponement of loan payments during qualifying circumstances such as enrollment in school, unemployment, or economic hardship.</li>
              <li><strong>Forbearance:</strong> Temporary reduction or suspension of payments when you are experiencing financial difficulty.</li>
              <li><strong>Loan Consolidation:</strong> Combining multiple federal loans into a single loan with one monthly payment.</li>
              <li><strong>Public Service Loan Forgiveness:</strong> Forgiveness of remaining loan balance after 120 qualifying payments while working in public service.</li>
            </ul>

            <h2>Know Your Loan Servicer</h2>
            <p>
              Your loan servicer is the company that manages billing and repayment for your federal student loans.
              To find your servicer, log in to{" "}
              <a href="https://studentaid.gov" target="_blank" rel="noopener noreferrer">studentaid.gov</a>{" "}
              and view your loan details under the "My Aid" section.
            </p>

            <h2>Exit Counseling</h2>
            <p>
              Federal regulations require that all student loan borrowers complete exit counseling when they
              graduate, leave school, or drop below half-time enrollment. Exit counseling provides important
              information about your loan repayment obligations and options. Complete exit counseling at{" "}
              <a href="https://studentaid.gov/exit-counseling" target="_blank" rel="noopener noreferrer">studentaid.gov/exit-counseling</a>.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you are struggling with student loan repayment or have questions about default prevention,
              contact the Office of Student Financial Aid at{" "}
              <a href="tel:5014201200">501-420-1200</a> or{" "}
              <a href="mailto:financialaid@arkansasbaptist.edu">financialaid@arkansasbaptist.edu</a>.
            </p>
          </div>
        </SectionWrapper>

        <CTABand
          title="Need Help With Repayment?"
          description="Our financial aid team is here to help you explore your options and stay on track."
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
