import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Users, Building2, GraduationCap, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Organization Chart - Arkansas Baptist College",
  description: "View the organizational structure of Arkansas Baptist College leadership and departments. Effective January 1, 2026.",
}

const executiveLeadership = [
  { name: "Dr. George E. Herts", title: "President" },
  { name: "Ms. Patsy Biggs", title: "Executive Assistant to the President" },
  { name: "Dr. O Fitzgerald Hill", title: "Chief Operating Officer" },
  { name: "Phillip W.W.D. Rodgers, Sr.", title: "Executive Vice President" },
  { name: "Lorna Claudio", title: "Chief Financial Officer" },
  { name: "Vacant", title: "VP for Academic Affairs" },
  { name: "Dr. Darryl A. Peal", title: "Vice President, EMSA" },
  { name: "Dr. Jacqueline McGehee", title: "Title III Coordinator" },
]

const directReports = [
  { name: "Deborah Baker", title: "Adult Education" },
  { name: "Marlow Rockwell", title: "Athletic Director" },
  { name: "Dr. Latrice Small", title: "Institutional Research" },
  { name: "Cpt. Christopher Gregory", title: "Campus Safety" },
  { name: "Dr. Darryl A. Peal", title: "Title IX" },
]

const academicAffairs = [
  { name: "Dr. Tracey Moore", title: "Department Chair" },
  { name: "Dr. Jacqueline McGehee", title: "Librarian" },
  { name: "Vacant", title: "Upward Bound" },
  { name: "Vacant", title: "HLC/Accreditation" },
  { name: "Dr. T. Moore/P. Conard", title: "Registrar's Office" },
]

const studentServices = [
  { name: "Pamela Conard", title: "Admissions" },
  { name: "Vacant", title: "Residential Life/Housing" },
  { name: "Vacant", title: "Student Activities" },
]

const businessAffairs = [
  { name: "Ms. Pamela Brimley", title: "Human Resources" },
  { name: "Vacant", title: "Controller" },
  { name: "Atrisha Hollis", title: "Student Accounts" },
  { name: "Tracye Smith", title: "Food Services" },
]

const departments = [
  "Student Financial Aid",
  "Information Technology",
  "Auxiliary Services",
  "Facilities",
  "Band/Choir",
  "Transportation",
  "Recruitment",
  "Career Services",
  "Disability Services",
  "Alumni Relations",
  "Marketing & Communications",
  "Business Affairs",
  "Faculty",
  "Retention",
  "META 24",
  "Academic Advising",
  "Tutoring",
  "Summer Bridge",
]

export default function OrganizationChartPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Organization Chart"
        subtitle="About Us"
        description="The organizational structure of Arkansas Baptist College, from the Board of Trustees through executive leadership to academic and administrative departments. Effective January 1, 2026."
        breadcrumbs={[
          { label: "About Us", href: "/about/history" },
          { label: "Organization Chart", href: "/about/organization-chart" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-5xl">
          <div className="space-y-10">
            {/* Board of Trustees */}
            <div className="text-center">
              <div className="inline-block rounded-lg border-2 border-primary bg-primary/10 px-8 py-4">
                <p className="text-sm font-medium text-primary">Governing Body</p>
                <h2 className="font-serif text-xl font-bold text-foreground">Arkansas Baptist College Board of Trustees</h2>
              </div>
            </div>

            {/* Executive Leadership */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h2 className="font-serif text-2xl font-bold text-foreground">Executive Leadership</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {executiveLeadership.map((person) => (
                  <div
                    key={person.name + person.title}
                    className="rounded-lg border bg-card p-4 text-center"
                  >
                    <p className="font-semibold text-foreground">{person.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{person.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Reports */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                <h2 className="font-serif text-2xl font-bold text-foreground">Direct Reports</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {directReports.map((person) => (
                  <div
                    key={person.name + person.title}
                    className="rounded-lg border bg-card p-4 text-center"
                  >
                    <p className="font-semibold text-foreground">{person.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{person.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Affairs */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h2 className="font-serif text-2xl font-bold text-foreground">Academic Affairs</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {academicAffairs.map((person) => (
                  <div
                    key={person.name + person.title}
                    className="rounded-lg border bg-card p-4 text-center"
                  >
                    <p className="font-semibold text-foreground">{person.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{person.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Services */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h2 className="font-serif text-2xl font-bold text-foreground">Student Services</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {studentServices.map((person) => (
                  <div
                    key={person.name + person.title}
                    className="rounded-lg border bg-card p-4 text-center"
                  >
                    <p className="font-semibold text-foreground">{person.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{person.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Affairs */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <h2 className="font-serif text-2xl font-bold text-foreground">Business Affairs</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {businessAffairs.map((person) => (
                  <div
                    key={person.name + person.title}
                    className="rounded-lg border bg-card p-4 text-center"
                  >
                    <p className="font-semibold text-foreground">{person.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{person.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Departments */}
            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Departments & Services</h2>
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <span
                    key={dept}
                    className="rounded-full border bg-muted/50 px-4 py-2 text-sm text-muted-foreground"
                  >
                    {dept}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTABand
        heading="Meet Our Leadership"
        description="Learn more about the people leading Arkansas Baptist College."
        primaryAction={{ label: "Administration", href: "/about/administration" }}
        secondaryAction={{ label: "Board of Trustees", href: "/about/board-of-trustees" }}
      />
    </main>
  )
}
