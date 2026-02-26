import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Apply for Financial Aid | Arkansas Baptist College",
  description:
    "Learn how to apply for federal financial aid at Arkansas Baptist College. FAFSA school code: 001087.",
}

export default function ApplyForFinancialAidPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
      <PageHero
        title="Apply for Financial Aid"
        description="The Office of Student Financial Aid administers federal, state, and institutional aid to help students meet their college expenses."
      />

      {/* Primary FAFSA CTA */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Financial assistance in the form of Federal Grants, Federal Loans, Work Study, and
            Scholarships is available to all students who complete the necessary federal aid
            application process and qualify for assistance.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" asChild>
              <a
                href="https://studentaid.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply for FAFSA at StudentAid.gov
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              This link opens the official federal FAFSA application at studentaid.gov (external site)
            </p>
            <p className="rounded-md bg-muted px-6 py-3 font-semibold text-foreground">
              ABC School Code: <span className="text-primary">001087</span>
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper variant="muted">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Financial Aid staff&apos;s mission is to help students pursue their educational goals
            by providing financial information and services in a professional and individualized
            manner. We are enthusiastic about assisting you as you complete the financial aid
            application process so that your eligibility can be determined and a financial aid award
            can be offered in a timely manner. We are dedicated to operating in accordance with
            federal, state, and university guidelines, as well as those set forth in our Code of
            Conduct and Statement of Ethical Principles.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed font-medium">
            We look forward to working with you!
          </p>
        </div>
      </SectionWrapper>

      {/* Steps to Apply */}
      <SectionWrapper variant="muted">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            Applying for Financial Aid
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            After you have completed and submitted your Application for Admission, your steps to
            applying for aid are:
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Step 1. Request an FSA ID
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Request an FSA ID via the U.S. Department of Education&apos;s web page at:{" "}
                <a
                  href="https://fsaid.ed.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  https://fsaid.ed.gov
                  <ExternalLink className="ml-1 inline h-3 w-3" aria-hidden="true" />
                </a>
                . You and your parent will need an FSA ID to sign your Free Application for Federal
                Student Aid (FAFSA). An FSA ID will be needed to log into any U.S. Department of
                Education (ED) sites.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Step 2. Complete the Free Application for Federal Student Aid (FAFSA)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                You must submit your FAFSA electronically via the U.S. Department of
                Education&apos;s (ED) webpage at{" "}
                <a
                  href="https://studentaid.ed.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  https://studentaid.ed.gov
                  <ExternalLink className="ml-1 inline h-3 w-3" aria-hidden="true" />
                </a>
                . You may also apply via the ED&apos;s phone app, MyStudentAid, currently available
                in both the Apple and Google Play stores.
              </p>
              <ul className="mt-3 list-disc ml-6 text-muted-foreground leading-relaxed space-y-1">
                <li>
                  Our <strong>School Code: 001087</strong> is required so that Arkansas Baptist
                  College will receive your processed FAFSA.
                </li>
                <li>
                  <strong>October 1</strong> of each year is the start date for completing your
                  online FAFSA Application.
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Step 3. Verification (if selected)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The U.S. Department of Education occasionally selects students applying for federal
                financial aid for a process called <em>&quot;Verification&quot;</em>. Students (as
                well as parents) are required to submit additional documentation.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Arkansas Baptist College has partnered with Inceptia, to provide students with a{" "}
                <em>&quot;Verification Gateway&quot;</em> to submit required information and
                documents online. On behalf of Arkansas Baptist College, Inceptia will send students
                an email notification with detailed instructions on how to quickly navigate the
                process to complete verification. When all of the documentation is received, your
                application will be <em>&quot;verified&quot;</em> (reviewed for accuracy). If errors
                are found, Inceptia will correct the FAFSA and submit it back to the federal
                processor to update (correct) your FAFSA.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Step 4. Apply for State Aid and Research Scholarships
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>State Aid Opportunities</strong> &ndash; Arkansas resident students can
                research and apply for state financial aid opportunities per the Arkansas Department
                of Higher Education (ADHE) at{" "}
                <a
                  href="https://adhe.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  https://scholarships.adhe.edu
                  <ExternalLink className="ml-1 inline h-3 w-3" aria-hidden="true" />
                </a>
                . Out-of-State students are encouraged to check with their state for state aid
                opportunities that could be used at out of state colleges.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                <strong>Scholarship Opportunities</strong> &ndash; Research scholarships via the U.S.
                Department of Labor at{" "}
                <a
                  href="https://www.careeronestop.org/Toolkit/Training/find-scholarships.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  CareerOneStop
                  <ExternalLink className="ml-1 inline h-3 w-3" aria-hidden="true" />
                </a>
                . There are numerous sites available to students research scholarships from
                foundations or donors independent of the college. We encourage students to seek
                scholarships to assist with paying their educational costs.
              </p>
            </div>

            {/* Step 5 */}
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Step 5. Accepting your Financial Aid Award
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Once your file is complete and verified (if selected), your eligibility is determined
                and you will be awarded. You can check your financial aid award and status online via
                the{" "}
                <a
                  href="https://my.arkansasbaptist.edu/ICS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  ABC NetPartner Financial Aid Portal
                  <ExternalLink className="ml-1 inline h-3 w-3" aria-hidden="true" />
                </a>
                .
              </p>
            </div>

            {/* Step 6 */}
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Step 6. Applying for Federal Direct Stafford Loans, if necessary
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <em>
                  (Additional information about federal loans on the Types of Financial Aid page.)
                </em>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Federal Direct Loans (Subsidized and Unsubsidized)</strong> may be included
                as part of your financial aid award package. If you are interested in getting student
                loans to assist with your educational expenses, you must accept and apply for them at{" "}
                <a
                  href="https://studentaid.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  https://studentaid.gov
                  <ExternalLink className="ml-1 inline h-3 w-3" aria-hidden="true" />
                </a>
                .
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                As a borrower of federal student loans, you must complete Entrance Counseling and
                sign a Master Promissory Note (MPN) via the U.S. Department of Education&apos;s (ED)
                at{" "}
                <a
                  href="https://studentaid.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  https://studentaid.gov
                  <ExternalLink className="ml-1 inline h-3 w-3" aria-hidden="true" />
                </a>
                . You will complete Entrance Counseling and sign the MPN once and will not have to
                complete this process again unless you leave Arkansas Baptist College.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                <strong>Alternative Loans</strong> &ndash; If you decide to apply for a private
                student loan, you will need to select a lender. Arkansas Baptist College has
                partnered with ELM Resources and a number of private lenders to help you understand
                what questions you should ask your lender before borrowing. For more information,
                please review the{" "}
                <a
                  href="https://www.arkansasbaptist.edu/apply-alternative-loan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  Apply for an Alternative Loan page
                  <ExternalLink className="ml-1 inline h-3 w-3" aria-hidden="true" />
                </a>
                .
              </p>
            </div>

            {/* Step 7 */}
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Step 7. Monitor your financial aid status at myABC Portal
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Visit{" "}
                <a
                  href="https://my.arkansasbaptist.edu/ICS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  my.arkansasbaptist.edu
                  <ExternalLink className="ml-1 inline h-3 w-3" aria-hidden="true" />
                </a>{" "}
                to check your financial aid status, view required documents, and manage your award.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Where to submit documents */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            Where to Submit Necessary Documents
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Documents not submitted through the online method can be mailed or emailed to:
          </p>
          <div className="rounded-lg bg-muted p-6">
            <p className="font-semibold text-foreground">
              Office of Student Financial Aid
            </p>
            <p className="text-muted-foreground mt-1">
              1600 Dr. Martin Luther King Jr. Drive
              <br />
              Little Rock, Arkansas 72202
            </p>
            <p className="text-muted-foreground mt-2">
              Email:{" "}
              <a href="mailto:finaid@arkansasbaptist.edu" className="font-medium text-primary hover:underline">
                finaid@arkansasbaptist.edu
              </a>
            </p>
            <p className="text-muted-foreground mt-1">
              Phone:{" "}
              <a href="tel:5014201226" className="font-medium text-primary hover:underline">
                (501) 420-1226
              </a>
            </p>
          </div>
        </div>
      </SectionWrapper>

      <CTABand
        heading="Ready to Start Your FAFSA?"
        description="Apply for federal student aid through the official FAFSA website. Remember to use ABC School Code: 001087."
        primaryAction={{
          label: "Apply for FAFSA at StudentAid.gov",
          href: "https://studentaid.gov/",
          external: true,
        }}
        secondaryAction={{
          label: "Contact Financial Aid Office",
          href: "mailto:finaid@arkansasbaptist.edu",
        }}
      />

      </main>
    </div>
  )
}
