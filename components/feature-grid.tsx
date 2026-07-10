import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface FeatureItem {
  title: string
  description: string
  icon?: LucideIcon
  href?: string
}

interface FeatureGridProps {
  items: FeatureItem[]
  columns?: 2 | 3 | 4
  variant?: "card" | "icon-left" | "icon-top"
}

export function FeatureGrid({ items, columns = 3, variant = "card" }: FeatureGridProps) {
  const colClasses = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={cn("grid gap-6", colClasses[columns])}>
      {items.map((item) => {
        const Wrapper = item.href ? Link : "div"
        const wrapperProps = item.href ? { href: item.href } : {}
        return (
        <Wrapper
          key={item.title}
          {...(wrapperProps as { href: string })}
          className={cn(
            "rounded-lg transition-shadow",
            variant === "card" && "border border-border bg-card p-6 hover:shadow-md",
            variant === "icon-left" && "flex gap-4 p-4",
            variant === "icon-top" && "text-center p-6",
            item.href &&
              "block cursor-pointer hover:border-[#3d1a5c]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3d1a5c]"
          )}
        >
          {item.icon && variant === "icon-left" && (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#3d1a5c]/10">
              <item.icon className="h-5 w-5 text-[#3d1a5c]" aria-hidden="true" />
            </div>
          )}
          {item.icon && variant === "icon-top" && (
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#3d1a5c]/10">
              <item.icon className="h-6 w-6 text-[#3d1a5c]" aria-hidden="true" />
            </div>
          )}
          {item.icon && variant === "card" && (
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#3d1a5c]/10">
              <item.icon className="h-5 w-5 text-[#3d1a5c]" aria-hidden="true" />
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        </Wrapper>
        )
      })}
    </div>
  )
}
