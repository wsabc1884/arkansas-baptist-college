"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import type { Department } from "@/lib/sp2027-schedule"

type Format = "all" | "campus" | "online"

export function CourseScheduleBrowser({ departments }: { departments: Department[] }) {
  const [query, setQuery] = useState("")
  const [dept, setDept] = useState("all")
  const [format, setFormat] = useState<Format>("all")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return departments
      .filter((d) => dept === "all" || d.name === dept)
      .map((d) => ({
        ...d,
        sections: d.sections.filter((s) => {
          if (format === "online" && !s.online) return false
          if (format === "campus" && s.online) return false
          if (!q) return true
          return [s.code, s.title, s.instructor, d.name].some((v) => v.toLowerCase().includes(q))
        }),
      }))
      .filter((d) => d.sections.length > 0)
  }, [departments, query, dept, format])

  const total = filtered.reduce((n, d) => n + d.sections.length, 0)

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 rounded-lg border bg-card p-4 md:flex-row md:items-end">
        <label className="flex flex-1 flex-col gap-1.5 text-sm font-medium text-foreground">
          Search
          <span className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Course code, title, or instructor"
              className="h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm font-normal outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </span>
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
          Department
          <select
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            className="h-10 rounded-md border bg-background px-3 text-sm font-normal outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="all">All departments</option>
            {departments.map((d) => (
              <option key={d.name} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
          Format
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value as Format)}
            className="h-10 rounded-md border bg-background px-3 text-sm font-normal outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="all">All formats</option>
            <option value="campus">On campus</option>
            <option value="online">Web-based</option>
          </select>
        </label>
      </div>

      <p className="text-sm text-muted-foreground" aria-live="polite">
        Showing {total} {total === 1 ? "section" : "sections"}
      </p>

      {filtered.length === 0 && (
        <p className="rounded-lg border bg-card p-8 text-center text-muted-foreground">No courses match your search.</p>
      )}

      {filtered.map((d) => (
        <section key={d.name} aria-labelledby={`dept-${d.name}`} className="flex flex-col gap-3">
          <h2 id={`dept-${d.name}`} className="font-serif text-xl font-bold text-foreground">
            {d.name}
          </h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Course</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Title</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Cr.</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Instructor</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Days / Time</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {d.sections.map((s) => (
                  <tr key={s.code} className="bg-card align-top">
                    <td className="whitespace-nowrap px-4 py-3 font-mono font-medium text-foreground">{s.code}</td>
                    <td className="px-4 py-3 text-foreground">
                      {s.title}
                      {(s.comment || s.dates !== "01/11/2027 – 04/30/2027") && (
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {[s.comment, s.dates !== "01/11/2027 – 04/30/2027" ? s.dates : null].filter(Boolean).join(" · ")}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-foreground">{s.credits}</td>
                    <td className="px-4 py-3 text-foreground">{s.instructor}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-foreground">
                      {s.days}
                      <span className="block text-xs text-muted-foreground">{s.time}</span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      {s.online ? (
                        <span className="inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Web-based</span>
                      ) : (
                        <span className="text-foreground">{s.location}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  )
}
