import Link from "next/link"
import { Button } from "@/components/ui/button"

const stats = [
  {
    value: "140+",
    label: "Years of Excellence",
    color: "purple" as const,
  },
  {
    value: "15:1",
    label: "Student-Faculty Ratio",
    color: "gold" as const,
  },
  {
    value: "20+",
    label: "Degree Programs",
    color: "purple" as const,
  },
  {
    value: "100%",
    label: "Commitment to Students",
    color: "gold" as const,
  },
]

export function ExcellenceSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
              <span className="text-[#d4a736]">Excellence</span>{" "}
              <span className="text-[#3d1a5c]">Through Faith</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Arkansas Baptist College is dedicated to providing quality education that transforms lives and empowers students to become leaders in their communities and beyond.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our programs combine rigorous academics with spiritual development, preparing students for success in their careers and personal lives.
            </p>
            <Button 
              size="lg" 
              className="mt-8 bg-[#3d1a5c] hover:bg-[#2d1346] text-white"
              asChild
            >
              <Link href="#">Learn More About ABC</Link>
            </Button>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 sm:p-8 ${
                  stat.color === "purple"
                    ? "bg-[#3d1a5c] text-white"
                    : "bg-[#d4a736] text-[#3d1a5c]"
                }`}
              >
                <p className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
                  {stat.value}
                </p>
                <p className={`mt-2 text-sm sm:text-base ${
                  stat.color === "purple" ? "text-white/90" : "text-[#3d1a5c]/90"
                }`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
