import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "History of the College | Arkansas Baptist College",
  description: "Discover the rich 140+ year history of Arkansas Baptist College, the only Baptist HBCU west of the Mississippi River, founded in 1884.",
}

const timeline = [
  {
    year: "1884",
    title: "The Beginning",
    description: "Arkansas Baptist College was founded as the Minister's Institute by the Colored Baptists of the State of Arkansas. J.P. Lawson, a white Baptist minister from Joplin, Missouri, served as the first principal and teacher.",
  },
  {
    year: "1885",
    title: "A New Name",
    description: "In April 1885, the institution was renamed Arkansas Baptist College, reflecting its expanded mission beyond ministerial training.",
  },
  {
    year: "1887",
    title: "First President",
    description: "Joseph Albert Booker became the first president, a position he would hold until 1926. Formerly enslaved, Booker was an influential educator and newspaper editor who actively fought against segregationist policies in Little Rock.",
  },
  {
    year: "1893",
    title: "Old Main Building",
    description: "After wooden structures burned down on March 2, 1893, the cornerstone for the Old Main building was laid on November 2, 1893. This Second Empire-style building remains the oldest surviving academic building on an HBCU campus in Arkansas.",
  },
  {
    year: "1913",
    title: "Campus Expansion",
    description: "The campus grew to include a 3-story boys dormitory, a manual training building, and the president's home, establishing a more comprehensive educational environment.",
  },
  {
    year: "1930s",
    title: "Academic Growth",
    description: "An education building was added, housing the library, classrooms, offices, The Baptist Vanguard newspaper print shop, the business department, and the biology room.",
  },
  {
    year: "1947",
    title: "First Accreditation",
    description: "During President Tandy Washington Coggs' tenure, the college received its initial two-year accreditation from the Arkansas State Department of Education.",
  },
  {
    year: "1976",
    title: "National Recognition",
    description: "The Old Main Building was listed on the National Register of Historic Places, recognizing its significance as the oldest building on a historically African-American college campus in Arkansas.",
  },
  {
    year: "1987",
    title: "Full Accreditation",
    description: "Arkansas Baptist College achieved accreditation by the Higher Learning Commission, marking a significant milestone in its academic standing.",
  },
  {
    year: "Today",
    title: "Continuing the Legacy",
    description: "Arkansas Baptist College continues its mission of providing quality education rooted in faith, serving as the only Baptist HBCU west of the Mississippi River.",
  },
]

const presidents = [
  { name: "Joseph P. Lawson", years: "1884-1887", role: "Principal" },
  { name: "Joseph Albert Booker", years: "1887-1926", role: "First President" },
  { name: "Tandy Washington Coggs", years: "1937-1955", role: "President" },
  { name: "James C. Oliver", years: "1962-1982", role: "President" },
  { name: "William Thomas Keaton", years: "1985-2001", role: "President" },
  { name: "Omon Fitzgerald Hill", years: "2006-2016", role: "President" },
  { name: "Calvin McFadden Sr.", years: "2023-2024", role: "President" },
  { name: "Dr. George Hertz", years: "2025-Present", role: "Interim President" },
]

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#3d1a5c] py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full bg-[url('/images/historical-campus.jpg')] bg-cover bg-center" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d4a736]">
              About Us
            </p>
            <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              History of the College
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              For over 140 years, Arkansas Baptist College has been a beacon of hope, education, 
              and spiritual growth for generations of students.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  <span className="text-[#d4a736]">Truth</span> and{" "}
                  <span className="text-[#3d1a5c]">Light</span> Since 1884
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    Arkansas Baptist College (ABC) is a private, Baptist-affiliated, historically 
                    black college in Little Rock, Arkansas. Founded in 1884 as the Minister&apos;s 
                    Institute, ABC holds the distinction of being the only historically black 
                    Baptist school west of the Mississippi River.
                  </p>
                  <p>
                    The college was initially funded by the Colored Baptists of the State of 
                    Arkansas, who recognized the critical need for educational opportunities 
                    for African Americans in the post-Civil War era. What began as a small 
                    institution for training ministers has grown into a comprehensive liberal 
                    arts college serving students from across the nation.
                  </p>
                  <p>
                    The Main Building on its campus, built in 1893, is one of the oldest 
                    surviving academic buildings in the state and was listed on the National 
                    Register of Historic Places in 1976—a testament to the college&apos;s enduring 
                    legacy and architectural significance.
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
          </div>
        </section>

        {/* Old Main Building Feature */}
        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                The Historic Old Main Building
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A National Register of Historic Places Landmark
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3d1a5c] text-white">
                  <span className="text-lg font-bold">1893</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-card-foreground">Year Built</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The cornerstone was laid on November 2, 1893, after the original wooden 
                  structures were destroyed by fire.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4a736] text-[#3d1a5c]">
                  <span className="text-lg font-bold">1976</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-card-foreground">NRHP Listed</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Recognized as the oldest building on a historically African-American 
                  college campus in Arkansas.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3d1a5c] text-white">
                  <span className="text-xs font-bold">SE</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-card-foreground">Second Empire Style</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  An excellent example of Second Empire architectural style, featuring a 
                  distinctive mansard roof design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Our Journey Through Time
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Key milestones in the history of Arkansas Baptist College
              </p>
            </div>
            <div className="relative mt-16">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#3d1a5c] text-xs font-bold text-white md:left-1/2">
                      {index + 1}
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <div className="rounded-lg bg-card p-6 shadow-sm">
                        <span className="inline-block rounded-full bg-[#d4a736] px-3 py-1 text-sm font-bold text-[#3d1a5c]">
                          {item.year}
                        </span>
                        <h3 className="mt-3 text-xl font-bold text-card-foreground">{item.title}</h3>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Presidents */}
        <section className="bg-[#3d1a5c] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
                Presidential Legacy
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Leaders who have shaped the vision and direction of Arkansas Baptist College
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {presidents.map((president) => (
                <div
                  key={president.name}
                  className="rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm"
                >
                  <h3 className="text-lg font-bold text-white">{president.name}</h3>
                  <p className="mt-1 text-sm text-[#d4a736]">{president.role}</p>
                  <p className="mt-2 text-sm text-white/60">{president.years}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notable Alumni Highlight */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4a736] text-[#3d1a5c] font-bold">
                      LJ
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Louis Jordan</h4>
                      <p className="text-sm text-muted-foreground">
                        Legendary musician and bandleader, pioneer of rhythm and blues
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3d1a5c] text-white font-bold">
                      MD
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Michael Dyer</h4>
                      <p className="text-sm text-muted-foreground">
                        Professional football player
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4a736] text-[#3d1a5c] font-bold">
                      LL
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Lorenzo P. Lewis</h4>
                      <p className="text-sm text-muted-foreground">
                        Mental health advocate and entrepreneur
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg bg-muted p-8">
                <blockquote className="text-lg italic text-foreground">
                  &ldquo;Arkansas Baptist College has been a beacon of hope for generations, 
                  providing not just education, but a foundation of faith and service that 
                  prepares students to transform their communities and the world.&rdquo;
                </blockquote>
                <p className="mt-4 font-bold text-[#3d1a5c]">— Arkansas Baptist College Mission</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-[#3d1a5c] p-8 md:flex-row md:p-12">
              <div>
                <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  Become Part of Our History
                </h2>
                <p className="mt-2 text-white/70">
                  Join the legacy of excellence at Arkansas Baptist College.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-[#d4a736] text-[#3d1a5c] hover:bg-[#c49a2f]" asChild>
                  <Link href="#">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                  <Link href="#">Schedule a Visit</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
