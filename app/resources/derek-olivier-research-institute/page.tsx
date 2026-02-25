import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Derek Olivier Research Institute | Arkansas Baptist College",
  description:
    "The Derek Olivier Research Institute (DORI) for the Prevention of Gun Violence collects, analyzes, and tracks data trends to harness solutions for community safety.",
}

const newsArticles = [
  { title: "Little Rock Facing Another Year of Record High Homicides", href: "https://www.thv11.com/mobile/article/news/crime/little-rock-facing-another-year-of-record-high-homicides/91-48a9f794-7ac9-4387-abb6-ae4f344bc66a" },
  { title: "Little Rock Police, Educators and Community Members Meet to Discuss Crime", href: "https://www.fox16.com/crime/little-rock-police-educators-and-community-members-meet-to-discuss-crime-and-how-to-stop-it/" },
  { title: "Little Rock Educator Researching Ways to Prevent Crime in the City", href: "https://www.thv11.com/article/news/local/little-rock-educator-researching-ways-to-prevent-crime-in-the-city/91-cc64e915-ca6f-424c-a665-badb84843dd1" },
  { title: "Arkansas Baptist College Hopes Research Institute Reduces Crime", href: "https://katv.com/news/local/its-a-people-problem-arkansas-baptist-college-hopes-research-institute-reduces-crime" },
  { title: "DORI Remembrance Celebration", href: "https://todayscommunique.com/derek-olivier-research-institute-dori-at-arkansas-baptist-college-remembrance-celebration/" },
  { title: "People Honoring Arkansas Baptist College Student Killed in 2012", href: "https://www.fox16.com/news/local-news/people-honoring-arkansas-baptist-college-student-killed-in-2012/" },
  { title: "Weekend of Hope Event to Support Mothers Who Have Lost Children to Violence", href: "https://www.thv11.com/article/life/moms/mothers-day-weekend-of-hope-honors-those-who-have-lost-their-children-to-gun-violence/91-40a9eff8-033b-4f4f-aade-7a65582fa202" },
  { title: "Losing Their Children: LR City Director Hopes Project Reduces Youth Violence", href: "https://katv.com/news/local/losing-their-children-lr-city-director-hopes-project-to-reduce-youth-violence-passes" },
  { title: "Little Rock Families of Murder Victims Ask the City for Help Against Gun Violence", href: "https://katv.com/news/local/little-rock-families-of-murder-victims-ask-the-city-for-help-against-gun-violence" },
  { title: "Little Rock Mothers Speak Out Against Violent Crimes", href: "https://katv.com/news/local/little-rock-mothers-speak-out-against-violent-crimes-after-losing-their-own-children" },
]

export default function DORIPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero
          title="Derek Olivier Research Institute"
          subtitle="Resources"
          description="For the Prevention of Gun Violence"
          breadcrumbs={[
            { label: "Resources", href: "/resources/derek-olivier-research-institute" },
            { label: "DORI" },
          ]}
        />

        {/* Mission */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>DORI Mission Statement</h2>
            <p>
              The <strong>Derek Olivier Research Institute&apos;s (DORI)</strong> for the Prevention of Gun Violence collects, analyzes, and tracks data trends to violence to harness best practices and solutions for the prevention of violent behaviors detrimental to community safety.
            </p>

            <h2>Impact</h2>
            <p>
              The impact of DORI will have a substantial effect on the long-term identity of Arkansas Baptist College while maintaining our commitment to teaching excellence. DORI is not a program, but a research institute that assists and supports programs, centers, clubs, schools, academies, institutions, law enforcement, and more. This support comes in the form of data and research on why Black males are being killed by other Black males, and why they are the killing kings per capita for any ethnic group in the U.S. since 1950.
            </p>
          </div>
        </SectionWrapper>

        {/* About Derek Olivier */}
        <SectionWrapper className="bg-muted/30">
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>About Derek Olivier</h2>
            <p>
              Derek Joseph Olivier was an Arkansas Baptist Football player whose life was cut short by gunfire in September 2012. Derek was shot and killed not far from the Arkansas Baptist College campus while he was helping a friend change a tire. To date, no arrests have been made. Derek is survived by his father Joseph, mother Alma Marie; sister Felicia; brother Antoine; and a host of relatives and friends in his hometown Iberia, LA and around the country. Derek&apos;s loved ones refuse to allow his death to be in vain by simply resulting in yet another casualty of black-on-black crime.
            </p>
            <p>
              As such, the 13th President, Dr. Fitzgerald Hill (2006&ndash;2016) established the Derek Olivier Research Institute (DORI) for the Prevention of Gun Violence, formerly under the auspice of the Urban Community Leadership Program, as a means to study and remedy the problems that plague urban communities.
            </p>
          </div>
        </SectionWrapper>

        {/* Director */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border bg-card p-6 sm:p-8">
              <h2 className="font-serif text-xl font-bold text-foreground sm:text-2xl">Director</h2>
              <div className="mt-4">
                <h3 className="font-semibold text-foreground">Dr. Leonard Williams, Jr.</h3>
                <p className="mt-1 text-sm text-muted-foreground">Director, Derek Olivier Research Institute</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Office: <a href="tel:5014201312" className="text-primary hover:underline">501-420-1312</a>
                </p>
                <p className="text-sm text-muted-foreground">
                  Email: <a href="mailto:Leonard.Williams@arkansasbaptist.edu" className="text-primary hover:underline">Leonard.Williams@arkansasbaptist.edu</a>
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* News & Media */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">News Articles & Memorial Events</h2>
            <div className="mt-6 space-y-3">
              {newsArticles.map((article) => (
                <a
                  key={article.href}
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border bg-card p-4 transition-colors hover:border-primary"
                >
                  <ExternalLink className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{article.title}</span>
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="https://derekolivierresearchinstitute.godaddysites.com/impact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Visit the DORI Website for More Information
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Support DORI's Mission"
          description="Help fund research and community initiatives to prevent gun violence."
          primaryAction={{ label: "Give to ABC", href: "/give" }}
          secondaryAction={{ label: "Contact Dr. Williams", href: "mailto:Leonard.Williams@arkansasbaptist.edu" }}
        />
      </main>
      <Footer />
    </div>
  )
}
