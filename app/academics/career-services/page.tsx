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
        <PageHero title="Career Services" subtitle="Student Services" description="Connecting students and alumni with career opportunities and employer partnerships." />
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Career + Employer Relations</h2>
            <p>We serve current students, alumni, and employers in the exploration and pursuit of a fulfilling employment partnership.</p>

            <h2>Meet Our Students</h2>
            <p>We offer a variety of opportunities for potential employers to meet students. We look forward to building a mutually beneficial relationship that serves our students while meeting your recruitment goals.</p>

            <h2>Services</h2>
            <ul>
              <li>Career counseling and exploration</li>
              <li>Resume and cover letter reviews</li>
              <li>Mock interviews</li>
              <li>Job and internship search assistance</li>
              <li>Career fairs and networking events</li>
              <li>Employer campus visits</li>
            </ul>

            <h2>Contact Us</h2>
            <p>To schedule an appointment contact us by phone or email:</p>
            <p>
              <strong>Ed Davis</strong><br />
              Director, Career Services<br />
              Arkansas Baptist College (ABC)<br />
              Email: <a href="mailto:edmond.davis@arkansasbaptist.edu">edmond.davis@arkansasbaptist.edu</a><br />
              Phone: <a href="tel:5014201343">501-420-1343</a><br />
              <a href="https://www.arkansasbaptist.edu" target="_blank" rel="noopener noreferrer">www.arkansasbaptist.edu</a>
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
