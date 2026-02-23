import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Academic Calendar (Main Campus) | Arkansas Baptist College",
  description: "Important dates for the current academic year at Arkansas Baptist College Main Campus.",
}

export default function AcademicCalendarPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Academic Calendar" subtitle="Main Campus - Important dates and deadlines for the current academic year." label="Academic Resources" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Fall Semester 2025-2026</h2>
            <ul>
              <li><strong>New Student Orientation:</strong> August 11-12</li>
              <li><strong>Classes Begin:</strong> August 18</li>
              <li><strong>Last Day to Add/Drop:</strong> August 29</li>
              <li><strong>Labor Day (No Classes):</strong> September 1</li>
              <li><strong>Midterm Exams:</strong> October 6-10</li>
              <li><strong>Fall Break:</strong> October 13-14</li>
              <li><strong>Last Day to Withdraw:</strong> November 7</li>
              <li><strong>Thanksgiving Break:</strong> November 24-28</li>
              <li><strong>Final Exams:</strong> December 8-12</li>
              <li><strong>Commencement:</strong> December 13</li>
            </ul>
            <h2>Spring Semester 2025-2026</h2>
            <ul>
              <li><strong>New Student Orientation:</strong> January 5-6</li>
              <li><strong>Classes Begin:</strong> January 12</li>
              <li><strong>Last Day to Add/Drop:</strong> January 23</li>
              <li><strong>Martin Luther King Jr. Day (No Classes):</strong> January 19</li>
              <li><strong>Midterm Exams:</strong> March 2-6</li>
              <li><strong>Spring Break:</strong> March 16-20</li>
              <li><strong>Last Day to Withdraw:</strong> April 3</li>
              <li><strong>Final Exams:</strong> May 4-8</li>
              <li><strong>Commencement:</strong> May 9</li>
            </ul>
            <p className="text-xs italic">Dates are subject to change. Contact the Registrar&apos;s Office at <a href="tel:5014201200">501-420-1200</a> for the most current calendar.</p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
