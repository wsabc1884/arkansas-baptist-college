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

function ChartBox({
  children,
  variant = "default",
}: {
  children: React.ReactNode
  variant?: "primary" | "default"
}) {
  return (
    <div
      className={
        variant === "primary"
          ? "rounded-lg border-2 border-primary bg-primary px-6 py-3 text-center text-primary-foreground"
          : "rounded-lg border-2 border-primary bg-card px-6 py-3 text-center text-foreground"
      }
    >
      {children}
    </div>
  )
}

function Connector() {
  return <div className="mx-auto h-6 w-0.5 bg-primary/40" aria-hidden="true" />
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
          <h2 className="sr-only">Arkansas Baptist College Organizational Chart</h2>

          <div className="flex flex-col items-center">
            <ChartBox variant="primary">
              <p className="font-serif text-lg font-bold">Board of Trustees</p>
            </ChartBox>
            <Connector />
            <ChartBox variant="primary">
              <p className="font-serif text-lg font-bold">President</p>
            </ChartBox>
            <Connector />
            <ChartBox>
              <p className="font-semibold">{"President's Assistant"}</p>
            </ChartBox>
            <Connector />
          </div>

          <div className="hidden h-0.5 bg-primary/40 lg:mx-[10%] lg:block" aria-hidden="true" />

          <ul className="mt-0 grid gap-6 sm:grid-cols-2 lg:mt-0 lg:grid-cols-5 lg:gap-4">
            {divisions.map((division) => (
              <li key={division.title} className="flex flex-col">
                <div className="mx-auto hidden h-6 w-0.5 bg-primary/40 lg:block" aria-hidden="true" />
                <div className="rounded-lg border-2 border-primary bg-primary/10 px-4 py-3 text-center">
                  <h3 className="text-balance font-serif text-base font-bold text-foreground">
                    {division.title}
                  </h3>
                </div>
                {division.units.length > 0 && (
                  <ul className="mt-3 flex flex-col gap-2">
                    {division.units.map((unit) => (
                      <li
                        key={unit}
                        className="rounded-md border bg-card px-3 py-2 text-center text-sm text-muted-foreground"
                      >
                        {unit}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
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
