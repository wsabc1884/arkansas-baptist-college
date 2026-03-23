import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    title: "Campus Life",
    subtitle: "Buffalo Spirit",
    description: "ABC is devoted to creating a campus environment that supports your intellectual, personal, spiritual, and professional development.",
    image: "/images/student-life.jpg",
  },
  {
    title: "Graduation",
    subtitle: "Getting a Degree",
    description: "Join our community of successful graduates who are making an impact in their communities and beyond.",
    image: "/images/graduation.jpg",
  },
  {
    title: "Athletics",
    subtitle: "Sports Team",
    description: "Compete at the collegiate level while building teamwork, discipline, and lifelong friendships.",
    image: "/images/athletics.jpg",
  },
]

export function CampusLifeSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Experience ABC
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Life at Arkansas Baptist College
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Whether you are coming back after having been out of school for several years or just starting 
            your journey, ABC wants to help you navigate campus resources and achieve your goals.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                    {item.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-secondary-foreground">{item.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">{item.description}</p>
                <Link
                  href="/student-life/campus-life"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
                >
                  Learn More
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
            <Link href="/enrollment/campus-tour">Take a Tour of Our Campus</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
