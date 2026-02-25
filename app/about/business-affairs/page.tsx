import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Business Affairs - Arkansas Baptist College",
  description: "The Business Office at Arkansas Baptist College oversees fiscal resources, payroll, student accounts, and financial management.",
}

export default function BusinessAffairsPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Business Affairs"
        subtitle="About Us"
        description="Ensuring sufficient and well-managed fiscal resources that maintain financial stability and support the academic mission of the College."
        breadcrumbs={[
          { label: "About Us", href: "/about/history" },
          { label: "Business Affairs", href: "/about/business-affairs" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl prose-abc">
          <h2>Business Office</h2>
          <p>
            The Business Office is responsible for ensuring sufficient and well-managed fiscal resources that will maintain financial stability and support the academic mission of the college. The Comptroller is tasked to oversee the day to day administration and management of the operations and affairs of the Business Office as well as the two auxiliary enterprises, the Bookstore and the Cafeteria of the college. The Comptroller reports directly to the Vice President for Administrative Services.
          </p>
          <p>
            The Business Office handles funds and treasury management, general budgeting, accounting, financial reporting, payroll, financial records of students, asset management, fiscal operations of state campuses and other business affairs of the college. The Business Office Manager handles the funds, treasury and budget. The General Accountant handles the general accounting and financial reporting. The Payroll Accountant handles all affairs related to payroll, and the State Campus Accountant handles the fiscal operations at state campuses including fiscal records of all students.
          </p>

          <h2>Departments & Functions</h2>
          <p>The Business Office consists of the following sub-functions and departments:</p>
          <ul>
            <li>Accounts Payable</li>
            <li>Accounts Receivable</li>
            <li>Budget</li>
            <li>Position Control</li>
            <li>Financial Aid Accounting</li>
            <li>Construction Accounting</li>
            <li>Cashiers</li>
            <li>General Accounting</li>
            <li>Grants and Contracts</li>
            <li>Payroll</li>
            <li>Travel</li>
            <li>Third-Party Vendors</li>
            <li>Student Accounts</li>
            <li>Student Housing & Dining</li>
            <li>Student ID</li>
          </ul>

          <h2>Contact</h2>
          <p>
            For questions about tuition payments, student accounts, payroll, or other business office matters, please contact:
          </p>
          <p>
            <strong>Business Office</strong><br />
            Arkansas Baptist College<br />
            1600 Dr. Martin Luther King Jr. Drive<br />
            Little Rock, AR 72202<br />
            Phone: <a href="tel:5014201200">501-420-1200</a><br />
            Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a>
          </p>
        </div>
      </SectionWrapper>

      <CTABand
        heading="Need Help with Your Student Account?"
        description="The Business Office is here to assist with tuition, payments, and financial records."
        primaryAction={{ label: "Pay My Tuition", href: "/enrollment/pay-tuition" }}
        secondaryAction={{ label: "Tuition & Fees", href: "/enrollment/tuition-and-fees" }}
      />
    </main>
  )
}
