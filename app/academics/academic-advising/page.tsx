import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Academic Success and Career Center | Arkansas Baptist College",
  description:
    "The Academic Success and Career Center provides advising, peer tutoring, academic success coaching, and career planning at Arkansas Baptist College.",
}

export default function AcademicAdvisingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Academic Success and Career Center" subtitle="Student Services" description="Advising is a collaborative partnership that maximizes the individual potential of students." />
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>About the Center</h2>
            <p>Advising is a collaborative partnership that maximizes the individual potential of students by sharing information, tools, and resources that empower students to make informed decisions about creating appropriate academic and career plans to achieve their academic, career, and life goals.</p>

            <h2>Academic Services</h2>
            <p><strong>Learning Resources for Students.</strong> Explore a wide variety of structured services that aid student success. These include academic advising, peer tutoring, and academic success coaching.</p>

            <h2>Advising Services</h2>
            <ul>
              <li>Course selection and registration assistance</li>
              <li>Degree planning and progress monitoring</li>
              <li>Exploration of majors and career pathways</li>
              <li>Referrals to campus support services</li>
              <li>Transfer credit evaluation guidance</li>
            </ul>

            <h2>Parents + Families</h2>
            <p><strong>We&apos;re here to help.</strong> Our goal is to help students develop as individuals. We encourage students to converse openly with their families about their progress, academic interests, and college experiences.</p>

            <h2>When to See Your Advisor</h2>
            <ul>
              <li>Before registering for courses each semester</li>
              <li>When considering a change of major</li>
              <li>If your GPA falls below 2.0</li>
              <li>When planning for graduation</li>
              <li>If you are struggling academically</li>
            </ul>

            <h2>Contact Us</h2>
            <p>To meet with an Academic Advisor, log into Handshake to schedule an appointment or drop by our office:</p>
            <p>
              <strong>Academic Success and Career Center</strong><br />
              Library Annex<br />
              1600 Dr. Martin Luther King Jr., Drive<br />
              Little Rock, AR 72202<br />
              Walk-in Hours: M-Th: 8:30 AM - 5:00 PM
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
