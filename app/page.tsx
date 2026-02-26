import { HeroSection } from "@/components/hero-section"
import { QuickLinks } from "@/components/quick-links"
import { ExcellenceSection } from "@/components/excellence-section"
import { ProgramsSection } from "@/components/programs-section"
import { CampusLifeSection } from "@/components/campus-life-section"
import { GiveSection } from "@/components/give-section"
import { BuffaloRadioSection } from "@/components/buffalo-radio-section"
import { NewsSection } from "@/components/news-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <HeroSection />
        <QuickLinks />
        <ExcellenceSection />
        <ProgramsSection />
        <CampusLifeSection />
        <GiveSection />
        <BuffaloRadioSection />
        <NewsSection />
      </main>
    </div>
  )
}
