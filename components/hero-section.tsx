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
    tagline: "Established 1884",
    headline: "Where Faith Meets\nExcellence.",
    description: "Arkansas Baptist College — the only historically Black Baptist institution of higher learning west of the Mississippi River.",
  },
  {
    src: "/images/hero-graduation.jpg",
    alt: "Graduation ceremony at Arkansas Baptist College",
    tagline: "Your Future Awaits",
    headline: "Scholars. Leaders.\nTrailblazers.",
    description: "Join a legacy of graduates who carry the spirit of truth and light into every corner of the world.",
  },
  {
    src: "/images/hero-campus-life.jpg",
    alt: "Students on the Arkansas Baptist College campus",
    tagline: "Life at ABC",
    headline: "Discover Who\nYou're Called to Be.",
    description: "A vibrant community where you grow through relationships, service, and faith-centered education.",
  },
  {
    src: "/images/hero-athletics.jpg",
    alt: "Arkansas Baptist College Buffaloes athletics",
    tagline: "Buffalo Pride",
    headline: "Compete. Grow.\nExcel.",
    description: "Our NAIA member athletic programs build champions on and off the field.",
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(true)

  const next = useCallback(() => {
    setIsAnimating(false)
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
      setIsAnimating(true)
    }, 100)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [isPaused, next])

  const currentSlide = slides[current]

  return (
    <section
      className="relative min-h-[80vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Campus highlights"
    >
      {/* Slide images with subtle zoom animation */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "animate-subtle-zoom" : ""
          }`}
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

      {/* Content with animations */}
      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col items-start justify-center px-4 py-20 sm:px-6 lg:px-8">
        <p 
          className={`mb-4 text-sm font-semibold uppercase tracking-widest text-white/80 transition-all duration-700 ${
            isAnimating ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {currentSlide.tagline}
        </p>
        <h1 
          className={`font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl whitespace-pre-line transition-all duration-700 delay-100 ${
            isAnimating ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {currentSlide.headline}
        </h1>
        <p 
          className={`mt-6 max-w-xl text-lg text-white/90 leading-relaxed sm:text-xl transition-all duration-700 delay-200 ${
            isAnimating ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {currentSlide.description}
        </p>
        <div 
          className={`mt-10 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-300 ${
            isAnimating ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-[#3d1a5c] font-semibold group"
            asChild
          >
            <Link href="/enrollment/apply">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 text-white bg-transparent hover:bg-white/10"
            asChild
          >
            <Link href="/academics">Explore Programs</Link>
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
              onClick={() => {
                setIsAnimating(false)
                setTimeout(() => {
                  setCurrent(i)
                  setIsAnimating(true)
                }, 100)
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-10 bg-white"
                  : "w-4 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="h-8 w-[1px] bg-white/40 animate-pulse" />
      </div>
    </section>
  )
}
