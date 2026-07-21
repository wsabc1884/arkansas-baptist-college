import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { FAQAccordion } from "@/components/faq-accordion"
import { Button } from "@/components/ui/button"
import {
  ClipboardCheck,
  Calendar,
  MapPin,
  GraduationCap,
  FileText,
  BookOpen,
  Users,
  ExternalLink,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Office of Admissions - Arkansas Baptist College",
  description:
    "Learn about admissions requirements, application process, and how to become a Buffalo at Arkansas Baptist College.",
}

const quickLinks = [
  {
    icon: ClipboardCheck,
    title: "Apply to ABC",
    description: "Start your application today",
    href: "/enrollment/apply",
  },
  {
    icon: Calendar,
    title: "Event Calendar",
    description: "Upcoming admissions events",
    href: "/enrollment/event-calendar",
  },
  {
    icon: MapPin,
    title: "Campus Tour",
    description: "Visit our campus in Little Rock",
    href: "/enrollment/campus-tour",
  },
  {
    icon: GraduationCap,
    title: "Financial Aid",
    description: "Explore funding options",
    href: "/enrollment/financial-aid",
  },
]

const faqItems = [
  {
    question: "Do I need ACT or SAT test scores to apply?",
    answer:
      "Yes. First-time freshmen are required to submit official ACT or SAT test scores as part of the admissions process. If scores are unavailable, placement testing through Testing Services may be used for course placement.",
  },
  {
    question: "Does ABC accept GED students?",
    answer:
      "Yes. Arkansas Baptist College welcomes students who have earned a GED certificate. You will need to submit your official GED transcript as part of the admissions process.",
  },
  {
    question: "How do I apply for financial aid?",
    answer:
      "Complete the Free Application for Federal Student Aid (FAFSA) at studentaid.gov using ABC's school code: 001087. Visit our Financial Aid page for step-by-step guidance and deadlines.",
  },
  {
    question: "When should I apply?",
    answer:
      "Arkansas Baptist College operates on a rolling admissions basis, so you can apply at any time. We encourage students to apply early to ensure the best opportunity for financial aid, housing, and course availability.",
  },
  {
    question: "Who do I contact with questions about admissions?",
    answer:
      "Contact the Office of Admissions at (501) 420-1234 or email admissions@arkansasbaptist.edu. Our admissions team is available Monday through Friday, 8:00 AM to 5:00 PM.",
  },
  {
    question: "Can I transfer credits from another institution?",
    answer:
      "Yes. Transfer students must submit official transcripts from all previously attended institutions. Credits will be evaluated by the Registrar's Office to determine transferability and equivalency.",
  },
]

const resourceLinks = [
  {
    icon: GraduationCap,
    title: "Financial Aid",
    description: "Explore grants, scholarships, and funding options",
    href: "/enrollment/financial-aid",
  },
  {
    icon: Calendar,
    title: "Academic Calendar",
    description: "View important dates and deadlines",
    href: "/academics/academic-calendar",
  },
  {
    icon: FileText,
    title: "Registrar",
    description: "Transcripts, registration, and academic records",
    href: "/academics/registrar",
  },
  {
    icon: Users,
    title: "Campus Life",
    description: "Student organizations, housing, and activities",
    href: "/student-life/campus-life",
  },
]

export default function OfficeOfAdmissionsPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Office of Admissions"
          subtitle="Enrollment"
          description="Your journey to becoming a Buffalo starts here. Arkansas Baptist College is committed to providing access and opportunity to every student."
          breadcrumbs={[
            { label: "Enrollment", href: "/enrollment/office-of-admissions" },
            { label: "Office of Admissions" },
          ]}
        />

        {/* Quick Links Grid */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="flex items-start gap-4 rounded-lg border p-5 transition-colors hover:border-primary hover:bg-muted/50"
                >
                  <link.icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">{link.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION 1: Open Admission Overview */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <div className="prose-abc">
              <h2>Open Admission Policy</h2>
              <p>
                Arkansas Baptist College maintains an <strong>open admission policy</strong>,
                welcoming all students who seek to further their education regardless of
                background. As the only historically Black Baptist institution west of the
                Mississippi River, ABC is committed to providing access, opportunity, and a
                supportive academic environment for every learner.
              </p>
              <p>
                Whether you are a recent high school graduate, a GED recipient, a transfer
                student, or a returning adult learner, ABC has a place for you. Our dedicated
                faculty and staff are here to help you succeed from enrollment through
                graduation.
              </p>
              <div className="mt-6 not-prose">
                <Button size="lg" className="bg-[#3d1a5c] hover:bg-[#3d1a5c]/90 !text-white [&_*]:!text-white" asChild>
                  <a
                    href="https://my.arkansasbaptist.edu/ICS/Admissions/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION 2: Admissions Checklist */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="prose-abc">
              <h2>First-Time Freshmen Requirements</h2>
              <p>
                If you are applying to college for the first time, you will need to submit
                the following:
              </p>
              <ul>
                <li>Completed application for admission</li>
                <li>Official high school transcript or GED certificate</li>
                <li>Submit official ACT/SAT test scores</li>
                <li>Immunization records (MMR, Hepatitis B, and other state-required vaccinations)</li>
                <li>Government-issued photo ID</li>
                <li>Application fee of $25</li>
                <li>
                  Completed <a href="https://studentaid.gov/h/apply-for-aid/fafsa" target="_blank" rel="noopener noreferrer">FAFSA</a>{" "}
                  (School Code: <strong>001087</strong>)
                </li>
              </ul>

              <div className="not-prose mt-4 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                <p className="text-sm font-medium text-foreground">Important: Official transcripts must be sent via Parchment or the National Student Clearinghouse. Emailed or faxed transcripts are not accepted.</p>
              </div>

              <h2>Transfer Student Requirements</h2>
              <p>
                Students transferring from another college or university should submit the
                following in addition to the items above:
              </p>
              <ul>
                <li>Completed application for admission</li>
                <li>Official transcripts from <strong>all</strong> previously attended colleges and universities</li>
                <li>
                  Must be in good academic standing (minimum 2.0 cumulative GPA) at the
                  institution most recently attended
                </li>
                <li>Students on academic probation or suspension may be considered for conditional admission</li>
              </ul>
              <p>
                Transfer credits will be evaluated by the{" "}
                <Link href="/academics/registrar">Registrar&apos;s Office</Link> to determine
                transferability and course equivalency.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION 3: Where to Submit Documents */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <div className="prose-abc">
              <h2>Where to Submit Documents</h2>
              <p>
                All admissions documents may be submitted by mail, email, or in person:
              </p>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold text-foreground">By Mail</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Office of Admissions<br />
                  Arkansas Baptist College<br />
                  1600 Dr. Martin Luther King Jr. Drive<br />
                  Little Rock, AR 72202
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold text-foreground">By Email</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  <a href="mailto:admissions@arkansasbaptist.edu" className="text-primary hover:underline">
                    admissions@arkansasbaptist.edu
                  </a>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Please include your full name and date of birth in the subject line.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold text-foreground">By Phone</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  <a href="tel:5014201234" className="text-primary hover:underline">
                    (501) 420-1234
                  </a>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Monday &ndash; Friday<br />
                  8:00 AM &ndash; 5:00 PM CST
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION 4: Frequently Asked Questions */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-muted-foreground">
              Find answers to common questions about the admissions process at ABC.
            </p>
            <div className="mt-8">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION 5: Academic Advisors */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Admissions Staff</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { name: "Pamela Conard", title: "Director of Admissions" },
                { name: "Gantonio Stubbs", title: "Admissions Recruiter" },
                { name: "Nicholas Sanders", title: "Admissions Recruiter" },
                { name: "Tevante Harris", title: "Admissions Recruiter" },
              ].map((person) => (
                <div key={person.name} className="rounded-lg border bg-card p-5">
                  <h3 className="font-semibold text-foreground">{person.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{person.title}</p>
                </div>
              ))}
            </div>

            <div className="prose-abc mt-10">
              <h2>Academic Advisors by Department</h2>
              <p>Once admitted, you will be assigned an advisor based on your declared major. Department chairs serve as primary academic advisors:</p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { dept: "Business, Entrepreneurship & Technology", name: "Dr. Tracey Moore (Interim)" },
                { dept: "Interdisciplinary Studies", name: "Philis Taylor" },
                { dept: "Religious Studies", name: "Rev. Clifton Conley, DMIN." },
                { dept: "Social & Behavioral Sciences", name: "Tracey D. Moore, PhD (Interim)" },
              ].map((advisor) => (
                <div key={advisor.dept} className="rounded-lg border bg-card p-4">
                  <p className="text-sm font-medium text-foreground">{advisor.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{advisor.dept}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION 6: Internal Resource Links */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Helpful Resources
            </h2>
            <p className="mt-2 text-muted-foreground">
              Explore additional resources to support your enrollment journey.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {resourceLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group flex items-start gap-4 rounded-lg border p-5 transition-colors hover:border-primary hover:bg-muted/50"
                >
                  <link.icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                  <ArrowRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION 7: Primary CTA */}
        <CTABand
          heading="Ready to Become a Buffalo?"
          description="Start your application today and take the first step toward your future at Arkansas Baptist College."
          primaryAction={{ label: "Apply Now", href: "/enrollment/apply" }}
          secondaryAction={{
            label: "Schedule a Tour",
            href: "/enrollment/campus-tour",
          }}
        />
      </main>
    </div>
  )
}
