import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Business Administration | Arkansas Baptist College",
  description: "Bachelor of Science in Business Administration at Arkansas Baptist College. Preparing students for careers in management, accounting, marketing, and entrepreneurship.",
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
            <p>The Department of Business Administration prepares students with the knowledge, skills, and ethical framework to succeed in a global business environment. Our programs emphasize critical thinking, analytical reasoning, and practical application of business principles.</p>
            <h2>Degree Programs</h2>
            <ul>
              <li><strong>Bachelor of Science in Business Administration</strong></li>
              <li><strong>Associate of Science in Business Administration</strong></li>
            </ul>
            <h2>Areas of Concentration</h2>
            <ul>
              <li>Accounting</li>
              <li>Management</li>
              <li>Marketing</li>
              <li>Entrepreneurship</li>
            </ul>
            <h2>Career Opportunities</h2>
            <p>Graduates are prepared for careers in corporate management, accounting, banking, marketing, small business ownership, and graduate-level study in MBA programs.</p>
            <h2>Contact</h2>
            <p>Phone: <a href="tel:5014201200">501-420-1200</a><br />Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
        <CTABand title="Ready to Start Your Business Career?" description="Apply to Arkansas Baptist College and declare your major in Business Administration." primaryLabel="Apply Now" primaryHref="/enrollment/apply" secondaryLabel="View Academic Catalog" secondaryHref="/academics/academic-catalog" />
      </main>
      <Footer />
    </div>
  )
}
