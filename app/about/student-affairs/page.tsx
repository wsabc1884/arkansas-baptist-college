import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Student Affairs - Arkansas Baptist College",
  description: "Student Affairs at Arkansas Baptist College manages campus life, housing, counseling, student activities, and compliance services.",
}

export default function StudentAffairsPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
      <PageHero
        title="Student Affairs"
        subtitle="About Us"
        description="Managing the campus-life experience to ensure students have the support needed for academic and personal success."
        breadcrumbs={[
          { label: "About Us", href: "/about/history" },
          { label: "Student Affairs", href: "/about/student-affairs" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl prose-abc">
          <h2>Vision</h2>
          <p>The Division of Student Affairs will be nationally renowned for developing, implementing, and supporting programs, services, and activities that contribute to students becoming competitive citizens who engage and serve in a global community.</p>

          <h2>Mission</h2>
          <p>The Division of Student Affairs at Arkansas Baptist College is dedicated to creating a campus environment that supports the intellectual, personal, spiritual, and professional development of every student. Student Affairs manages housing, counseling, student activities, compliance services, and a variety of programs designed to enrich the student experience beyond the classroom.</p>

          <h2>Focus</h2>
          <p>The Division of Student Affairs supports the Mission of Arkansas Baptist College to provide community service. The focus of the department is centered on the &quot;STUDENT&quot; &mdash; Success, Transformation, Understanding, Determination, Enrichment, Nurturing, and Time Management.</p>
        </div>
      </SectionWrapper>

      {/* Staff Directory */}
      <SectionWrapper className="bg-muted/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Student Affairs Staff</h2>
          <div className="mt-6 grid gap-4">
            {[
              { name: "Dr. Darryl A. Peal", title: "Vice President for Enrollment Management & Student Affairs", email: "darryl.peal@arkansasbaptist.edu" },
              { name: "Pamela Conard", title: "Director of Admissions", email: "pamela.conard@arkansasbaptist.edu" },
              { name: "Cody Charles", title: "Director of Residential Life & Housing", email: "cody.charles@arkansasbaptist.edu" },
              { name: "Lamarius Q. McGraw, M.A., HESA", title: "Director of Student Activities", email: "lamarius.mcgraw@arkansasbaptist.edu" },
              { name: "Dr. Vickie Williams", title: "Title IX Coordinator", email: "vickie.williams@arkansasbaptist.edu" },
            ].map((person) => (
              <div key={person.name} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold text-foreground">{person.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{person.title}</p>
                <a href={`mailto:${person.email}`} className="mt-1 text-sm text-primary hover:underline">{person.email}</a>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Quick Links */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Student Quick Links</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { label: "Student Organizations", href: "/student-life/organizations" },
              { label: "Campus Life", href: "/student-life/campus-life" },
              { label: "Student Complaint Process", href: "/student-life/complaint-process" },
              { label: "Title IX Services", href: "/compliance/title-ix" },
              { label: "Campus Safety", href: "/resources/campus-safety" },
              { label: "Housing & Residential Life", href: "/student-life/campus-life" },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="rounded-lg border bg-card p-4 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTABand
        heading="Experience Life at ABC"
        description="Learn about student organizations, campus events, and everything that makes ABC home."
        primaryAction={{ label: "Student Organizations", href: "/student-life/organizations" }}
        secondaryAction={{ label: "Campus Life", href: "/student-life/campus-life" }}
      />
      </main>
    </div>
  )
}
