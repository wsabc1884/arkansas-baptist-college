import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin, Quote } from "lucide-react"

export const metadata = {
  title: "Office of the President | Arkansas Baptist College",
  description: "Learn about the leadership of Arkansas Baptist College and the Office of the President.",
}

export default function OfficeOfThePresidentPage() {
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
              Office of the President
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Leading Arkansas Baptist College with faith, vision, and dedication to academic excellence.
            </p>
          </div>
        </section>

        {/* President Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              {/* President Image Placeholder */}
              <div className="lg:col-span-2">
                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gradient-to-br from-[#3d1a5c] to-[#5a2d82]">
                  <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/10">
                      <span className="font-serif text-5xl font-bold text-[#d4a736]">GH</span>
                    </div>
                    <p className="mt-6 font-serif text-2xl font-bold text-white">
                      Dr. George Hertz
                    </p>
                    <p className="mt-2 text-[#d4a736]">Interim President</p>
                  </div>
                </div>
              </div>

              {/* President Info */}
              <div className="lg:col-span-3">
                <div className="inline-block rounded-full bg-[#d4a736]/20 px-4 py-2 text-sm font-semibold text-[#3d1a5c]">
                  Interim President
                </div>
                <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  Dr. George Hertz
                </h2>
                <p className="mt-2 text-lg text-[#3d1a5c] font-medium">
                  Interim President, Arkansas Baptist College
                </p>

                <div className="mt-8 space-y-4 text-muted-foreground">
                  <p>
                    Dr. George Hertz assumed the role of Interim President of Arkansas Baptist 
                    College in April 2025. As interim president, Dr. Hertz is committed to 
                    continuing the college&apos;s mission of providing quality education rooted in 
                    Christian principles.
                  </p>
                  <p>
                    Under his leadership, Arkansas Baptist College continues its tradition of 
                    serving as the only Baptist Historically Black College or University west 
                    of the Mississippi River, providing accessible education to students from 
                    all backgrounds.
                  </p>
                  <p>
                    Dr. Hertz is focused on strengthening academic programs, supporting student 
                    success, and furthering the college&apos;s vision of positively influencing the 
                    community, state, and nation through the integration of academic scholarship 
                    and Christian principles.
                  </p>
                </div>

                {/* Quote */}
                <div className="mt-8 rounded-lg border-l-4 border-[#d4a736] bg-muted p-6">
                  <Quote className="h-8 w-8 text-[#d4a736]" />
                  <p className="mt-4 font-serif text-xl italic text-foreground">
                    &ldquo;Arkansas Baptist College remains committed to its founding mission of 
                    Truth and Light, preparing students to lead and serve with excellence.&rdquo;
                  </p>
                </div>

                {/* Contact Info */}
                <div className="mt-8 space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Contact the President&apos;s Office
                  </h3>
                  <div className="flex items-center gap-3 text-foreground">
                    <Mail className="h-5 w-5 text-[#3d1a5c]" />
                    <span>president@arkansasbaptist.edu</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Phone className="h-5 w-5 text-[#3d1a5c]" />
                    <span>(501) 420-1200</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin className="h-5 w-5 text-[#3d1a5c]" />
                    <span>1621 Dr. Martin Luther King Jr. Drive, Little Rock, AR 72202</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Presidential Legacy */}
        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-block rounded-full bg-[#3d1a5c]/10 px-4 py-2 text-sm font-semibold text-[#3d1a5c]">
                Our Legacy
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                A History of Distinguished Leadership
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Since 1884, Arkansas Baptist College has been led by visionary presidents 
                committed to advancing education and faith in the African American community.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-card p-6 text-center shadow-sm">
                <p className="font-serif text-4xl font-bold text-[#3d1a5c]">140+</p>
                <p className="mt-2 text-muted-foreground">Years of Leadership</p>
              </div>
              <div className="rounded-lg bg-card p-6 text-center shadow-sm">
                <p className="font-serif text-4xl font-bold text-[#d4a736]">17+</p>
                <p className="mt-2 text-muted-foreground">Presidents Served</p>
              </div>
              <div className="rounded-lg bg-card p-6 text-center shadow-sm">
                <p className="font-serif text-4xl font-bold text-[#3d1a5c]">1884</p>
                <p className="mt-2 text-muted-foreground">Founded</p>
              </div>
              <div className="rounded-lg bg-card p-6 text-center shadow-sm">
                <p className="font-serif text-4xl font-bold text-[#d4a736]">Only</p>
                <p className="mt-2 text-muted-foreground">Baptist HBCU West of Mississippi</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="border-[#3d1a5c] text-[#3d1a5c] hover:bg-[#3d1a5c] hover:text-white bg-transparent" asChild>
                <Link href="/about/history">
                  Explore Our Full History
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Office Mission */}
        <section className="bg-[#3d1a5c] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
                The President&apos;s Commitment
              </h2>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                The Office of the President is dedicated to advancing the mission of Arkansas 
                Baptist College by providing strategic leadership, fostering academic excellence, 
                strengthening community partnerships, and ensuring the college remains a beacon 
                of hope and opportunity for students seeking to transform their lives through 
                education and faith.
              </p>
              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-[#d4a736]">Academic Excellence</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Ensuring quality education and continuous improvement of academic programs
                  </p>
                </div>
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-[#d4a736]">Student Success</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Supporting students in achieving their academic and personal goals
                  </p>
                </div>
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-[#d4a736]">Community Impact</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Strengthening relationships with Little Rock and beyond
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 rounded-lg border border-border bg-card p-8 md:flex-row md:p-12">
              <div>
                <h2 className="font-serif text-2xl font-bold text-card-foreground sm:text-3xl">
                  Connect With Us
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Learn more about Arkansas Baptist College and our leadership.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-[#d4a736] text-[#3d1a5c] hover:bg-[#c49a2f]" asChild>
                  <Link href="#">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#3d1a5c] text-[#3d1a5c] hover:bg-[#3d1a5c] hover:text-white bg-transparent" asChild>
                  <Link href="#">Schedule a Visit</Link>
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
