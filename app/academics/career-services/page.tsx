import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Career Services | Arkansas Baptist College",
  description: "Career Services at ABC connects students and alumni with employment opportunities, career counseling, and employer partnerships.",
}

export default function CareerServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Career Services" subtitle="Connecting students and alumni with career opportunities and employer partnerships." label="Student Services" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>About Career Services</h2>
            <p>We serve current students, alumni, and employers in the exploration and pursuit of a fulfilling employment partnership. We look forward to building mutually beneficial relationships that serve our students while meeting recruitment goals.</p>
            <h2>Services</h2>
            <ul>
              <li>Career counseling and exploration</li>
              <li>Resume and cover letter reviews</li>
              <li>Mock interviews</li>
              <li>Job and internship search assistance</li>
              <li>Career fairs and networking events</li>
              <li>Employer campus visits</li>
            </ul>
            <h2>For Employers</h2>
            <p>We offer a variety of opportunities for potential employers to meet our students. Contact us to schedule campus recruiting events, post job opportunities, or partner on internship programs.</p>
            <h2>Contact</h2>
            <p><strong>Ed Davis</strong><br />Director, Career Services<br />Email: <a href="mailto:edmond.davis@arkansasbaptist.edu">edmond.davis@arkansasbaptist.edu</a><br />Phone: <a href="tel:5014201343">501-420-1343</a></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
