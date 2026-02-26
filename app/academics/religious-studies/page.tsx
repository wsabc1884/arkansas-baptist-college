import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Religious Studies | Arkansas Baptist College",
  description: "The Department of Religious Studies prepares students for ministry, chaplaincy, and graduate theological education.",
}

export default function ReligiousStudiesPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero title="Religious Studies" subtitle="Grounded in the Baptist tradition, preparing students for lives of ministry, service, and spiritual leadership." label="Academic Departments" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Department Mission</h2>
            <p>The Department of Religious Studies is rooted in the rich Baptist heritage of Arkansas Baptist College. Our mission is to educate, equip, and prepare one student at a time for effective and faithful ministry in the church, community and globally. The program integrates biblical scholarship, theological reflection, and practical ministry experience.</p>

            <h2>Department Chair</h2>
            <p><strong>Reverend Clifton Conley, DMIN.</strong><br />Chair, Religious Studies &amp; Associate Professor<br />Email: <a href="mailto:clifton.conley@arkansasbaptist.edu">clifton.conley@arkansasbaptist.edu</a></p>

            <h2>Degree Programs</h2>
            <ul>
              <li><strong>Bachelor of Arts in Christian Education (BA)</strong></li>
              <li><strong>Associate of Arts in Christian Education (AA)</strong></li>
              <li><strong>Bachelor of Arts in Religious Studies (BA)</strong></li>
              <li><strong>Associate of Arts in Religious Studies (AA)</strong></li>
              <li><strong>Associate of Arts in Christian Leadership (AA)</strong></li>
            </ul>
            <h2>Career Opportunities</h2>
            <ul>
              <li>Pastoral Ministry</li>
              <li>Chaplaincy (Hospital, Military, Prison)</li>
              <li>Youth Ministry</li>
              <li>Music Ministry</li>
              <li>Christian Education</li>
              <li>Missions and Outreach</li>
              <li>Graduate theological seminary</li>
            </ul>
            <h2>Contact</h2>
            <p>Phone: <a href="tel:5014201200">501-420-1200</a><br />Email: <a href="mailto:clifton.conley@arkansasbaptist.edu">clifton.conley@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
        <CTABand title="Answer the Call" description="Begin your preparation for ministry and spiritual leadership at ABC." primaryLabel="Apply Now" primaryHref="/enrollment/apply" secondaryLabel="View Academic Catalog" secondaryHref="/academics/academic-catalog" />
      </main>
    </div>
  )
}
