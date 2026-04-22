import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Briefcase, Music, Building, Cross, Brain, ArrowRight, Scale, GraduationCap } from "lucide-react"

const programs = [
  {
    name: "Business Administration",
    icon: Briefcase,
    description: "Develop strategic, entrepreneurial, and ethical business leaders ready for the modern economy.",
    href: "/academics/business-administration",
    degrees: ["Bachelor's", "Associate's"],
  },
  {
    name: "Religious Studies",
    icon: Cross,
    description: "Explore theology, ministry, and the philosophical foundations of faith traditions.",
    href: "/christianstudies",
    degrees: ["Bachelor's"],
  },
  {
    name: "Elementary Education",
    icon: BookOpen,
    description: "Shape the next generation with evidence-based teaching practices and community-centered pedagogy.",
    href: "/academics/interdisciplinary-studies",
    degrees: ["Bachelor's", "Certification"],
  },
  {
    name: "Fine Arts",
    icon: Music,
    description: "Express, create, and innovate through visual arts, performance, and digital media disciplines.",
    href: "/academics/fine-arts",
    degrees: ["Bachelor's"],
  },
  {
    name: "Criminal Justice",
    icon: Scale,
    description: "Understand the systems of law, justice, and corrections that shape communities and public safety.",
    href: "/academics/criminal-justice",
    degrees: ["Bachelor's", "Associate's"],
  },
  {
    name: "Social & Behavioral Sciences",
    icon: Brain,
    description: "Apply psychology, sociology, and human services frameworks to solve real-world challenges.",
    href: "/academics/social-behavioral-sciences",
    degrees: ["Bachelor's"],
  },
]

export function ProgramsSection() {
  return (
    <section className="py-20 bg-[#f8f7fa]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Academics
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Find Your Path
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white group w-fit"
            asChild
          >
            <Link href="/academics">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Program Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Link
              key={program.name}
              href={program.href}
              className="group relative flex flex-col rounded-xl border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 mb-4">
                <program.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors">
                {program.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground flex-grow">{program.description}</p>
              
              {/* Degree badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {program.degrees.map((degree) => (
                  <span 
                    key={degree}
                    className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    {degree}
                  </span>
                ))}
              </div>

              {/* Arrow indicator */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
