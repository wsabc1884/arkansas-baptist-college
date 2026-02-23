import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Testing Services | Arkansas Baptist College",
  description: "Testing services at Arkansas Baptist College including placement testing, proctoring, and standardized exams.",
}

export default function TestingServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Testing Services" subtitle="Placement testing, proctoring services, and standardized exam administration." label="Student Services" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Services</h2>
            <ul>
              <li>Placement testing for new students</li>
              <li>Proctored examinations</li>
              <li>Make-up exam coordination</li>
              <li>Standardized test administration</li>
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
