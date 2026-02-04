import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
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
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#3d1a5c] py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full bg-[url('/images/hero-campus.jpg')] bg-cover bg-center" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d4a736]">
              About Us
            </p>
            <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Mission & Vision
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Guided by faith, driven by excellence, committed to transforming lives and communities.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-block rounded-full bg-[#d4a736]/20 px-4 py-2 text-sm font-semibold text-[#3d1a5c]">
                  Our Mission
                </div>
                <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  <span className="text-[#d4a736]">Truth</span> and{" "}
                  <span className="text-[#3d1a5c]">Light</span>
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    Arkansas Baptist College is dedicated to providing quality education that 
                    transforms lives and empowers students to become leaders in their 
                    communities and beyond.
                  </p>
                  <p>
                    Founded in 1884 as the Minister&apos;s Institute, our primary objective was to raise 
                    the educational level of the African American ministry while valuing the 
                    teaching principles of Jesus Christ. The college was committed to academic 
                    and cultural excellence in educating future African American ministers.
                  </p>
                  <p>
                    Today, our mission extends beyond ministerial training to serve as a 
                    comprehensive liberal arts institution that prepares students from all 
                    backgrounds for success in their careers and personal lives.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg bg-[#3d1a5c] p-8 md:p-12">
                  <p className="font-serif text-2xl font-medium italic text-white leading-relaxed">
                    &ldquo;Our programs combine rigorous academics with spiritual development, 
                    preparing students for success in their careers and personal lives.&rdquo;
                  </p>
                  <div className="mt-6 h-1 w-16 bg-[#d4a736]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-block rounded-full bg-[#3d1a5c]/10 px-4 py-2 text-sm font-semibold text-[#3d1a5c]">
                Our Vision
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
                Positively Influencing Our Community, State, and Nation
              </h2>
              <div className="mx-auto mt-8 max-w-3xl">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To see our community, state, and nation positively influenced through the 
                  integration of academic scholarship and Christian principles to address 
                  issues having a detrimental effect on society.
                </p>
              </div>
              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                <div className="rounded-lg bg-card p-6 shadow-sm">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#3d1a5c]">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-card-foreground">Community</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Serving the Little Rock community and beyond through education and outreach
                  </p>
                </div>
                <div className="rounded-lg bg-card p-6 shadow-sm">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d4a736]">
                    <BookOpen className="h-8 w-8 text-[#3d1a5c]" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-card-foreground">Scholarship</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Pursuing academic excellence rooted in Christian principles
                  </p>
                </div>
                <div className="rounded-lg bg-card p-6 shadow-sm">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#3d1a5c]">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-card-foreground">Transformation</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Addressing societal issues and creating positive change
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-block rounded-full bg-[#d4a736]/20 px-4 py-2 text-sm font-semibold text-[#3d1a5c]">
                Our Values
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Core Values That Guide Us
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                These principles form the foundation of everything we do at Arkansas Baptist College.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-[#3d1a5c] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3d1a5c] text-white transition-colors group-hover:bg-[#d4a736] group-hover:text-[#3d1a5c]">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-card-foreground">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Faith and Education */}
        <section className="bg-[#3d1a5c] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
                  Faith and Education, <span className="text-[#d4a736]">United</span>
                </h2>
                <div className="mt-6 space-y-4 text-white/80">
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
                    these skills within the urban Little Rock community, creating real-world 
                    impact while still in school.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <p className="text-4xl font-bold text-[#d4a736]">1884</p>
                  <p className="mt-2 text-white/80">Year Founded</p>
                </div>
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <p className="text-4xl font-bold text-[#d4a736]">Only</p>
                  <p className="mt-2 text-white/80">Baptist HBCU West of the Mississippi</p>
                </div>
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <p className="text-4xl font-bold text-[#d4a736]">5</p>
                  <p className="mt-2 text-white/80">Bachelor&apos;s Degree Programs</p>
                </div>
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <p className="text-4xl font-bold text-[#d4a736]">3</p>
                  <p className="mt-2 text-white/80">Associate&apos;s Degree Programs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voice for the Underrepresented */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-lg border-l-4 border-[#d4a736] bg-muted p-8 md:p-12">
                <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                  A Voice for the Underrepresented
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  In its quest to be a voice for the underrepresented student, Arkansas Baptist 
                  College provides a quality education without charging out-of-state tuition fees. 
                  We believe that access to higher education should not be limited by geography 
                  or financial circumstances.
                </p>
                <p className="mt-4 text-muted-foreground">
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-[#3d1a5c] p-8 md:flex-row md:p-12">
              <div>
                <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  Join Our Mission
                </h2>
                <p className="mt-2 text-white/70">
                  Become part of a community dedicated to Truth and Light.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-[#d4a736] text-[#3d1a5c] hover:bg-[#c49a2f]" asChild>
                  <Link href="#">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                  <Link href="/about/history">Explore Our History</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
