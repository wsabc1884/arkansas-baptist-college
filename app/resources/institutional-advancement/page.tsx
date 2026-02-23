import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Institutional Advancement | Arkansas Baptist College",
  description: "Support Arkansas Baptist College through giving, alumni engagement, and institutional partnerships.",
}

export default function InstitutionalAdvancementPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Institutional Advancement" subtitle="Supporting the mission of Arkansas Baptist College through philanthropy, alumni engagement, and strategic partnerships." label="Resources" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Ways to Give</h2>
            <p>Your generous support helps Arkansas Baptist College continue its mission of providing accessible, quality higher education. There are many ways to contribute:</p>
            <ul>
              <li><strong>Annual Fund:</strong> Unrestricted gifts that support daily operations and student needs</li>
              <li><strong>Scholarships:</strong> Endowed and annual scholarships to help students afford their education</li>
              <li><strong>Capital Gifts:</strong> Support for facilities, technology, and campus improvements</li>
              <li><strong>Planned Giving:</strong> Estate gifts, bequests, and charitable trusts</li>
              <li><strong>Corporate Partnerships:</strong> Sponsorships and matching gift programs</li>
            </ul>
            <h2>Alumni Engagement</h2>
            <p>ABC alumni are vital to the continued growth and success of the college. Stay connected, volunteer, and help us build the next generation of leaders.</p>
            <h2>Contact</h2>
            <p>Office of Institutional Advancement<br />Phone: <a href="tel:5014201200">501-420-1200</a><br />Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
        <CTABand title="Support ABC Today" description="Your gift makes a difference in the lives of our students." primaryLabel="Give to ABC" primaryHref="/give" secondaryLabel="Contact Us" secondaryHref="/resources/directory" />
      </main>
      <Footer />
    </div>
  )
}
