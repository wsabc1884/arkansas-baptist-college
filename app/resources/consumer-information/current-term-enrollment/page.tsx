import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "Current Term Enrollment | Arkansas Baptist College",
  description:
    "SUMMER II (U2) and SUMMER BRIDGE (U4) 2025-26 enrollment data for Arkansas Baptist College, including classification, gender, age, degree programs, majors, and geographic distribution.",
}

type Row = { label: string; value: string }

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
          description="SUMMER II (U2) and SUMMER BRIDGE (U4) 2025-26 enrollment snapshot."
          breadcrumbs={[
            { label: "Resources", href: "/resources/consumer-information" },
            { label: "Consumer Information", href: "/resources/consumer-information" },
            { label: "Current Term Enrollment" },
          ]}
        />

        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>SUMMER II (U2) and SUMMER BRIDGE (U4) 2025-26 Enrollment</h2>
          </div>

          <div className="mx-auto mt-8 max-w-4xl space-y-12">
            {/* Overall Enrollment */}
            <section>
              <h3 className="font-serif text-lg font-bold text-foreground">Overall Enrollment</h3>
              <div className="mt-4">
                <DataTable
                  caption="Overall enrollment by term"
                  columns={["Term", "Total Students"]}
                  rows={[
                    { label: "SUMMER II (U2)", value: "235" },
                    { label: "SUMMER BRIDGE (U4)", value: "338" },
                  ]}
                />
              </div>
            </section>

            {/* Student Classification */}
            <section>
              <h3 className="font-serif text-lg font-bold text-foreground">Student Classification</h3>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 font-semibold text-foreground">SUMMER II (U2)</h4>
                  <DataTable
                    caption="Summer II classification"
                    columns={["Classification", "Students"]}
                    rows={[
                      { label: "First-Year (FR)", value: "81" },
                      { label: "First-Time in College (FTIC)", value: "35" },
                      { label: "Sophomore", value: "66" },
                      { label: "Junior", value: "32" },
                      { label: "Senior", value: "21" },
                    ]}
                  />
                  <p className="mt-3 text-sm text-muted-foreground">
                    The SUMMER II (U2) population reflects a balanced mix of continuing students across all undergraduate
                    classifications.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 font-semibold text-foreground">SUMMER BRIDGE (U4)</h4>
                  <DataTable
                    caption="Summer Bridge classification"
                    columns={["Classification", "Students"]}
                    rows={[
                      { label: "FIRST-TIME IN COLLEGE (FTIC)", value: "266" },
                      { label: "Freshman", value: "71" },
                      { label: "Junior", value: "1" },
                    ]}
                  />
                  <p className="mt-3 text-sm text-muted-foreground">
                    The SUMMER BRIDGE (U4) cohort is overwhelmingly composed of newly entering students, suggesting a
                    strong incoming class.
                  </p>
                </div>
              </div>
            </section>

            {/* Gender Distribution */}
            <section>
              <h3 className="font-serif text-lg font-bold text-foreground">Gender Distribution</h3>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 font-semibold text-foreground">SUMMER II (U2)</h4>
                  <DataTable
                    caption="Summer II gender distribution"
                    columns={["Gender", "Students"]}
                    rows={[
                      { label: "Male", value: "180" },
                      { label: "Female", value: "45" },
                    ]}
                  />
                  <p className="mt-2 text-xs text-muted-foreground">The remaining records have missing gender values.</p>
                </div>
                <div>
                  <h4 className="mb-3 font-semibold text-foreground">SUMMER BRIDGE (U4)</h4>
                  <DataTable
                    caption="Summer Bridge gender distribution"
                    columns={["Gender", "Students"]}
                    rows={[
                      { label: "Male", value: "270" },
                      { label: "Female", value: "41" },
                    ]}
                  />
                  <p className="mt-2 text-xs text-muted-foreground">Some records have missing gender values.</p>
                </div>
              </div>
            </section>

            {/* Average Student Age */}
            <section>
              <h3 className="font-serif text-lg font-bold text-foreground">Average Student Age</h3>
              <div className="mt-4">
                <DataTable
                  caption="Average student age by term"
                  columns={["Term", "Average Age"]}
                  rows={[
                    { label: "SUMMER II (U2)", value: "23 years" },
                    { label: "SUMMER BRIDGE (U4)", value: "19 years" },
                  ]}
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                The decrease in average age during SUMMER BRIDGE (U4) is consistent with the significant increase in
                first-time college students.
              </p>
            </section>

            {/* Degree Programs */}
            <section>
              <h3 className="font-serif text-lg font-bold text-foreground">Degree Programs</h3>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 font-semibold text-foreground">SUMMER II (U2)</h4>
                  <DataTable
                    caption="Summer II most common degree programs"
                    columns={["Degree", "Students"]}
                    rows={[
                      { label: "Bachelor of Business Administration", value: "139" },
                      { label: "Bachelor of Arts", value: "50" },
                      { label: "Associate of Arts", value: "37" },
                    ]}
                  />
                </div>
                <div>
                  <h4 className="mb-3 font-semibold text-foreground">SUMMER BRIDGE (U4)</h4>
                  <DataTable
                    caption="Summer Bridge most common degree programs"
                    columns={["Degree", "Students"]}
                    rows={[
                      { label: "Bachelor of Business Administration", value: "216" },
                      { label: "Bachelor of Arts", value: "46" },
                      { label: "Associate of Arts", value: "43" },
                      { label: "Associate of Science", value: "24" },
                    ]}
                  />
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Business-related degrees continue to represent the largest share of student enrollment.
              </p>
            </section>

            {/* Largest Academic Majors */}
            <section>
              <h3 className="font-serif text-lg font-bold text-foreground">Largest Academic Majors</h3>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 font-semibold text-foreground">SUMMER II (U2)</h4>
                  <DataTable
                    caption="Summer II largest academic majors"
                    columns={["Major", "Students"]}
                    rows={[
                      { label: "Sport Management", value: "78" },
                      { label: "Business Administration", value: "49" },
                      { label: "Interdisciplinary Studies", value: "29" },
                      { label: "Criminal Justice", value: "12" },
                    ]}
                  />
                  <p className="mt-2 text-xs text-muted-foreground">
                    Additional majors represented include Human Services, Business Entrepreneurship, Music Business,
                    Accounting, and Public Administration.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 font-semibold text-foreground">SUMMER BRIDGE (U4)</h4>
                  <DataTable
                    caption="Summer Bridge largest academic majors"
                    columns={["Major", "Students"]}
                    rows={[
                      { label: "Sport Management", value: "111" },
                      { label: "Business Administration", value: "71" },
                      { label: "Interdisciplinary Studies", value: "55" },
                      { label: "Business Entrepreneurship", value: "34" },
                      { label: "Criminal Justice", value: "22" },
                    ]}
                  />
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                These data suggest continued student demand for business and professionally oriented academic programs.
              </p>
            </section>

            {/* Geographic Distribution */}
            <section>
              <h3 className="font-serif text-lg font-bold text-foreground">Geographic Distribution</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Students continue to be recruited primarily from Arkansas while maintaining a regional presence
                throughout the South.
              </p>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 font-semibold text-foreground">SUMMER II (U2) Leading States</h4>
                  <DataTable
                    caption="Summer II leading states"
                    columns={["State", "Students"]}
                    rows={[
                      { label: "Arkansas", value: "90" },
                      { label: "Louisiana", value: "26" },
                      { label: "Texas", value: "23" },
                      { label: "Mississippi", value: "19" },
                      { label: "Florida", value: "17" },
                    ]}
                  />
                </div>
                <div>
                  <h4 className="mb-3 font-semibold text-foreground">SUMMER BRIDGE (U4) Leading States</h4>
                  <DataTable
                    caption="Summer Bridge leading states"
                    columns={["State", "Students"]}
                    rows={[
                      { label: "Arkansas", value: "81" },
                      { label: "Texas", value: "61" },
                      { label: "Louisiana", value: "55" },
                      { label: "Mississippi", value: "27" },
                      { label: "Georgia", value: "24" },
                    ]}
                  />
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                The increased representation from neighboring states indicates expanding regional recruitment efforts.
              </p>
            </section>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
