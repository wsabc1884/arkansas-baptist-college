import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  variant?: "default" | "muted" | "purple" | "white"
}

export function SectionWrapper({
  children,
  className,
  id,
  variant = "default",
}: SectionWrapperProps) {
  const variants = {
    default: "bg-background",
    muted: "bg-muted",
    purple: "bg-[#3d1a5c] text-white",
    white: "bg-white",
  }

  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", variants[variant], className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" && "text-center", "mb-12", className)}>
      {subtitle && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#3d1a5c]/70">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-4 text-lg text-muted-foreground leading-relaxed",
          align === "center" ? "mx-auto max-w-2xl" : "max-w-3xl"
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
