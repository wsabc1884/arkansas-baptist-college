import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "Academic Affairs | Arkansas Baptist College",
  description: "The Office of Academic Affairs oversees all academic programs, faculty development, and curriculum at Arkansas Baptist College.",
}

export default function AcademicAffairsPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero title="Academic Affairs" subtitle="Overseeing academic programs, faculty development, and curriculum excellence." label="Academic Resources" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>About Academic Affairs</h2>
            <p>The Office of Academic Affairs is responsible for the oversight of all academic programs, faculty affairs, curriculum development, and academic support services. The office works to ensure that Arkansas Baptist College delivers a high-quality educational experience aligned with its mission.</p>
            <h2>Responsibilities</h2>
            <ul>
              <li>Curriculum development and review</li>
              <li>Faculty recruitment, evaluation, and development</li>
              <li>Academic program assessment and accreditation</li>
              <li>Academic policy implementation</li>
              <li>Coordination of academic support services</li>
            </ul>
            <h2>Contact</h2>
            <p>Office of Academic Affairs<br />Phone: <a href="tel:5014201200">501-420-1200</a><br />Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
