import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { CTABand } from "@/components/cta-band"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { FeatureGrid } from "@/components/feature-grid"
import { TeamDirectory } from "@/components/team-directory"
import { Shield, Users, BookOpen, Heart } from "lucide-react"

export const metadata = {
  title: "Board of Trustees | Arkansas Baptist College",
  description: "Learn about the Board of Trustees who govern Arkansas Baptist College.",
}

export default function BoardOfTrusteesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
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
            align="center"
          />
          <TeamDirectory comingSoon />
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
              { title: "Strategic Planning", description: "Setting the long-term vision and strategic direction for the college" },
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
      <Footer />
    </div>
  )
}
