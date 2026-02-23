import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Academic Advising | Arkansas Baptist College",
  description: "Academic advising services to help students plan their path to graduation at Arkansas Baptist College.",
}

export default function AcademicAdvisingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Academic Advising" subtitle="Personalized guidance to help you plan your academic journey and stay on track to graduation." label="Student Services" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>About Academic Advising</h2>
            <p>Academic advisors work one-on-one with students to develop an academic plan that aligns with their educational and career goals. Each student is assigned a faculty advisor in their declared major area.</p>
            <h2>Advising Services</h2>
            <ul>
              <li>Course selection and registration assistance</li>
              <li>Degree planning and progress monitoring</li>
              <li>Exploration of majors and career pathways</li>
              <li>Referrals to campus support services</li>
              <li>Transfer credit evaluation guidance</li>
            </ul>
            <h2>When to See Your Advisor</h2>
            <ul>
              <li>Before registering for courses each semester</li>
              <li>When considering a change of major</li>
              <li>If your GPA falls below 2.0</li>
              <li>When planning for graduation</li>
              <li>If you are struggling academically</li>
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
