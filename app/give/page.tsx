import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Heart, Building2, GraduationCap, Users, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Ways to Give | Arkansas Baptist College",
  description: "Support the mission of Arkansas Baptist College through your generous gift. Explore ways to give including online donations, planned giving, corporate partnerships, and more.",
}

const givingOptions = [
  {
    title: "Make a Gift Online",
    description: "Make a secure one-time or recurring gift online. Your donation directly supports student scholarships, academic programs, and campus improvements.",
    icon: Heart,
    cta: "Give Now",
    href: "https://www.arkansasbaptist.edu/waystogive/",
    external: true,
  },
  {
    title: "Corporate & Foundation Giving",
    description: "Partner with Arkansas Baptist College through corporate sponsorships, matching gifts, and foundation grants that create lasting impact for our students and community.",
    icon: Building2,
    cta: "Learn More",
    href: "/about/institutional-advancement",
    external: false,
  },
  {
    title: "Scholarship Support",
    description: "Invest in the future by funding scholarships for deserving students. Named scholarships are available for gifts of $25,000 or more, creating a lasting legacy.",
    icon: GraduationCap,
    cta: "Explore Scholarships",
    href: "/enrollment/scholarships",
    external: false,
  },
  {
    title: "Planned & Legacy Giving",
    description: "Include Arkansas Baptist College in your estate plans through bequests, charitable trusts, life insurance policies, or retirement plan designations.",
    icon: Users,
    cta: "Contact Us",
    href: "#contact",
    external: false,
  },
]

const impactAreas = [
  { label: "Student Scholarships", description: "Help students afford tuition and focus on their education" },
  { label: "Academic Programs", description: "Support new courses, faculty development, and learning resources" },
  { label: "Campus Improvements", description: "Fund renovations, technology upgrades, and new facilities" },
  { label: "Athletics", description: "Support our Buffaloes student-athletes and athletic programs" },
  { label: "Community Outreach", description: "Strengthen the college's service to the Little Rock community" },
  { label: "Technology & Innovation", description: "Equip students with modern tools for the digital economy" },
]

export default function GivePage() {
  return (
    <main id="main-content">
      <PageHero
        title="Ways to Give"
        subtitle="Your generosity fuels the mission of Arkansas Baptist College and transforms the lives of our students."
      />

      {/* Why Give Section */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Invest in Truth and Light
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Since 1884, Arkansas Baptist College has been a beacon of hope and opportunity. As the only
            historically black Baptist college west of the Mississippi River, your support helps us continue
            our legacy of providing transformative education to students who will become the leaders of tomorrow.
            Every gift, no matter the size, makes a difference.
          </p>
        </div>
      </SectionWrapper>

      {/* Giving Options */}
      <SectionWrapper className="bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            How You Can Help
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            There are many meaningful ways to support Arkansas Baptist College and its students.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {givingOptions.map((option) => (
              <Card key={option.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <option.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="mt-4 font-serif text-xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="flex-1 text-muted-foreground leading-relaxed">{option.description}</p>
                  <div className="mt-6">
                    {option.external ? (
                      <Button asChild className="bg-primary hover:bg-primary/90">
                        <a href={option.href} target="_blank" rel="noopener noreferrer">
                          {option.cta}
                        </a>
                      </Button>
                    ) : (
                      <Button asChild variant="outline">
                        <Link href={option.href}>{option.cta}</Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Impact Areas */}
      <SectionWrapper>
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Where Your Gift Makes an Impact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            You can direct your gift to the area that matters most to you.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {impactAreas.map((area) => (
              <div key={area.label} className="rounded-lg border bg-card p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground">{area.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Other Ways to Give */}
      <SectionWrapper className="bg-muted/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Other Ways to Give
          </h2>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-serif text-lg font-semibold text-foreground">Give by Mail</h3>
              <p className="mt-2">
                Send your tax-deductible contribution by check made payable to Arkansas Baptist College:
              </p>
              <address className="mt-3 flex items-start gap-2 not-italic text-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  Office of Institutional Advancement<br />
                  Arkansas Baptist College<br />
                  1600 Dr. Martin Luther King Jr. Drive<br />
                  Little Rock, AR 72202
                </span>
              </address>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-serif text-lg font-semibold text-foreground">Give by Phone</h3>
              <p className="mt-2">
                Call our Office of Institutional Advancement to make a gift over the phone or discuss your giving options.
              </p>
              <p className="mt-3 flex items-center gap-2 text-foreground">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                <a href="tel:5014201200" className="font-medium text-primary hover:underline">(501) 420-1200</a>
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-serif text-lg font-semibold text-foreground">Gifts of Stock or Securities</h3>
              <p className="mt-2">
                Gifts of appreciated stocks and securities may offer you additional tax advantages. Contact the
                Office of Institutional Advancement for transfer instructions.
              </p>
              <p className="mt-3 flex items-center gap-2 text-foreground">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <a href="mailto:advancement@arkansasbaptist.edu" className="font-medium text-primary hover:underline">
                  advancement@arkansasbaptist.edu
                </a>
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <div id="contact">
        <CTABand
          heading="Ready to Make a Difference?"
          description="Contact our Office of Institutional Advancement to learn more about giving opportunities and how your support creates lasting impact."
          primaryAction={{ label: "Contact Us", href: "/about/institutional-advancement" }}
          secondaryAction={{ label: "Call (501) 420-1200", href: "tel:5014201200" }}
        />
      </div>
    </main>
  )
}
