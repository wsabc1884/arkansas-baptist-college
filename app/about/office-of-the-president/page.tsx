import { PageHero } from "@/components/page-hero"
import { CTABand } from "@/components/cta-band"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { StatsRow } from "@/components/stats-row"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin, Quote } from "lucide-react"
import { sanityFetch } from "@/sanity/lib/live"
import { PRESIDENT_PAGE_QUERY } from "@/lib/queries"
import type { PresidentPage } from "@/lib/types"

export const metadata = {
  title: "Office of the President | Arkansas Baptist College",
  description: "Learn about the leadership of Arkansas Baptist College and the Office of the President.",
}

// ── Hardcoded fallbacks ────────────────────────────────────────
const defaults = {
  presidentName: "Dr. George Hertz",
  presidentTitle: "Interim President",
  presidentInitials: "GH",
  bioParagraphs: [
    "Dr. George Hertz assumed the role of Interim President of Arkansas Baptist College in April 2025. As interim president, Dr. Hertz is committed to continuing the college\u2019s mission of providing quality education rooted in Christian principles.",
    "Under his leadership, Arkansas Baptist College continues its tradition of serving as the only Baptist Historically Black College or University west of the Mississippi River, providing accessible education to students from all backgrounds.",
    "Dr. Hertz is focused on strengthening academic programs, supporting student success, and furthering the college\u2019s vision of positively influencing the community, state, and nation.",
  ],
  quote:
    "Arkansas Baptist College remains committed to its founding mission of Truth and Light, preparing students to lead and serve with excellence.",
  contactEmail: "president@arkansasbaptist.edu",
  contactPhone: "(501) 420-1200",
  contactAddress: "1600 Dr. Martin Luther King Jr. Drive, Little Rock, AR 72202",
  commitmentHeading: "The President\u2019s Commitment",
  commitmentBody:
    "The Office of the President is dedicated to advancing the mission of Arkansas Baptist College by providing strategic leadership, fostering academic excellence, strengthening community partnerships, and ensuring the college remains a beacon of hope and opportunity.",
  commitmentPillars: [
    { title: "Academic Excellence", description: "Ensuring quality education and continuous improvement" },
    { title: "Student Success", description: "Supporting students in achieving their goals" },
    { title: "Community Impact", description: "Strengthening relationships with Little Rock and beyond" },
  ],
} satisfies PresidentPage

export default async function OfficeOfThePresidentPage() {
  let data: PresidentPage | null = null
  try {
    const result = await sanityFetch({ query: PRESIDENT_PAGE_QUERY })
    data = result.data ?? null
  } catch {
    // Sanity unreachable -- use fallbacks
  }

  // Merge: Sanity values win, fall back to defaults for anything missing
  const name = data?.presidentName || defaults.presidentName
  const title = data?.presidentTitle || defaults.presidentTitle
  const initials = data?.presidentInitials || defaults.presidentInitials
  const bio = data?.bioParagraphs?.length ? data.bioParagraphs : defaults.bioParagraphs
  const quote = data?.quote || defaults.quote
  const email = data?.contactEmail || defaults.contactEmail
  const phone = data?.contactPhone || defaults.contactPhone
  const address = data?.contactAddress || defaults.contactAddress
  const commitHeading = data?.commitmentHeading || defaults.commitmentHeading
  const commitBody = data?.commitmentBody || defaults.commitmentBody
  const pillars = data?.commitmentPillars?.length ? data.commitmentPillars : defaults.commitmentPillars

  return (
    <div className="min-h-screen bg-background">
      <main id="main-content">
        <PageHero
          title="Office of the President"
          subtitle="About Us"
          description="Leading Arkansas Baptist College with faith, vision, and dedication to academic excellence."
          breadcrumbs={[
            { label: "About Us", href: "/about/history" },
            { label: "Office of the President", href: "/about/office-of-the-president" },
          ]}
        />

        {/* President Section */}
        <SectionWrapper>
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="/images/president.png"
                  alt={`${name}, ${title} of Arkansas Baptist College`}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#3d1a5c]/70">
                {title}
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                {name}
              </h2>
              <p className="mt-2 text-lg text-[#3d1a5c] font-medium">
                {title}, Arkansas Baptist College
              </p>

              <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
                {bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 rounded-lg border-l-4 border-[#3d1a5c] bg-muted p-6">
                <Quote className="h-8 w-8 text-[#3d1a5c]/30" aria-hidden="true" />
                <p className="mt-4 font-serif text-xl italic text-foreground">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>

              <address className="mt-8 space-y-3 not-italic">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Contact the President&apos;s Office
                </h3>
                <div className="flex items-center gap-3 text-foreground">
                  <Mail className="h-5 w-5 text-[#3d1a5c]" aria-hidden="true" />
                  <a href={`mailto:${email}`} className="hover:underline">{email}</a>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Phone className="h-5 w-5 text-[#3d1a5c]" aria-hidden="true" />
                  <a href={`tel:${phone.replace(/\D/g, "")}`} className="hover:underline">{phone}</a>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin className="h-5 w-5 text-[#3d1a5c]" aria-hidden="true" />
                  <span>{address}</span>
                </div>
              </address>
            </div>
          </div>
        </SectionWrapper>

        {/* Presidential Legacy Stats */}
        <SectionWrapper variant="muted">
          <SectionHeader
            title="A History of Distinguished Leadership"
            subtitle="Our Legacy"
            description="Since 1884, Arkansas Baptist College has been led by visionary presidents committed to advancing education and faith."
            align="center"
          />
          <StatsRow
            stats={[
              { value: "140+", label: "Years of Leadership" },
              { value: "17+", label: "Presidents Served" },
              { value: "1884", label: "Founded" },
              { value: "Only", label: "Baptist HBCU West of Mississippi" },
            ]}
          />
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-[#3d1a5c] text-[#3d1a5c] hover:bg-[#3d1a5c] hover:text-white bg-transparent" asChild>
              <Link href="/about/history">
                Explore Our Full History
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </SectionWrapper>

        {/* Commitment Section */}
        <SectionWrapper variant="purple">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              {commitHeading}
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              {commitBody}
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {pillars.map((item) => (
                <div key={item.title} className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Connect With Us"
          description="Learn more about Arkansas Baptist College and our leadership."
          primaryAction={{ label: "Apply Now", href: "/enrollment/apply" }}
          secondaryAction={{ label: "Schedule a Visit", href: "/enrollment/campus-tour" }}
          variant="light"
        />
      </main>
    </div>
  )
}
