import Link from "next/link"
import { Calendar } from "lucide-react"
import type { NewsArticle } from "@/lib/types"

const fallbackItems = [
  {
    title: "Welcome to ABC!",
    excerpt: "Take a tour of Arkansas Baptist College — your future home! Become a Buffalo today!",
    date: "Coming Soon",
    category: "Announcements",
  },
  {
    title: "Fall 2026 Registration Open",
    excerpt: "Register now for fall semester classes. Visit the Office of Admissions for more information.",
    date: "Coming Soon",
    category: "Admissions",
  },
  {
    title: "ETS Proficiency Exams",
    excerpt: "Students earning an Associate Degree are required to take the ETS Proficiency Profile Exams.",
    date: "Coming Soon",
    category: "Academics",
  },
]

function formatDate(dateString?: string) {
  if (!dateString) return "Coming Soon"
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function NewsSection({ articles }: { articles?: NewsArticle[] }) {
  const hasLiveData = articles && articles.length > 0
  const newsItems = hasLiveData
    ? articles.slice(0, 3).map((a) => ({
        title: a.title ?? "Untitled",
        excerpt: a.excerpt ?? "",
        date: formatDate(a.publishDate),
        slug: a.slug,
      }))
    : fallbackItems.map((f) => ({ ...f, slug: undefined }))
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Stay Connected
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              News & Events
            </h2>
          </div>
          <Link
            href="/enrollment/event-calendar"
            className="text-sm font-semibold text-primary hover:underline"
          >
            View All News →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{item.date}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{item.excerpt}</p>
              <Link
                href={item.slug ? `/news/${item.slug}` : "/enrollment/event-calendar"}
                className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
