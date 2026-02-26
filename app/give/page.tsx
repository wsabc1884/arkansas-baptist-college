import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Heart, Building2, GraduationCap, Users, Phone, Mail, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Ways to Give | Arkansas Baptist College",
  description:
    "Support the mission of Arkansas Baptist College through scholarships, the annual fund, corporate gifts, and planned giving. Your generosity changes lives.",
}

const scholarships = [
  {
    name: "Dr. Dorris Regina Robinson Gardner Memorial Scholarship",
    image: "/images/scholarship-gardner.png",
    alt: "Dr. Dorris Regina Robinson Gardner Memorial Scholarship",
    description:
      "This scholarship was established in loving memory of Dr. Dorris Regina Robinson Gardner, a dedicated educator and servant leader who devoted her career to the advancement of students at Arkansas Baptist College. Dr. Gardner\u2019s passion for education and her unwavering commitment to the college\u2019s mission continue to inspire the community. Contributions to this fund support students who embody her spirit of excellence, service, and faith.",
    donateUrl:
      "https://interland3.donorperfect.net/weblink/WebLink.aspx?name=E146389&id=21",
  },
  {
    name: "Rev. James Allen, Sr. Endowed Memorial Scholarship",
    image: "/images/scholarship-allen.png",
    alt: "Rev. James Allen, Sr. Memorial Scholarship",
    description:
      "The Rev. James Allen, Sr. Endowed Memorial Scholarship Fund was created to honor the legacy of Reverend James Allen, Sr., a beloved pastor, community leader, and champion of Christian education. Rev. Allen\u2019s lifelong dedication to the Baptist faith and his support of Arkansas Baptist College continue to bless students who demonstrate a commitment to ministry, service, and academic achievement.",
    donateUrl:
      "https://wl.donorperfect.net/weblink/weblink.aspx?name=E146389&id=11",
  },
]

export default function GivePage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
      <PageHero
        title="Ways to Give"
        subtitle="Your generosity fuels the mission of Arkansas Baptist College and transforms the lives of our students."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ways to Give" },
        ]}
      />

      {/* Annual Fund / General Giving */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <Heart className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Support Arkansas Baptist College
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Since 1884, Arkansas Baptist College has been a beacon of hope and opportunity. As the
            only historically black Baptist college west of the Mississippi River, your support
            helps us continue our legacy of providing transformative education to students who will
            become the leaders of tomorrow. Every gift, no matter the size, makes a difference.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold" asChild>
              <a
                href="https://wl.donorperfect.net/weblink/weblink.aspx?name=E146389&id=13"
                target="_blank"
                rel="noopener noreferrer"
              >
                Make a Gift Online
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* How Your Gift Helps */}
      <SectionWrapper className="bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Where Your Gift Makes an Impact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Choose the area that matters most to you.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: GraduationCap,
                title: "Scholarships",
                text: "Help deserving students access a quality education by contributing to one of our named memorial scholarship funds.",
              },
              {
                icon: Building2,
                title: "Capital Improvements",
                text: "Support the renovation and expansion of campus facilities to create a modern learning environment.",
              },
              {
                icon: Users,
                title: "Academic Programs",
                text: "Fund innovative academic programs, technology upgrades, and faculty development to strengthen our offerings.",
              },
              {
                icon: Heart,
                title: "Annual Fund",
                text: "Make an unrestricted gift to the Annual Fund to support the area of greatest need at the college.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Memorial Scholarship Funds */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Memorial Scholarship Funds
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Honor the legacy of distinguished members of the Arkansas Baptist College community by
            contributing to one of our named memorial scholarship funds.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-16">
          {scholarships.map((scholarship, i) => (
            <div key={scholarship.name}>
              {i > 0 && (
                <div className="mb-16 border-t border-border" aria-hidden="true" />
              )}
              <div
                className={`flex flex-col items-center gap-8 lg:gap-12 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex shrink-0 flex-col items-center">
                  <Image
                    src={scholarship.image}
                    alt={scholarship.alt}
                    width={300}
                    height={340}
                    className="rounded-lg"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {scholarship.name}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {scholarship.description}
                  </p>
                  <div className="mt-6">
                    <Button className="bg-primary hover:bg-primary/90 font-semibold" asChild>
                      <a
                        href={scholarship.donateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Donate to {scholarship.name.split(" ")[0] === "Dr." ? "Gardner" : "Allen"}{" "}
                        Scholarship
                        <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Other Ways to Give */}
      <SectionWrapper className="bg-muted/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Other Ways to Give
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            In addition to online giving, there are several other ways to support the college.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {/* By Mail */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-foreground">Give by Mail</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Make checks payable to Arkansas Baptist College and mail to:
              </p>
              <address className="mt-3 text-sm not-italic text-foreground leading-relaxed">
                Arkansas Baptist College<br />
                Office of Institutional Advancement<br />
                1600 Dr. Martin Luther King Jr. Drive<br />
                Little Rock, AR 72202
              </address>
            </div>

            {/* By Phone */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                Give by Phone
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                To make a gift by phone or to learn more about giving opportunities, please contact
                the Office of Institutional Advancement.
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                <a
                  href="tel:5013702100"
                  className="hover:text-primary transition-colors"
                >
                  (501) 370-2100
                </a>
              </p>
            </div>

            {/* Corporate & Foundation Gifts */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Building2 className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                Corporate & Foundation Gifts
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Corporations and foundations can support ABC through matching gift programs,
                sponsorships, grants, and in-kind donations. Contact us to discuss partnership
                opportunities.
              </p>
            </div>

            {/* Planned Giving */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                Planned & Estate Giving
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Include Arkansas Baptist College in your estate plans through bequests, charitable
                remainder trusts, life insurance designations, or retirement plan beneficiary
                designations.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTABand
        heading="Every Gift Makes a Difference"
        description="Your generosity helps Arkansas Baptist College continue its 140-year tradition of transforming lives through faith-based education."
        primaryAction={{
          label: "Give Now",
          href: "https://wl.donorperfect.net/weblink/weblink.aspx?name=E146389&id=13",
        }}
        secondaryAction={{
          label: "Contact Advancement",
          href: "/about/institutional-advancement",
        }}
      />
      </main>
    </div>
  )
}
