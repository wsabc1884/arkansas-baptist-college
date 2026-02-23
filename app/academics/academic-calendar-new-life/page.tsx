import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Academic Calendar (New Life) | Arkansas Baptist College",
  description: "Important dates for the New Life campus academic calendar at Arkansas Baptist College.",
}

export default function AcademicCalendarNewLifePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Academic Calendar (New Life)" subtitle="New Life Campus - Important dates and deadlines for the current academic year." label="Academic Resources" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <p>The New Life campus follows an accelerated academic calendar with multiple start dates throughout the year. Contact the Office of Academic Affairs for the most current schedule.</p>
            <h2>Contact</h2>
            <p>Phone: <a href="tel:5014201200">501-420-1200</a><br />Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
