import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Satisfactory Academic Progress (SAP) | Arkansas Baptist College",
  description: "Understand the Satisfactory Academic Progress standards required to maintain financial aid eligibility at Arkansas Baptist College.",
}

export default function SAPPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Satisfactory Academic Progress (SAP)"
          subtitle="Federal regulations require students receiving financial aid to maintain Satisfactory Academic Progress toward the completion of their degree."
          label="Financial Aid"
        />

        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>SAP Standards</h2>
            <p>
              Satisfactory Academic Progress is evaluated at the end of each semester for all financial aid
              recipients. Students must meet the following three components:
            </p>

            <h3>1. Qualitative Measure (GPA)</h3>
            <p>
              Students must maintain a minimum cumulative grade point average (GPA) based on their classification:
            </p>
            <ul>
              <li><strong>Freshman (0-29 credit hours):</strong> 1.50 cumulative GPA</li>
              <li><strong>Sophomore (30-59 credit hours):</strong> 1.75 cumulative GPA</li>
              <li><strong>Junior (60-89 credit hours):</strong> 2.00 cumulative GPA</li>
              <li><strong>Senior (90+ credit hours):</strong> 2.00 cumulative GPA</li>
            </ul>

            <h3>2. Quantitative Measure (Pace of Completion)</h3>
            <p>
              Students must successfully complete at least 67% of all cumulative credit hours attempted.
              Withdrawn, incomplete, failed, and repeated courses count as attempted but not completed.
            </p>

            <h3>3. Maximum Time Frame</h3>
            <p>
              Students must complete their degree within 150% of the published length of the program.
              For a 120-credit-hour program, the maximum time frame is 180 attempted credit hours.
            </p>

            <h2>SAP Status Levels</h2>
            <ul>
              <li><strong>Good Standing:</strong> Student meets all SAP requirements.</li>
              <li><strong>Financial Aid Warning:</strong> Student failed to meet SAP for the first time. Aid continues for one semester.</li>
              <li><strong>Financial Aid Suspension:</strong> Student failed to meet SAP after the warning period. Aid is suspended until standards are met or an appeal is approved.</li>
              <li><strong>Financial Aid Probation:</strong> Student on suspension whose appeal has been approved. Aid continues for one semester under an academic plan.</li>
            </ul>

            <h2>Appeal Process</h2>
            <p>
              Students who have lost financial aid eligibility may submit a SAP Appeal to the Office of
              Financial Aid. Appeals must include:
            </p>
            <ul>
              <li>A written statement explaining the extenuating circumstances that affected academic performance</li>
              <li>Documentation supporting the circumstances (e.g., medical records, death certificate)</li>
              <li>An academic plan developed with your academic advisor outlining how you will meet SAP requirements</li>
            </ul>
            <p>
              Appeal forms are available on the <a href="/enrollment/financial-aid-forms">Financial Aid Forms</a> page.
              Completed appeals should be submitted to the Office of Financial Aid for review.
            </p>

            <h2>Contact</h2>
            <p>
              Office of Student Financial Aid<br />
              Phone: <a href="tel:5014201226">(501) 420-1226</a><br />
              Email: <a href="mailto:financialaid@arkansasbaptist.edu">financialaid@arkansasbaptist.edu</a><br />
              SAP Appeals: <a href="mailto:sapappeals@arkansasbaptist.edu">sapappeals@arkansasbaptist.edu</a>
            </p>
          </div>
        </SectionWrapper>

        <CTABand
          title="Questions About Your Financial Aid?"
          description="Our team is here to help you understand your options and stay on track."
          primaryLabel="Contact Financial Aid"
          primaryHref="/enrollment/financial-aid"
          secondaryLabel="View Financial Aid Forms"
          secondaryHref="/enrollment/financial-aid-forms"
        />
      </main>
    </div>
  )
}
