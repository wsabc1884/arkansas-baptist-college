import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "Fall IPEDS Enrollment | Arkansas Baptist College",
  description:
    "Fall IPEDS enrollment charts for Arkansas Baptist College, including enrollment snapshots, demographics, retention, graduation rates, and student outcomes.",
}

const ENROLLMENT_CHARTS: { src: string; alt: string; caption: string; width: number; height: number }[] = [
  {
    src: "/documents/summer-enrollment-2025-26/img1.png",
    alt: "Fall 2024 Undergraduate Enrollment Snapshot showing attendance status (88% full-time, 12% part-time) and student gender (78% male, 22% female).",
    caption: "Fall 2024 Undergraduate Enrollment Snapshot — Attendance Status & Student Gender",
    width: 1034,
    height: 685,
  },
  {
    src: "/documents/summer-enrollment-2025-26/img2.png",
    alt: "Fall 2024 Student Race/Ethnicity bar chart, with 92% Black or African American and smaller percentages across other categories.",
    caption: "Fall 2024 Student Race/Ethnicity",
    width: 1017,
    height: 503,
  },
  {
    src: "/documents/summer-enrollment-2025-26/img3.png",
    alt: "Fall 2024 Undergraduate Student Profile showing student age (80% 24 and under, 20% 25 and over) and residence (57% in-state, 43% out-of-state).",
    caption: "Fall 2024 Undergraduate Student Profile — Age & Residence",
    width: 1016,
    height: 566,
  },
  {
    src: "/documents/summer-enrollment-2025-26/img4.png",
    alt: "Fall 2024 Undergraduate Distance Education Status: 4% enrolled exclusively, 35% in some, and 61% in no distance education courses.",
    caption: "Fall 2024 Undergraduate Distance Education Status",
    width: 1037,
    height: 599,
  },
  {
    src: "/documents/summer-enrollment-2025-26/img5.png",
    alt: "First-to-Second Year Retention Rates for first-time bachelor's degree-seeking students: 23% full-time, 33% part-time.",
    caption: "First-to-Second Year Retention Rates",
    width: 844,
    height: 648,
  },
  {
    src: "/documents/summer-enrollment-2025-26/img6.png",
    alt: "Overall Graduation and Transfer-Out Rates for students who began in Fall 2018: 7% overall graduation rate, 22% transfer-out rate.",
    caption: "Overall Graduation and Transfer-Out Rates",
    width: 822,
    height: 675,
  },
  {
    src: "/documents/summer-enrollment-2025-26/img7.png",
    alt: "Graduation Rates for Students Pursuing Bachelor's Degrees, comparing Fall 2016 and Fall 2018 cohorts across 4-year, 6-year, and 8-year windows.",
    caption: "Graduation Rates for Students Pursuing Bachelor's Degrees",
    width: 925,
    height: 650,
  },
  {
    src: "/documents/summer-enrollment-2025-26/img9.png",
    alt: "6-Year Graduation Rate by Gender for students pursuing bachelor's degrees: 4% male, 16% female.",
    caption: "6-Year Graduation Rate by Gender",
    width: 979,
    height: 653,
  },
  {
    src: "/documents/summer-enrollment-2025-26/img10.png",
    alt: "Student outcomes for full-time, first-time degree/certificate-seeking undergraduates who entered in 2016-2017, by all students, Pell, and non-Pell.",
    caption: "Student Outcomes — Full-Time, First-Time Undergraduates (Entered 2016–2017)",
    width: 926,
    height: 613,
  },
  {
    src: "/documents/summer-enrollment-2025-26/img11.png",
    alt: "Student outcomes for part-time, first-time degree/certificate-seeking undergraduates who entered in 2016-2017, by all students, Pell, and non-Pell.",
    caption: "Student Outcomes — Part-Time, First-Time Undergraduates (Entered 2016–2017)",
    width: 960,
    height: 610,
  },
  {
    src: "/documents/summer-enrollment-2025-26/img12.png",
    alt: "Student outcomes for full-time, non-first-time degree/certificate-seeking undergraduates who entered in 2016-2017, by all students, Pell, and non-Pell.",
    caption: "Student Outcomes — Full-Time, Non-First-Time Undergraduates (Entered 2016–2017)",
    width: 923,
    height: 616,
  },
  {
    src: "/documents/summer-enrollment-2025-26/img13.png",
    alt: "Student outcomes for part-time, non-first-time degree/certificate-seeking undergraduates who entered in 2016-2017, by all students, Pell, and non-Pell.",
    caption: "Student Outcomes — Part-Time, Non-First-Time Undergraduates (Entered 2016–2017)",
    width: 1018,
    height: 643,
  },
]

export default function FallIpedsEnrollmentPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Fall IPEDS Enrollment"
          subtitle="Consumer Information"
          description="Fall enrollment, demographics, retention, graduation, and student outcomes charts."
          breadcrumbs={[
            { label: "Resources", href: "/resources/consumer-information" },
            { label: "Consumer Information", href: "/resources/consumer-information" },
            { label: "Fall IPEDS Enrollment" },
          ]}
        />

        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Fall IPEDS Enrollment</h2>
            <p>
              The following charts provide institutional data on enrollment, student demographics, retention,
              graduation, and student outcomes as reported through the Integrated Postsecondary Education Data System
              (IPEDS).
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-4xl space-y-8">
            {ENROLLMENT_CHARTS.map((chart) => (
              <figure key={chart.src} className="overflow-hidden rounded-lg border border-border bg-card">
                <Image
                  src={chart.src || "/placeholder.svg"}
                  alt={chart.alt}
                  width={chart.width}
                  height={chart.height}
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-border bg-muted/30 px-4 py-3 text-center text-sm font-medium text-muted-foreground">
                  {chart.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
