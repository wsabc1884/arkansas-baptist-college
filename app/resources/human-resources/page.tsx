import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

import { Mail, FileText, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Human Resources | Arkansas Baptist College",
  description:
    "Employment opportunities, staff openings, and HR policies at Arkansas Baptist College.",
}



export default function HumanResourcesPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Human Resources"
          subtitle="Resources"
          description="Employment opportunities and human resources information at Arkansas Baptist College."
          breadcrumbs={[
            { label: "Resources", href: "/resources/human-resources" },
            { label: "Human Resources" },
          ]}
        />

        {/* Mission */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Our Mission</h2>
            <p>
              The mission of the Human Resources Office is to utilize a social justice philosophy, strategic vision, diverse environment and leadership in providing quality, customer-driven human resources services to support Arkansas Baptist College.
            </p>
          </div>
        </SectionWrapper>

        {/* Staff Openings */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Staff Openings</h2>
            <p className="mt-4 text-muted-foreground">
              There are currently no position vacancies at this time.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              <strong>Arkansas Baptist College is committed to compliance with federal and state laws with regards to equal opportunity employment and affirmative action</strong> without regard to race, color, religion, gender, age, national origin, disability, veteran status or any other protected class applicable to federal and state laws.
            </p>
          </div>
        </SectionWrapper>

        {/* Application Process */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">The Application Process</h2>
            <p className="mt-2 text-muted-foreground">Two methods of submission are available:</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <Mail className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold text-foreground">Email Us</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Send a cover letter, resume/CV, and three (3) professional letters of reference to:
                </p>
                <a href="mailto:HR@arkansasbaptist.edu" className="mt-2 inline-block text-sm font-semibold text-primary hover:underline">
                  HR@arkansasbaptist.edu
                </a>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold text-foreground">Submit by Mail</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Send a cover letter, resume/CV, and three (3) professional letters of reference to:
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Arkansas Baptist College<br />
                  1600 Dr. Martin Luther King Jr. Drive<br />
                  Little Rock, AR 72202
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Faculty Handbook & Policies */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Documents & Policies</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Staff Handbook (2024-2026)", desc: "Comprehensive guide covering policies, procedures, and benefits for non-instructional staff.", file: "/resources/human-resources/staff-handbook" },
              ].map((doc) => (
                <Link key={doc.title} href={doc.file} className="group flex items-start gap-3 rounded-lg border bg-card p-5 transition-colors hover:border-primary">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary">{doc.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{doc.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Join the ABC Team"
          description="Explore career opportunities and become part of the Arkansas Baptist College community."
          primaryAction={{ label: "Email HR", href: "mailto:HR@arkansasbaptist.edu" }}
          secondaryAction={{ label: "Contact Administration", href: "/about/administration" }}
        />
      </main>
    </div>
  )
}
