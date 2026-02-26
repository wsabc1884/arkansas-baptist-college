import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Fine Arts | Arkansas Baptist College",
  description: "The Department of Fine Arts offers programs in music performance and music business, preparing students for careers in the music industry.",
}

export default function FineArtsPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero title="Fine Arts" subtitle="Preparing students for careers in music performance and the music industry." label="Academic Departments" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Department Mission</h2>
            <p>The Department of Fine Arts provides instruction in music business management for entry into the music industry. The Fine Arts entrepreneurship center is an innovative program that provides students with a unique opportunity to learn about the music industry. Students will gain knowledge in the areas of music production, music publishing, music marketing, and music business management.</p>
            <h2>Degree Programs</h2>
            <ul>
              <li><strong>Bachelor of Arts in Music Performance (BA)</strong></li>
              <li><strong>Associate of Arts in Music Business (AA)</strong></li>
            </ul>
            <h2>Ensembles &amp; Performance Opportunities</h2>
            <p>Students participate in the College Choir, Band, and various ensemble groups. Performance opportunities include campus events, community engagements, and annual concerts.</p>
            <h2>Contact</h2>
            <p>Phone: <a href="tel:5014201200">501-420-1200</a><br />Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
        <CTABand title="Express Your Creativity" description="Join a community that celebrates artistic excellence and faith-based learning." primaryLabel="Apply Now" primaryHref="/enrollment/apply" secondaryLabel="View Academic Catalog" secondaryHref="/academics/academic-catalog" />
      </main>
    </div>
  )
}
