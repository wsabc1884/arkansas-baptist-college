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
          <p>
            The Division of Student Affairs at Arkansas Baptist College is dedicated to creating a campus environment that supports the intellectual, personal, spiritual, and professional development of every student. Student Affairs manages housing, counseling, student activities, compliance services, and a variety of programs designed to enrich the student experience beyond the classroom.
          </p>

          <h2>Services & Programs</h2>
          <ul>
            <li><Link href="/student-life/organizations">Student Organizations</Link></li>
            <li><Link href="/student-life/campus-life">Campus Life</Link></li>
            <li><Link href="/student-life/complaint-process">Student Complaint Process</Link></li>
            <li><Link href="/compliance/title-ix">Title IX Services</Link></li>
            <li><Link href="/compliance/campus-safety">Campus Safety</Link></li>
          </ul>

          <h2>Residential Life</h2>
          <p>
            Arkansas Baptist College offers on-campus housing to provide a supportive living-learning community. Residence life staff work to build community, promote student engagement, and ensure safe and comfortable living conditions.
          </p>

          <h2>Counseling & Wellness</h2>
          <p>
            Student Affairs coordinates counseling and wellness services to support students{"'"} mental health, academic stress management, and personal well-being throughout their time at ABC.
          </p>

          <h2>Contact</h2>
          <p>
            <strong>Division of Student Affairs</strong><br />
            Arkansas Baptist College<br />
            1600 Dr. Martin Luther King Jr. Drive<br />
            Little Rock, AR 72202<br />
            Phone: <a href="tel:5014201200">501-420-1200</a><br />
            Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a>
          </p>
        </div>
      </SectionWrapper>

      {/* Migration Note */}
      {/* Source: arkansasbaptist.edu/student-affairs/ (no direct content), catalog.arkansasbaptist.edu mentioned in search results */}
      {/* Confidence: Medium - synthesized from known site structure and search results */}
      {/* Missing: Specific staff names, detailed housing info, counseling hours */}

      <CTABand
        heading="Experience Life at ABC"
        description="Learn about student organizations, campus events, and everything that makes ABC home."
        primaryAction={{ label: "Student Organizations", href: "/student-life/organizations" }}
        secondaryAction={{ label: "Campus Life", href: "/student-life/campus-life" }}
      />
    </main>
  )
}
