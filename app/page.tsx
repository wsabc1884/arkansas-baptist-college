import { HeroSection } from "@/components/hero-section"
import { QuickLinks } from "@/components/quick-links"
import { ExcellenceSection } from "@/components/excellence-section"
import { ProgramsSection } from "@/components/programs-section"
import { CampusLifeSection } from "@/components/campus-life-section"
import { GiveSection } from "@/components/give-section"
import { BuffaloRadioSection } from "@/components/buffalo-radio-section"
import { NewsSection } from "@/components/news-section"
import { sanityFetch } from "@/sanity/lib/live"
import { ALL_NEWS_QUERY, SITE_SETTINGS_QUERY } from "@/lib/queries"

export default async function HomePage() {
  let articles = null
  let siteSettings = null
  try {
    const [newsResult, settingsResult] = await Promise.all([
      sanityFetch({ query: ALL_NEWS_QUERY }),
      sanityFetch({ query: SITE_SETTINGS_QUERY }),
    ])
    articles = newsResult.data
    siteSettings = settingsResult.data
  } catch {
    // Sanity unreachable -- components will use fallback data
  }

  return (
    <div className="min-h-screen">
      <main id="main-content">
        <HeroSection />
        <QuickLinks />
        <ExcellenceSection siteSettings={siteSettings} />
        <ProgramsSection />
        <CampusLifeSection />
        <GiveSection siteSettings={siteSettings} />
        <BuffaloRadioSection />
        <NewsSection articles={articles} />
      </main>
    </div>
  )
}
