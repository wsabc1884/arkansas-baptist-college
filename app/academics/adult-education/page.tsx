import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "Adult Education | Arkansas Baptist College",
  description:
    "ABC Adult Education provides GED preparation and testing, employability and workforce skills, basic skills improvement, and college preparation.",
}

export default function AdultEducationPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero title="Adult Education" subtitle="Student Services" description="GED preparation, workforce readiness, and educational pathways for adult learners." />

        {/* Mission */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Mission Statement</h2>
            <p>The mission of ABC Adult Education Center is to provide education and training to citizens of Arkansas to improve academic and employability skills necessary to compete in a global economy.</p>

            <h2>Interest Application</h2>
            <p>Submit your interest application to get started with the ABC Adult Education Program.</p>
            <div className="not-prose mt-2 flex flex-wrap gap-3">
              <a href="https://studentportal.literacypro.com/AR" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Arkansas State Portal</a>
              <a href="https://studentportal.literacypro.com/ar/providers/420/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">Program Portal</a>
            </div>

            <h2>Our Adult Education Services</h2>
            <ul>
              <li>G.E.D. Preparation</li>
              <li>Employability and Workforce Skills</li>
              <li>Basic Skills Improvement</li>
              <li>College Preparation</li>
              <li>Refresher Courses</li>
              <li>Distance Education Classes (online classes)</li>
              <li>WAGE Certification</li>
            </ul>

            <h2>What You Will Need to Enroll</h2>
            <ul>
              <li>Be 18 years of age or older (not enrolled or required to enroll in secondary education under state law and is basic skills deficient)</li>
              <li>Hold a state issued driver&apos;s license or state issued ID</li>
              <li>Social Security Card</li>
              <li>Take the Test of Adult Basic Education (TABE) Assessment</li>
              <li>Attend orientation</li>
            </ul>
            <p><em>Enrollment hours may vary depending upon location.</em></p>
            <p><strong>All classes are FREE!</strong></p>
          </div>
        </SectionWrapper>

        {/* GED Testing */}
        <SectionWrapper className="bg-muted/30">
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>GED Testing Services</h2>
            <p>For information on the GED Ready/Practice exam, the G.E.D. Exam and for information related to receiving accommodations for the G.E.D. Exam, please call <a href="tel:5014201350">(501) 420-1350</a>.</p>
            <h3>Testing Hours</h3>
            <p>Tuesday: 8:00am to 5:00pm<br />Thursday: 8:00am to 5:00pm</p>
            <p><strong>Official GED Testing is at our Main Location Only</strong></p>
          </div>
        </SectionWrapper>

        {/* Locations */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Adult Education Center Locations</h2>

            <h3>Arkansas Baptist College (ABC) Adult Education - Main Location</h3>
            <p>1418 W Daisy L Gatson Bates Drive<br />Little Rock, Arkansas 72202<br />Phone: <a href="tel:5014201350">(501) 420-1350</a><br />Email: <a href="mailto:abcadulteducation@arkansasbaptist.edu">abcadulteducation@arkansasbaptist.edu</a></p>

            <h3>Arkansas Parole and Probation</h3>
            <p>1302 Pike Avenue<br />North Little Rock, Arkansas 71299</p>

            <h3>Arkansas Workforce Center</h3>
            <p>324 Pershing Blvd.<br />North Little Rock, Arkansas 72116</p>

            <h3>Arkansas Rehabilitation Services</h3>
            <p>3901 McCain Park Drive, Ste. 113<br />North Little Rock, Arkansas 72116</p>

            <h3>Our House</h3>
            <p>302 East Roosevelt Road<br />Little Rock, Arkansas 72206</p>
          </div>
        </SectionWrapper>

        {/* Contact & Director */}
        <SectionWrapper className="bg-muted/30">
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Contact</h2>
            <p><strong>Debra Baker</strong><br />Adult Education Director<br />Email: <a href="mailto:debra.baker@arkansasbaptist.edu">debra.baker@arkansasbaptist.edu</a><br />Phone: <a href="tel:5014201350">501-420-1350</a></p>

            <p>ABC Adult Education Center is committed to fulfilling all federal requirements of the Rehabilitation Act of 1973, the Americans with Disabilities Act of 1990 and the ADA Amendments of 2008.</p>

            <p><strong>Affirmative Action/Equal Opportunity:</strong> ABC Adult Education makes every effort to meet special accommodation and access needs. For information on specific accommodations for individuals with disabilities, contact the ADA Coordinator for the ABC Adult Education Center, <a href="tel:5014201350">(501) 420-1350</a>.</p>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
