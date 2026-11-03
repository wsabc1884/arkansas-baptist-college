import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Current Term Enrollment | Arkansas Baptist College",
  description:
    "Current term enrollment data for Arkansas Baptist College, including enrollment status, student level, age range, attendance, gender, geographic origin, and race and ethnicity.",
}

type Row = { label: string; value: string }

type ChartImage = { src: string; alt: string; width: number; height: number }

const charts = {
  enrollmentStatus: {
    src: "/images/enrollment/enrollment-status.png",
    alt: "Bar chart of enrollment status: First-Time In College about 40 students, Transfer Student about 36, Returning Student about 525.",
    width: 1300,
    height: 563,
  },
  studentLevel: {
    src: "/images/enrollment/student-level.png",
    alt: "Bar chart of student level: Freshman about 394 students, Sophomore about 94, Junior about 67, Senior about 46.",
    width: 1300,
    height: 579,
  },
  ageRange: {
    src: "/images/enrollment/age-range.png",
    alt: "Pie chart of age range: 18-24 is 88.2%, 25-39 is 7.8%, 40 and over is 2.8%, 17 and under is 1.0%.",
    width: 1300,
    height: 596,
  },
  attendance: {
    src: "/images/enrollment/attendance-status.png",
    alt: "Bar chart of attendance status: Full-time about 512 students, Part-time about 89.",
    width: 1300,
    height: 613,
  },
  topStates: {
    src: "/images/enrollment/top-states.png",
    alt: "Bar chart of top states of origin: AR about 208 students, LA 80, TX 70, MS 39, TN 38, FL 36, AL 26, FC 15, IL 10, MO 8.",
    width: 1300,
    height: 629,
  },
} satisfies Record<string, ChartImage>

type EnrollmentTable = {
  title: string
  columns: [string, string]
  rows: Row[]
  note?: string
  chart?: ChartImage
}

const enrollmentTables: EnrollmentTable[] = [
  {
    title: "Enrollment Status",
    columns: ["Status", "Share"],
    rows: [
      { label: "First-Time In College", value: "6.7%" },
      { label: "Transfer Student", value: "6.0%" },
      { label: "Returning Student", value: "87.3%" },
    ],
    chart: charts.enrollmentStatus,
  },
  {
    title: "Student Level",
    columns: ["Level", "Share"],
    rows: [
      { label: "Freshman", value: "65.6%" },
      { label: "Sophomore", value: "15.6%" },
      { label: "Junior", value: "11.1%" },
      { label: "Senior", value: "7.7%" },
    ],
    chart: charts.studentLevel,
  },
  {
    title: "Age Range",
    columns: ["Age Range", "Share"],
    rows: [
      { label: "17 and under", value: "1.0%" },
      { label: "18-24", value: "88.2%" },
      { label: "25-39", value: "7.8%" },
      { label: "40 and over", value: "2.8%" },
    ],
    chart: charts.ageRange,
  },
  {
    title: "Student Attendance",
    columns: ["Attendance", "Share"],
    rows: [
      { label: "Full-time", value: "85.2%" },
      { label: "Part-time", value: "14.8%" },
    ],
    chart: charts.attendance,
  },
  {
    title: "Student Gender",
    columns: ["Gender", "Share"],
    rows: [
      { label: "Male", value: "85.2%" },
      { label: "Female", value: "15.5%" },
    ],
  },
  {
    title: "Origin Geography",
    columns: ["Geography", "Students"],
    rows: [
      { label: "Arkansas", value: "34.8%" },
      { label: "Out-of-state", value: "65.2%" },
    ],
    chart: charts.topStates,
  },
  {
    title: "Race and Ethnicity Indicators",
    columns: ["Source Category", "Share"],
    rows: [
      { label: "Black", value: "94.0%" },
      { label: "White", value: "4.0%" },
      { label: "Hispanic (Ethnicity)", value: "5.7%" },
      { label: "Asian", value: "0.8%" },
      { label: "American Indian", value: "1.2%" },
      { label: "Native Hawaiian", value: "0.0%" },
      { label: "Non-Resident Alien/Non-US", value: "3.5%" },
    ],
    note: "Hispanic is reported as an ethnicity and may overlap with race categories, so totals may exceed 100%.",
  },
]

const tableByTitle = Object.fromEntries(enrollmentTables.map((t) => [t.title, t])) as Record<
  string,
  EnrollmentTable
>

const sections: { title: string; tables: string[] }[] = [
  { title: "Student Classification", tables: ["Enrollment Status", "Student Level"] },
  { title: "Student Attendance", tables: ["Student Attendance"] },
  { title: "Gender Distribution", tables: ["Student Gender"] },
  { title: "Student Age", tables: ["Age Range"] },
  { title: "Geographic Distribution", tables: ["Origin Geography"] },
  { title: "Race and Ethnicity", tables: ["Race and Ethnicity Indicators"] },
]

function DataTable({
  caption,
  columns,
  rows,
}: {
  caption?: string
  columns: [string, string]
  rows: Row[]
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full text-sm">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead>
          <tr className="bg-muted/50">
            <th scope="col" className="px-4 py-2.5 text-left font-semibold text-foreground">
              {columns[0]}
            </th>
            <th scope="col" className="px-4 py-2.5 text-right font-semibold text-foreground">
              {columns[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 1 ? "bg-muted/20" : undefined}>
              <td className="px-4 py-2.5 text-foreground">{row.label}</td>
              <td className="px-4 py-2.5 text-right font-medium text-foreground">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function CurrentTermEnrollmentPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Current Term Enrollment"
          subtitle="Consumer Information"
          description="A snapshot of the Arkansas Baptist College student body for the current term."
          breadcrumbs={[
            { label: "Resources", href: "/resources/consumer-information" },
            { label: "Consumer Information", href: "/resources/consumer-information" },
            { label: "Current Term Enrollment", href: "/resources/consumer-information/current-term-enrollment" },
          ]}
        />

        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Current Term Enrollment Data</h2>
          </div>

          <div className="mx-auto mt-8 flex max-w-4xl flex-col gap-12">
            {sections.map((section) => (
              <section key={section.title}>
                <h3 className="font-serif text-lg font-bold text-foreground">{section.title}</h3>
                <div className="mt-4 flex flex-col gap-8">
                  {section.tables.map((key) => {
                    const table = tableByTitle[key]
                    return (
                      <div key={table.title} className="flex flex-col gap-4">
                        <div className="max-w-md">
                          {section.tables.length > 1 ? (
                            <h4 className="mb-3 font-semibold text-foreground">{table.title}</h4>
                          ) : null}
                          <DataTable caption={table.title} columns={table.columns} rows={table.rows} />
                          {table.note ? <p className="mt-2 text-xs text-muted-foreground">{table.note}</p> : null}
                        </div>
                        {table.chart ? (
                          <Image
                            src={table.chart.src}
                            alt={table.chart.alt}
                            width={table.chart.width}
                            height={table.chart.height}
                            sizes="(min-width: 896px) 896px, 100vw"
                            className="h-auto w-full rounded-lg border border-border"
                          />
                        ) : null}
                      </div>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
