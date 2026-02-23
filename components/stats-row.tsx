import { cn } from "@/lib/utils"

interface StatItem {
  value: string
  label: string
}

interface StatsRowProps {
  stats: StatItem[]
  variant?: "default" | "purple" | "outline"
}

export function StatsRow({ stats, variant = "default" }: StatsRowProps) {
  return (
    <div className={cn(
      "grid gap-6",
      stats.length === 2 && "grid-cols-2",
      stats.length === 3 && "grid-cols-1 sm:grid-cols-3",
      stats.length >= 4 && "grid-cols-2 lg:grid-cols-4"
    )}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={cn(
            "rounded-xl p-6 text-center sm:p-8",
            variant === "default" && "bg-[#f0eef3]",
            variant === "purple" && "bg-[#3d1a5c] text-white",
            variant === "outline" && "border-2 border-[#3d1a5c]/20"
          )}
        >
          <p className="font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
            {stat.value}
          </p>
          <p className={cn(
            "mt-2 text-sm",
            variant === "purple" ? "text-white/80" : "text-muted-foreground"
          )}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
