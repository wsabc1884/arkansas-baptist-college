import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Briefcase, Music, Building, Cross, Brain } from "lucide-react"

const programs = [
  {
    name: "Business Administration",
    icon: Briefcase,
    description: "Develop leadership skills and business acumen for the modern workplace.",
  },
  {
    name: "Religious Studies",
    icon: Cross,
    description: "Explore theology, ministry, and faith-based leadership.",
  },
  {
    name: "Elementary Education",
    icon: BookOpen,
    description: "Prepare to shape the minds of future generations.",
  },
  {
    name: "Fine Arts",
    icon: Music,
    description: "Express your creativity through visual and performing arts.",
  },
  {
    name: "Public Administration",
    icon: Building,
    description: "Lead change in government and nonprofit organizations.",
  },
  {
    name: "Social & Behavioral Sciences",
    icon: Brain,
    description: "Understand human behavior and create positive impact.",
  },
]

export function ProgramsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Academic Excellence
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              What We Offer
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              ABC offers degrees and certificates in Business Administration, Human Services, Criminal Justice, 
              Religious Studies, Elementary Education, and Health/Physical Education/Recreation.
            </p>
            <p className="mt-4 text-muted-foreground">
              ABC is a student-first oriented college that focuses on developing and building academic 
              achievements in an environment conducive to spiritual and personal growth.
            </p>
            <div className="mt-8">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="#">Explore All Programs</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/academics.jpg"
              alt="Students learning in classroom"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Program Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Link
              key={program.name}
              href="#"
              className="group flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <program.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {program.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{program.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
