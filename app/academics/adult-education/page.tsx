import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Adult Education | Arkansas Baptist College",
  description: "Adult education programs at Arkansas Baptist College providing GED preparation, literacy programs, and continuing education.",
}

export default function AdultEducationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Adult Education" subtitle="Providing educational pathways for adult learners through GED preparation, literacy programs, and continuing education." label="Student Services" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Programs &amp; Services</h2>
            <ul>
              <li>GED preparation and testing</li>
              <li>Adult literacy and basic skills</li>
              <li>English as a Second Language (ESL)</li>
              <li>Workforce readiness training</li>
              <li>Computer literacy skills</li>
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
