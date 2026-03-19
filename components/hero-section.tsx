"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const slides = [
  {
    src: "/images/hero-old-main.png",
    alt: "Old Main Building at Arkansas Baptist College, built in 1893",
  },
  {
    src: "/images/hero-graduation.jpg",
    alt: "Graduation ceremony at Arkansas Baptist College",
  },
  {
    src: "/images/hero-campus-life.jpg",
    alt: "Students on the Arkansas Baptist College campus",
  },
  {
    src: "/images/hero-athletics.jpg",
    alt: "Arkansas Baptist College Buffaloes athletics",
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [isPaused, next])

  return (
    <section
      className="relative min-h-[70vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Campus highlights"
    >
      {/* Slide images */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3d1a5c]/95 via-[#3d1a5c]/80 to-[#3d1a5c]/40" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-start justify-center px-4 py-20 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
          Est. 1884 &middot; Little Rock, Arkansas
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Truth and Light
          <br />
          Since 1884
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/90 leading-relaxed sm:text-xl">
          Arkansas Baptist College is a private, historically Black, liberal arts college founded in 1884&mdash;the only historically Black Baptist institution of higher education west of the Mississippi River. Our Time Is Now.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-[#3d1a5c] font-semibold"
            asChild
          >
            <Link href="/enrollment/apply">
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
            <Link href="/enrollment/campus-tour">Schedule a Visit</Link>
          </Button>
        </div>

        {/* Slide indicators */}
        <div className="mt-10 flex gap-2" role="tablist" aria-label="Slide controls">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Show slide ${i + 1}: ${slide.alt}`}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-10 bg-white"
                  : "w-4 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
