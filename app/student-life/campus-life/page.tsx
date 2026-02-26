import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

import { Users, Home, Shield, BookOpen, Scale, Calendar, Dumbbell, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Campus Life | Arkansas Baptist College",
  description:
    "Experience life at Arkansas Baptist College - the Division of Student Affairs provides programs and services to enrich your college experience.",
}

const sidebarSections = [
  {
    title: "Housing & Dining",
    icon: Home,
    links: [
      { label: "Housing", href: "/student-life/campus-life" },
      { label: "Housing Checklist", href: "/student-life/campus-life" },
      { label: "Campus Protocols", href: "/student-life/campus-life" },
    ],
  },
  {
    title: "Get Involved",
    icon: Users,
    links: [
      { label: "Student Organizations", href: "/student-life/organizations" },
    ],
  },
  {
    title: "Services",
    icon: Shield,
    links: [
      { label: "Campus Safety", href: "/resources/campus-safety" },
      { label: "Judicial Affairs", href: "/student-life/complaint-process" },
    ],
  },
  {
    title: "Student Quick Links",
    icon: BookOpen,
    links: [
      { label: "Academic Advising", href: "/academics/academic-advising" },
      { label: "Academic Calendar", href: "/academics/academic-calendar" },
      { label: "Apply for Financial Aid", href: "/enrollment/apply-for-financial-aid" },
      { label: "Student ID", href: "/student-life/campus-life" },
    ],
  },
  {
    title: "Student Policies",
    icon: Scale,
    links: [
      { label: "Consumer Information", href: "/resources/consumer-information" },
      { label: "Student Handbook", href: "/student-life/campus-life" },
      { label: "Student Complaint Process", href: "/student-life/complaint-process" },
    ],
  },
  {
    title: "Recreation",
    icon: Dumbbell,
    links: [
      { label: "Intramural Sports", href: "/student-life/campus-life" },
    ],
  },
]

const staffDirectory = [
  { name: "Olivia C. Henderson, M.Ed.", title: "Vice President for Student Affairs", email: "olivia.henderson@arkansasbaptist.edu" },
  { name: "Cleodis J. Colbert, M.Ed.", title: "Dean of Students and Title IX Coordinator", email: "cleodis.colbert@arkansasbaptist.edu" },
  { name: "Cody R. Charles, MBA", title: "Dean of Residential Life and Living Learning Communities", email: "cody.charles@arkansasbaptist.edu" },
  { name: "Lamarius Q. McGraw", title: "Director of Student Activities", email: "lamarius.mcgraw@arkansasbaptist.edu" },
]

export default function CampusLifePage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Campus Life"
          subtitle="Student Life"
          description="The Division of Student Affairs is deeply committed to Arkansas Baptist College's educational mission, providing programs and services designed to enrich your college experience."
          breadcrumbs={[
            { label: "Student Life", href: "/student-life/campus-life" },
            { label: "Campus Life" },
          ]}
        />

        {/* Vision, Mission, Focus */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-serif text-lg font-bold text-primary">Vision</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  We will provide an ABC experience in which every student will be supported by the campus environment and resources. We will build relationships with our students while preparing them for the challenges of today and tomorrow.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-serif text-lg font-bold text-primary">Mission</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  To engage the ABC community in services and programs that make learning possible.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-serif text-lg font-bold text-primary">Focus</h3>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground leading-relaxed">
                  <li>Provide programs that meet the needs and interests of all ABC students, improving retention, engagement, persistence, and completion.</li>
                  <li>Engage students in learning opportunities outside the classroom.</li>
                  <li>Provide programming and services that contribute to the retention and completion goals of the College.</li>
                  <li>Provide services that support personal health, safety, and wellness.</li>
                </ul>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Office of Student Affairs Staff */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Office of Student Affairs</h2>
            <p className="mt-2 text-muted-foreground">Office Hours: Monday &ndash; Friday, 8:30 AM &ndash; 5:00 PM | Phone: <a href="tel:5014201200" className="text-primary hover:underline">501-420-1200</a></p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {staffDirectory.map((person) => (
                <div key={person.email} className="flex items-start gap-4 rounded-lg border bg-card p-5">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">{person.name}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{person.title}</p>
                    <a href={`mailto:${person.email}`} className="mt-1 text-sm text-primary hover:underline">{person.email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Campus Resources Sidebar Links */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Campus Resources</h2>
            <p className="mt-2 text-muted-foreground">Quick access to student services, policies, and campus life resources.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sidebarSections.map((section) => (
                <div key={section.title} className="rounded-lg border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <section.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">{section.title}</h3>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-sm text-primary hover:underline">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Activities & Events (retained from existing) */}
        <SectionWrapper className="bg-muted/30">
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Activities & Events</h2>
            <p>Arkansas Baptist College is a student-first oriented college that focuses on developing and building academic achievements. In return, students are provided with personal and professional growth.</p>
            <ul>
              <li>Homecoming celebrations</li>
              <li>Founder&apos;s Day</li>
              <li>Honors Convocation</li>
              <li>Cultural enrichment events</li>
              <li>Community service projects</li>
              <li>Intramural sports</li>
              <li>Student talent showcases</li>
            </ul>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Experience ABC"
          description="Schedule a visit to see our campus and meet our community in person."
          primaryAction={{ label: "Plan Your Visit", href: "/enrollment/campus-tour" }}
          secondaryAction={{ label: "Apply Now", href: "/enrollment/apply" }}
        />
      </main>
    </div>
  )
}
