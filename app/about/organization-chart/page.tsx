import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Organization Chart - Arkansas Baptist College",
  description: "View the organizational structure of Arkansas Baptist College leadership and departments.",
}

export default function OrganizationChartPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Organization Chart"
        subtitle="About Us"
        description="The organizational structure of Arkansas Baptist College, from the Board of Trustees through executive leadership to academic and administrative departments."
        breadcrumbs={[
          { label: "About Us", href: "/about/history" },
          { label: "Organization Chart", href: "/about/organization-chart" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          {/* CONTENT PENDING VERIFICATION */}
          <div className="rounded-lg border-2 border-dashed border-amber-400 bg-amber-50 p-6">
            <h2 className="text-lg font-bold text-amber-800">CONTENT PENDING VERIFICATION</h2>
            <ul className="mt-3 space-y-1 text-sm text-amber-700">
              <li><strong>Intended page title:</strong> Organization Chart</li>
              <li><strong>Intended route:</strong> /about/organization-chart</li>
              <li><strong>Suspected source URL:</strong> arkansasbaptist.edu/about/organization-chart/ (page returned empty)</li>
              <li><strong>What is missing:</strong> The source page likely contains an embedded image or PDF of the org chart. The URL did not return parseable content.</li>
            </ul>
          </div>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Institutional Leadership Structure
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Arkansas Baptist College is governed by a Board of Trustees and led by the Office of the President. The executive leadership team oversees the following divisions:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Office of the President", desc: "Executive leadership and strategic direction", href: "/about/office-of-the-president" },
                { title: "Academic Affairs", desc: "Curriculum, faculty, and academic programs", href: "/about/academic-affairs" },
                { title: "Business Affairs", desc: "Fiscal management, accounting, and operations", href: "/about/business-affairs" },
                { title: "Student Affairs", desc: "Student services, campus life, and housing", href: "/about/student-affairs" },
                { title: "Institutional Advancement", desc: "Fundraising, alumni relations, and communications", href: "/about/institutional-advancement" },
                { title: "Technology Services", desc: "IT infrastructure, help desk, and digital systems", href: "/about/technology-services" },
              ].map((div) => (
                <a
                  key={div.title}
                  href={div.href}
                  className="rounded-lg border p-5 transition-colors hover:border-primary hover:bg-muted/50"
                >
                  <h3 className="font-semibold text-foreground">{div.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{div.desc}</p>
                </a>
              ))}
            </div>

            <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-6">
              <p className="text-sm text-muted-foreground italic">
                For a printable version of the organizational chart, contact the Office of the President at{" "}
                <a href="tel:5014201200" className="font-medium text-primary hover:underline">501-420-1200</a>.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Migration Note */}
      {/* Source: arkansasbaptist.edu/about/organization-chart/ (no content returned) */}
      {/* Confidence: Low - page likely contains an image/PDF embed that was not parseable */}
      {/* Missing: Actual org chart image or PDF */}

      <CTABand
        heading="Meet Our Leadership"
        description="Learn more about the people leading Arkansas Baptist College."
        primaryAction={{ label: "Administration", href: "/about/administration" }}
        secondaryAction={{ label: "Board of Trustees", href: "/about/board-of-trustees" }}
      />
    </main>
  )
}
