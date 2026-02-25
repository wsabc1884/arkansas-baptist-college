import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Testing Services | Arkansas Baptist College",
  description:
    "Testing Services administers standardized placement and proficiency assessments including the Next Generation Accuplacer and ETS Proficiency Profile.",
}

export default function TestingServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Testing Services" subtitle="Student Services" description="Standardized assessment administration for admissions, academics, and degree candidacy." />

        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Mission</h2>
            <p>The Testing Services Lab supports the Arkansas Baptist College&apos;s Mission Statement by administering standardized assessments for Admissions and Academics. Testing Services administers the Admission Department&apos;s entrance exam for student class assignment, diagnostic exams to General Studies classes, and a rising junior exam to assess student progress and college programs.</p>
            <p>The placement exams are administered to incoming freshmen and transfer students when ACT or SAT Exam scores are unavailable. Students are assigned to Enrichment classes if scores are not proficient. Diagnostic exams are administered to Enrichment classes at the beginning of the semester to define individual strengths and weaknesses, and at the end of the semester to verify student improvement.</p>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-muted/30">
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>College Board Next Generation Accuplacer Exam</h2>
            <p>Beginning Spring 2019, the College Board Next Generation Accuplacer replaced the Accuplacer Classic Placement exam nationwide. The Next Generation Accuplacer is a comprehensive, untimed, web-based, integrated suite of computer-adaptive placement exams designed to evaluate students&apos; skills in Reading Comprehension, Sentence Skills (Writing), and Mathematics. Test results are available immediately upon completion.</p>

            <h2>ETS Proficiency Profile (ETS PP) Exam</h2>
            <p>The ACT Collegiate Assessment of Academic Proficiency (CAAP) was replaced with the ETS Proficiency Profile (ETS PP) exam. The ETS PP is administered to rising juniors with 47 or more credit hours that are potential Associate Degree candidates.</p>
            <p>The ETS Proficiency Profile measures student achievement levels in reading comprehension, writing, math, and critical thinking with questions covering humanities, natural science, and social sciences. It also includes an essay writing exam to assess writing abilities. The ETS PP exam evaluates individual skill levels and assists Arkansas Baptist College in evaluating the effectiveness of programs.</p>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Study Guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href="https://www.ets.org/s/proficiencyprofile/pdf/sampleques.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border bg-card p-5 transition-colors hover:border-primary"
              >
                <ExternalLink className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">ETS Proficiency Profile Sample Questions</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Official sample questions from ETS</p>
                </div>
              </a>
              <a
                href="https://accuplacer.collegeboard.org/students/prepare-for-accuplacer/practice"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border bg-card p-5 transition-colors hover:border-primary"
              >
                <ExternalLink className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Next Gen Accuplacer Practice</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Sample questions and study app from College Board</p>
                </div>
              </a>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border bg-card p-6 sm:p-8">
              <h2 className="font-serif text-xl font-bold text-foreground sm:text-2xl">Contact</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Testing Services is located in Old Main, Room B110.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Email: <a href="mailto:testingservices@arkansasbaptist.edu" className="text-primary hover:underline">testingservices@arkansasbaptist.edu</a>
              </p>
              <p className="text-sm text-muted-foreground">
                Phone: <a href="tel:5014201230" className="text-primary hover:underline">(501) 420-1230</a>
              </p>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
