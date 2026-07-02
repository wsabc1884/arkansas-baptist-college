// Fetches and parses Arkansas Baptist College campus safety & security
// statistics from the U.S. Department of Education Campus Safety and Security
// Survey API (the data behind https://ope.ed.gov/campussafety).
//
// Arkansas Baptist College (Little Rock, AR) is institution ID 106306.

export const ABC_INSTITUTION_ID = 106306
export const OPE_SOURCE_URL =
  "https://ope.ed.gov/campussafety/#/institution/details"
const API_URL = `https://ope.ed.gov/campussafety/api/institution/${ABC_INSTITUTION_ID}`

export interface SecurityCell {
  text: string
  isHeader: boolean
}

export interface SecurityRow {
  cells: SecurityCell[]
  isHeaderRow: boolean
  isTotalRow: boolean
}

export interface SecurityTable {
  location: string
  rows: SecurityRow[]
}

export interface SecurityCategory {
  id: number
  name: string
  tables: SecurityTable[]
}

export interface CampusSecurityData {
  institution: {
    name: string
    city: string
    state: string
    surveyYear: number | string
    enrollment: number | string
  }
  categories: SecurityCategory[]
  sourceUrl: string
}

function cleanHtml(input: unknown): string {
  if (typeof input !== "string") return ""
  let text = input
  // Drop angular mustache expressions that may live in attributes/content.
  text = text.replace(/\{\{[^}]*\}\}/g, "")
  // Strip all HTML tags.
  text = text.replace(/<[^>]*>/g, "")
  // Decode a handful of common HTML entities.
  text = text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&ndash;/g, "\u2013")
    .replace(/&mdash;/g, "\u2014")
  return text.replace(/\s+/g, " ").trim()
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseScreen(screen: any): SecurityTable {
  const rows: SecurityRow[] = []
  const rawRows: any[] = Array.isArray(screen?.Rows) ? screen.Rows : []

  for (const r of rawRows) {
    const rawCells: any[] = Array.isArray(r?.Cells) ? r.Cells : []
    const isHeaderRow = Boolean(r?.IsTableHeaderRow)
    const isTotalRow = Boolean(r?.IsGrandTotalRow)
    const cells: SecurityCell[] = rawCells.map((c, index) => ({
      text: cleanHtml(c?.Html),
      // Header rows are all header cells; in data rows the first (label)
      // column acts as a row header.
      isHeader: isHeaderRow || index === 0,
    }))
    // Skip fully empty rows.
    if (cells.every((c) => c.text === "")) continue
    rows.push({ cells, isHeaderRow, isTotalRow })
  }

  return {
    location: cleanHtml(screen?.ScreenName) || "Summary",
    rows,
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parsePayload(payload: any): CampusSecurityData {
  const institutionRaw = payload?.Header?.Institution ?? {}
  const groups: any[] = Array.isArray(payload?.Groups) ? payload.Groups : []

  const categories: SecurityCategory[] = groups.map((g) => ({
    id: Number(g?.ID) || 0,
    name: cleanHtml(g?.Description) || "Statistics",
    tables: (Array.isArray(g?.Screens) ? g.Screens : [])
      .map(parseScreen)
      .filter((t: SecurityTable) => t.rows.length > 0),
  }))

  return {
    institution: {
      name: cleanHtml(institutionRaw?.Name) || "Arkansas Baptist College",
      city: cleanHtml(institutionRaw?.City) || "Little Rock",
      state: cleanHtml(institutionRaw?.StateCode) || "AR",
      surveyYear: institutionRaw?.SurveyYear ?? "",
      enrollment: institutionRaw?.Enrollment ?? "",
    },
    categories: categories.filter((c) => c.tables.length > 0),
    sourceUrl: OPE_SOURCE_URL,
  }
}

// Fetches the campus security data with daily server-side caching. Returns
// null if the federal API is unreachable so the UI can fall back gracefully.
export async function getCampusSecurityData(): Promise<CampusSecurityData | null> {
  try {
    const res = await fetch(API_URL, {
      headers: { Accept: "application/json" },
      // Revalidate once per day; the federal survey updates annually.
      next: { revalidate: 86400 },
    })
    if (!res.ok) return null
    const payload = await res.json()
    const data = parsePayload(payload)
    if (data.categories.length === 0) return null
    return data
  } catch {
    return null
  }
}
