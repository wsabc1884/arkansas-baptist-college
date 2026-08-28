import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { CTABand } from "@/components/cta-band"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { FeatureGrid } from "@/components/feature-grid"
import { Shield, Users, BookOpen, Heart, User, ArrowRight } from "lucide-react"
import { TRUSTEES, type Trustee } from "@/lib/trustees"

interface TrusteeCardProps {
  member: Trustee
  highlight?: boolean
  reportsTo?: string
}

function TrusteeCard({ member, highlight = false, reportsTo }: TrusteeCardProps) {
  return (
    <Link
      href={`/about/board-of-trustees/${member.slug}`}
      className={`group flex w-full max-w-sm flex-col items-center rounded-lg border p-6 text-center transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3d1a5c] ${
        highlight ? "border-[#3d1a5c] bg-[#3d1a5c] text-white" : "border-border bg-card"
      }`}
    >
      <div
        className={`flex h-24 w-24 items-center justify-center overflow-hidden rounded-full ${
          highlight ? "bg-white/15" : "bg-[#3d1a5c]/10"
        }`}
      >
        {member.image ? (
          <Image
            src={member.image || "/placeholder.svg"}
            alt={`Portrait of ${member.name}`}
            width={96}
            height={96}
            className={`h-full w-full object-cover ${member.cardImageClass ?? "object-center"}`}
          />
        ) : (
          <User
            className={`h-10 w-10 ${highlight ? "text-white/80" : "text-[#3d1a5c]/60"}`}
            aria-hidden="true"
          />
        )}
      </div>
      <h3 className={`mt-4 text-base font-semibold ${highlight ? "text-white" : "text-foreground"}`}>
        {member.name}
      </h3>
      <p className={`mt-1 text-sm font-medium ${highlight ? "text-white/90" : "text-[#3d1a5c]"}`}>
        {member.title}
      </p>
      {reportsTo && <p className="mt-0.5 text-xs text-muted-foreground/70">Reports to {reportsTo}</p>}
      <span
        className={`mt-4 inline-flex items-center gap-1 text-xs font-semibold ${
          highlight ? "text-white/90" : "text-[#3d1a5c]"
        }`}
      >
        View Profile
        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  )
}

export const metadata = {
  title: "Board of Trustees | Arkansas Baptist College",
  description: "Learn about the Board of Trustees who govern Arkansas Baptist College.",
}

export default function BoardOfTrusteesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main id="main-content">
        <PageHero
          title="Board of Trustees"
          subtitle="About Us"
          description="Dedicated leaders guiding Arkansas Baptist College with wisdom, faith, and commitment to excellence."
          breadcrumbs={[
            { label: "About Us", href: "/about/history" },
            { label: "Board of Trustees", href: "/about/board-of-trustees" },
          ]}
        />

        {/* About the Board */}
        <SectionWrapper>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#3d1a5c]/70">
                Governance
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Guiding Our Institution
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  The Board of Trustees serves as the governing body of Arkansas Baptist College,
                  providing strategic direction and oversight to ensure the institution fulfills
                  its mission of Truth and Light.
                </p>
                <p>
                  Comprised of dedicated leaders from various backgrounds, the Board brings
                  together expertise in education, business, ministry, and community service
                  to guide the college&apos;s future.
                </p>
                <p>
                  The Board works closely with the President and administration to uphold the
                  college&apos;s Christian values, maintain academic excellence, and ensure
                  responsible stewardship of resources.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Shield, title: "Governance", desc: "Providing strategic oversight and policy direction", purple: true },
                { icon: Users, title: "Leadership", desc: "Guiding the institution toward its vision", purple: false },
                { icon: BookOpen, title: "Academics", desc: "Ensuring quality education and programs", purple: false },
                { icon: Heart, title: "Stewardship", desc: "Responsible management of resources", purple: true },
              ].map((item) => (
                <div key={item.title} className={`rounded-lg p-6 ${item.purple ? "bg-[#3d1a5c]" : "bg-[#f0eef3]"}`}>
                  <item.icon className={`h-10 w-10 ${item.purple ? "text-white/70" : "text-[#3d1a5c]"}`} aria-hidden="true" />
                  <h3 className={`mt-4 text-lg font-bold ${item.purple ? "text-white" : "text-[#3d1a5c]"}`}>{item.title}</h3>
                  <p className={`mt-2 text-sm ${item.purple ? "text-white/70" : "text-[#3d1a5c]/70"}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Board Members Directory */}
        <SectionWrapper variant="muted">
          <SectionHeader
            title="Meet Our Trustees"
            subtitle="Board Members"
            description="Our Board of Trustees comprises dedicated leaders serving in executive roles and as board members, guiding the college with wisdom and commitment."
            align="center"
          />
          <div className="space-y-12">
            {/* Executive Officers Section */}
            <div>
              <div className="mb-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#3d1a5c]/70 mb-2">
                  Leadership
                </p>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Executive Officers
                </h3>
              </div>
              <div className="mx-auto max-w-4xl">
                {/* Chairman (top of hierarchy) */}
                <div className="flex justify-center">
                  <TrusteeCard member={TRUSTEES.find((t) => t.title === "Chairman")!} highlight />
                </div>

                {/* Connector */}
                <div className="flex flex-col items-center" aria-hidden="true">
                  <div className="h-8 w-px bg-[#3d1a5c]/30" />
                  <div className="h-px w-2/3 max-w-md bg-[#3d1a5c]/30" />
                  <div className="flex w-2/3 max-w-md justify-between">
                    <div className="h-8 w-px bg-[#3d1a5c]/30" />
                    <div className="h-8 w-px bg-[#3d1a5c]/30" />
                  </div>
                </div>

                {/* Direct reports */}
                <div className="flex flex-wrap justify-center gap-6">
                  {TRUSTEES.filter(
                    (t) => t.department === "Executive Officer" && t.title !== "Chairman",
                  ).map((member) => (
                    <TrusteeCard key={member.slug} member={member} reportsTo="Chairman" />
                  ))}
                </div>
              </div>
            </div>

            {/* Board Members Section */}
            <div>
              <div className="mb-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#3d1a5c]/70 mb-2">
                  Governance
                </p>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Board Members
                </h3>
              </div>
              <div className="grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {TRUSTEES.filter((t) => t.department !== "Executive Officer").map((member) => (
                  <TrusteeCard key={member.slug} member={member} />
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Board Responsibilities */}
        <SectionWrapper>
          <SectionHeader
            title="Board Responsibilities"
            description="The Board of Trustees fulfills critical governance functions to ensure Arkansas Baptist College achieves its mission."
            align="center"
          />
          <FeatureGrid
            items={[
              { title: "Strategic Planning", description: "Setting the long-term vision and strategic direction for the college", href: "/about/strategic-plan" },
              { title: "Financial Oversight", description: "Ensuring responsible stewardship of the college's financial resources" },
              { title: "Presidential Support", description: "Selecting, evaluating, and supporting the college president" },
              { title: "Policy Development", description: "Establishing policies that guide institutional operations" },
              { title: "Advocacy", description: "Championing the college's mission to external stakeholders" },
              { title: "Accreditation", description: "Ensuring compliance with accreditation standards and requirements" },
            ]}
            columns={3}
            variant="card"
          />
        </SectionWrapper>

        <CTABand
          heading="Learn More About Our Leadership"
          description="Discover the dedicated team guiding Arkansas Baptist College."
          primaryAction={{ label: "Office of the President", href: "/about/office-of-the-president" }}
          secondaryAction={{ label: "Administration", href: "/about/administration" }}
        />
      </main>
    </div>
  )
}
