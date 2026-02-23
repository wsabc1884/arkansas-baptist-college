import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Academic Catalog | Arkansas Baptist College",
  description: "Access the Arkansas Baptist College academic catalog for program requirements, course descriptions, and academic policies.",
}

export default function AcademicCatalogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Academic Catalog" subtitle="Program requirements, course descriptions, and academic policies." label="Academic Resources" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Current Academic Catalog</h2>
            <p>The Academic Catalog is the official source for degree requirements, course descriptions, academic policies, and procedures at Arkansas Baptist College. Students are responsible for understanding and following the requirements in the catalog for their entering year.</p>
            <h2>What&apos;s in the Catalog</h2>
            <ul>
              <li>Degree program requirements for all majors</li>
              <li>Course descriptions and prerequisites</li>
              <li>Academic policies (grading, attendance, withdrawal, etc.)</li>
              <li>General education core requirements</li>
              <li>Graduation requirements</li>
              <li>Faculty and administration directory</li>
            </ul>
            <h2>Questions?</h2>
            <p>Contact the Office of the Registrar at <a href="tel:5014201200">501-420-1200</a> or visit the <a href="/academics/registrar">Registrar&apos;s Office</a> page.</p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
