import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, Key, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Facilities | Arkansas Baptist College",
  description:
    "Campus facilities and grounds at Arkansas Baptist College. Submit facility requests, key requests, and work orders.",
}

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero
          title="Facilities"
          subtitle="Resources"
          description="Our campus facilities support learning, living, and community engagement."
          breadcrumbs={[
            { label: "Resources", href: "/resources/facilities" },
            { label: "Facilities" },
          ]}
        />

        {/* Mission */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Facility & Grounds Mission Statement</h2>
            <p>
              Arkansas Baptist College facilities and grounds mission is to provide the best physical environment for teaching, learning, research, and community through the maintenance and improvements of the College facilities. Our products and services include, but are not limited to: energy management, utilities, maintenance, landscaping, key entry systems, in-house renovations, recycling, custodial, and environmental health and safety.
            </p>
          </div>
        </SectionWrapper>

        {/* Documents & Forms */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Documents & Forms</h2>
            <p className="mt-2 text-muted-foreground">
              Use the forms below to submit requests to the Facilities department. Forms open in a new page.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Link
                href="/resources/facilities/facility-request"
                className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 text-center transition-colors hover:border-primary hover:bg-muted/50"
              >
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="font-semibold text-foreground">Facility Request Form</h3>
                <p className="text-sm text-muted-foreground">Reserve a room or campus space for an event or activity.</p>
              </Link>
              <Link
                href="/resources/facilities/key-request"
                className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 text-center transition-colors hover:border-primary hover:bg-muted/50"
              >
                <Key className="h-8 w-8 text-primary" />
                <h3 className="font-semibold text-foreground">Key Request Form</h3>
                <p className="text-sm text-muted-foreground">Request a key or access card for a campus building or office.</p>
              </Link>
              <Link
                href="/resources/facilities/work-order"
                className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 text-center transition-colors hover:border-primary hover:bg-muted/50"
              >
                <Wrench className="h-8 w-8 text-primary" />
                <h3 className="font-semibold text-foreground">Work Order Request</h3>
                <p className="text-sm text-muted-foreground">Report a maintenance issue or request a repair.</p>
              </Link>
            </div>
          </div>
        </SectionWrapper>

        {/* Campus Buildings (retained) */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Campus Buildings</h2>
            <ul>
              <li><strong>Administration Building:</strong> Houses executive offices, admissions, financial aid, registrar, and business office</li>
              <li><strong>J.C. Oliver Library:</strong> Academic library with study spaces, computer labs, and research databases</li>
              <li><strong>Academic Building:</strong> Classrooms and faculty offices for academic departments</li>
              <li><strong>Student Center:</strong> Student activities, dining services, and meeting spaces</li>
              <li><strong>Residence Halls:</strong> Campus housing for residential students</li>
              <li><strong>Chapel:</strong> Worship services, convocations, and community gatherings</li>
            </ul>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Need Assistance?"
          description="Contact the Facilities department for questions about campus buildings, maintenance, or event spaces."
          primaryAction={{ label: "Contact Administration", href: "/about/administration" }}
          secondaryAction={{ label: "Campus Safety", href: "/resources/campus-safety" }}
        />
      </main>
      <Footer />
    </div>
  )
}
