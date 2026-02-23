import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { FeatureGrid } from "@/components/feature-grid"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraduationCap, Shield, Heart, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Parent Information | Arkansas Baptist College",
  description: "Information for parents and families of Arkansas Baptist College students, including financial aid, campus safety, student life, and how to support your student.",
}

export default function ParentInformationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero
          title="Parent Information"
          subtitle="Thank you for entrusting us with your student's education. Here is everything you need to know about supporting your student at Arkansas Baptist College."
          label="Enrollment"
        />

        <SectionWrapper>
          <FeatureGrid
            items={[
              { icon: GraduationCap, title: "Academic Support", description: "ABC provides academic advising, tutoring services, and a dedicated faculty committed to student success. Our 15:1 student-to-faculty ratio ensures personalized attention." },
              { icon: DollarSign, title: "Financial Aid & Billing", description: "The Office of Financial Aid assists families with FAFSA completion, scholarship applications, and payment plans. Our school code is 001087." },
              { icon: Shield, title: "Campus Safety", description: "The safety of our students is a top priority. ABC maintains a campus security department and publishes an Annual Security Report per the Clery Act." },
              { icon: Heart, title: "Student Life & Wellness", description: "Students engage in campus organizations, spiritual development, and community service. Counseling and health resources are available on campus." },
            ]}
            columns={2}
          />
        </SectionWrapper>

        <SectionWrapper background="muted">
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Frequently Asked Questions for Parents</h2>

            <h3>How do I help my student apply for financial aid?</h3>
            <p>
              Your student must complete the FAFSA at{" "}
              <a href="https://studentaid.gov" target="_blank" rel="noopener noreferrer">studentaid.gov</a>.
              The ABC school code is <strong>001087</strong>. Parents of dependent students will need to provide
              their financial information as part of the application. Visit our{" "}
              <a href="/enrollment/apply-for-financial-aid">Apply for Financial Aid</a> page for step-by-step instructions.
            </p>

            <h3>How do I pay my student&apos;s tuition?</h3>
            <p>
              Tuition payments can be made online through the student portal or at the Business Office on campus.
              Visit our <a href="/enrollment/tuition-and-fees">Tuition and Fees</a> page for current rates and the{" "}
              <a href="/enrollment/pay-tuition">Pay My Tuition</a> page for payment options.
            </p>

            <h3>Can I access my student&apos;s academic records?</h3>
            <p>
              Under FERPA (Family Educational Rights and Privacy Act), students over 18 have the right to control
              access to their educational records. Students may authorize parents to access their records by
              completing a FERPA release form through the Registrar&apos;s Office. See our{" "}
              <a href="/compliance/ferpa">FERPA page</a> for details.
            </p>

            <h3>Is campus housing available?</h3>
            <p>
              Yes. Arkansas Baptist College provides residential housing for students. Contact the Office of
              Student Affairs at <a href="tel:5014201200">501-420-1200</a> for availability and housing application details.
            </p>

            <h3>How do I contact the college?</h3>
            <p>
              Arkansas Baptist College main line: <a href="tel:5014201200">501-420-1200</a><br />
              Address: 1600 Dr. Martin Luther King Jr. Drive, Little Rock, AR 72202<br />
              Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a>
            </p>
          </div>
        </SectionWrapper>

        <CTABand
          title="Schedule a Campus Visit"
          description="The best way to experience ABC is in person. Bring your family and see what makes us special."
          primaryLabel="Plan Your Visit"
          primaryHref="/enrollment/campus-tour"
          secondaryLabel="Apply to ABC"
          secondaryHref="/enrollment/apply"
        />
      </main>
      <Footer />
    </div>
  )
}
