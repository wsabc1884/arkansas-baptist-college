import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Student Organizations | Arkansas Baptist College",
  description: "Get involved with student organizations and clubs at Arkansas Baptist College.",
}

export default function StudentOrganizationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Student Organizations" subtitle="Get involved, build community, and develop leadership skills through campus organizations." label="Student Life" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Get Involved</h2>
            <p>Arkansas Baptist College encourages all students to participate in campus organizations. Involvement in student organizations enhances the college experience, builds leadership skills, and creates lasting friendships.</p>
            <h2>Organizations</h2>
            <ul>
              <li>Student Government Association (SGA)</li>
              <li>College Choir</li>
              <li>Band</li>
              <li>Drama Club</li>
              <li>Baptist Student Union</li>
              <li>Community Service Organizations</li>
              <li>Academic Honor Societies</li>
              <li>Intramural Sports</li>
            </ul>
            <h2>Starting a New Organization</h2>
            <p>Students interested in starting a new organization should contact the Office of Student Affairs for guidelines and the application process.</p>
            <h2>Contact</h2>
            <p>Office of Student Affairs<br />Phone: <a href="tel:5014201200">501-420-1200</a></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
