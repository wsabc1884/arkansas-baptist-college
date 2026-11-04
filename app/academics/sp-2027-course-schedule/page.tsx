import type { Metadata } from "next"
import { Download } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CourseScheduleBrowser } from "@/components/course-schedule-browser"
import { SP2027_DEPARTMENTS, SP2027_PDF } from "@/lib/sp2027-schedule"

export const metadata: Metadata = {
  title: "SP 2027 Course Schedule | Arkansas Baptist College",
  description:
    "Spring 2027 course schedule for Arkansas Baptist College. Classes run January 11 to April 30, 2027. Search courses by code, title, instructor, department, or format.",
}

export default function Sp2027CourseSchedulePage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="SP 2027 Course Schedule"
          subtitle="Spring 2027 · 2026–2027 Academic Year"
          description="Classes run January 11 – April 30, 2027 unless noted otherwise."
          breadcrumbs={[
            { label: "Academics", href: "/academics" },
            { label: "SP 2027 Course Schedule", href: "/academics/sp-2027-course-schedule" },
          ]}
        />
        <SectionWrapper>
          <div className="mx-auto flex max-w-6xl flex-col gap-8">
            <div className="flex flex-col gap-4 rounded-lg border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-1">
                <h2 className="font-serif text-lg font-bold text-foreground">Official Schedule (PDF)</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  All on-campus classes meet at the Main Campus. Sections labeled &quot;Web-based&quot; are taught online. Download the official schedule for the printable version.
                </p>
              </div>
              <a
                href={SP2027_PDF}
                download
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download PDF
              </a>
            </div>
            <CourseScheduleBrowser departments={SP2027_DEPARTMENTS} />
            <p className="text-sm text-muted-foreground">
              Schedule subject to change. Register through the{" "}
              <a href="https://my.arkansasbaptist.edu/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline-offset-4 hover:underline">
                myABC Portal
              </a>{" "}
              or contact the{" "}
              <a href="/academics/registrar" className="font-medium text-primary underline-offset-4 hover:underline">
                Registrar&apos;s Office
              </a>{" "}
              at 501-420-1237.
            </p>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
