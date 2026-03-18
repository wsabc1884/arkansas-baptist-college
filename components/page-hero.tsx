import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface Breadcrumb {
  label: string
  href: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  breadcrumbs?: Breadcrumb[]
}

export function PageHero({ title, subtitle, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-[#3d1a5c] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
              <li key="home">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-white/80" aria-current="page">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {subtitle && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/70">
            {subtitle}
          </p>
        )}

        <h1 className="font-serif text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-2xl text-lg text-white/80 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
