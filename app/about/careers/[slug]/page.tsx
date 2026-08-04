import Link from "next/link"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/page-hero"
import { CTABand } from "@/components/cta-band"
import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Briefcase, Mail, MapPin, CheckCircle2 } from "lucide-react"
import { jobPostings, getJobBySlug, CAREERS_EMAIL } from "@/lib/careers-data"

export function generateStaticParams() {
  return jobPostings.map((job) => ({ slug: job.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const job = getJobBySlug(slug)
  if (!job) {
    return { title: "Position Not Found | Arkansas Baptist College" }
  }
  return {
    title: `${job.title} | Careers | Arkansas Baptist College`,
    description: job.summary,
  }
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const job = getJobBySlug(slug)

  if (!job) {
    notFound()
  }

  const applyEmail = job.applicationEmail ?? CAREERS_EMAIL
  const mailtoHref = `mailto:${applyEmail}?subject=${encodeURIComponent(`Application: ${job.title}`)}`

  return (
    <div className="min-h-screen bg-background">
      <main id="main-content">
        <PageHero
          title={job.title}
          subtitle="Careers"
          description={job.summary}
          breadcrumbs={[
            { label: "About Us", href: "/about/history" },
            { label: "Careers", href: "/about/careers" },
            { label: job.title, href: `/about/careers/${job.slug}` },
          ]}
        />

        <SectionWrapper>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Link
                href="/about/careers"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3d1a5c] hover:underline"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to all openings
              </Link>

              <div className="mt-8">
                <h2 className="font-serif text-2xl font-bold text-foreground">Position Overview</h2>
                <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                  {job.overview.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {job.availablePositions && job.availablePositions.length > 0 && (
                <div className="mt-10">
                  <h2 className="font-serif text-2xl font-bold text-foreground">Available Positions</h2>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {job.availablePositions.map((position) => (
                      <span
                        key={position}
                        className="inline-flex items-center rounded-full border border-[#3d1a5c]/20 bg-[#3d1a5c]/5 px-4 py-1.5 text-sm font-medium text-[#3d1a5c]"
                      >
                        {position}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-10">
                <h2 className="font-serif text-2xl font-bold text-foreground">Responsibilities</h2>
                <ul className="mt-4 space-y-3">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#3d1a5c]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h2 className="font-serif text-2xl font-bold text-foreground">Qualifications</h2>
                <ul className="mt-4 space-y-3">
                  {job.qualifications.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#3d1a5c]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 rounded-lg border border-border bg-card p-6">
                <h3 className="font-serif text-lg font-bold text-card-foreground">Position Details</h3>
                <dl className="mt-4 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-[#3d1a5c]" aria-hidden="true" />
                    <div>
                      <dt className="font-medium text-foreground">Department</dt>
                      <dd className="text-muted-foreground">{job.department}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-[#3d1a5c]" aria-hidden="true" />
                    <div>
                      <dt className="font-medium text-foreground">Employment Type</dt>
                      <dd className="text-muted-foreground">{job.employmentType}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#3d1a5c]" aria-hidden="true" />
                    <div>
                      <dt className="font-medium text-foreground">Location</dt>
                      <dd className="text-muted-foreground">{job.location}</dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-6 border-t border-border pt-6">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#3d1a5c]" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-medium text-foreground">How to Apply</p>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        Email your resume to{" "}
                        <a
                          href={mailtoHref}
                          className="font-semibold text-[#3d1a5c] underline underline-offset-2 hover:text-[#3d1a5c]/80 break-words"
                        >
                          {applyEmail}
                        </a>
                      </p>
                    </div>
                  </div>
                  <Button className="mt-4 w-full bg-[#3d1a5c] hover:bg-[#3d1a5c]/90 text-white" asChild>
                    <a href={mailtoHref}>
                      Apply by Email
                    </a>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </SectionWrapper>

        {/* How to apply */}
        <SectionWrapper variant="muted">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border-l-4 border-[#3d1a5c] bg-card p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3d1a5c]/10">
                  <Mail className="h-6 w-6 text-[#3d1a5c]" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">How to Apply</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {job.applicationInstructions ? (
                      <>{job.applicationInstructions}</>
                    ) : (
                      <>To apply for this position, please email your resume and cover letter, including the title of the position you are applying for in the subject line.</>
                    )}
                  </p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Send your application to{" "}
                    <a
                      href={mailtoHref}
                      className="font-semibold text-[#3d1a5c] underline underline-offset-2 hover:text-[#3d1a5c]/80 break-words"
                    >
                      {applyEmail}
                    </a>
                    .
                  </p>
                  <div className="mt-6">
                    <Button className="bg-[#3d1a5c] hover:bg-[#3d1a5c]/90 text-white" asChild>
                      <a href={mailtoHref}>
                        Email Your Resume
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Apply for This Position"
          description={`Send your resume to ${applyEmail} with "${job.title}" in the subject line.`}
          primaryAction={{
            label: "Email Your Resume",
            href: mailtoHref,
          }}
          secondaryAction={{ label: "View All Openings", href: "/about/careers" }}
        />
      </main>
    </div>
  )
}
