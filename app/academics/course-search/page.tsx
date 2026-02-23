import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Course Search | Arkansas Baptist College",
  description: "Search and browse available courses at Arkansas Baptist College for the current and upcoming semesters.",
}

export default function CourseSearchPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Course Search" subtitle="Browse available courses for the current and upcoming semesters." label="Academic Resources" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Search Courses</h2>
            <p>Course schedules are available through the myABC student portal. Log in to your account to search courses by department, day, time, or instructor.</p>
            <h2>How to Register</h2>
            <ul>
              <li>Meet with your academic advisor to discuss course selections</li>
              <li>Log in to the myABC Portal</li>
              <li>Navigate to Course Registration</li>
              <li>Search for your courses and add them to your schedule</li>
              <li>Confirm your registration</li>
            </ul>
            <h2>Need Help?</h2>
            <p>Contact the <a href="/academics/registrar">Registrar&apos;s Office</a> at <a href="tel:5014201200">501-420-1200</a> or your <a href="/academics/academic-advising">academic advisor</a> for assistance with course selection and registration.</p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
