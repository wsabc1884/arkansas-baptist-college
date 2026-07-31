import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { CTABand } from "@/components/cta-band"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase } from "lucide-react"
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

        {/* Open positions */}
        <SectionWrapper>
          <SectionHeader
            title="Current Openings"
            subtitle="Join Our Team"
            description="Select a position below to learn more about its responsibilities and qualifications."
            align="center"
          />
          <ul className="mx-auto max-w-3xl divide-y divide-border rounded-lg border border-border bg-card">
            {jobPostings.map((job) => (
              <li key={job.slug}>
                <Link
                  href={`/about/careers/${job.slug}`}
                  className="group flex items-center gap-4 p-5 transition-colors hover:bg-[#3d1a5c]/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#3d1a5c]/10">
                    <Briefcase className="h-5 w-5 text-[#3d1a5c]" aria-hidden="true" />
                  </div>
                  <h3 className="flex-1 font-serif text-lg font-bold text-card-foreground text-balance">
                    {job.title}
                  </h3>
                  <ArrowRight
                    className="h-5 w-5 shrink-0 text-[#3d1a5c] transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
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
