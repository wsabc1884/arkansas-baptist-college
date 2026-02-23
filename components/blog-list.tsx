import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface BlogItem {
  title: string
  excerpt: string
  date: string
  category?: string
  image?: string
  href: string
}

interface BlogListProps {
  posts: BlogItem[]
  columns?: 2 | 3
}

export function BlogList({ posts, columns = 3 }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-12 text-center">
        <p className="text-muted-foreground">No articles published yet. Check back soon.</p>
      </div>
    )
  }

  return (
    <div className={`grid gap-8 ${columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
      {posts.map((post) => (
        <article key={post.title} className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md">
          {post.image && (
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={post.image}
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              {post.category && (
                <span className="rounded-full bg-[#3d1a5c]/10 px-2.5 py-0.5 font-medium text-[#3d1a5c]">
                  {post.category}
                </span>
              )}
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-foreground leading-snug">
              <Link href={post.href} className="hover:underline">
                {post.title}
              </Link>
            </h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
            <Link
              href={post.href}
              className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Read more
              <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}
