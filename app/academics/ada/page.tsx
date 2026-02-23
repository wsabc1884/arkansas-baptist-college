import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Americans with Disabilities Act | Arkansas Baptist College",
  description: "Arkansas Baptist College ADA compliance, accommodation services, and disability support information.",
}

export default function ADAPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Americans with Disabilities Act" subtitle="Arkansas Baptist College is committed to providing equal access and reasonable accommodations for students with disabilities." label="Student Services" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Commitment to Accessibility</h2>
            <p>Arkansas Baptist College complies with the Americans with Disabilities Act (ADA) and Section 504 of the Rehabilitation Act. The College is committed to ensuring that students with disabilities have equal access to all programs, services, and activities.</p>
            <h2>Requesting Accommodations</h2>
            <p>Students seeking academic accommodations should:</p>
            <ol>
              <li>Self-identify to the Disability Services Coordinator</li>
              <li>Provide documentation of the disability from a qualified professional</li>
              <li>Meet with the coordinator to discuss reasonable accommodations</li>
              <li>Receive an accommodation letter to share with instructors</li>
            </ol>
            <h2>Types of Accommodations</h2>
            <ul>
              <li>Extended testing time</li>
              <li>Note-taking assistance</li>
              <li>Preferential seating</li>
              <li>Alternative format materials</li>
              <li>Assistive technology</li>
              <li>Sign language interpreters</li>
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
