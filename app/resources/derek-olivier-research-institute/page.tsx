import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Derek Olivier Research Institute | Arkansas Baptist College",
  description: "The Derek Olivier Research Institute supports research, innovation, and scholarly activity at Arkansas Baptist College.",
}

export default function DORIPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Derek Olivier Research Institute" subtitle="Advancing research, innovation, and scholarly activity at Arkansas Baptist College." label="Resources" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>About the Institute</h2>
            <p>The Derek Olivier Research Institute (DORI) supports research initiatives, scholarly activity, and innovation at Arkansas Baptist College. The institute provides resources and support for faculty and student research projects that contribute to the mission of the college and the broader community.</p>
            <h2>Contact</h2>
            <p>Phone: <a href="tel:5014201200">501-420-1200</a><br />Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
