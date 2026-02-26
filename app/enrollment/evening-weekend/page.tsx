import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Button } from "@/components/ui/button"
import {
  Clock,
  BookOpen,
  Users,
  Briefcase,
  GraduationCap,
  ExternalLink,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Evening & Weekend College - Arkansas Baptist College",
  description:
    "Evening and Weekend College adult degree program at Arkansas Baptist College for working adults and non-traditional students seeking flexible scheduling.",
}

const degreeOptions = [
  {
    icon: Briefcase,
    title: "Business Administration",
    description: "Build leadership and management skills for the modern workforce.",
    href: "/academics/business-administration",
  },
  {
    icon: BookOpen,
    title: "Interdisciplinary Studies",
    description: "A flexible degree path combining multiple disciplines.",
    href: "/academics/interdisciplinary-studies",
  },
  {
    icon: Users,
    title: "Public Administration",
    description: "Prepare for leadership in government and nonprofit organizations.",
    href: "/academics/public-administration",
  },
  {
    icon: GraduationCap,
    title: "Religious Studies",
    description: "Explore theology, ministry, and faith-based leadership.",
    href: "/academics/religious-studies",
  },
]

export default function EveningWeekendPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Evening & Weekend College Adult Degree"
          subtitle="Enrollment"
          description="Flexible scheduling for working adults who want to earn their degree without putting life on hold."
          breadcrumbs={[
            { label: "Enrollment", href: "/enrollment/office-of-admissions" },
            {
              label: "Evening & Weekend College",
            },
          ]}
        />

        {/* SECTION 1 — Program Overview (Expanded) */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <div className="prose-abc">
              <h2>Program Overview</h2>
              <p>
                The Evening & Weekend College (EWC) at Arkansas Baptist College is
                specifically designed for <strong>working adults and non-traditional
                students</strong> who need a flexible path to earning their degree. Whether
                you are balancing a career, family responsibilities, or both, EWC offers a
                supportive academic environment that works around your schedule &mdash; not
                the other way around.
              </p>
              <p>
                Rooted in the faith-informed mission of Arkansas Baptist College, the
                program provides the same rigorous academic experience as our traditional
                daytime programs. Small class sizes, dedicated faculty, and personalized
                academic advising ensure that adult learners receive the attention and
                resources they need to succeed.
              </p>
              <p>
                The Evening & Weekend College is ideal for:
              </p>
              <ul>
                <li>Working adults looking to complete a degree they started elsewhere</li>
                <li>Professionals seeking career advancement or a career change</li>
                <li>Students returning to college after an extended break</li>
                <li>Community members who want to earn a degree on a flexible schedule</li>
                <li>First-time students who cannot attend daytime classes</li>
              </ul>
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION 2 — Program Format & Structure */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Program Format & Structure
            </h2>
            <p className="mt-2 text-muted-foreground">
              Designed around the schedules of working adults.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold text-foreground">
                  Class Meeting Times
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Evening classes meet Monday through Thursday, typically from
                  6:00 PM to 9:00 PM. Weekend sessions are held on Saturdays.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold text-foreground">
                  Delivery Method
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Courses are offered in-person on ABC&apos;s campus in Little Rock.
                  Select courses may be available in a hybrid format when applicable.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold text-foreground">
                  Program Pacing
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The EWC follows a traditional semester calendar with the option
                  for accelerated course completion in select programs, allowing
                  students to finish their degree at a pace that fits their life.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold text-foreground">
                  Credit Transfer
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Previously earned college credits may be evaluated for transfer.
                  Contact the{" "}
                  <Link
                    href="/academics/registrar"
                    className="text-primary hover:underline"
                  >
                    Registrar&apos;s Office
                  </Link>{" "}
                  for a transcript evaluation.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION 3 — Degree Options */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Degree Options
            </h2>
            <p className="mt-2 text-muted-foreground">
              The following degree programs are available through the Evening &
              Weekend College.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {degreeOptions.map((program) => (
                <Link
                  key={program.title}
                  href={program.href}
                  className="group flex items-start gap-4 rounded-lg border bg-card p-5 transition-colors hover:border-primary hover:bg-muted/50"
                >
                  <program.icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {program.description}
                    </p>
                  </div>
                  <ArrowRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>

          </div>
        </SectionWrapper>

        {/* SECTION 4 — Admissions Requirements for EWC */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="prose-abc">
              <h2>Admissions Requirements</h2>
              <p>
                Admission to the Evening & Weekend College follows the same open
                admissions policy as all ABC programs. To enroll, students must
                submit the following:
              </p>
              <ul>
                <li>Completed application for admission</li>
                <li>Official high school transcript or GED certificate</li>
                <li>
                  Official transcripts from all previously attended colleges or
                  universities (transfer students)
                </li>
                <li>Government-issued photo ID</li>
                <li>Immunization records</li>
                <li>Application fee of $25</li>
                <li>
                  Completed{" "}
                  <a
                    href="https://studentaid.gov/h/apply-for-aid/fafsa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FAFSA
                  </a>{" "}
                  (School Code: <strong>001087</strong>)
                </li>
              </ul>
              <p>
                Transfer students must be in good academic standing (minimum 2.0
                cumulative GPA) at the institution most recently attended. Students
                on academic probation or suspension may be considered for
                conditional admission.
              </p>
              <p>
                For full admissions details, visit the{" "}
                <Link href="/enrollment/office-of-admissions">
                  Office of Admissions
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION 5 — Financial Aid Information */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <div className="prose-abc">
              <h2>Financial Aid</h2>
              <p>
                Evening & Weekend College students are eligible for the same
                financial aid opportunities available to all ABC students,
                including federal grants, state scholarships, institutional aid,
                and student loans. Many adult learners qualify for financial
                assistance that can significantly reduce or cover the cost of
                tuition.
              </p>
              <p>
                To get started, complete the{" "}
                <a
                  href="https://studentaid.gov/h/apply-for-aid/fafsa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Free Application for Federal Student Aid (FAFSA)
                </a>{" "}
                using ABC&apos;s school code: <strong>001087</strong>.
              </p>
              <p>
                For personalized guidance, visit the{" "}
                <Link href="/enrollment/financial-aid">Financial Aid</Link> page
                or contact the Financial Aid Office directly.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION 6 — Contact Information */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Contact Information
            </h2>
            <p className="mt-2 text-muted-foreground">
              Have questions about the Evening & Weekend College? We are here to
              help.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold text-foreground">
                  Evening & Weekend College
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Arkansas Baptist College<br />
                  1600 Dr. Martin Luther King Jr. Drive<br />
                  Little Rock, AR 72202
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Phone:{" "}
                  <a
                    href="tel:5014201200"
                    className="text-primary hover:underline"
                  >
                    501-420-1200
                  </a>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:info@arkansasbaptist.edu"
                    className="text-primary hover:underline"
                  >
                    info@arkansasbaptist.edu
                  </a>
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold text-foreground">Office of Admissions</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  For questions about EWC enrollment, contact the Office of Admissions directly.
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Phone: <a href="tel:5014201234" className="text-primary hover:underline">(501) 420-1234</a><br />
                  Email: <a href="mailto:admissions@arkansasbaptist.edu" className="text-primary hover:underline">admissions@arkansasbaptist.edu</a>
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION 7 — CTA Block */}
        <CTABand
          heading="Ready to Earn Your Degree on Your Schedule?"
          description="The Evening & Weekend College at ABC makes it possible to advance your education while balancing work and life."
          primaryAction={{
            label: "Apply Now",
            href: "/enrollment/apply",
          }}
          secondaryAction={{
            label: "Speak With Admissions",
            href: "/enrollment/office-of-admissions",
          }}
        />
      </main>
    </div>
  )
}
