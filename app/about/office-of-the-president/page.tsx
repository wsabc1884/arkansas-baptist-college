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
  presidentName: 'Mr. William L. "Bill" Walker, Jr.',
  presidentTitle: "President",
  presidentInitials: "BW",
  bioParagraphs: [
    'William "Bill" L. Walker, Jr. is a proven leader in both business and public service with decades of experience shaping education, workforce development, and economic growth in Arkansas.',
    "Mr. Walker served as a State Representative, a State Senator, and the Director of the Arkansas Department of Career Education, managing a $120 million budget and leading statewide programs in career and technical education. Under his leadership, Arkansas became a national leader in GED success rates and launched innovative programs like the Microsoft Academy.",
    "In addition to his public service, Bill was the former Chair of the Little Rock Airport Commission for five years, helping to guide a key economic engine in the city with a budget of over $100 million. He's also a successful entrepreneur, serving as President of Power Group Enterprises, which manages several restaurants in Little Rock area — and operating Premier Funeral Home, a family business that has served the community for over 25 years.",
    "In Higher Education Bill has served on the Board of Trustees for over 8 years, in which he held such positions as Finance Chair and Chairman of the Board. Now serving as President of Arkansas Baptist College, Bill continues his lifelong mission to help young people build skills and access opportunities for a brighter future and success.",
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
            <div className="lg:col-span-2 flex items-start justify-center">
              <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-br from-[#3d1a5c] to-[#5a2d82] p-6 shadow-xl">
                <div className="h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/images/president.png"
                    alt={`${name}, ${title} of Arkansas Baptist College`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover object-center"
                    priority
                  />
                </div>
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
