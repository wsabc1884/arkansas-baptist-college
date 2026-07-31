import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { CTABand } from "@/components/cta-band"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, MapPin, Mail } from "lucide-react"
import { jobPostings, CAREERS_EMAIL } from "@/lib/careers-data"

export const metadata = {
  title: "Careers | Arkansas Baptist College",
  description:
    "Explore employment opportunities at Arkansas Baptist College. View open positions and apply by emailing your resume to our team.",
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <main id="main-content">
        <PageHero
          title="Careers at Arkansas Baptist College"
          subtitle="About Us"
          description="Join a community dedicated to Truth and Light. Explore our current openings and become part of our mission to transform lives through education."
          breadcrumbs={[
            { label: "About Us", href: "/about/history" },
            { label: "Careers", href: "/about/careers" },
          ]}
        />

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
                    To apply for any open position, please email your resume and cover letter to{" "}
                    <a
                      href={`mailto:${CAREERS_EMAIL}`}
                      className="font-semibold text-[#3d1a5c] underline underline-offset-2 hover:text-[#3d1a5c]/80"
                    >
                      {CAREERS_EMAIL}
                    </a>
                    . Please include the title of the position you are applying for in the subject line.
                  </p>
                  <div className="mt-6">
                    <Button className="bg-[#3d1a5c] hover:bg-[#3d1a5c]/90 text-white" asChild>
                      <a href={`mailto:${CAREERS_EMAIL}`}>
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

        {/* Open positions */}
        <SectionWrapper>
          <SectionHeader
            title="Current Openings"
            subtitle="Join Our Team"
            description="Review the positions below and select a role to learn more about its responsibilities and qualifications."
            align="center"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {jobPostings.map((job) => (
              <div
                key={job.slug}
                className="flex flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#3d1a5c]/10">
                  <Briefcase className="h-5 w-5 text-[#3d1a5c]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-bold text-card-foreground text-balance">
                  {job.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span>{job.department}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {job.location}
                  </span>
                </div>
                <span className="mt-3 inline-flex w-fit rounded-full bg-[#3d1a5c]/10 px-3 py-1 text-xs font-semibold text-[#3d1a5c]">
                  {job.employmentType}
                </span>
                <p className="mt-4 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {job.summary}
                </p>
                <div className="mt-6">
                  <Button variant="outline" className="w-full border-[#3d1a5c]/30 text-[#3d1a5c] hover:bg-[#3d1a5c]/5" asChild>
                    <Link href={`/about/careers/${job.slug}`}>
                      View Position
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <CTABand
          heading="Ready to Join Our Mission?"
          description={`Email your resume to ${CAREERS_EMAIL} to apply for an open position.`}
          primaryAction={{ label: "Email Your Resume", href: `mailto:${CAREERS_EMAIL}` }}
          secondaryAction={{ label: "Learn About ABC", href: "/about/mission-vision" }}
        />
      </main>
    </div>
  )
}
