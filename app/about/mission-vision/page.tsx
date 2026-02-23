import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { CTABand } from "@/components/cta-band"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { FeatureGrid } from "@/components/feature-grid"
import { StatsRow } from "@/components/stats-row"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Heart, Users, Lightbulb, GraduationCap, Globe } from "lucide-react"

export const metadata = {
  title: "Mission & Vision | Arkansas Baptist College",
  description: "Discover the mission, vision, and core values of Arkansas Baptist College - Truth and Light since 1884.",
}

const coreValues = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "We are committed to providing rigorous academic programs that prepare students for success in their careers and personal lives.",
  },
  {
    icon: Heart,
    title: "Christian Principles",
    description: "We integrate faith-based values into every aspect of education, nurturing spiritual growth alongside intellectual development.",
  },
  {
    icon: Users,
    title: "Community Service",
    description: "We encourage students to give back to their communities and become agents of positive change in society.",
  },
  {
    icon: Lightbulb,
    title: "Leadership Development",
    description: "Through the African American Leadership Institute, we cultivate the next generation of leaders equipped to transform communities.",
  },
  {
    icon: GraduationCap,
    title: "Accessible Education",
    description: "We provide quality education without charging out-of-state tuition, ensuring higher education is accessible to all.",
  },
  {
    icon: Globe,
    title: "Social Responsibility",
    description: "We address issues having a detrimental effect on society through scholarship and Christian principles.",
  },
]

export default function MissionVisionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <PageHero
          title="Mission & Vision"
          subtitle="About Us"
          description="Guided by faith, driven by excellence, committed to transforming lives and communities."
          breadcrumbs={[
            { label: "About Us", href: "#" },
            { label: "Mission & Vision", href: "/about/mission-vision" },
          ]}
        />

        {/* Mission Statement */}
        <SectionWrapper>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#3d1a5c]/70">
                Our Mission
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Truth and <span className="text-[#3d1a5c]">Light</span>
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Arkansas Baptist College is dedicated to providing quality education that
                  transforms lives and empowers students to become leaders in their
                  communities and beyond.
                </p>
                <p>
                  Founded in 1884 as the Minister&apos;s Institute, our primary objective was to raise
                  the educational level of the African American ministry while valuing the
                  teaching principles of Jesus Christ.
                </p>
                <p>
                  Today, our mission extends beyond ministerial training to serve as a
                  comprehensive liberal arts institution that prepares students from all
                  backgrounds for success in their careers and personal lives.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-[#3d1a5c] p-8 md:p-12">
              <p className="font-serif text-2xl font-medium italic text-white leading-relaxed">
                &ldquo;Our programs combine rigorous academics with spiritual development,
                preparing students for success in their careers and personal lives.&rdquo;
              </p>
              <div className="mt-6 h-1 w-16 bg-white/30" />
            </div>
          </div>
        </SectionWrapper>

        {/* Vision Statement */}
        <SectionWrapper variant="muted">
          <SectionHeader
            title="Positively Influencing Our Community, State, and Nation"
            subtitle="Our Vision"
            description="To see our community, state, and nation positively influenced through the integration of academic scholarship and Christian principles to address issues having a detrimental effect on society."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Users, title: "Community", desc: "Serving the Little Rock community and beyond through education and outreach" },
              { icon: BookOpen, title: "Scholarship", desc: "Pursuing academic excellence rooted in Christian principles" },
              { icon: Globe, title: "Transformation", desc: "Addressing societal issues and creating positive change" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-card p-6 shadow-sm text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#3d1a5c]/10">
                  <item.icon className="h-8 w-8 text-[#3d1a5c]" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-card-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Core Values */}
        <SectionWrapper>
          <SectionHeader
            title="Core Values That Guide Us"
            subtitle="Our Values"
            description="These principles form the foundation of everything we do at Arkansas Baptist College."
            align="center"
          />
          <FeatureGrid items={coreValues} columns={3} variant="card" />
        </SectionWrapper>

        {/* Faith and Education */}
        <SectionWrapper variant="purple">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
                Faith and Education, United
              </h2>
              <div className="mt-6 space-y-4 text-white/80 leading-relaxed">
                <p>
                  At Arkansas Baptist College, we believe that faith and education are not
                  separate pursuits but complementary paths to personal growth and societal
                  contribution.
                </p>
                <p>
                  As the only Baptist HBCU west of the Mississippi River, we hold a unique
                  position in American higher education. Our heritage as an institution
                  founded to educate African American ministers has evolved into a
                  comprehensive mission that serves students from all backgrounds.
                </p>
                <p>
                  Through programs like the African American Leadership Institute, we
                  provide students opportunities to develop leadership skills and practice
                  these skills within the urban Little Rock community.
                </p>
              </div>
            </div>
            <StatsRow
              stats={[
                { value: "1884", label: "Year Founded" },
                { value: "Only", label: "Baptist HBCU West of the Mississippi" },
                { value: "5", label: "Bachelor's Degree Programs" },
                { value: "3", label: "Associate's Degree Programs" },
              ]}
              variant="purple"
            />
          </div>
        </SectionWrapper>

        {/* Voice for the Underrepresented */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border-l-4 border-[#3d1a5c] bg-muted p-8 md:p-12">
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                A Voice for the Underrepresented
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                In its quest to be a voice for the underrepresented student, Arkansas Baptist
                College provides a quality education without charging out-of-state tuition fees.
                We believe that access to higher education should not be limited by geography
                or financial circumstances.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our academic programs are designed to meet the needs of the Little Rock
                community we serve, while preparing students to make an impact wherever
                their journey takes them.
              </p>
              <div className="mt-8">
                <Button className="bg-[#3d1a5c] hover:bg-[#3d1a5c]/90 text-white" asChild>
                  <Link href="#">
                    Learn About Financial Aid
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Join Our Mission"
          description="Become part of a community dedicated to Truth and Light."
          primaryAction={{ label: "Apply Now", href: "#" }}
          secondaryAction={{ label: "Explore Our History", href: "/about/history" }}
        />
      </main>
      <Footer />
    </div>
  )
}
