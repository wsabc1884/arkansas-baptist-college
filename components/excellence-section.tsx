import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { SiteSettings } from "@/lib/types"

const defaultStats = [
  { value: "140+", label: "Years of Excellence", color: "purple" as const },
  { value: "15:1", label: "Student-Faculty Ratio", color: "light" as const },
  { value: "20+", label: "Degree Programs", color: "purple" as const },
  { value: "1884", label: "Founded in Little Rock", color: "light" as const },
]

export function ExcellenceSection({ siteSettings }: { siteSettings?: SiteSettings | null }) {
  const stats = [
    { value: siteSettings?.stat1Value ?? defaultStats[0].value, label: siteSettings?.stat1Label ?? defaultStats[0].label, color: "purple" as const },
    { value: siteSettings?.stat2Value ?? defaultStats[1].value, label: siteSettings?.stat2Label ?? defaultStats[1].label, color: "light" as const },
    { value: siteSettings?.stat3Value ?? defaultStats[2].value, label: siteSettings?.stat3Label ?? defaultStats[2].label, color: "purple" as const },
    { value: siteSettings?.stat4Value ?? defaultStats[3].value, label: siteSettings?.stat4Label ?? defaultStats[3].label, color: "light" as const },
  ]
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mb-16 lg:mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 sm:p-8 text-center transition-transform hover:scale-[1.02] ${
                stat.color === "purple"
                  ? "bg-[#3d1a5c] text-white"
                  : "bg-[#f0eef3] text-[#3d1a5c] border border-[#3d1a5c]/10"
              }`}
            >
              <p className="font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
                {stat.value}
              </p>
              <p className={`mt-2 text-sm sm:text-base ${
                stat.color === "purple" ? "text-white/90" : "text-[#3d1a5c]/70"
              }`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl text-[#3d1a5c]">
              More Than a College.
              <br />
              <span className="text-[#3d1a5c]/80">A Movement.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Founded in 1884, Arkansas Baptist College holds a singular distinction — it is the only historically Black Baptist institution of higher education west of the Mississippi River. For over 140 years, we have been a beacon of opportunity, justice, and transformation.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our mission is grounded in faith and driven by excellence. We cultivate scholars, community leaders, and moral exemplars who carry the spirit of our founding into every corner of the world.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="bg-[#3d1a5c] hover:bg-[#2d1346] text-white group"
                asChild
              >
                <Link href="/about/history">
                  Our History
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#3d1a5c] text-[#3d1a5c] hover:bg-[#3d1a5c] hover:text-white"
                asChild
              >
                <Link href="/about/mission-vision">Mission & Values</Link>
              </Button>
            </div>
          </div>

          {/* Right - Large Stat Highlight */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="text-center">
                <p className="font-serif text-8xl font-bold text-[#3d1a5c] sm:text-9xl lg:text-[10rem] leading-none">
                  140
                </p>
                <p className="mt-2 text-xl font-semibold text-[#3d1a5c]/70 uppercase tracking-widest">
                  Years Strong
                </p>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-[#3d1a5c]/5" />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#3d1a5c]/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
