import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Interdisciplinary Studies | Arkansas Baptist College",
  description: "The Department of Interdisciplinary Studies provides an integrated program designed to strengthen academic skills and move students toward degree completion.",
}

export default function InterdisciplinaryStudiesPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero title="Interdisciplinary Studies" subtitle="An integrated, comprehensive program designed to strengthen academic skills, build self-esteem and citizenship, and enhance ability to complete a degree." label="Academic Departments" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Department Mission</h2>
            <p>The Mission of the Department of Interdisciplinary Studies is to provide an integrated, comprehensive program designed to strengthen the student&apos;s academic skills, build self-esteem and citizenship, move students through the core curriculum to program level courses, and enhance student ability to complete a degree program.</p>
            <h2>Department Chair</h2>
            <p><strong>Jennifer Nelson, Ed.D</strong><br />Chair, Interdisciplinary Studies<br /><a href="mailto:Jennifer.Nelson@arkansasbaptist.edu">Jennifer.Nelson@arkansasbaptist.edu</a><br /><a href="tel:5014201312">501-420-1312</a></p>
            <h2>Degree Programs</h2>
            <ul>
              <li><strong>Associate of Arts (AA) in General Studies</strong></li>
              <li><strong>Bachelor of Arts (BA) in General Studies</strong></li>
              <li><strong>Associate of Science (AS) in General Studies / Pre-Nursing</strong></li>
            </ul>
            <h2>Contact</h2>
            <p>Phone: <a href="tel:5014201312">501-420-1312</a><br />Email: <a href="mailto:Jennifer.Nelson@arkansasbaptist.edu">Jennifer.Nelson@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
        <CTABand title="Explore Your Path" description="The Interdisciplinary Studies program gives you the flexibility to design a degree that fits your goals." primaryLabel="Apply Now" primaryHref="/enrollment/apply" secondaryLabel="View Academic Catalog" secondaryHref="/academics/academic-catalog" />
      </main>
    </div>
  )
}
