import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

import { Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Institutional Research | Arkansas Baptist College",
  description:
    "The Office of Institutional Research gathers, maintains, and analyzes data for internal decision-making and external reporting.",
}

export default function InstitutionalResearchPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Institutional Research"
          subtitle="Resources"
          description="Data-driven insights supporting institutional planning, assessment, and accreditation."
          breadcrumbs={[
            { label: "Resources", href: "/resources/institutional-research" },
            { label: "Institutional Research" },
          ]}
        />

        {/* About */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>About the Office</h2>
            <p>
              The Office of Institutional Research (IR) is responsible for gathering, maintaining, and analyzing the institution&apos;s data for internal decision-making purposes and external reporting requirements. The Office of IR plays a vital leadership role in developing the institution&apos;s long-range goals, to ensure they are mission-driven, based on reliable data and consistent with accreditation criteria. The Office of IR also provides oversight for accreditation review processes.
            </p>
            <p>
              The Office of Institutional Research (IR) is the College&apos;s internal clearinghouse whose primary responsibility is to collect, store, and disseminate institutional data. The Office of IR exists to enhance the student, faculty, and staff experience by championing data and mission-driven decision-making, to continually improve the quality of its programs and services.
            </p>
          </div>
        </SectionWrapper>

        {/* Key Functions (retained from current -- still valid) */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Key Functions</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "IPEDS Federal Reporting",
                "Enrollment & Retention Analysis",
                "Accreditation Data Support",
                "Survey Administration & Analysis",
                "Institutional Fact Sheets & Dashboards",
                "Long-Range Goal Development",
              ].map((fn) => (
                <div key={fn} className="rounded-lg border bg-card p-5">
                  <h3 className="font-semibold text-foreground">{fn}</h3>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Data Request */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border bg-card p-6 sm:p-8">
              <h2 className="font-serif text-xl font-bold text-foreground sm:text-2xl">Request Information</h2>
              <p className="mt-2 text-muted-foreground">
                If you need to request institutional data, please contact the Office of Institutional Research using the information below.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">General Inquiries</p>
                    <a href="mailto:ir@arkansasbaptist.edu" className="text-sm text-primary hover:underline">ir@arkansasbaptist.edu</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Ms. Latrice Small</p>
                    <p className="text-sm text-muted-foreground">Director of Institutional Research</p>
                    <a href="mailto:latrice.small@arkansasbaptist.edu" className="text-sm text-primary hover:underline">latrice.small@arkansasbaptist.edu</a>
                    <p className="mt-1 text-sm text-muted-foreground">Phone: <a href="tel:5014201205" className="text-primary hover:underline">501-420-1205</a></p>
                    <p className="text-sm text-muted-foreground">1600 Dr. Martin Luther King, Jr. Drive, Little Rock, AR 72202</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Embedded Form */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Data Request Form</h2>
            <p className="mt-2 text-muted-foreground">
              Complete the form below to submit a request to the Office of Institutional Research. If the form does not load,
              you can{" "}
              <a
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=2ObreCFcykCoWj7mdYUolssQsZYdaw1EuIlkL1e-auZUNDRNUlQzU05MQzhRRjA5MUZSM1BJMVgxWi4u"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                open it in a new tab
              </a>
              .
            </p>
            <div className="mt-6 overflow-hidden rounded-lg border bg-card">
              <iframe
                title="Institutional Research Data Request Form"
                src="https://forms.office.com/Pages/ResponsePage.aspx?id=2ObreCFcykCoWj7mdYUolssQsZYdaw1EuIlkL1e-auZUNDRNUlQzU05MQzhRRjA5MUZSM1BJMVgxWi4u&embed=true"
                className="h-[700px] w-full border-0"
                allow="fullscreen; geolocation; microphone; camera"
              />
            </div>
          </div>
        </SectionWrapper>

        {/* Quick Links */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Related Resources</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Link href="/academics/academic-calendar" className="rounded-lg border bg-card p-5 transition-colors hover:border-primary">
                <h3 className="font-semibold text-foreground">Academic Calendar</h3>
              </Link>
              <Link href="/academics/academic-catalog" className="rounded-lg border bg-card p-5 transition-colors hover:border-primary">
                <h3 className="font-semibold text-foreground">Academic Catalog</h3>
              </Link>
              <Link href="/resources/consumer-information" className="rounded-lg border bg-card p-5 transition-colors hover:border-primary">
                <h3 className="font-semibold text-foreground">Consumer Information</h3>
              </Link>
              <Link href="/resources/directory" className="rounded-lg border bg-card p-5 transition-colors hover:border-primary">
                <h3 className="font-semibold text-foreground">Staff Directory</h3>
              </Link>
              <Link href="/enrollment/office-of-admissions" className="rounded-lg border bg-card p-5 transition-colors hover:border-primary">
                <h3 className="font-semibold text-foreground">Admissions</h3>
              </Link>
              <Link href="/enrollment/financial-aid" className="rounded-lg border bg-card p-5 transition-colors hover:border-primary">
                <h3 className="font-semibold text-foreground">Financial Aid</h3>
              </Link>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Questions About Institutional Data?"
          description="The Office of Institutional Research is here to assist with data requests and reporting needs."
          primaryAction={{ label: "Email IR Office", href: "mailto:ir@arkansasbaptist.edu" }}
          secondaryAction={{ label: "Consumer Information", href: "/resources/consumer-information" }}
        />
      </main>
    </div>
  )
}
