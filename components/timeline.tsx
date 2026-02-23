import { cn } from "@/lib/utils"

interface TimelineItem {
  marker: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
  variant?: "alternating" | "left"
}

export function Timeline({ items, variant = "left" }: TimelineProps) {
  if (variant === "alternating") {
    return (
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" aria-hidden="true" />
        <div className="absolute left-6 top-0 h-full w-px bg-border md:hidden" aria-hidden="true" />

        <ol className="space-y-12">
          {items.map((item, index) => {
            const isLeft = index % 2 === 0
            return (
              <li key={item.marker} className="relative">
                {/* Mobile layout */}
                <div className="flex gap-6 md:hidden">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3d1a5c] text-sm font-bold text-white">
                    {item.marker}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Desktop alternating layout */}
                <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 md:items-center">
                  <div className={cn("text-right", !isLeft && "order-3 text-left")}>
                    {isLeft && (
                      <div className="ml-auto max-w-sm rounded-lg border border-border bg-card p-5">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#3d1a5c] text-sm font-bold text-white order-2">
                    {item.marker}
                  </div>
                  <div className={cn(!isLeft ? "order-1 text-right" : "")}>
                    {!isLeft && (
                      <div className="mr-auto max-w-sm rounded-lg border border-border bg-card p-5">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }

  // Left-aligned timeline (simpler, for steps)
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 h-full w-px bg-border" aria-hidden="true" />
      <ol className="space-y-8">
        {items.map((item) => (
          <li key={item.marker} className="relative flex gap-6">
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3d1a5c] text-sm font-bold text-white">
              {item.marker}
            </div>
            <div className="pt-1.5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
