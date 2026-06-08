import { Download } from "lucide-react"
import type { CourseSequence } from "@/lib/course-sequences"

interface CourseSequenceListProps {
  sequences: CourseSequence[]
  className?: string
}

export function CourseSequenceList({ sequences, className }: CourseSequenceListProps) {
  if (sequences.length === 0) return null

  return (
    <div className={className}>
      <div className="grid gap-3 sm:grid-cols-2">
        {sequences.map((seq) => (
          <a
            key={seq.file}
            href={seq.file}
            download
            className="group flex items-center gap-3 rounded-lg border bg-card p-4 transition-colors hover:border-primary"
          >
            <Download className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-sm font-medium text-foreground group-hover:text-primary">
              {seq.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
