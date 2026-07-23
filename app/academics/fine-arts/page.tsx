import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import {
  Music2,
  Zap,
  Target,
  Sparkles,
  Users,
  Trophy,
  Drum,
  Flag,
  Wind,
  Mic2,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Band & Fine Arts | Arkansas Baptist College",
  description:
    "The Department of Fine Arts offers programs in music performance and music business and is home to the Stampede of Sound — Arkansas Baptist College's premier marching band.",
}

const formula = [
  { word: "Discipline", detail: "builds consistency", icon: Target },
  { word: "Focus", detail: "sharpens execution", icon: Zap },
  { word: "Action", detail: "produces results", icon: Trophy },
]

const experience = [
  {
    icon: Sparkles,
    title: "High-Energy Performances",
    items: [
      "Electrifying halftime shows",
      "Crowd-commanding stands performances",
      "Travel performances, showcases, and exhibitions",
    ],
  },
  {
    icon: Music2,
    title: "Elite Training Environment",
    items: [
      "Precision marching & drill execution",
      "Musical excellence & ensemble mastery",
      "Leadership development and real-world discipline",
    ],
  },
  {
    icon: Users,
    title: "Culture & Brotherhood/Sisterhood",
    items: [
      "A family built on accountability and respect",
      "A culture that pushes you to grow mentally, physically, and musically",
      "Lifelong connections and network building",
    ],
  },
]

const auditionAreas = [
  { label: "Brass", icon: Music2 },
  { label: "Woodwinds", icon: Wind },
  { label: "Percussion", icon: Drum },
  { label: "Color Guard", icon: Flag },
  { label: "Dance Line", icon: Mic2 },
]

export default function FineArtsPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Band & Fine Arts"
          subtitle="Academic Departments"
          description="Preparing students for careers in music performance and the music industry — and home of the Stampede of Sound."
        />

        {/* Academic department overview */}
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Department Mission</h2>
            <p>
              The Department of Fine Arts provides instruction in music business management for entry into the music
              industry. The Fine Arts entrepreneurship center is an innovative program that provides students with a
              unique opportunity to learn about the music industry. Students will gain knowledge in the areas of music
              production, music publishing, music marketing, and music business management.
            </p>
            <h2>Degree Programs</h2>
            <ul>
              <li>
                <strong>Bachelor of Arts in Music Performance (BA)</strong>
              </li>
              <li>
                <strong>Associate of Arts in Music Business (AA)</strong>
              </li>
            </ul>
            <h2>Ensembles &amp; Performance Opportunities</h2>
            <p>
              Students participate in the College Choir, the Stampede of Sound marching band, and various ensemble
              groups. Performance opportunities include campus events, community engagements, and annual concerts.
            </p>
          </div>
        </SectionWrapper>

        {/* Stampede of Sound hero band */}
        <section className="relative overflow-hidden bg-[#3d1a5c] text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              Arkansas Baptist College
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl text-balance">
              The Stampede of Sound
            </h2>
            <p className="mt-4 text-xl font-semibold text-white/90 sm:text-2xl">
              More Than a Band. It&apos;s a Movement.
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
              Welcome to the Stampede of Sound—where precision meets power, and passion turns into performance. We
              don&apos;t just play music… we create an experience. From the first step to the final note, every member
              of the Stampede represents excellence, energy, and execution at the highest level.
            </p>
            <div className="mt-8 space-y-1 text-lg font-medium text-white">
              <p>This is where sound becomes spirit.</p>
              <p>This is where discipline becomes identity.</p>
              <p>This is where YOU become part of something greater.</p>
            </div>
            <div className="mt-10">
              <Link
                href="https://www.tiktok.com/@sos_theherd?_r=1&_t=ZP-94wBziLKxkV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#3d1a5c] transition-colors hover:bg-white/90"
              >
                Follow on TikTok
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Foundation */}
        <SectionWrapper variant="muted">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeader title="Our Foundation" subtitle="Purpose & Potential" align="center" />
            <blockquote className="border-l-4 border-[#3d1a5c] pl-6 text-left">
              <p className="font-serif text-2xl font-medium italic text-foreground text-balance">
                &ldquo;For I know the plans I have for you,&rdquo; declares the Lord…
              </p>
              <footer className="mt-3 text-sm font-semibold uppercase tracking-widest text-[#3d1a5c]/70">
                Jeremiah 29:11
              </footer>
            </blockquote>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              We believe every student who joins this program has purpose, potential, and a path to greatness. Through
              structure, accountability, and opportunity, we help you unlock it.
            </p>
          </div>
        </SectionWrapper>

        {/* Director of Bands */}
        <SectionWrapper>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#3d1a5c]/70">Director of Bands</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground sm:text-4xl">Cedric Todd</h2>
            </div>
            <div className="flex min-h-40 items-center justify-center rounded-lg border border-dashed border-border bg-muted/40 p-10 text-center">
              <p className="font-serif text-2xl font-semibold text-muted-foreground">Coming Soon</p>
            </div>
          </div>
        </SectionWrapper>

        {/* Philosophy / Formula */}
        <SectionWrapper variant="muted">
          <SectionHeader
            title="Our Formula for Success"
            subtitle="Philosophy & Approach"
            description="Todd's leadership is built on a clear and proven standard. This isn't just something we say—it's how we operate daily."
            align="center"
          />
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-serif text-2xl font-bold text-[#3d1a5c] sm:text-3xl">
              Discipline + Focus + Action = SUCCESS
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {formula.map((item) => (
              <div
                key={item.word}
                className="rounded-lg border border-border bg-background p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#3d1a5c]/10">
                  <item.icon className="h-6 w-6 text-[#3d1a5c]" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-foreground">{item.word}</h3>
                <p className="mt-1 text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* The Stampede Experience */}
        <SectionWrapper>
          <SectionHeader title="The Stampede Experience" subtitle="What You'll Be Part Of" align="center" />
          <div className="grid gap-8 lg:grid-cols-3">
            {experience.map((block) => (
              <div key={block.title} className="rounded-lg border border-border bg-background p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3d1a5c]/10">
                  <block.icon className="h-6 w-6 text-[#3d1a5c]" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-foreground">{block.title}</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3d1a5c]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Join the movement / Auditions */}
        <SectionWrapper variant="muted">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeader title="Join the Movement" subtitle="Recruiting Now" />
              <p className="text-lg leading-relaxed text-muted-foreground">
                We are actively recruiting musicians, dancers, and performers who are ready to take the next step.
              </p>
              <h3 className="mt-8 font-serif text-xl font-bold text-foreground">Who We&apos;re Looking For</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {["High school seniors", "Transfer students", "Driven individuals ready to grow"].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3d1a5c]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground">Audition Areas</h3>
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {auditionAreas.map((area) => (
                  <div
                    key={area.label}
                    className="flex flex-col items-center gap-3 rounded-lg border border-border bg-background p-6 text-center shadow-sm"
                  >
                    <area.icon className="h-7 w-7 text-[#3d1a5c]" aria-hidden="true" />
                    <span className="text-sm font-semibold text-foreground">{area.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* STAMPede mentality */}
        <section className="bg-[#3d1a5c] text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">STAMPede Mentality</p>
            <div className="mt-6 space-y-1 font-serif text-3xl font-bold sm:text-4xl">
              <p>We don&apos;t wait.</p>
              <p>We don&apos;t hesitate.</p>
              <p>We execute.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Contact</h2>
            <p>
              Phone: <a href="tel:5014201200">501-420-1200</a>
              <br />
              Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a>
            </p>
          </div>
        </SectionWrapper>

        <CTABand
          title="Become the Legacy"
          description="Follow the movement. Watch the energy. Join a community that celebrates artistic excellence and faith-based learning."
          primaryLabel="Apply Now"
          primaryHref="/enrollment/apply"
          secondaryLabel="View Academic Catalog"
          secondaryHref="/academics/academic-catalog"
        />
      </main>
    </div>
  )
}
