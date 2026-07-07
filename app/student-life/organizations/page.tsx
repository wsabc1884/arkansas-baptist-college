import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"


export const metadata: Metadata = {
  title: "Student Organizations | Arkansas Baptist College",
  description:
    "Get involved with student organizations, Greek life, SGA, and clubs at Arkansas Baptist College.",
}

const greekOrgs = [
  { name: "Delta Sigma Theta Sorority, Inc.", chapter: "Tau Pi Chapter", letters: "\u0394\u03A3\u0398", type: "Sorority" },
  { name: "Zeta Phi Beta Sorority, Inc.", chapter: "Psi Rho Chapter", letters: "\u0396\u03A6\u0392", type: "Sorority" },
  { name: "Kappa Alpha Psi Fraternity, Inc.", chapter: "Pi Lambda Chapter", letters: "\u039A\u0391\u03A8", type: "Fraternity" },
  { name: "Omega Psi Phi Fraternity, Inc.", chapter: "Alpha Delta Pi Chapter", letters: "\u03A9\u03A8\u03A6", type: "Fraternity" },
  { name: "Phi Beta Sigma Fraternity, Inc.", chapter: "Rho Phi Chapter", letters: "\u03A6\u0392\u03A3", type: "Fraternity" },
]

export default function StudentOrganizationsPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Student Organizations"
          subtitle="Student Life"
          description="Get involved, build community, and develop leadership skills through campus organizations."
          breadcrumbs={[
            { label: "Student Life", href: "/student-life/campus-life" },
            { label: "Student Organizations" },
          ]}
        />

        {/* Mission */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Office of Student Activities</h2>
            <p>
              The Arkansas Baptist College Office of Student Activities plays an essential role in building the overall foundation of the college experience. The goal of Student Activities is to complement academic programs, striving diligently to ensure that education does not stop at the classroom doors. We work closely with faculty and staff across the campus to link curricular and extracurricular activities seamlessly. We are committed to building a community of leaders for tomorrow.
            </p>
            <p>
              Getting involved in student activities, organizations, clubs, and committees is an excellent way to develop leadership potential and enhance the college experience. The student&apos;s first priority at Arkansas Baptist College is academic achievement. Student organizations allow interaction with other campus leaders, administrators, staff, and faculty, increasing awareness of available campus resources while enhancing personal development.
            </p>
            <p>
              All student organizations are required to complete three campus projects. All Greek-letter sororities and fraternities are required to maintain established national regulations. For more information on becoming a recognized student organization, obtain the Emerging Club Packet from the Dean of Student Affairs&apos; Office.
            </p>
          </div>
        </SectionWrapper>

        {/* Campus Organizations */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Campus Organizations</h2>
            <p className="mt-2 text-muted-foreground">Explore the organizations and groups active on campus.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Athletics", "Band", "Chapel", "Choir"].map((org) => (
                <div key={org} className="rounded-lg border bg-card p-5">
                  <h3 className="font-semibold text-foreground">{org}</h3>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* SGA */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Student Government Association</h2>
            <p>
              The Student Government Association (SGA) is the representative voice for Arkansas Baptist College&apos;s students. SGA formulates policies and works closely with administration on issues that directly affect students. Elections for various offices are held during the spring semester. Students are encouraged to get involved in leadership positions and sponsored activities.
            </p>
            <p>SGA officers include:</p>
            <ul>
              <li>President</li>
              <li>Vice President</li>
              <li>Secretary</li>
              <li>Treasurer</li>
              <li>Historian</li>
              <li>Chaplain</li>
              <li>Senior Class President</li>
              <li>Junior Class Representative</li>
              <li>Sophomore Class Representative</li>
              <li>Freshman Class Representative</li>
            </ul>
            <p>
              A student must have a grade point average (GPA) of at least <strong>2.50</strong> to run for office and once elected must maintain a <strong>2.50 GPA</strong>.
            </p>
          </div>
        </SectionWrapper>

        {/* Greek Life */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Greek Life</h2>
            <p className="mt-2 text-muted-foreground">
              Recognizing that membership in a fraternity or sorority can be a positive and educational experience, ABC supports the notion that membership offers an alternative lifestyle for today&apos;s student. These organizations are nationally affiliated and report on campus to the Dean of Student Affairs or his/her designee.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {greekOrgs.map((org) => (
                <div
                  key={org.chapter}
                  className="flex flex-col items-center rounded-lg border bg-card p-6 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-2xl font-bold text-primary">{org.letters}</span>
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{org.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{org.chapter}</p>
                  <span className="mt-2 rounded-full bg-muted px-3 py-0.5 text-xs font-medium text-muted-foreground">
                    {org.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Starting a New Org */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="prose-abc">
              <h2>Starting a New Organization</h2>
              <p>
                Students interested in starting a new organization should contact the Office of Student Affairs for guidelines and the application process. Obtain the Emerging Club Packet from the Dean of Student Affairs&apos; Office to get started.
              </p>
              <h2>Contact</h2>
              <p>
                <strong>Director of Student Activities</strong><br />
                Lamarius Q. McGraw, M.A., HESA<br />
                Email: <a href="mailto:lamarius.mcgraw@arkansasbaptist.edu">lamarius.mcgraw@arkansasbaptist.edu</a><br />
                Phone: <a href="tel:5014201200">501-420-1200</a>
              </p>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Ready to Get Involved?"
          description="Explore campus life, find your community, and make your mark at ABC."
          primaryAction={{ label: "Campus Life", href: "/student-life/campus-life" }}
          secondaryAction={{ label: "Apply to ABC", href: "/enrollment/apply" }}
        />
      </main>
    </div>
  )
}
