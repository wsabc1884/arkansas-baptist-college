import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { FeatureGrid } from "@/components/feature-grid"
import { CTABand } from "@/components/cta-band"
import { DollarSign, FileText, GraduationCap, HelpCircle, Phone, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Office of Student Financial Aid | Arkansas Baptist College",
  description: "The Office of Student Financial Aid helps students navigate financial assistance options including federal aid, state grants, scholarships, and work-study.",
}

export default function FinancialAidPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Office of Student Financial Aid"
          subtitle="We are committed to making your education affordable and accessible through a variety of financial assistance options."
          label="Enrollment"
        />

        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Our Mission</h2>
            <p>
              The Office of Student Financial Aid at Arkansas Baptist College is dedicated to helping students
              and their families secure the financial resources needed to pursue higher education. We administer
              federal, state, institutional, and private financial aid programs.
            </p>
            <p>
              Our staff provides personalized guidance through the financial aid process, from completing the
              FAFSA to understanding your award letter. We believe financial barriers should never prevent a
              qualified student from achieving their educational goals.
            </p>

            <h2>Types of Aid Available</h2>
          </div>

          <div className="mt-8">
            <FeatureGrid
              items={[
                { icon: DollarSign, title: "Federal Pell Grants", description: "Need-based grants for undergraduate students that do not require repayment. Award amounts vary based on financial need and enrollment status." },
                { icon: FileText, title: "Federal Direct Loans", description: "Low-interest loans available to eligible students. Both subsidized and unsubsidized options are available depending on demonstrated need." },
                { icon: GraduationCap, title: "Institutional Aid", description: "Merit-based and need-based scholarships awarded by Arkansas Baptist College to qualifying students." },
                { icon: HelpCircle, title: "Federal Work-Study", description: "Part-time employment opportunities for students with financial need, providing income to help pay educational expenses." },
              ]}
              columns={2}
            />
          </div>

          <div className="prose-abc max-w-4xl mx-auto mt-12">
            <h2>FAFSA Information</h2>
            <p>
              All students seeking financial aid must complete the Free Application for Federal Student Aid (FAFSA).
              The ABC school code is <strong>001087</strong>. Visit{" "}
              <a href="https://studentaid.gov" target="_blank" rel="noopener noreferrer">studentaid.gov</a>{" "}
              to complete your FAFSA application.
            </p>

            <h2>Contact the Office of Financial Aid</h2>
          </div>

          <div className="mt-6 max-w-4xl mx-auto grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-3 rounded-lg border bg-card p-4">
              <Phone className="h-5 w-5 shrink-0 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <a href="tel:5014201226" className="text-sm text-muted-foreground hover:underline">(501) 420-1226</a>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border bg-card p-4">
              <Mail className="h-5 w-5 shrink-0 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <a href="mailto:financialaid@arkansasbaptist.edu" className="text-sm text-muted-foreground hover:underline">financialaid@arkansasbaptist.edu</a>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border bg-card p-4">
              <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Office Location</p>
                <p className="text-sm text-muted-foreground">Main Campus, Administration Building</p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          title="Ready to Apply for Aid?"
          description="Complete your FAFSA today and take the first step toward funding your education at ABC."
          primaryLabel="Apply for Financial Aid"
          primaryHref="/enrollment/apply-for-financial-aid"
          secondaryLabel="View Scholarships"
          secondaryHref="/enrollment/scholarships"
        />
      </main>
    </div>
  )
}
