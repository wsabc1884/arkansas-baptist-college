"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import type { CampusSecurityData, SecurityTable } from "@/lib/campus-security"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function StatTable({ table }: { table: SecurityTable }) {
  return (
    <div className="overflow-x-auto rounded-md border">
      <table className="w-full border-collapse text-sm">
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={
                row.isHeaderRow
                  ? "bg-muted/60"
                  : row.isTotalRow
                    ? "bg-muted/30 font-semibold"
                    : "border-t"
              }
            >
              {row.cells.map((cell, cellIndex) =>
                cell.isHeader ? (
                  <th
                    key={cellIndex}
                    scope={row.isHeaderRow ? "col" : "row"}
                    className={`px-3 py-2 align-top font-medium text-foreground ${
                      cellIndex === 0 ? "text-left" : "text-center"
                    }`}
                  >
                    {cell.text}
                  </th>
                ) : (
                  <td
                    key={cellIndex}
                    className="px-3 py-2 text-center align-top tabular-nums text-muted-foreground"
                  >
                    {cell.text}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CategoryTables({ tables }: { tables: SecurityTable[] }) {
  const [active, setActive] = useState(0)

  if (tables.length === 1) {
    return <StatTable table={tables[0]} />
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Location">
        {tables.map((table, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={active === index}
            onClick={() => setActive(index)}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              active === index
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/70"
            }`}
          >
            {table.location}
          </button>
        ))}
      </div>
      <div className="mt-3">
        <StatTable table={tables[active]} />
      </div>
    </div>
  )
}

export function CampusSecurityData({ data }: { data: CampusSecurityData }) {
  const { institution, categories, sourceUrl } = data

  return (
    <div className="rounded-lg border bg-card p-5 sm:p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-serif text-xl font-bold text-foreground">
            Campus Crime &amp; Safety Statistics
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {institution.name} &mdash; {institution.city}, {institution.state}
            {institution.surveyYear ? ` \u00b7 Survey Year ${institution.surveyYear}` : ""}
            {institution.enrollment ? ` \u00b7 Enrollment ${institution.enrollment}` : ""}
          </p>
        </div>
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          View on ope.ed.gov
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <Accordion type="single" collapsible defaultValue={`cat-${categories[0]?.id}`} className="mt-4">
        {categories.map((category) => (
          <AccordionItem key={category.id} value={`cat-${category.id}`}>
            <AccordionTrigger className="text-left font-semibold">
              {category.name}
            </AccordionTrigger>
            <AccordionContent>
              <CategoryTables tables={category.tables} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <p className="mt-4 text-xs text-muted-foreground">
        Source: U.S. Department of Education, Campus Safety and Security Survey.
        Statistics are reported under the Jeanne Clery Act and reflect incidents
        reported for the years shown.
      </p>
    </div>
  )
}
