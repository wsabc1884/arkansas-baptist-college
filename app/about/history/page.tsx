import { PageHero } from "@/components/page-hero"
import { Timeline } from "@/components/timeline"
import { CTABand } from "@/components/cta-band"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { StatsRow } from "@/components/stats-row"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "History of the College | Arkansas Baptist College",
  description: "Discover the rich 140+ year history of Arkansas Baptist College, the only Baptist HBCU west of the Mississippi River, founded in 1884.",
}

const timelineItems = [
  {
    marker: "1884",
    title: "The Beginning",
    description: "Arkansas Baptist College was founded as the Minister's Institute by the Colored Baptists of the State of Arkansas. J.P. Lawson served as the first principal and teacher.",
  },
  {
    marker: "1885",
    title: "A New Name",
    description: "The institution was renamed Arkansas Baptist College, reflecting its expanded mission beyond ministerial training.",
  },
  {
    marker: "1887",
    title: "First President",
    description: "Joseph Albert Booker became the first president, a position he would hold until 1926. Formerly enslaved, Booker was an influential educator who fought against segregationist policies.",
  },
  {
    marker: "1893",
    title: "Old Main Building",
    description: "The cornerstone for the Old Main building was laid on November 2, 1893. This Second Empire-style building remains the oldest surviving academic building on an HBCU campus in Arkansas.",
  },
  {
    marker: "1913",
    title: "Campus Expansion",
    description: "The campus grew to include a 3-story boys dormitory, a manual training building, and the president's home.",
  },
  {
    marker: "1947",
    title: "First Accreditation",
    description: "During President Tandy Washington Coggs' tenure, the college received its initial two-year accreditation from the Arkansas State Department of Education.",
  },
  {
    marker: "1976",
    title: "National Recognition",
    description: "The Old Main Building was listed on the National Register of Historic Places as the oldest building on a historically African-American college campus in Arkansas.",
  },
  {
    marker: "1987",
    title: "Full Accreditation",
    description: "Arkansas Baptist College achieved accreditation by the Higher Learning Commission, a significant milestone in its academic standing.",
  },
  {
    marker: "Now",
    title: "Continuing the Legacy",
    description: "Arkansas Baptist College continues its mission as the only Baptist HBCU west of the Mississippi River, providing quality education rooted in faith.",
  },
]

const presidents = [
  { name: "Reverend Joseph P. Lawson", years: "1884-1887", role: "Principal (Ministers Institute)" },
  { name: "Dr. Joseph Albert Booker", years: "1887-1926", role: "President" },
  { name: "Reverend S.P. Nelson", years: "1926-1934", role: "President" },
  { name: "Dr. R. C. Woods", years: "1934-1936", role: "President" },
  { name: "Reverend S. R. Tillinghast", years: "1936-1937", role: "President" },
  { name: "Dr. Tandy W. Coggs", years: "1937-1955", role: "President" },
  { name: "Dr. Oscar Allan Rogers, Jr.", years: "1956-1960", role: "President" },
  { name: "Dr. Charles E. Johnson", years: "1960-1961", role: "President" },
  { name: "Dr. P.L. Rowe", years: "1961-1962", role: "President" },
  { name: "Dr. James C. Oliver", years: "1962-1982", role: "President" },
  { name: "Dr. R.C. Davis*", years: "1982-1985", role: "Interim President" },
  { name: "Dr. W. Thomas Keaton", years: "1985-2001", role: "President" },
  { name: "Dr. Mary Jarrett*", years: "2001-2002", role: "Interim President" },
  { name: "Dr. Israel Dunn, Jr.", years: "2002-2005", role: "President" },
  { name: "Dr. Mary Jarrett*", years: "2005-2006", role: "Acting President" },
  { name: "Dr. O. Fitzgerald Hill", years: "2006-2016", role: "President" },
  { name: "Dr. Joseph Jones", years: "2016-2017", role: "President" },
  { name: "Dr. Howard O. Gibson*", years: "2017-2018", role: "Interim President" },
  { name: "Mrs. Regina Favors*", years: "2018-2020", role: "Interim President" },
  { name: "Dr. Carlos R. Clark", years: "2020-2021", role: "President" },
  { name: "Mrs. Regina Favors*", years: "2021-2023", role: "Interim President" },
  { name: "Dr. Calvin J. McFadden, Sr.", years: "2023-2024", role: "President" },
  { name: "Mrs. Regina Favors*", years: "2024", role: "Interim President" },
  { name: "Dr. Leslie McClellon Rodriguez", years: "2024-2025", role: "President" },
  { name: "Dr. George E. Hertz*", years: "2025", role: "Interim President" },
  { name: 'Mr. William L. "Bill" Walker', years: "2025-Present", role: "President" },
]

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <main id="main-content">
        <PageHero
          title="History of the College"
          subtitle="About Us"
          description="For over 140 years, Arkansas Baptist College has been a beacon of hope, education, and spiritual growth for generations of students."
          breadcrumbs={[
            { label: "About Us", href: "/about/history" },
            { label: "History", href: "/about/history" },
          ]}
        />

        {/* Introduction */}
        <SectionWrapper>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Truth and <span className="text-[#3d1a5c]">Light</span> Since 1884
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Arkansas Baptist College (ABC) is a private, Baptist-affiliated, historically
                  black college in Little Rock, Arkansas. Founded in 1884 as the Minister&apos;s
                  Institute, ABC holds the distinction of being the only historically black
                  Baptist school west of the Mississippi River.
                </p>
                <p>
                  The college was initially funded by the Colored Baptists of the State of
                  Arkansas at Mount Zion Baptist Church in Little Rock, who recognized the critical need for
                  educational opportunities for African Americans in the post-Civil War era.
                  E.C. Morris, president of the National Baptist Convention, USA, Inc., is
                  recognized as the founder. What began as a small institution for training
                  ministers has grown into a comprehensive liberal arts college serving
                  students from across the nation.
                </p>
                <p>
                  The Main Building on its campus, built in 1893, is one of the oldest
                  surviving academic buildings in the state and was listed on the National
                  Register of Historic Places in 1976.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/old-main-building.jpg"
                alt="Old Main Building at Arkansas Baptist College"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-[#3d1a5c] p-4 text-white shadow-lg">
                <p className="text-3xl font-bold">140+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Old Main Building */}
        <SectionWrapper variant="muted">
          <SectionHeader
            title="The Historic Old Main Building"
            description="A National Register of Historic Places Landmark"
            align="center"
          />
          <StatsRow
            stats={[
              { value: "1893", label: "Cornerstone laid after the original wooden structures were destroyed by fire" },
              { value: "1976", label: "Listed on the National Register of Historic Places" },
              { value: "SE", label: "Second Empire architectural style with distinctive mansard roof" },
            ]}
            variant="outline"
          />
        </SectionWrapper>

        {/* Timeline */}
        <SectionWrapper>
          <SectionHeader
            title="Our Journey Through Time"
            description="Key milestones in the history of Arkansas Baptist College"
            align="center"
          />
          <Timeline items={timelineItems} variant="alternating" />
        </SectionWrapper>

        {/* Presidents */}
        <SectionWrapper variant="purple">
          <SectionHeader
            title="Presidential Legacy"
            description="Leaders who have shaped the vision and direction of Arkansas Baptist College"
            align="center"
            className="[&_h2]:text-white [&_p]:text-white/70"
          />
          <p className="mt-2 text-center text-sm text-white/60">* Denotes interim appointment</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {presidents.map((president) => (
              <div
                key={president.name}
                className="rounded-lg bg-white/10 p-4 text-center backdrop-blur-sm"
              >
                <h3 className="font-bold text-white">{president.name}</h3>
                <p className="mt-1 text-xs text-white/70">{president.role}</p>
                <p className="mt-1 text-xs text-white/60">{president.years}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Notable Alumni */}
        <SectionWrapper>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Notable Alumni
              </h2>
              <p className="mt-4 text-muted-foreground">
                Arkansas Baptist College has produced graduates who have made significant
                contributions to society across various fields.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { initials: "LJ", name: "Louis Jordan", desc: "Legendary musician and bandleader, pioneer of rhythm and blues" },
                  { initials: "MD", name: "Michael Dyer", desc: "Professional football player" },
                  { initials: "LL", name: "Lorenzo P. Lewis", desc: "Mental health advocate and entrepreneur" },
                ].map((alum, index) => (
                  <li key={alum.name} className="flex items-start gap-4">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold ${index % 2 === 0 ? "bg-[#f0eef3] text-[#3d1a5c]" : "bg-[#3d1a5c] text-white"}`}>
                      {alum.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{alum.name}</h4>
                      <p className="text-sm text-muted-foreground">{alum.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg bg-muted p-8">
              <blockquote className="text-lg italic text-foreground">
                &ldquo;Arkansas Baptist College has been a beacon of hope for generations,
                providing not just education, but a foundation of faith and service that
                prepares students to transform their communities and the world.&rdquo;
              </blockquote>
              <p className="mt-4 font-bold text-[#3d1a5c]">-- Arkansas Baptist College Mission</p>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Become Part of Our History"
          description="Join the legacy of excellence at Arkansas Baptist College."
          primaryAction={{ label: "Apply Now", href: "/enrollment/apply" }}
          secondaryAction={{ label: "Schedule a Visit", href: "/enrollment/campus-tour" }}
        />
      </main>
    </div>
  )
}
