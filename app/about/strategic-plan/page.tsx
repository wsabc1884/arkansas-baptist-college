import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Strategic Plan - Arkansas Baptist College",
  description: "Arkansas Baptist College Strategic Plan (2021-2023) outlining goals for academic excellence, enrollment growth, and institutional sustainability.",
}

export default function StrategicPlanPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
      <PageHero
        title="Strategic Plan"
        subtitle="About Us"
        description="Charting the path forward for Arkansas Baptist College through intentional planning, academic excellence, and institutional growth."
        breadcrumbs={[
          { label: "About Us", href: "/about/history" },
          { label: "Strategic Plan", href: "/about/strategic-plan" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
            Strategic Planning (2021-2023)
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            The Arkansas Baptist College Strategic Plan serves as a roadmap for the institution, establishing priorities and measurable goals across academics, enrollment, student success, financial sustainability, and community engagement.
          </p>

          <div className="mt-10 rounded-lg border bg-muted/50 p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  ABC Strategic Plan 2023 (PDF)
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  View or download the full strategic planning document.
                </p>
                <Button className="mt-4" variant="outline" asChild>
                  <a
                    href="https://www.arkansasbaptist.edu/wp-content/uploads/2020/06/ABC_Strategic_Plan_2023_062020.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Strategic Plan
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground">Our Strategic Priorities</h3>
              <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span><strong className="text-foreground">Academic Excellence:</strong> Strengthen academic programs, enhance curriculum, and improve student learning outcomes across all departments.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span><strong className="text-foreground">Enrollment & Retention:</strong> Increase enrollment through targeted recruitment and improve retention through enhanced student support services.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span><strong className="text-foreground">Institutional Sustainability:</strong> Secure long-term financial health through diversified revenue streams, grants, and fundraising initiatives.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span><strong className="text-foreground">Community Engagement:</strong> Deepen partnerships with local, state, and national organizations to expand opportunities for students and the community.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span><strong className="text-foreground">Infrastructure & Technology:</strong> Modernize campus facilities and technology systems to support 21st-century learning environments.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-lg border-l-4 border-primary bg-muted/30 p-6">
            <p className="text-sm text-muted-foreground italic">
              For questions about the Strategic Plan, contact the Office of the President at{" "}
              <a href="tel:5014201200" className="font-medium text-primary hover:underline">501-420-1200</a>.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <CTABand
        heading="Shape the Future of ABC"
        description="Your support helps Arkansas Baptist College achieve its strategic goals."
        primaryAction={{ label: "Give to ABC", href: "/give" }}
        secondaryAction={{ label: "Contact Us", href: "/about/administration" }}
      />
      </main>
      <Footer />
    </div>
  )
}
