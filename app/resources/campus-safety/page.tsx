import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Download } from "lucide-react"
import { getCampusSecurityData, OPE_SOURCE_URL } from "@/lib/campus-security"
import { CampusSecurityData } from "@/components/campus-security-data"

export const metadata: Metadata = {
  title: "Campus Safety | Arkansas Baptist College",
  description: "Campus safety and security information at Arkansas Baptist College, including emergency contacts and the Clery Act report.",
}

export default async function CampusSafetyPage() {
  const securityData = await getCampusSecurityData()

  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero title="Campus Safety" subtitle="The safety and security of our campus community is our highest priority." label="Resources" />
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Department of Campus Safety</h2>
            <p>
              The Department of Campus Safety is primarily responsible for developing services, programs, and strategies for maintaining a reasonably safe campus. In order to meet this goal, the department focuses primarily on four functions. First is a strong partnership with the community. We recognize that we provide services with consent from our community and support the idea that all relationships require constant nurturing. We are committed to the philosophy of community-oriented public safety and problem solving which we carry out through our community.
            </p>
          </div>
        </SectionWrapper>

        {/* Contact Info */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Campus Safety Contact Information</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold text-foreground">Main Safety Line</h3>
                <p className="mt-2 text-lg font-bold text-primary"><a href="tel:5014201211">(501) 420-1211</a></p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold text-foreground">Email Address</h3>
                <p className="mt-2"><a href="mailto:security@arkansasbaptist.edu" className="text-primary hover:underline">security@arkansasbaptist.edu</a></p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold text-foreground">Location</h3>
                <p className="mt-2 text-muted-foreground">1600 Dorm &ndash; 1st Floor</p>
              </div>
            </div>
            <div className="mt-4 rounded-md border border-destructive/30 bg-destructive/5 p-4">
              <p className="text-sm font-medium text-destructive">Emergency: Dial 911 first, then contact Campus Safety at (501) 420-1211.</p>
            </div>
          </div>
        </SectionWrapper>

        {/* Campus Crime & Safety Statistics (U.S. Dept. of Education) */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="mb-6">
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Clery Act Compliance</h2>
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

        {/* Safety Plans & Reports */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Campus Safety Plans & Reports</h2>
            <p className="mt-2 text-muted-foreground">The following documents are available from the Department of Campus Safety.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Campus Safety Report & Fire Safety", desc: "Annual security report including crime statistics and fire safety information.", file: "campus-safety-report.pdf" },
                { title: "Emergency Plan", desc: "Campus emergency response and evacuation procedures.", file: "emergency-plan.pdf" },
                { title: "Active Shooter Instructions", desc: "Run, Hide, Fight protocol and instructions for active threat situations.", file: "active-shooter-instructions.pdf" },
              ].map((doc) => (
                <a key={doc.title} href={`/documents/campus-safety/${doc.file}`} download className="group rounded-lg border bg-card p-5 transition-colors hover:border-primary">
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 shrink-0 text-primary" />
                    <h3 className="font-semibold text-foreground group-hover:text-primary">{doc.title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{doc.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Safety Tips (retained) */}
        <SectionWrapper className="bg-muted/30">
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Safety Tips</h2>
            <ul>
              <li>Always lock your vehicle and residence hall room</li>
              <li>Walk in well-lit areas at night</li>
              <li>Report suspicious activity to Campus Safety immediately at (501) 420-1211</li>
              <li>Keep personal belongings secure</li>
              <li>Know the location of emergency phones on campus</li>
            </ul>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
