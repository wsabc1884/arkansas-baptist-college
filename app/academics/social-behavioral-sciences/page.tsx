import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Social & Behavioral Sciences | Arkansas Baptist College",
  description: "Study human behavior and society through the Department of Social & Behavioral Sciences at Arkansas Baptist College.",
}

export default function SocialBehavioralPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Social & Behavioral Sciences" subtitle="Understanding human behavior and society to prepare for careers in social work, counseling, criminal justice, and more." label="Academic Departments" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Department Mission</h2>
            <p>The Department of Social and Behavioral Sciences provides students with a broad understanding of human behavior, social systems, and cultural dynamics. Our programs prepare graduates for careers in social services, criminal justice, counseling, and graduate study.</p>
            <h2>Degree Programs</h2>
            <ul>
              <li><strong>Bachelor of Science in Social &amp; Behavioral Sciences</strong></li>
              <li><strong>Associate of Science in Social &amp; Behavioral Sciences</strong></li>
            </ul>
            <h2>Areas of Concentration</h2>
            <ul>
              <li>Sociology</li>
              <li>Psychology</li>
              <li>Criminal Justice</li>
              <li>Social Work</li>
            </ul>
            <h2>Career Opportunities</h2>
            <ul>
              <li>Social Worker</li>
              <li>Probation/Parole Officer</li>
              <li>Counselor</li>
              <li>Community Outreach Coordinator</li>
              <li>Graduate study in Psychology, Social Work, or Law</li>
            </ul>
            <h2>Contact</h2>
            <p>Phone: <a href="tel:5014201200">501-420-1200</a><br />Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
        <CTABand title="Make a Difference" description="Study the science of human behavior and prepare for a career of impact." primaryLabel="Apply Now" primaryHref="/enrollment/apply" secondaryLabel="View Academic Catalog" secondaryHref="/academics/academic-catalog" />
      </main>
      <Footer />
    </div>
  )
}
