import Link from "next/link"
import { GraduationCap, BookOpen, Users, Trophy } from "lucide-react"

const quickLinks = [
  {
    title: "Admissions",
    icon: GraduationCap,
    href: "/enrollment/office-of-admissions",
  },
  {
    title: "Programs",
    icon: BookOpen,
    href: "/academics/business-administration",
  },
  {
    title: "Financial Aid",
    icon: Users,
    href: "/enrollment/financial-aid",
  },
  {
    title: "Athletics",
    icon: Trophy,
    href: "https://abcbuffaloes.com",
    external: true,
  },
]

export function QuickLinks() {
  return (
    <section className="bg-white py-8 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-lg border border-border bg-white p-5 transition-all hover:border-[#3d1a5c] hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3d1a5c]">
                <link.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-lg font-semibold text-foreground">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
