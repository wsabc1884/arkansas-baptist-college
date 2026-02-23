import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Institutional Research | Arkansas Baptist College",
  description: "The Office of Institutional Research collects, analyzes, and reports data to support institutional planning and effectiveness.",
}

export default function InstitutionalResearchPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Institutional Research" subtitle="Data-driven insights supporting institutional planning, assessment, and accreditation." label="Resources" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>About</h2>
            <p>The Office of Institutional Research collects, analyzes, and reports data to support decision-making, strategic planning, and accreditation at Arkansas Baptist College. The office is responsible for federal and state reporting, enrollment analytics, and assessment of institutional effectiveness.</p>
            <h2>Key Functions</h2>
            <ul>
              <li>IPEDS federal reporting</li>
              <li>Enrollment and retention analysis</li>
              <li>Accreditation data support</li>
              <li>Survey administration and analysis</li>
              <li>Institutional fact sheets and dashboards</li>
            </ul>
            <h2>Contact</h2>
            <p>Phone: <a href="tel:5014201200">501-420-1200</a><br />Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
