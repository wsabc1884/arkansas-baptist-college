import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { FileText } from "lucide-react"

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
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Institutional Leadership Structure
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Arkansas Baptist College is governed by a Board of Trustees and led by the Office of the President. The executive leadership team oversees the following divisions:
              </p>
            </div>

            {/* Download PDF */}
            <a
              href="https://www.arkansasbaptist.edu/wp-content/uploads/2020/06/ABC_Organizational_Functional_Chart_05032020-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg border-2 border-primary/20 bg-primary/5 p-6 transition-colors hover:border-primary/40 hover:bg-primary/10"
            >
              <FileText className="h-10 w-10 shrink-0 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Download Organization Chart (PDF)</p>
                <p className="mt-1 text-sm text-muted-foreground">ABC Organizational & Functional Chart</p>
              </div>
            </a>

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
          </div>
        </div>
      </SectionWrapper>

      <CTABand
        heading="Meet Our Leadership"
        description="Learn more about the people leading Arkansas Baptist College."
        primaryAction={{ label: "Administration", href: "/about/administration" }}
        secondaryAction={{ label: "Board of Trustees", href: "/about/board-of-trustees" }}
      />
    </main>
  )
}
