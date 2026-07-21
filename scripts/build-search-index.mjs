// Build-time content search index generator.
// Walks every app/**/page.tsx, derives its route, and extracts human-readable
// text (JSX text nodes + string-literal values for content-bearing keys +
// page metadata). Writes lib/search-index.json which powers the site search.
//
// Run automatically via the "prebuild" npm script, or manually:
//   node scripts/build-search-index.mjs

import { readdir, readFile, writeFile, mkdir } from "node:fs/promises"
import { join, relative, sep, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, "..")
const APP_DIR = join(ROOT, "app")
const OUT_FILE = join(ROOT, "lib", "search-index.json")

// Content-bearing object keys whose string-literal values should be indexed.
const CONTENT_KEYS =
  "title|description|desc|name|label|heading|subheading|subtitle|question|answer|quote|author|role|position|category|caption|summary|excerpt|eyebrow|body|content|text"

/** Recursively collect every page.tsx under the app directory. */
async function collectPages(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await collectPages(full)))
    } else if (entry.name === "page.tsx" || entry.name === "page.jsx") {
      files.push(full)
    }
  }
  return files
}

/** Convert an app-relative page file path into a public route, or null to skip. */
function fileToRoute(file) {
  const segments = relative(APP_DIR, file).split(sep).slice(0, -1)
  // Skip dynamic routes -- they have no single canonical URL to index.
  if (segments.some((s) => s.includes("[") || s.includes("]"))) return null
  // Skip Sanity Studio / internal tooling routes.
  if (segments.some((s) => s === "studio")) return null
  // Drop route groups like (marketing) and private folders like _components.
  const clean = segments.filter(
    (s) => !(s.startsWith("(") && s.endsWith(")")) && !s.startsWith("_"),
  )
  const route = "/" + clean.join("/")
  return route === "/" ? "/" : route.replace(/\/+$/, "")
}

function decodeEntities(s) {
  return s
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
}

/** Extract indexable phrases from a page's source code. */
function extractContent(src) {
  const phrases = []
  let m

  // 1) String-literal values assigned to content-bearing keys (metadata, data arrays, props).
  const keyRe = new RegExp(
    `\\b(?:${CONTENT_KEYS})\\s*:\\s*(["'\\\`])([\\s\\S]*?)\\1`,
    "g",
  )
  while ((m = keyRe.exec(src))) {
    const value = decodeEntities(m[2].replace(/\s+/g, " ").trim())
    if (!value || value.length < 2) continue
    if (!/[a-zA-Z]/.test(value)) continue
    if (/^(https?:|\/|#|tel:|mailto:|data:)/.test(value)) continue
    // Skip values that contain JSX interpolation fragments.
    if (value.includes("${")) continue
    phrases.push(value)
  }

  // 2) JSX text nodes: literal text sitting between tags (no braces, no angle brackets).
  const textRe = />([^<>{}]*[A-Za-z][^<>{}]*)</g
  while ((m = textRe.exec(src))) {
    const value = decodeEntities(m[1].replace(/\s+/g, " ").trim())
    if (!value || value.length < 2) continue
    // Skip pure import/keyword noise.
    if (/^(import|export|const|return|from|use client|use server)\b/.test(value)) continue
    phrases.push(value)
  }

  return phrases
}

/** Pull the page's <metadata> title, stripped of the site-name suffix. */
function extractTitle(src, route) {
  const m = src.match(/\btitle\s*:\s*(["'`])([\s\S]*?)\1/)
  if (m) {
    const raw = decodeEntities(m[2].replace(/\s+/g, " ").trim())
    // Strip the site-name suffix whether separated by "|", "-", or "—".
    const clean = raw
      .replace(/\s*[|\-\u2013\u2014]\s*Arkansas Baptist College\s*$/i, "")
      .split("|")[0]
      .trim()
    if (clean) return clean
  }
  // Fallback: title-case the final route segment.
  const seg = route.split("/").filter(Boolean).pop() || "Home"
  return seg
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

async function main() {
  const files = await collectPages(APP_DIR)
  const seenRoutes = new Set()
  const index = []

  for (const file of files) {
    const route = fileToRoute(file)
    if (!route || seenRoutes.has(route)) continue

    const src = await readFile(file, "utf8")
    const title = extractTitle(src, route)
    const phrases = extractContent(src)

    // Dedupe phrases case-insensitively while preserving order.
    const seen = new Set()
    const unique = []
    for (const p of phrases) {
      const key = p.toLowerCase()
      if (seen.has(key)) continue
      seen.add(key)
      unique.push(p)
    }

    let text = unique.join(" \u00b7 ")
    // Keep the payload reasonable; names/keywords cluster early in most pages.
    if (text.length > 6000) text = text.slice(0, 6000)

    seenRoutes.add(route)
    index.push({ title, href: route, text })
  }

  index.sort((a, b) => a.href.localeCompare(b.href))

  await mkdir(dirname(OUT_FILE), { recursive: true })
  await writeFile(OUT_FILE, JSON.stringify(index), "utf8")
  console.log(`[search-index] Wrote ${index.length} pages to ${relative(ROOT, OUT_FILE)}`)
}

main().catch((err) => {
  console.error("[search-index] Failed to build index:", err)
  process.exit(1)
})
