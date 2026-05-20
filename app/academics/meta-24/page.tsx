import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Lightbulb, Rocket, Users, GraduationCap, Building2, Cpu, FlaskConical, Utensils, TrendingUp, Briefcase, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "META24 Program | Arkansas Baptist College",
  description: "META24 is a 21st century learning environment combining innovative skills-based curriculum with entrepreneurial incubators known as METALABS.",
}

const metalabs = [
  { name: "Hi-Tech Lab", description: "Coding to Robotics", icon: Cpu },
  { name: "Industrial Design Lab", description: "3D to Laser Printing", icon: Building2 },
  { name: "Finance Lab", description: "Accounting, Billing, Market Research", icon: TrendingUp },
  { name: "Media Production Lab", description: "Video Marketing, Journalism, Shows", icon: Lightbulb },
  { name: "Cultivation Lab", description: "Aquaponics to Bioresearch", icon: FlaskConical },
  { name: "Drafting Lab", description: "AutoCAD to Building Models", icon: Building2 },
  { name: "Trends Lab", description: "Design Posters, Clothes, Booklets", icon: Rocket },
  { name: "The META Cafe", description: "Student-Run Culinary Operation", icon: Utensils },
  { name: "The Office", description: "Executive Skills &amp; Interviews", icon: Briefcase },
  { name: "The Board Room", description: "Inquiry Bridge Game Board LMS", icon: Users },
]

const focusAreas = [
  {
    title: "Make It",
    description: "Students work in labs to create useful, salable products while developing practical skills.",
  },
  {
    title: "Enterprise It",
    description: "After learning to write business plans, students launch their own enterprises.",
  },
  {
    title: "Teach It",
    description: "Working collaboratively, students teach each other essential skills.",
  },
  {
    title: "Achieve It",
    description: "Experience success, reflect on accomplishments, and build confidence for future endeavors.",
  },
]

export default function Meta24Page() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="META24 Program"
          subtitle="A 21st Century Learning Environment combining innovative skills-based curriculum with entrepreneurial incubators."
          label="Academic Programs"
        />

        {/* What is META24 */}
        <SectionWrapper>
          <div className="max-w-4xl mx-auto">
            <div className="prose-abc">
              <h2>What is META24?</h2>
              <p>
                A META24 learning center is a place where students not only learn essential skills and earn credits, but where they also proactively prepare for successful futures. Imagine a state-of-the-art learning center combining an innovative skills-based curriculum — the Inquiry Bridge Learning System — with individual entrepreneurial incubators known as METALABS.
              </p>
              <p>
                Engaged in the Inquiry Bridge Learning System, students master skills through an inquiry-based curriculum designed for metacognitive growth. Their progress is documented on a success board which allows for individual pacing.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Focus Areas */}
        <SectionWrapper className="bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-center mb-10">The META24 Approach</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {focusAreas.map((area, index) => (
                <div key={area.title} className="bg-card rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-lg">{area.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* METALABS */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold mb-4">METALABS</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                METALABS are designed with the end product in mind to help students develop business acumen while being self-directed by the inquiry model of skills-based learning.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {metalabs.map((lab) => {
                const Icon = lab.icon
                return (
                  <div key={lab.name} className="flex items-start gap-4 rounded-lg border bg-card p-5 transition-colors hover:bg-muted/50">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{lab.name}</h3>
                      <p className="text-sm text-muted-foreground">{lab.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </SectionWrapper>

        {/* Why META24 */}
        <SectionWrapper className="bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="prose-abc">
              <h2>Why META24?</h2>
              <p>
                META24 is a true 21st century learning center with a unique instructional model and design. The program is designed to attract students who have dropped out of school, failed to graduate, or are on track to graduate well below grade level. These students need to re-engage in learning, but because they often equate school with failure, they need a different kind of learning environment with an innovative and stimulating approach to curriculum.
              </p>
              <p>
                META24 offers these unique students an innovative new learning environment. Students will master skills in active ways that challenge their abilities to think critically, problem-solve, and collaborate in a student-centered curriculum that includes essential, foundational skills, courses required for graduation credit, and challenging STEM-based subjects.
              </p>

              <h2>Opportunities for Success</h2>
              <ul>
                <li><strong>STEM Job Growth:</strong> The U.S. Dept of Commerce shows that in the past ten years, STEM jobs grew 3 times the rate of non-STEM jobs, a trend likely to continue and accelerate.</li>
                <li><strong>Skills Gap:</strong> The U.S. Dept of Labor notes that companies have reported more than 3 million job openings since February 2001 because of an absence of applicants with skills to fill these positions.</li>
                <li><strong>Post-Secondary Education:</strong> By the end of the decade, 60% of U.S. jobs are predicted to require some form of post-secondary education.</li>
                <li><strong>Dual Enrollment:</strong> Many META24 students will obtain dual enrollment in nearby Community Colleges, furthering their college-ready capabilities while earning their high school diploma.</li>
              </ul>

              <h2>Curriculum &amp; Learning Management</h2>
              <p>
                {"META24's overarching goal is to promote the use of higher level thinking skills as students master both foundational and challenging skills. The use of higher-level thinking skills provides development and practice in problem-solving and leads to metacognition. Students not only know what they have learned but know how they have learned it."}
              </p>
              <p>
                The underlying framework for this form of studying is the Inquiry Bridge curriculum model. It serves as a roadmap for both teachers and students as they move together through 24 separate but interrelated skill clusters. A colorful, computerized Success Board plots individual student progress which aids students in monitoring and reinforcing their progress.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Results & Impact */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-center mb-10">Results &amp; Impact</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Skills-Based Learning</h3>
                </div>
                <p className="text-sm text-muted-foreground">Increases in effort, academic performance, and graduation rates through Inquiry Bridge&apos;s model.</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Rocket className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Entrepreneurship</h3>
                </div>
                <p className="text-sm text-muted-foreground">Advancement in entrepreneurial skills, relevant learning, and relational trust when students start their own businesses.</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Critical Thinking</h3>
                </div>
                <p className="text-sm text-muted-foreground">Gains in commitment, independent learning, and critical thinking through STEM lab experiences.</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FlaskConical className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Innovation</h3>
                </div>
                <p className="text-sm text-muted-foreground">Growth in innovativeness, accountability, and responsibility through hands-on projects like urban gardens.</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Self-Direction</h3>
                </div>
                <p className="text-sm text-muted-foreground">Rises in contentment, confidence, and awareness when students choose their educational paths.</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Organization</h3>
                </div>
                <p className="text-sm text-muted-foreground">Improvement in organizational skills, pride, and proactiveness through the BlendMyClass Learning Management System.</p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Learn More */}
        <SectionWrapper className="bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Learn More</h2>
            <p className="text-muted-foreground mb-6">
              META24 is a division of Banner Learning Corp, a nonprofit 501(c)(3) organization. Visit the official META24 website for more information about this innovative program.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.meta24.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
              >
                Visit meta24.org
              </a>
              <a
                href="/documents/META24-Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <FileText className="h-4 w-4" />
                Download Brochure (PDF)
              </a>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          title="Ready to Get Started?"
          description="Contact Arkansas Baptist College to learn more about the META24 program and how it can help you achieve your goals."
          primaryLabel="Apply to ABC"
          primaryHref="/enrollment/apply"
          secondaryLabel="Contact Us"
          secondaryHref="/resources/directory"
        />
      </main>
    </div>
  )
}
