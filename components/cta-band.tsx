import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CTAAction {
  label: string
  href: string
}

interface CTABandProps {
  heading?: string
  title?: string
  description?: string
  primaryAction?: CTAAction
  primaryLabel?: string
  primaryHref?: string
  secondaryAction?: CTAAction
  secondaryLabel?: string
  secondaryHref?: string
  variant?: "purple" | "light"
}

export function CTABand({
  heading,
  title,
  description,
  primaryAction,
  primaryLabel,
  primaryHref,
  secondaryAction,
  secondaryLabel,
  secondaryHref,
  variant = "purple",
}: CTABandProps) {
  const resolvedHeading = heading || title || ""
  const resolvedPrimary: CTAAction | undefined = primaryAction || (primaryLabel && primaryHref ? { label: primaryLabel, href: primaryHref } : undefined)
  const resolvedSecondary: CTAAction | undefined = secondaryAction || (secondaryLabel && secondaryHref ? { label: secondaryLabel, href: secondaryHref } : undefined)
  return (
    <section className={cn(
      "py-16 sm:py-20",
      variant === "purple" ? "bg-[#3d1a5c] text-white" : "bg-muted text-foreground"
    )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="lg:max-w-2xl">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl text-balance">
              {resolvedHeading}
            </h2>
            {description && (
              <p className={cn(
                "mt-3 text-lg",
                variant === "purple" ? "text-white/80" : "text-muted-foreground"
              )}>
                {description}
              </p>
            )}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            {resolvedPrimary && (
              <Button
                size="lg"
                className={cn(
                  "font-semibold",
                  variant === "purple"
                    ? "bg-white text-[#3d1a5c] hover:bg-white/90"
                    : "bg-[#3d1a5c] text-white hover:bg-[#3d1a5c]/90"
                )}
                asChild
              >
                <Link
                  href={resolvedPrimary.href}
                  {...(resolvedPrimary.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {resolvedPrimary.label}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            )}
            {resolvedSecondary && (
              <Button
                size="lg"
                variant="outline"
                className={cn(
                  variant === "purple"
                    ? "border-white/30 text-white bg-transparent hover:bg-white/10"
                    : "border-[#3d1a5c]/30 text-[#3d1a5c] bg-transparent hover:bg-[#3d1a5c]/5"
                )}
                asChild
              >
                <Link
                  href={resolvedSecondary.href}
                  {...(resolvedSecondary.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {resolvedSecondary.label}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
