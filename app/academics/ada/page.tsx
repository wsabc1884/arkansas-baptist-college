import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Disability Services | Arkansas Baptist College",
  description:
    "The Office of Disability Services provides accommodations for students with disabilities to ensure equal accessibility of all programs and services.",
}

export default function ADAPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Disability Services"
          subtitle="Student Services"
          description="Accommodations, advocacy, and resources for students with disabilities at Arkansas Baptist College."
          breadcrumbs={[
            { label: "Academics", href: "/academics/departments" },
            { label: "Disability Services" },
          ]}
        />

        {/* Mission */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Mission</h2>
            <p>
              The Office of Disability Services seeks to provide accommodations for students with disabilities through advocating, educating, and coordinating resources to ensure equal accessibility of all programs, services, and activities to supplement the academic and spiritual mission of Arkansas Baptist College.
            </p>
          </div>
        </SectionWrapper>

        {/* Non-Discrimination Policy */}
        <SectionWrapper className="bg-muted/30">
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Non-Discrimination Policy</h2>
            <p>
              Consistent with the ADA and Section 504, the policy of Arkansas Baptist College is that no qualified individual with a disability may be discriminated against on the basis of his or her disability. Individuals with disabilities are encouraged to seek admission to the college, and applicants are actively recruited for employment. Arkansas Baptist College is making affirmative efforts to accommodate qualified individuals with disabilities. Such efforts include elimination of physical barriers and the provision of individual accommodation. Our goal at the College is to promote institutional programs and employment practices that are accessible to all individuals with disabilities.
            </p>
            <p>
              The ADA Coordinator collaborates with students with documented disabilities and faculty to provide reasonable accommodations, auxiliary aids, and support services that are individualized and based upon documentation, a person-to-person interview, and assessment of needs.
            </p>
          </div>
        </SectionWrapper>

        {/* Eligibility & Documentation */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Eligibility for Accommodations</h2>
            <p>
              To be eligible for academic accommodations through the Office of Disability Services, students must present documentation of a disability. Documentation must be provided before accommodations can be arranged. Once the ADA Coordinator receives the records, it is evaluated on a case-by-case basis. The student will then be contacted to schedule an intake interview to further discuss eligibility and accommodation needs.
            </p>
            <p>
              The type of documentation may vary dependent upon the type of disability. Documentation should be current within three years, but exceptions may be necessary dependent upon individual circumstances and disability.
            </p>

            <h2>Students Without Documentation</h2>
            <p>
              Some students contact our office who have not been tested for cognitive disabilities, such as a learning disability, attention deficit hyperactivity disorder, or a psychological disability, but suspect that they may have one. The Office of Disability Services will provide students with a list of appropriate professionals who are qualified to conduct a diagnostic evaluation. The cost of such an evaluation ranges between $450 and $1,200. Insurance companies may pay for testing, but often they do not. In some cases, local service agencies can provide financial help to students.
            </p>
          </div>
        </SectionWrapper>

        {/* Types of Accommodations -- retained from current, still valid */}
        <SectionWrapper className="bg-muted/30">
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Types of Accommodations</h2>
            <ul>
              <li>Extended testing time</li>
              <li>Note-taking assistance</li>
              <li>Preferential seating</li>
              <li>Alternative format materials</li>
              <li>Assistive technology</li>
              <li>Sign language interpreters</li>
            </ul>
          </div>
        </SectionWrapper>

        {/* Forms */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Forms</h2>
            <p className="mt-2 text-muted-foreground">
              The following forms are required to request disability accommodations. Please complete and submit to the Office of Disability Services.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { title: "Disability Intake Form", desc: "Student intake document for disability support services.", file: "/documents/disability/disability-intake-form.pdf", download: true },
                { title: "ADHD Criteria Form", desc: "ADHD assessment and criteria documentation form.", file: "/academics/ada/adhd-criteria", download: false },
                { title: "ABC Policies", desc: "Disability services policies and procedures.", file: "/academics/ada/policies", download: false },
              ].map((doc) =>
                doc.download ? (
                  <a key={doc.title} href={doc.file} download className="group flex items-start gap-3 rounded-lg border bg-card p-5 transition-colors hover:border-primary">
                    <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary">{doc.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{doc.desc}</p>
                    </div>
                  </a>
                ) : (
                  <Link key={doc.title} href={doc.file} className="group flex items-start gap-3 rounded-lg border bg-card p-5 transition-colors hover:border-primary">
                    <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary">{doc.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{doc.desc}</p>
                    </div>
                  </Link>
                ),
              )}
            </div>
          </div>
        </SectionWrapper>

        {/* Contact */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border bg-card p-6 sm:p-8">
              <h2 className="font-serif text-xl font-bold text-foreground sm:text-2xl">Contact</h2>
              <p className="mt-3 text-muted-foreground">
                For more information, contact Academic Affairs.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Phone: <a href="tel:5014201200" className="text-primary hover:underline">501-420-1200</a>
              </p>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Need Accommodations?"
          description="Contact the Office of Disability Services to begin the accommodation process."
          primaryAction={{ label: "Intake Form", href: "/academics/ada/intake-form" }}
          secondaryAction={{ label: "Academic Advising", href: "/academics/academic-advising" }}
        />
      </main>
    </div>
  )
}
