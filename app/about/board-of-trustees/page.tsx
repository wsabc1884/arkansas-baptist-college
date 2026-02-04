import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Shield, BookOpen, Heart } from "lucide-react"

export const metadata = {
  title: "Board of Trustees | Arkansas Baptist College",
  description: "Learn about the Board of Trustees who govern Arkansas Baptist College.",
}

export default function BoardOfTrusteesPage() {
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
              Board of Trustees
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Dedicated leaders guiding Arkansas Baptist College with wisdom, faith, and commitment to excellence.
            </p>
          </div>
        </section>

        {/* About the Board */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-block rounded-full bg-[#d4a736]/20 px-4 py-2 text-sm font-semibold text-[#3d1a5c]">
                  Governance
                </div>
                <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  Guiding Our Institution
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    The Board of Trustees serves as the governing body of Arkansas Baptist College, 
                    providing strategic direction and oversight to ensure the institution fulfills 
                    its mission of Truth and Light.
                  </p>
                  <p>
                    Comprised of dedicated leaders from various backgrounds, the Board brings 
                    together expertise in education, business, ministry, and community service 
                    to guide the college&apos;s future.
                  </p>
                  <p>
                    The Board works closely with the President and administration to uphold the 
                    college&apos;s Christian values, maintain academic excellence, and ensure 
                    responsible stewardship of resources.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-[#3d1a5c] p-6">
                  <Shield className="h-10 w-10 text-[#d4a736]" />
                  <h3 className="mt-4 text-lg font-bold text-white">Governance</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Providing strategic oversight and policy direction
                  </p>
                </div>
                <div className="rounded-lg bg-[#d4a736] p-6">
                  <Users className="h-10 w-10 text-[#3d1a5c]" />
                  <h3 className="mt-4 text-lg font-bold text-[#3d1a5c]">Leadership</h3>
                  <p className="mt-2 text-sm text-[#3d1a5c]/70">
                    Guiding the institution toward its vision
                  </p>
                </div>
                <div className="rounded-lg bg-[#d4a736] p-6">
                  <BookOpen className="h-10 w-10 text-[#3d1a5c]" />
                  <h3 className="mt-4 text-lg font-bold text-[#3d1a5c]">Academics</h3>
                  <p className="mt-2 text-sm text-[#3d1a5c]/70">
                    Ensuring quality education and programs
                  </p>
                </div>
                <div className="rounded-lg bg-[#3d1a5c] p-6">
                  <Heart className="h-10 w-10 text-[#d4a736]" />
                  <h3 className="mt-4 text-lg font-bold text-white">Stewardship</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Responsible management of resources
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon - Board Members */}
        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-block rounded-full bg-[#3d1a5c]/10 px-4 py-2 text-sm font-semibold text-[#3d1a5c]">
                Board Members
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Meet Our Trustees
              </h2>
            </div>

            {/* Coming Soon Message */}
            <div className="mt-12 mx-auto max-w-2xl">
              <div className="rounded-lg border-2 border-dashed border-[#3d1a5c]/30 bg-card p-12 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#3d1a5c]/10">
                  <Users className="h-10 w-10 text-[#3d1a5c]" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">
                  Directory Coming Soon
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We are currently updating our Board of Trustees directory to better serve 
                  our community. In the spirit of excellence and transparency that Arkansas 
                  Baptist College embodies, we are working diligently to provide you with 
                  comprehensive information about the dedicated leaders who guide our institution.
                </p>
                <p className="mt-4 text-muted-foreground">
                  For inquiries about the Board of Trustees, please contact the Office of the President.
                </p>
                <div className="mt-8">
                  <Button className="bg-[#3d1a5c] hover:bg-[#3d1a5c]/90 text-white" asChild>
                    <Link href="/about/office-of-the-president">
                      Contact the President&apos;s Office
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board Responsibilities */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Board Responsibilities
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The Board of Trustees fulfills critical governance functions to ensure 
                Arkansas Baptist College achieves its mission.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-card-foreground">Strategic Planning</h3>
                <p className="mt-2 text-muted-foreground">
                  Setting the long-term vision and strategic direction for the college
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-card-foreground">Financial Oversight</h3>
                <p className="mt-2 text-muted-foreground">
                  Ensuring responsible stewardship of the college&apos;s financial resources
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-card-foreground">Presidential Support</h3>
                <p className="mt-2 text-muted-foreground">
                  Selecting, evaluating, and supporting the college president
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-card-foreground">Policy Development</h3>
                <p className="mt-2 text-muted-foreground">
                  Establishing policies that guide institutional operations
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-card-foreground">Advocacy</h3>
                <p className="mt-2 text-muted-foreground">
                  Championing the college&apos;s mission to external stakeholders
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-card-foreground">Accreditation</h3>
                <p className="mt-2 text-muted-foreground">
                  Ensuring compliance with accreditation standards and requirements
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#3d1a5c] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div>
                <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  Learn More About Our Leadership
                </h2>
                <p className="mt-2 text-white/70">
                  Discover the dedicated team guiding Arkansas Baptist College.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-[#d4a736] text-[#3d1a5c] hover:bg-[#c49a2f]" asChild>
                  <Link href="/about/office-of-the-president">
                    Office of the President
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                  <Link href="/about/administration">Administration</Link>
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
