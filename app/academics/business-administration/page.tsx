import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Business Administration | Arkansas Baptist College",
  description: "Bachelor of Business Administration at Arkansas Baptist College. Preparing students for careers in management, accounting, entrepreneurship, and sports management.",
}

export default function BusinessAdminPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Business Administration" subtitle="Preparing future business leaders with a strong foundation in management, accounting, and entrepreneurship." label="Academic Departments" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Department Mission</h2>
            <p>The Department of Business, Entrepreneurship and Technology provides educational programs to students who desire to function effectively, efficiently, and ethically in the local and global business world. The Department strives to provide each student with a quality education to become a successful business professional who will uphold moral standards and make significant contributions to their communities and their professional careers. Students will be provided educational skills including but not limited to technological, analytical, comprehension, written and communication skills through effective teaching, research and community service.</p>

            <h2>Department Chair</h2>
            <p><strong>Roberta Clark, MBA</strong><br />Chair, Business, Entrepreneurship and Technology<br />Email: <a href="mailto:roberta.clark@arkansasbaptist.edu">roberta.clark@arkansasbaptist.edu</a></p>

            <h2>Degree Programs</h2>
            <ul>
              <li><strong>Bachelor of Business Administration (BBA)</strong></li>
              <li><strong>Associate of Arts in Business Administration (AA)</strong></li>
            </ul>
            <h2>Areas of Concentration</h2>
            <ul>
              <li>Business Administration</li>
              <li>Accounting</li>
              <li>Entrepreneurship</li>
              <li>Sports Management</li>
            </ul>
            <h2>Career Opportunities</h2>
            <p>Graduates are prepared for careers in corporate management, accounting, banking, marketing, small business ownership, sports management, and graduate-level study in MBA programs.</p>
            <h2>Contact</h2>
            <p>Phone: <a href="tel:5014201200">501-420-1200</a><br />Email: <a href="mailto:roberta.clark@arkansasbaptist.edu">roberta.clark@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
        <CTABand title="Ready to Start Your Business Career?" description="Apply to Arkansas Baptist College and declare your major in Business Administration." primaryLabel="Apply Now" primaryHref="/enrollment/apply" secondaryLabel="View Academic Catalog" secondaryHref="/academics/academic-catalog" />
      </main>
      <Footer />
    </div>
  )
}
