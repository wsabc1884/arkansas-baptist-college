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
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border bg-card p-6 sm:p-8 text-center">
              <h2 className="font-serif text-2xl font-bold text-foreground">Search Available Courses</h2>
              <p className="mt-2 text-muted-foreground">
                Course schedules are available through the myABC student portal. Use the link below to search courses by department, day, time, or instructor.
              </p>
              <a
                href="https://my.arkansasbaptist.edu/ICS/Course_Search.jnz"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Open Course Search
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                You may need to log in to your myABC account to access course search.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-muted/30">
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>How to Register</h2>
            <ol>
              <li>Meet with your academic advisor to discuss course selections</li>
              <li>Log in to the <a href="https://my.arkansasbaptist.edu/" target="_blank" rel="noopener noreferrer">myABC Portal</a></li>
              <li>Navigate to Course Registration</li>
              <li>Search for your courses and add them to your schedule</li>
              <li>Confirm your registration</li>
            </ol>
            <h2>Need Help?</h2>
            <p>Contact the <a href="/academics/registrar">Registrar&apos;s Office</a> at <a href="tel:5014201200">501-420-1200</a> or your <a href="/academics/academic-advising">academic advisor</a> for assistance with course selection and registration.</p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
