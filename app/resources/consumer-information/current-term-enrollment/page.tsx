import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { EnrollmentChart, type EnrollmentChartKey } from "@/components/enrollment-charts"

export const metadata: Metadata = {
  title: "Current Term Enrollment | Arkansas Baptist College",
  description:
    "Current term enrollment data for Arkansas Baptist College, including enrollment status, student level, age range, attendance, gender, geographic origin, and race and ethnicity.",
}

type Row = { label: string; value: string }

type EnrollmentTable = {
  title: string
  columns: [string, string]
  rows: Row[]
  note?: string
  chart?: EnrollmentChartKey
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
    chart: "enrollmentStatus",
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
    chart: "studentLevel",
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
    chart: "ageRange",
  },
  {
    title: "Student Attendance",
    columns: ["Attendance", "Share"],
    rows: [
      { label: "Full-time", value: "85.2%" },
      { label: "Part-time", value: "14.8%" },
    ],
    chart: "attendance",
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
    chart: "topStates",
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

          <div className="mx-auto mt-8 grid max-w-4xl gap-x-6 gap-y-10 md:grid-cols-2">
            {enrollmentTables.map((table) => (
              <section key={table.title}>
                <h3 className="font-serif text-lg font-bold text-foreground">{table.title}</h3>
                <div className="mt-4">
                  <DataTable caption={table.title} columns={table.columns} rows={table.rows} />
                </div>
                {table.note ? <p className="mt-2 text-xs text-muted-foreground">{table.note}</p> : null}
                {table.chart ? (
                  <div className="mt-4">
                    <EnrollmentChart chartKey={table.chart} />
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
