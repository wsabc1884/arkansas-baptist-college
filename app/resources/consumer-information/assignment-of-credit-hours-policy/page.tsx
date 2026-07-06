import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "Assignment of Credit Hours Policy | Arkansas Baptist College",
  description:
    "Arkansas Baptist College's assignment and award of credit hours conform to widely accepted practices in higher education, including minimum time requirements for 8-week and 16-week courses.",
}

const rows8Week = [
  { credit: "1", minutes: "50 minutes", direct: "15", work: "30", total: "45/8 weeks" },
  { credit: "2", minutes: "100 minutes", direct: "30", work: "60", total: "90/8 weeks" },
  { credit: "3", minutes: "150 minutes", direct: "45", work: "90", total: "135/8 weeks" },
  { credit: "4", minutes: "200 minutes", direct: "60", work: "120", total: "180/8 weeks" },
  { credit: "5", minutes: "250 minutes", direct: "75", work: "150", total: "225/8 weeks" },
  { credit: "6", minutes: "300 minutes", direct: "105", work: "180", total: "270/8 weeks" },
]

const rows16Week = [
  { credit: "1", minutes: "50 minutes", direct: "15", work: "30", total: "45/8 weeks" },
  { credit: "2", minutes: "100 minutes", direct: "30", work: "60", total: "90/8 weeks" },
  { credit: "3", minutes: "150 minutes", direct: "45", work: "90", total: "135/8 weeks" },
  { credit: "4", minutes: "200 minutes", direct: "60", work: "120", total: "180/8 weeks" },
  { credit: "5", minutes: "250 minutes", direct: "75", work: "150", total: "225/8 weeks" },
  { credit: "6", minutes: "300 minutes", direct: "105", work: "180", total: "270/8 weeks" },
]

function CreditHoursTable({
  caption,
  rows,
}: {
  caption: string
  rows: { credit: string; minutes: string; direct: string; work: string; total: string }[]
}) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="bg-muted">
            <th className="border border-border px-3 py-2 text-left font-semibold">Credit Hours</th>
            <th className="border border-border px-3 py-2 text-left font-semibold">
              Minimum Assigned Instructional Minutes per class session
            </th>
            <th className="border border-border px-3 py-2 text-left font-semibold">Direct Instruction Hours</th>
            <th className="border border-border px-3 py-2 text-left font-semibold">Student Work Hours</th>
            <th className="border border-border px-3 py-2 text-left font-semibold">Total Course Hours</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.credit}>
              <td className="border border-border px-3 py-2">{r.credit}</td>
              <td className="border border-border px-3 py-2">{r.minutes}</td>
              <td className="border border-border px-3 py-2">{r.direct}</td>
              <td className="border border-border px-3 py-2">{r.work}</td>
              <td className="border border-border px-3 py-2">{r.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function AssignmentOfCreditHoursPolicyPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Assignment of Credit Hours Policy"
          subtitle="Consumer Information"
          description="How Arkansas Baptist College assigns and awards credit hours."
          breadcrumbs={[
            { label: "Resources", href: "/resources/consumer-information" },
            { label: "Consumer Information", href: "/resources/consumer-information" },
            { label: "Assignment of Credit Hours Policy" },
          ]}
        />

        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <p>
              Arkansas Baptist College&apos;s assignment and award of credit hours conform to widely accepted practices
              in higher education. A credit hour is an institutionally established equivalency that &ldquo;assigns a unit
              of measure that gives value to the level of instruction, academic rigor, and time requirements for a course
              taken at an educational institution.&rdquo; Arkansas Baptist College observes the following minimum time
              requirements for courses:
            </p>

            <h3>Calculations for an 8-week course:</h3>
            <CreditHoursTable caption="Minimum time requirements for an 8-week course" rows={rows8Week} />

            <h3>Calculations for a 16-week course:</h3>
            <CreditHoursTable caption="Minimum time requirements for a 16-week course" rows={rows16Week} />
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
