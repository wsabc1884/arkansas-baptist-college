import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { getCampusSecurityData, OPE_SOURCE_URL } from "@/lib/campus-security"
import { CampusSecurityData } from "@/components/campus-security-data"

export const metadata: Metadata = {
  title: "Clery Act Compliance | Arkansas Baptist College",
  description:
    "Annual campus crime and fire safety statistics for Arkansas Baptist College, published in compliance with the Jeanne Clery Act and reported to the U.S. Department of Education.",
}

export default async function CleryActPage() {
  const securityData = await getCampusSecurityData()

  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Clery Act Compliance"
          subtitle="Annual campus crime and fire safety statistics for Arkansas Baptist College."
          label="Campus Safety"
        />

        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="mb-6">
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                Campus Crime &amp; Fire Safety Statistics
              </h2>
              <p className="mt-2 text-muted-foreground">
                In compliance with the Jeanne Clery Act, Arkansas Baptist College publishes annual campus crime and fire
                safety statistics. The figures below are reported to and published by the U.S. Department of Education.
              </p>
            </div>
            {securityData ? (
              <CampusSecurityData data={securityData} />
            ) : (
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-serif text-xl font-bold text-foreground">Campus Crime &amp; Safety Statistics</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Live crime and safety statistics are temporarily unavailable. You can view Arkansas Baptist College&apos;s
                  official figures directly on the U.S. Department of Education website.
                </p>
                <a
                  href={OPE_SOURCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  View on ope.ed.gov
                </a>
              </div>
            )}
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
