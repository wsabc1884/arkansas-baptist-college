import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Academic Catalog | Arkansas Baptist College",
  description:
    "Access the 2026-2028 Arkansas Baptist College Undergraduate Catalog for program requirements, course descriptions, and academic policies.",
}

const catalogSections = [
  "Campus Offices",
  "Accreditation and Affiliations",
  "Provisions of the Arkansas Baptist College Catalog",
  "Academic Calendar",
  "The College",
  "Title IX and Board-Approved Policies",
  "Admissions",
  "Financial Aid",
  "Fiscal Affairs",
  "Division of Student Affairs",
  "Confidentiality of Student Records",
  "Academics",
  "Military Absence",
  "Procedures",
  "Programs by Department",
  "Academic Programs",
  "Academic Courses",
  "Board of Trustees",
  "Credentials",
  "President\u2019s Executive Cabinet",
  "Administration",
  "The National Alumni Association of Arkansas Baptist College, Inc",
]

export default function AcademicCatalogPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Academic Catalog"
          subtitle="Academic Resources"
          description="The official source for degree requirements, course descriptions, academic policies, and procedures."
          breadcrumbs={[
            { label: "Academics", href: "/academics/departments" },
            { label: "Academic Catalog" },
          ]}
        />

        {/* Catalog Link */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border bg-card p-6 sm:p-8 text-center">
              <h2 className="font-serif text-2xl font-bold text-foreground">2026-2028 Undergraduate Catalog</h2>
              <p className="mt-2 text-muted-foreground">
                The full academic catalog is hosted on Modern Campus Catalog. Click below to access the complete catalog with search functionality.
              </p>
              <a
                href="https://arkansasbaptist.catalog.acalog.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Open Full Catalog
                <ExternalLink className="h-4 w-4" />
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                1600 Dr. Martin Luther King Jr. Drive, Little Rock, AR 72202 | Phone: (501) 420-1234 |{" "}
                <a href="mailto:admissions@arkansasbaptist.edu" className="text-primary hover:underline">admissions@arkansasbaptist.edu</a>
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Catalog Sections */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Catalog Navigation</h2>
            <p className="mt-2 text-muted-foreground">
              Browse sections of the catalog. Each section links to the full catalog on Modern Campus.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {catalogSections.map((section) => (
                <a
                  key={section}
                  href="https://arkansasbaptist.catalog.acalog.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border bg-card p-4 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* What's in the Catalog -- retained, still valid */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>What&apos;s in the Catalog</h2>
            <ul>
              <li>Degree program requirements for all majors</li>
              <li>Course descriptions and prerequisites</li>
              <li>Academic policies (grading, attendance, withdrawal, etc.)</li>
              <li>General education core requirements</li>
              <li>Graduation requirements</li>
              <li>Faculty and administration directory</li>
            </ul>
            <h2>Questions?</h2>
            <p>Contact the Office of the Registrar at <a href="tel:5014201237">501-420-1237</a> or visit the <Link href="/academics/registrar">Registrar&apos;s Office</Link> page.</p>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Need Help Navigating the Catalog?"
          description="The Registrar's Office and your academic advisor can help you understand degree requirements."
          primaryAction={{ label: "Registrar's Office", href: "/academics/registrar" }}
          secondaryAction={{ label: "Academic Advising", href: "/academics/academic-advising" }}
        />
      </main>
    </div>
  )
}
