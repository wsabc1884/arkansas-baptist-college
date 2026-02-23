import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Human Resources | Arkansas Baptist College",
  description: "Employment opportunities, benefits information, and HR policies at Arkansas Baptist College.",
}

export default function HumanResourcesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Human Resources" subtitle="Employment opportunities and human resources information at Arkansas Baptist College." label="Resources" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>About</h2>
            <p>The Office of Human Resources supports the mission of Arkansas Baptist College by recruiting, retaining, and developing a talented and diverse workforce. We are committed to providing a positive work environment that values integrity, respect, and excellence.</p>
            <h2>Employment Opportunities</h2>
            <p>Arkansas Baptist College is an equal opportunity employer. Current openings are posted periodically. Interested candidates should submit a cover letter and resume to the Office of Human Resources.</p>
            <h2>Contact</h2>
            <p>Office of Human Resources<br />Phone: <a href="tel:5014201200">501-420-1200</a><br />Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
