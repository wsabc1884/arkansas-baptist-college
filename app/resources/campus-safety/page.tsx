import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Campus Safety | Arkansas Baptist College",
  description: "Campus safety and security information at Arkansas Baptist College, including emergency contacts and the Clery Act report.",
}

export default function CampusSafetyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Campus Safety" subtitle="The safety and security of our campus community is our highest priority." label="Resources" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Campus Security</h2>
            <p>Arkansas Baptist College maintains a campus security department to ensure the safety and well-being of all students, faculty, staff, and visitors. Security personnel patrol the campus and are available to assist with safety concerns.</p>
            <h2>Emergency Contact</h2>
            <p>In the event of an emergency, dial 911 first, then contact Campus Security at <a href="tel:5014201200">501-420-1200</a>.</p>
            <h2>Clery Act</h2>
            <p>In compliance with the Jeanne Clery Disclosure of Campus Security Policy and Campus Crime Statistics Act, Arkansas Baptist College publishes an Annual Security Report. This report includes crime statistics, campus security policies, and crime prevention information.</p>
            <h2>Safety Tips</h2>
            <ul>
              <li>Always lock your vehicle and residence hall room</li>
              <li>Walk in well-lit areas at night</li>
              <li>Report suspicious activity to Campus Security immediately</li>
              <li>Keep personal belongings secure</li>
              <li>Know the location of emergency phones on campus</li>
            </ul>
            <h2>Contact</h2>
            <p>Campus Security<br />Phone: <a href="tel:5014201200">501-420-1200</a></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
