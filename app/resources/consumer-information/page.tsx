import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Consumer Information | Arkansas Baptist College",
  description: "Consumer information disclosures as required by federal regulations at Arkansas Baptist College.",
}

export default function ConsumerInformationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Consumer Information" subtitle="Institutional disclosures as required by the Higher Education Act and federal regulations." label="Resources" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <p>In compliance with federal regulations, Arkansas Baptist College provides the following consumer information to current and prospective students, employees, and the general public.</p>
            <h2>General Institutional Information</h2>
            <ul>
              <li><a href="/enrollment/tuition-and-fees">Tuition and Fees</a></li>
              <li><a href="/enrollment/financial-aid">Financial Aid Information</a></li>
              <li><a href="/enrollment/sap">Satisfactory Academic Progress</a></li>
              <li><a href="/academics/academic-catalog">Academic Catalog &amp; Programs</a></li>
              <li><a href="/compliance/ferpa">Family Educational Rights and Privacy Act (FERPA)</a></li>
              <li><a href="/resources/campus-safety">Campus Safety &amp; Security (Clery Act)</a></li>
              <li><a href="/about/title-ix">Title IX Information</a></li>
            </ul>
            <h2>Contact</h2>
            <p>For questions about consumer information disclosures, contact the Office of Institutional Research at <a href="tel:5014201200">501-420-1200</a>.</p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
