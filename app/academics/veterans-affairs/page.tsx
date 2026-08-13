import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "Veterans Affairs | Arkansas Baptist College",
  description: "Support services for military veterans and their dependents at Arkansas Baptist College.",
}

export default function VeteransAffairsPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero title="Veterans Affairs" subtitle="Dedicated support for military veterans and their dependents pursuing higher education." label="Student Services" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Veterans Services</h2>
            <p>Veterans are expected to process their applications in the same manner as regular admission students. For assistance in processing Veterans Administration applications, a veteran should confer with the Registrar&apos;s Office as early as possible.</p>
            <h2>VA Benefits</h2>
            <p>Arkansas Baptist College is approved for the education and training of veterans and their eligible dependents under various chapters of Title 38, U.S. Code. Eligible students may receive benefits under:</p>
            <ul>
              <li>Post-9/11 GI Bill&reg; (Chapter 33)</li>
              <li>Montgomery GI Bill (Chapter 30)</li>
              <li>Vocational Rehabilitation (Chapter 31)</li>
              <li>Dependents Educational Assistance (Chapter 35)</li>
            </ul>
            <h2>VA Benefits Addendum</h2>
            <p>View the <a href="/resources/consumer-information">VA Benefits Addendum</a> for detailed information about veteran educational benefits and policies at Arkansas Baptist College.</p>

            <h2>Contact</h2>
            <p>Registrar&apos;s Office<br />Phone: <a href="tel:5014201237">(501) 420-1237</a><br />Main: <a href="tel:5014201200">501-420-1200</a></p>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
