import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Facilities | Arkansas Baptist College",
  description: "Campus facilities, buildings, and venue information at Arkansas Baptist College.",
}

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Facilities" subtitle="Our campus facilities support learning, living, and community engagement." label="Resources" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Campus Buildings</h2>
            <ul>
              <li><strong>Administration Building:</strong> Houses executive offices, admissions, financial aid, registrar, and business office</li>
              <li><strong>J.C. Oliver Library:</strong> Academic library with study spaces, computer labs, and research databases</li>
              <li><strong>Academic Building:</strong> Classrooms and faculty offices for academic departments</li>
              <li><strong>Student Center:</strong> Student activities, dining services, and meeting spaces</li>
              <li><strong>Residence Halls:</strong> Campus housing for residential students</li>
              <li><strong>Chapel:</strong> Worship services, convocations, and community gatherings</li>
            </ul>
            <h2>Facility Requests</h2>
            <p>For facility rental or event space requests, contact the administration office at <a href="tel:5014201200">501-420-1200</a>.</p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
