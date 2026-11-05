import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Organization Chart - Arkansas Baptist College",
  description:
    "View the organizational structure of Arkansas Baptist College, from the Board of Trustees and President to each division and its departments.",
}

type Division = {
  title: string
  units: string[]
}

const divisions: Division[] = [
  {
    title: "Special Assistant: Operations",
    units: [
      "Facilities",
      "Campus Safety",
      "Auxiliary",
      "Food Services",
      "Residential Life / Housing",
      "Upward Bound",
      "Financial Aid",
      "Title III / Sponsored Programs",
    ],
  },
  {
    title: "Institutional Research / ALO",
    units: [],
  },
  {
    title: "VP of Academic Affairs",
    units: [
      "Faculty / Department Chairs",
      "Registrar's Office",
      "Academic Programs",
      "Academic Advising",
      "Library Services",
      "Retention",
      "Career Services",
      "Title IX",
      "Disability Services",
    ],
  },
  {
    title: "Chief Financial Officer",
    units: ["Controller", "Business Affairs", "Student Accounts", "Human Resources"],
  },
  {
    title: "Special Assistant: Advancement and Innovation",
    units: [
      "Alumni Relations",
      "Donor Relations",
      "Marketing and Communications",
      "Athletics",
      "Enrollment Management",
      "Band",
      "Student Activities",
    ],
  },
]

const LINE = "bg-primary/60"

/*
 * Desktop layout coordinates measured from the official PDF (768pt-wide page).
 * Every box and connector is placed at the same position as the source document.
 */
const CANVAS = { width: 768, top: 50, height: 440 }
const DIVISION_Y = 145
const DIVISION_H = 43
const BAR_Y = 134
const UNIT_START_Y = 209
const UNIT_PITCH = 31
const UNIT_H = 25

const divisionLayout = [
  { x: 12, w: 102, spineX: 20, unitX: 26, unitW: 88 },
  { x: 126, w: 88, spineX: 0, unitX: 0, unitW: 0 },
  { x: 228, w: 125, spineX: 233, unitX: 240, unitW: 113 },
  { x: 367, w: 95, spineX: 373, unitX: 379, unitW: 83 },
  { x: 493, w: 224, spineX: 499, unitX: 506, unitW: 211 },
]

const pct = (value: number, total: number) => `${(value / total) * 100}%`

function boxStyle(x: number, y: number, w: number, h: number) {
  return {
    left: pct(x, CANVAS.width),
    top: pct(y - CANVAS.top, CANVAS.height),
    width: pct(w, CANVAS.width),
    height: pct(h, CANVAS.height),
  }
}

function DesktopChart() {
  const lines: { x1: number; y1: number; x2: number; y2: number }[] = [
    { x1: 384, y1: 90, x2: 384, y2: 99 },
    { x1: 472, y1: 112, x2: 500, y2: 112 },
    { x1: 384, y1: 132, x2: 384, y2: BAR_Y },
  ]

  const centers = divisionLayout.map((d) => d.x + d.w / 2)
  lines.push({ x1: centers[0], y1: BAR_Y, x2: centers[centers.length - 1], y2: BAR_Y })
  centers.forEach((cx) => lines.push({ x1: cx, y1: BAR_Y, x2: cx, y2: DIVISION_Y }))

  divisions.forEach((division, i) => {
    const layout = divisionLayout[i]
    if (division.units.length === 0) return
    const lastMid = UNIT_START_Y + (division.units.length - 1) * UNIT_PITCH + UNIT_H / 2
    lines.push({ x1: layout.spineX, y1: DIVISION_Y + DIVISION_H, x2: layout.spineX, y2: lastMid })
    division.units.forEach((_, u) => {
      const mid = UNIT_START_Y + u * UNIT_PITCH + UNIT_H / 2
      lines.push({ x1: layout.spineX, y1: mid, x2: layout.unitX, y2: mid })
    })
  })

  return (
    <div
      className="relative mx-auto hidden w-full lg:block [container-type:inline-size]"
      style={{ aspectRatio: `${CANVAS.width} / ${CANVAS.height}` }}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-primary"
        viewBox={`0 ${CANVAS.top} ${CANVAS.width} ${CANVAS.height}`}
        preserveAspectRatio="none"
      >
        {lines.map((l, i) => (
          <line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="square"
          />
        ))}
      </svg>

      <div
        className="absolute flex items-center justify-center rounded-md bg-primary text-center font-serif text-[1.45cqw] font-bold leading-tight text-primary-foreground shadow-sm"
        style={boxStyle(297, 58, 175, 32)}
      >
        Board of Trustees
      </div>
      <div
        className="absolute flex items-center justify-center rounded-md bg-primary text-center font-serif text-[1.45cqw] font-bold leading-tight text-primary-foreground shadow-sm"
        style={boxStyle(297, 99, 175, 33)}
      >
        President
      </div>
      <div
        className="absolute flex items-center justify-center rounded-md border border-primary/30 bg-primary/10 px-[0.5cqw] text-center text-[1.05cqw] font-semibold leading-tight text-foreground"
        style={boxStyle(500, 99, 136, 25)}
      >
        {"President's Assistant"}
      </div>

      {divisions.map((division, i) => {
        const layout = divisionLayout[i]
        return (
          <div key={division.title}>
            <h3
              className="absolute flex items-center justify-center rounded-md border border-primary/30 bg-primary/10 px-[0.6cqw] text-center font-serif text-[1.1cqw] font-bold leading-tight text-foreground"
              style={boxStyle(layout.x, DIVISION_Y, layout.w, DIVISION_H)}
            >
              {division.title}
            </h3>
            {division.units.map((unit, u) => (
              <div
                key={unit}
                className="absolute flex items-center justify-center rounded-md border border-primary/20 bg-card px-[0.4cqw] text-center text-[0.85cqw] leading-none text-muted-foreground shadow-sm"
                style={boxStyle(layout.unitX, UNIT_START_Y + u * UNIT_PITCH, layout.unitW, UNIT_H)}
              >
                {unit}
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

function TopBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg bg-primary px-8 py-3 text-center font-serif text-lg font-bold text-primary-foreground shadow-sm">
      {children}
    </div>
  )
}

function DivisionColumn({ division, index }: { division: Division; index: number }) {
  const isFirst = index === 0
  const isLast = index === divisions.length - 1

  return (
    <li className="relative flex flex-col px-0 pt-6 lg:px-2">
      {/* Horizontal bar segment linking this column to its neighbors */}
      <span
        aria-hidden="true"
        className={`absolute top-0 hidden h-0.5 lg:block ${LINE} ${
          isFirst ? "left-1/2 right-0" : isLast ? "left-0 right-1/2" : "left-0 right-0"
        }`}
      />
      {/* Drop line from the bar to the division box */}
      <span
        aria-hidden="true"
        className={`absolute left-1/2 top-0 hidden h-6 w-0.5 -translate-x-1/2 lg:block ${LINE}`}
      />

      <div className="relative z-10 flex min-h-16 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 px-3 py-3 text-center">
        <h3 className="text-balance font-serif text-sm font-bold leading-snug text-foreground">
          {division.title}
        </h3>
      </div>

      {division.units.length > 0 && (
        <ul className="relative ml-3 flex flex-col gap-2 pt-4" aria-label={`Departments under ${division.title}`}>
          {division.units.map((unit, unitIndex) => {
            const isLastUnit = unitIndex === division.units.length - 1
            return (
              <li key={unit} className="relative pl-5">
                {/* Vertical spine running down the left of the units */}
                <span
                  aria-hidden="true"
                  className={`absolute -top-4 left-0 w-0.5 ${LINE} ${
                    isLastUnit ? "h-[calc(50%+1rem)]" : "h-[calc(100%+1.5rem)]"
                  }`}
                />
                {/* Elbow tick into each unit box */}
                <span aria-hidden="true" className={`absolute left-0 top-1/2 h-0.5 w-5 ${LINE}`} />
                <div className="rounded-md border border-primary/20 bg-card px-3 py-2 text-center text-xs leading-snug text-muted-foreground shadow-sm">
                  {unit}
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}

export default function OrganizationChartPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Organization Chart"
        subtitle="About Us"
        description="The organizational structure of Arkansas Baptist College, from the Board of Trustees and the President to each division and the departments it oversees."
        breadcrumbs={[
          { label: "About Us", href: "/about/history" },
          { label: "Organization Chart", href: "/about/organization-chart" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-balance text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            Arkansas Baptist College Organizational Chart
          </h2>

          <DesktopChart />

          <div className="lg:hidden">
          <div className="flex flex-col items-center">
            <TopBox>Board of Trustees</TopBox>
            <span aria-hidden="true" className={`h-6 w-0.5 ${LINE}`} />

            {/* President row with the President's Assistant connected to the right */}
            <div className="grid w-full grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
              <div className="hidden lg:block" />
              <div className="flex justify-center">
                <TopBox>President</TopBox>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <span aria-hidden="true" className={`hidden h-0.5 w-8 lg:block ${LINE}`} />
                <div className="rounded-lg border border-primary/30 bg-primary/10 px-6 py-2.5 text-center text-sm font-semibold text-foreground">
                  {"President's Assistant"}
                </div>
              </div>
            </div>

            <span aria-hidden="true" className={`hidden h-6 w-0.5 lg:block ${LINE}`} />
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-0 lg:grid-cols-[1fr_0.9fr_1.2fr_0.95fr_2fr] lg:gap-0">
            {divisions.map((division, index) => (
              <DivisionColumn key={division.title} division={division} index={index} />
            ))}
          </ul>
          </div>
        </div>
      </SectionWrapper>

      <CTABand
        heading="Meet Our Leadership"
        description="Learn more about the people leading Arkansas Baptist College."
        primaryAction={{ label: "Administration", href: "/about/administration" }}
        secondaryAction={{ label: "Board of Trustees", href: "/about/board-of-trustees" }}
      />
    </main>
  )
}
