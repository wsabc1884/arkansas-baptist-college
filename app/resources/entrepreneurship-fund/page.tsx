import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "ABC Entrepreneurship Fund | Arkansas Baptist College",
  description: "The ABC Entrepreneurship Fund supports students and community members in developing business ventures.",
}

export default function EntrepreneurshipFundPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="ABC Entrepreneurship Fund" subtitle="Supporting entrepreneurial development among students and the community." label="Resources" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>About the Fund</h2>
            <p>The ABC Entrepreneurship Fund supports students and community members in developing business ventures and entrepreneurial skills. The fund provides mentorship, resources, and seed funding for promising business ideas.</p>
            <h2>Contact</h2>
            <p>Phone: <a href="tel:5014201200">501-420-1200</a><br />Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
