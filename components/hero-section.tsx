import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      {/* Background Image - Old Main Building */}
      <div className="absolute inset-0">
        <Image
          src="/images/old-main-building.jpg"
          alt="Old Main Building at Arkansas Baptist College"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3d1a5c]/95 via-[#3d1a5c]/80 to-[#3d1a5c]/40" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-start justify-center px-4 py-20 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
          Faith. Growth. Service.
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Your Education, Your Life,
          <br />
          Your School
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/90 sm:text-xl">
          Arkansas Baptist College is a private, historically black liberal arts college in Little Rock, Arkansas.
          Our Time Is Now.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="bg-white hover:bg-white/90 text-[#3d1a5c] font-semibold" asChild>
            <Link href="#">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 text-white bg-transparent hover:bg-white/10"
            asChild
          >
            <Link href="#">Schedule a Visit</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
