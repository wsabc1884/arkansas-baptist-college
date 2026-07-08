import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Upward Bound TRIO Program | Arkansas Baptist College",
  description: "Upward Bound is a college preparatory program providing academic tutoring, counseling, and college readiness for high school students.",
}

export default function UpwardBoundPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero title="Upward Bound TRIO Program" subtitle="College Prep Central - preparing high school students for success beyond graduation." label="Student Services" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>About Upward Bound</h2>
            <p>On Saturdays during the academic year and for six weeks in the summer, we offer instruction in the basics - reading, writing, and math - plus tutoring in other subjects necessary for success beyond high school.</p>
            <h2>Program Features</h2>
            <ul>
              <li><strong>Academic Tutoring:</strong> Instruction in reading, writing, math, and other core subjects</li>
              <li><strong>Counseling &amp; Mentoring:</strong> Counselors, mentors, and friends help students work through academic and personal issues</li>
              <li><strong>College Tours:</strong> Staff take students on college tours throughout the state and across the nation</li>
              <li><strong>Life Skills:</strong> Office work-study jobs, corporate and government field trips, and cultural events</li>
              <li><strong>Family Support:</strong> We work with students and their parents as a family to get them to the school of their choice</li>
            </ul>
            <h2>Is Upward Bound for You?</h2>
            <p>Interested students, parents, guardians, or guidance counselors can call us at <a href="tel:5014201276">(501) 420-1276</a> for more information and an Upward Bound pre-qualification form.</p>
            <div className="not-prose mt-4 flex flex-wrap gap-3">
              <a href="/documents/upward-bound/prequalification-form.pdf" download className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Download Pre-Qualification Form</a>
              <a href="/documents/upward-bound/tutor-mentor-application.pdf" download className="inline-flex items-center gap-2 rounded-md border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">Download Tutor &amp; Mentor Application</a>
            </div>
            <p>Like their students, many Upward Bound professionals had to overcome class, social, academic and cultural barriers to succeed in higher education. As a result, Upward Bound Staff members can effectively relate to their students and know how to motivate young people and adults in spite of the obstacles that often serve to discourage.</p>
            <h2>Contact</h2>
            <p><strong>Reverend Michael Isaac</strong><br />Director of Upward Bound<br />Email: <a href="mailto:Michael.Isaac@arkansasbaptist.edu">Michael.Isaac@arkansasbaptist.edu</a><br />Phone: <a href="tel:5014201276">501-420-1276</a></p>
          </div>
        </SectionWrapper>
        <CTABand title="Get Started" description="Contact us today to learn if the Upward Bound TRIO Program is right for you." primaryLabel="Contact Upward Bound" primaryHref="tel:5014201276" secondaryLabel="Apply to ABC" secondaryHref="/enrollment/apply" />
      </main>
    </div>
  )
}
