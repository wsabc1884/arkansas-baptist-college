import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Consumer Information | Arkansas Baptist College",
  description:
    "Consumer information disclosures as required by the Higher Education Opportunity Act (HEOA) of 2008 at Arkansas Baptist College.",
}

type DisclosureLink = {
  label: string
  href: string
  external?: boolean
}

type DisclosureSection = {
  title: string
  links: DisclosureLink[]
}

const disclosureSections: DisclosureSection[] = [
  {
    title: "Student Outcomes",
    links: [
      { label: "Graduation and Retention Rate", href: "https://nces.ed.gov/collegenavigator/?q=arkansas+baptist&s=all&id=106245#retgrad", external: true },
      { label: "Student Profiles", href: "https://nces.ed.gov/collegenavigator/?q=arkansas+baptist&s=all&id=106245#enrolmt", external: true },
    ],
  },
  {
    title: "Employee Outcomes",
    links: [
      { label: "Employment Status", href: "https://nces.ed.gov/collegenavigator/?q=arkansas+baptist&s=all&id=106245", external: true },
    ],
  },
  {
    title: "Executive Financial Summary",
    links: [
      { label: "Budget", href: "https://nces.ed.gov/collegenavigator/?q=arkansas+baptist&s=all&id=106245#expenses", external: true },
    ],
  },
  {
    title: "General Institutional Information",
    links: [
      { label: "Admissions and Registration", href: "/enrollment/office-of-admissions" },
      { label: "Academic Programs", href: "/academics/departments" },
      { label: "Arkansas Baptist College Academic Catalog", href: "/academics/academic-catalog" },
      { label: "Accreditation", href: "/about/history" },
      { label: "Academic Success and Career Center", href: "/academics/career-services" },
      { label: "Computer Use", href: "/about/technology-services" },
      { label: "Veterans Affairs", href: "/academics/veterans-affairs" },
      { label: "Copyright Infringement", href: "/about/technology-services" },
      { label: "Faculty and Staff Information", href: "/resources/directory" },
      { label: "Illegal File Sharing Policy", href: "/about/technology-services" },
      { label: "Net Price Calculator", href: "https://nces.ed.gov/collegenavigator/?q=arkansas+baptist&s=all&id=106245#expenses", external: true },
      { label: "Cost of Attendance", href: "/enrollment/tuition-fees" },
      { label: "ABC FERPA 2020", href: "/academics/registrar" },
      { label: "Student Diversity", href: "https://nces.ed.gov/collegenavigator/?q=arkansas+baptist&s=all&id=106245#enrolmt", external: true },
      { label: "Student Activities", href: "/student-life/organizations" },
      { label: "Students with Disabilities", href: "/academics/academic-advising" },
      { label: "Textbook Information", href: "/academics/academic-catalog" },
      { label: "Transfer Credit Policies", href: "/enrollment/office-of-admissions" },
    ],
  },
  {
    title: "Health and Safety",
    links: [
      { label: "Campus Crime and Fire Information", href: "/resources/campus-safety" },
      { label: "Campus Sex Crimes Prevention Act", href: "/resources/campus-safety" },
      { label: "Drug and Alcohol Abuse Prevention Program", href: "/student-life/campus-life" },
      { label: "Active Shooter Instructions", href: "/resources/campus-safety" },
      { label: "Emergency Procedures", href: "/resources/campus-safety" },
      { label: "Vaccination Policies", href: "/enrollment/office-of-admissions" },
    ],
  },
  {
    title: "Intercollegiate Athletics",
    links: [
      { label: "Program Participation Rates and Financial Support Data (Equity in Athletics Disclosure Act)", href: "https://ope.ed.gov/athletics/", external: true },
    ],
  },
  {
    title: "Information Technology",
    links: [
      { label: "Cyber Security Policy", href: "/about/technology-services" },
    ],
  },
  {
    title: "Student Financial Assistance",
    links: [
      { label: "Estimate Your Federal Aid", href: "https://studentaid.gov/aid-estimator/", external: true },
      { label: "Free Application for Federal Student Aid (FAFSA)", href: "https://studentaid.gov/h/apply-for-aid/fafsa", external: true },
      { label: "Assistance Available from Federal Aid Programs", href: "/enrollment/financial-aid" },
      { label: "Assistance Available from State Programs", href: "/enrollment/financial-aid" },
      { label: "Assistance Available from Local and Institutional Aid Programs", href: "/enrollment/scholarships" },
      { label: "Financial Aid Contact Information", href: "/enrollment/financial-aid" },
      { label: "Federal Student Financial Aid Penalties for Drug Law Violations", href: "/enrollment/financial-aid" },
      { label: "Code of Conduct for Student Loan Related Activities", href: "/enrollment/financial-aid" },
      { label: "Loan Counseling", href: "https://studentaid.gov/app/counselingInstructions.action?counselingType=entrance", external: true },
      { label: "National Student Loan Data System for Students", href: "https://nslds.ed.gov/nslds/nslds_SA/", external: true },
      { label: "Alternative Loans", href: "/enrollment/financial-aid" },
      { label: "Institutional Refund Policy, Requirements for Withdrawal, and Return of Federal Financial Aid", href: "/enrollment/financial-aid" },
      { label: "Student Loan Information from the U.S. Department of Education", href: "https://studentaid.gov/", external: true },
      { label: "Federal Student Aid Ombudsman Group", href: "https://studentaid.gov/feedback-ombudsman/disputes/prepare", external: true },
      { label: "Resolving Student Loan Disputes", href: "https://studentaid.gov/feedback-ombudsman/disputes/prepare", external: true },
      { label: "Default Prevention", href: "/enrollment/default-prevention" },
      { label: "Default Resolution Form", href: "/enrollment/default-prevention" },
      { label: "Statement of Educational Purpose & ID", href: "/enrollment/financial-aid-forms" },
      { label: "Unusual Enrollment History", href: "/enrollment/financial-aid" },
      { label: "Verification Policy", href: "/enrollment/financial-aid" },
      { label: "Financial Aid Disbursement Information", href: "/enrollment/financial-aid" },
      { label: "Financial Awareness Counseling Tool", href: "https://studentaid.gov/resources/financial-awareness-counseling", external: true },
      { label: "Satisfactory Academic Progress", href: "/enrollment/sap" },
      { label: "Apply for Financial Aid", href: "/enrollment/apply-for-financial-aid" },
      { label: "Financial Aid Forms", href: "/enrollment/financial-aid-forms" },
    ],
  },
  {
    title: "Institutional Policies",
    links: [
      { label: "Assignment of Credit Hours Policy", href: "/documents/assignment-of-credit-hours-policy.pdf", external: true },
      { label: "Student Complaint Process", href: "/documents/student-complaint-process.pdf", external: true },
      { label: "Data Retention Policy", href: "/documents/data-retention-policy.pdf", external: true },
      { label: "Student Identification Policy", href: "/resources/consumer-information/student-identification-policy" },
      { label: "Academic Expression Policy", href: "/documents/academic-expression-policy.pdf", external: true },
    ],
  },
  {
    title: "Policy and Agreements",
    links: [
      { label: "Baptist Health MOU", href: "/about/partnerships" },
      { label: "VA Benefits Addendum", href: "/academics/veterans-affairs" },
      { label: "ABC Constitution and Citizenship Day", href: "/about/history" },
    ],
  },
  {
    title: "Enrollment Management",
    links: [
      { label: "Credit Hour Policy", href: "/academics/registrar" },
    ],
  },
  {
    title: "Voter Registration Information",
    links: [
      { label: "State of Arkansas", href: "https://www.sos.arkansas.gov/elections/voter-information", external: true },
      { label: "Out-of-State Residents", href: "https://vote.gov/", external: true },
    ],
  },
]

export default function ConsumerInformationPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Consumer Information"
          subtitle="Resources"
          description="Institutional disclosures as required by the Higher Education Opportunity Act (HEOA) of 2008."
          breadcrumbs={[
            { label: "Resources", href: "/resources/consumer-information" },
            { label: "Consumer Information" },
          ]}
        />

        {/* HEOA Introduction */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Arkansas Baptist College Consumer Information Disclosures</h2>
            <p>
              The Higher Education Opportunity Act (HEOA) of 2008 requires that colleges and universities make available to current and prospective students important information concerning each institution&apos;s academic programs, retention rates, graduation rates, crime reports, financial aid procedures and more in an effort to ensure fairness and transparency for all higher education consumers. Arkansas Baptist College has developed this web page for current and prospective students to access the necessary information according to HEOA.
            </p>
            <p>
              For additional information about Arkansas Baptist College, please see the{" "}
              <a href="https://nces.ed.gov/collegenavigator/?q=arkansas+baptist&s=all&id=106245" target="_blank" rel="noopener noreferrer">
                College Navigator Website
              </a>{" "}
              maintained by the U.S. Department of Education in which you can compare Arkansas Baptist College to over 7,000 colleges and universities across the United States.
            </p>
          </div>
        </SectionWrapper>

        {/* Disclosure Sections */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6">
              {disclosureSections.map((section) => (
                <div key={section.title} className="rounded-lg border bg-card p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground">{section.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                          >
                            {link.label}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          <Link href={link.href} className="text-sm text-primary hover:underline">
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Contact */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Contact</h2>
            <p>For questions about consumer information disclosures, contact the Office of Institutional Research at <a href="tel:5014201200">501-420-1200</a>.</p>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
