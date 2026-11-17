import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CalendarDays } from "lucide-react"

export const metadata = {
  title: "Special Announcements | Arkansas Baptist College",
  description:
    "Official news, statements, and special announcements from Arkansas Baptist College.",
}

export default function SpecialAnnouncementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main id="main-content">
        <PageHero
          title="Special Announcements"
          subtitle="About Us"
          description="Official news and statements from Arkansas Baptist College."
          breadcrumbs={[
            { label: "About Us", href: "/about/history" },
            { label: "Special Announcements", href: "/about/special-announcements" },
          ]}
        />

        <SectionWrapper>
          <div className="mx-auto flex max-w-3xl flex-col gap-10">
            <article
              id="football-leadership-change"
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm"
            >
              <header className="flex flex-col gap-3 bg-[#3d1a5c] px-6 py-6 text-white sm:px-8">
                <p className="flex items-center gap-2 text-sm text-white/80">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  <span>
                    Posted <time dateTime="2026-11-10">November 10, 2026</time>
                  </span>
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#e8962e]">
                  Buffalo Football
                </p>
                <h2 className="font-serif text-2xl font-bold leading-tight text-balance sm:text-3xl">
                  Statement Regarding Change of Leadership
                </h2>
              </header>
              <div className="h-1.5 w-full bg-[#e8962e]" aria-hidden="true" />

              <div className="flex flex-col gap-5 px-6 py-8 leading-relaxed text-card-foreground sm:px-8">
                <p>
                  The Arkansas Baptist College football team concluded the 2026 football season
                  fielding its most competitive team since joining the National Association of
                  Intercollegiate Athletics (NAIA). The future is extremely bright. After birthing
                  and leading the football program since 2007, Coach Richard Wilson has passed the
                  baton to Ashdone Bailey, an Arkadelphia native, former Buffalo and the
                  program&apos;s current Associate Head Football Coach.
                </p>

                <p>
                  Coach Wilson will assume additional administrative and teaching duties for the
                  College while also mentoring Coach Bailey who takes over the daily operations of
                  leading the football program.
                </p>

                <blockquote className="flex flex-col gap-2 rounded-r-md border-l-4 border-[#3d1a5c] bg-muted px-5 py-4">
                  <p className="italic">
                    &ldquo;Coach Bailey has been the rock of this program for several
                    years...there is nobody more prepared for the daily challenges associated with
                    leading this football program than him. I am certain he will elevate the
                    program sooner than later. He is prepared for this opportunity and I am glad to
                    continue this journey with him.&rdquo;
                  </p>
                  <cite className="text-sm font-semibold not-italic">
                    &mdash; Coach Richard Wilson
                  </cite>
                </blockquote>

                <blockquote className="flex flex-col gap-2 rounded-r-md border-l-4 border-[#3d1a5c] bg-muted px-5 py-4">
                  <p className="italic">
                    &ldquo;This is a dream come true for me. Where God guides, He provides. We want
                    to develop quality football players and raise young men who will aspire to
                    pursue and live out their Godly purpose by committing to join the Buffalo
                    Family as I did when graduating high school. The best is yet to come and I am
                    totally committed to making this opportunity count.&rdquo;
                  </p>
                  <cite className="text-sm font-semibold not-italic">
                    &mdash; Coach Ashdone Bailey
                  </cite>
                </blockquote>

                <p>
                  Buffalo Family, let&apos;s get on Board with Bailey as he takes the baton from
                  Coach Wilson and navigates the next steps in bringing a championship-caliber
                  football team to 1600 Dr. Martin Luther King Drive.
                </p>

                <p className="font-serif text-lg font-semibold text-[#3d1a5c]">
                  The best is yet to come. Buff Up!
                </p>
              </div>
            </article>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
