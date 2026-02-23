import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Religious Studies | Arkansas Baptist College",
  description: "The Department of Religious Studies prepares students for ministry, chaplaincy, and graduate theological education.",
}

export default function ReligiousStudiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Religious Studies" subtitle="Grounded in the Baptist tradition, preparing students for lives of ministry, service, and spiritual leadership." label="Academic Departments" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Department Mission</h2>
            <p>The Department of Religious Studies is rooted in the rich Baptist heritage of Arkansas Baptist College. Our mission is to prepare students for effective ministry, pastoral leadership, chaplaincy, and graduate-level theological study. The program integrates biblical scholarship, theological reflection, and practical ministry experience.</p>
            <h2>Degree Programs</h2>
            <ul>
              <li><strong>Bachelor of Arts in Religious Studies</strong></li>
              <li><strong>Associate of Arts in Religious Studies</strong></li>
            </ul>
            <h2>Career Opportunities</h2>
            <ul>
              <li>Pastoral Ministry</li>
              <li>Chaplaincy (Hospital, Military, Prison)</li>
              <li>Youth Ministry</li>
              <li>Music Ministry</li>
              <li>Missions and Outreach</li>
              <li>Graduate theological seminary</li>
            </ul>
            <h2>Contact</h2>
            <p>Phone: <a href="tel:5014201200">501-420-1200</a><br />Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
        <CTABand title="Answer the Call" description="Begin your preparation for ministry and spiritual leadership at ABC." primaryLabel="Apply Now" primaryHref="/enrollment/apply" secondaryLabel="View Academic Catalog" secondaryHref="/academics/academic-catalog" />
      </main>
      <Footer />
    </div>
  )
}
