import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { CourseSequenceList } from "@/components/course-sequence-list"
import { getSequencesByDepartment } from "@/lib/course-sequences"

export const metadata: Metadata = {
  title: "Social & Behavioral Sciences | Arkansas Baptist College",
  description: "The Department of Social and Behavioral Sciences (Criminal Justice and Human Services) at Arkansas Baptist College prepares students with life-long competencies in critical thinking and problem solving.",
}

export default function SocialBehavioralPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero title="Social & Behavioral Sciences" subtitle="Criminal Justice and Human Services -- preparing students with life-long competencies for careers that make a difference." label="Academic Departments" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Department Mission</h2>
            <p>The Department of Social and Behavioral Sciences (Criminal Justice and Human Services) provides students with life-long competencies in critical thinking, oral and written communication, quantitative reasoning, and problem solving. Our programs prepare graduates for careers in social services, criminal justice, counseling, and graduate study.</p>

            <h2>Program Contacts</h2>
            <p><strong>Criminal Justice</strong><br />Mrs. Myra Woolfolk<br /><a href="mailto:Myra.Summers-Woolfolk@arkansasbaptist.edu">Myra.Summers-Woolfolk@arkansasbaptist.edu</a></p>
            <p><strong>Human Services</strong><br />Dr. Cheryl Gittens<br /><a href="mailto:Cheryl.Gittens@arkansasbaptist.edu">Cheryl.Gittens@arkansasbaptist.edu</a></p>

            <h2>Degree Programs</h2>
            <ul>
              <li><strong>Bachelor of Arts in Criminal Justice (BA)</strong></li>
              <li><strong>Bachelor of Arts in Human Services (BA)</strong></li>
            </ul>
            <h2>Career Opportunities</h2>
            <ul>
              <li>Social Worker</li>
              <li>Probation/Parole Officer</li>
              <li>Counselor</li>
              <li>Law Enforcement</li>
              <li>Community Outreach Coordinator</li>
              <li>Graduate study in Psychology, Social Work, or Law</li>
            </ul>
            <h2>Contact</h2>
            <p>Phone: <a href="tel:5014201200">501-420-1200</a></p>
          </div>
        </SectionWrapper>
        <SectionWrapper variant="muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Degree Course Sequences</h2>
            <p className="mt-2 text-muted-foreground">Download the recommended semester-by-semester course sequence for each program.</p>
            <CourseSequenceList sequences={getSequencesByDepartment("social-behavioral-sciences")} className="mt-6" />
          </div>
        </SectionWrapper>
        <CTABand title="Make a Difference" description="Study the science of human behavior and prepare for a career of impact." primaryLabel="Apply Now" primaryHref="/enrollment/apply" secondaryLabel="View Academic Catalog" secondaryHref="/academics/academic-catalog" />
      </main>
    </div>
  )
}
