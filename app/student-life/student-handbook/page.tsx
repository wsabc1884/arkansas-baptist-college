import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Download, BookOpen, Users, Home, Scale, ShieldCheck, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Student Code of Conduct Handbook | Arkansas Baptist College",
  description:
    "The Arkansas Baptist College Student Handbook and Student Code of Conduct outlining policies, procedures, community standards, and student rights.",
}

const sections = [
  {
    icon: BookOpen,
    title: "About & Traditions",
    items: ["Mission, Vision & Core Values", "History of the College", "ABC Traditions & Alma Mater"],
  },
  {
    icon: Users,
    title: "Campus Life",
    items: ["Student Government Association", "Registered Student Organizations", "Greek Life & Anti-Hazing Policy"],
  },
  {
    icon: Home,
    title: "Residential & Dining",
    items: ["Housing Lease & Policies", "Health & Safety Inspections", "Dining Services & Bistro"],
  },
  {
    icon: ShieldCheck,
    title: "Student Affairs",
    items: ["Career Services", "Dean of Students", "Disability & Student Activities"],
  },
  {
    icon: Scale,
    title: "Code of Conduct",
    items: ["Community Standards", "Sanctions & Judicial Holds", "Student Rights & Appeals"],
  },
  {
    icon: FileText,
    title: "Policies & Requirements",
    items: ["Alcohol, Drug & Smoking Policy", "Title IX & Nondiscrimination", "Behavior Violation Levels"],
  },
]

export default function StudentHandbookPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Student Code of Conduct Handbook"
          subtitle="Student Life"
          description="The Arkansas Baptist College Student Handbook and Student Code of Conduct outlines the policies, procedures, community standards, and rights that guide student life on campus."
          breadcrumbs={[
            { label: "Student Life", href: "/student-life/campus-life" },
            { label: "Student Code of Conduct Handbook" },
          ]}
        />

        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex justify-end">
              <a
                href="/documents/student-life/student-handbook.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download PDF
              </a>
            </div>

            <div className="prose-abc max-w-none">
              <p>
                This Handbook is designed to inform students of the policies, procedures, and expectations of Arkansas
                Baptist College. It contains the Student Code of Conduct along with the community standards, rights, and
                responsibilities that support a safe and thriving learning environment. Students are responsible for
                reading and understanding its contents.
              </p>
              <p>
                The College reserves the right to change policies at any time. Download the complete Student Handbook
                below for the full set of policies and procedures.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper variant="muted">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">What&apos;s Inside</h2>
            <p className="mt-2 text-muted-foreground">
              An overview of the key topics covered in the Student Handbook and Student Code of Conduct.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sections.map((section) => (
                <div key={section.title} className="rounded-lg border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <section.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground">{section.title}</h3>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {section.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Have Questions?"
          description="The Office of Student Affairs is here to help you navigate campus policies and resources."
          primaryAction={{ label: "Campus Life", href: "/student-life/campus-life" }}
          secondaryAction={{ label: "Student Complaint Process", href: "/student-life/complaint-process" }}
        />
      </main>
    </div>
  )
}
