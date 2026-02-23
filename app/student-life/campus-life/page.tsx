import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Campus Life | Arkansas Baptist College",
  description: "Experience life at Arkansas Baptist College - residential living, dining, spiritual development, and campus activities.",
}

export default function CampusLifePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Campus Life" subtitle="A vibrant campus community rooted in faith, fellowship, and personal growth." label="Student Life" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Living on Campus</h2>
            <p>Residential life at Arkansas Baptist College offers students a supportive living-learning environment. Campus housing provides convenience, community, and opportunities to develop lifelong friendships.</p>
            <h2>Spiritual Development</h2>
            <p>As a faith-based institution, spiritual growth is central to the ABC experience. Students participate in chapel services, Bible studies, and community worship throughout the academic year.</p>
            <h2>Activities &amp; Events</h2>
            <ul>
              <li>Homecoming celebrations</li>
              <li>Founder&apos;s Day</li>
              <li>Honors Convocation</li>
              <li>Cultural enrichment events</li>
              <li>Community service projects</li>
              <li>Intramural sports</li>
              <li>Student talent showcases</li>
            </ul>
            <h2>Dining</h2>
            <p>The campus cafeteria provides meal service for residential and commuter students. Meal plans are available and included in room and board fees for residential students.</p>
          </div>
        </SectionWrapper>
        <CTABand title="Experience ABC" description="Schedule a visit to see our campus and meet our community in person." primaryLabel="Plan Your Visit" primaryHref="/enrollment/campus-tour" secondaryLabel="Apply Now" secondaryHref="/enrollment/apply" />
      </main>
      <Footer />
    </div>
  )
}
