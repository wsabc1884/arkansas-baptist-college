import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { CourseSequenceList } from "@/components/course-sequence-list"
import { getSequencesByDepartment } from "@/lib/course-sequences"

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
            </ul>
            <p className="text-sm">The Bachelor of Arts in General Studies lets you customize your education with up to three concentration areas, including Business, Health, Human Services, Education, Criminal Justice, Esports, Entrepreneurship, Religious Studies, and Public Administration.</p>
            <h2>Contact</h2>
            <p>Phone: <a href="tel:5014201312">501-420-1312</a><br />Email: <a href="mailto:Jennifer.Nelson@arkansasbaptist.edu">Jennifer.Nelson@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
        <SectionWrapper variant="muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Degree Course Sequences</h2>
            <p className="mt-2 text-muted-foreground">Download the recommended semester-by-semester course sequence for each program.</p>
            <CourseSequenceList sequences={getSequencesByDepartment("interdisciplinary-studies")} className="mt-6" />
          </div>
        </SectionWrapper>
        <CTABand title="Explore Your Path" description="The Interdisciplinary Studies program gives you the flexibility to design a degree that fits your goals." primaryLabel="Apply Now" primaryHref="/enrollment/apply" secondaryLabel="View Academic Catalog" secondaryHref="/academics/academic-catalog" />
      </main>
    </div>
  )
}
