import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Fine Arts | Arkansas Baptist College",
  description: "The Department of Fine Arts offers programs in music, visual arts, and performing arts, nurturing creative talent in a faith-based environment.",
}

export default function FineArtsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Fine Arts" subtitle="Nurturing creative talent through programs in music, visual arts, and performing arts." label="Academic Departments" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Department Mission</h2>
            <p>The Department of Fine Arts is committed to providing students with a comprehensive education in the arts that fosters creativity, critical thinking, and cultural awareness. Our programs integrate theory and practice, preparing students for careers in music, visual arts, education, and ministry.</p>
            <h2>Degree Programs</h2>
            <ul>
              <li><strong>Bachelor of Arts in Fine Arts</strong></li>
              <li><strong>Associate of Arts in Fine Arts</strong></li>
            </ul>
            <h2>Areas of Study</h2>
            <ul>
              <li>Music (Vocal and Instrumental)</li>
              <li>Visual Arts</li>
              <li>Performing Arts</li>
              <li>Music Ministry</li>
            </ul>
            <h2>Ensembles &amp; Performance Opportunities</h2>
            <p>Students participate in the College Choir, Band, and various ensemble groups. Performance opportunities include campus events, community engagements, and annual concerts.</p>
            <h2>Contact</h2>
            <p>Phone: <a href="tel:5014201200">501-420-1200</a><br />Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
        <CTABand title="Express Your Creativity" description="Join a community that celebrates artistic excellence and faith-based learning." primaryLabel="Apply Now" primaryHref="/enrollment/apply" secondaryLabel="View Academic Catalog" secondaryHref="/academics/academic-catalog" />
      </main>
      <Footer />
    </div>
  )
}
