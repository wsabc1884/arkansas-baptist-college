import type { ReactNode } from "react"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { CourseSequenceList } from "@/components/course-sequence-list"
import { getSequencesByDepartment } from "@/lib/course-sequences"
import { Briefcase } from "lucide-react"

interface ProgramPageProps {
  /** Hero eyebrow label, e.g. "Degree Programs" */
  label?: string
  title: string
  /** Hero tagline shown under the title */
  subtitle?: string
  /** Overview paragraphs */
  overview: ReactNode[]
  /** Optional emphasis / concentration note rendered in a highlighted callout */
  emphasis?: { heading: string; body: ReactNode }
  /** Total credit hours, e.g. "120 Hours" */
  credits?: string
  /** Delivery format, e.g. "In person or 100% online" */
  format?: string
  careers: string[]
  contact: { name?: string; email: string }
  /** Department slug for pulling course sequences */
  sequenceSlug: string
  cta?: { title: string; description: string }
}

export function ProgramPage({
  label = "Degree Programs",
  title,
  subtitle,
  overview,
  emphasis,
  credits,
  format,
  careers,
  contact,
  sequenceSlug,
  cta,
}: ProgramPageProps) {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero title={title} subtitle={label} description={subtitle} />
        <SectionWrapper>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="prose-abc max-w-none">
                <h2>Program Overview</h2>
                {overview.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {emphasis && (
                <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground">{emphasis.heading}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{emphasis.body}</p>
                </div>
              )}

              <div className="prose-abc max-w-none mt-8">
                <h2>Possible Career Opportunities</h2>
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {careers.map((career) => (
                  <li
                    key={career}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
                  >
                    <Briefcase className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-card-foreground">{career}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground">Program at a Glance</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    {credits && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-muted-foreground">Credit Hours</dt>
                        <dd className="font-medium text-foreground text-right">{credits}</dd>
                      </div>
                    )}
                    {format && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-muted-foreground">Format</dt>
                        <dd className="font-medium text-foreground text-right">{format}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground">Questions?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {contact.name ? `Contact ${contact.name} for more information.` : "Reach out for more information."}
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-3 inline-block break-all text-sm font-medium text-primary hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground">Course Sequence</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Download the recommended semester-by-semester plan.
                  </p>
                  <CourseSequenceList
                    sequences={getSequencesByDepartment(sequenceSlug)}
                    className="mt-4 [&_.grid]:grid-cols-1"
                  />
                </div>
              </div>
            </aside>
          </div>
        </SectionWrapper>
        <CTABand
          title={cta?.title ?? "Ready to Get Started?"}
          description={cta?.description ?? "Apply today and take the first step toward your future at Arkansas Baptist College."}
          primaryLabel="Apply Now"
          primaryHref="/enrollment/apply"
          secondaryLabel="Request Information"
          secondaryHref="/enrollment/request-info"
        />
      </main>
    </div>
  )
}
