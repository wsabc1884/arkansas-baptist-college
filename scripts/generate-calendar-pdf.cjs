// Generates a real PDF of the Academic Calendar from the page's JSX content.
const fs = require("fs")
const path = require("path")
const PDFDocument = require("pdfkit")

const pagePath = path.join(__dirname, "..", "app", "academics", "academic-calendar", "page.tsx")
const outPath = path.join(__dirname, "..", "public", "documents", "ABC-Academic-Calendar-2026-2028.pdf")

const src = fs.readFileSync(pagePath, "utf8")

// Decode common HTML/JSX entities
function decode(str) {
  return str
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\{"\s*"\}/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

// Strip all tags from an inner HTML chunk
function stripTags(str) {
  return decode(str.replace(/<[^>]*>/g, ""))
}

// Walk through the JSX in document order, capturing h2, h3, p (muted), and li lines.
const tokenRegex = /<(h2|h3|li)>([\s\S]*?)<\/\1>|<p className="text-sm text-muted-foreground">([\s\S]*?)<\/p>/g

const blocks = []
let m
while ((m = tokenRegex.exec(src)) !== null) {
  if (m[1] === "h2") {
    blocks.push({ type: "h2", text: stripTags(m[2]) })
  } else if (m[1] === "h3") {
    blocks.push({ type: "h3", text: stripTags(m[2]) })
  } else if (m[1] === "li") {
    blocks.push({ type: "li", text: stripTags(m[2]) })
  } else if (m[3] !== undefined) {
    blocks.push({ type: "date", text: stripTags(m[3]) })
  }
}

const doc = new PDFDocument({ size: "LETTER", margin: 54 })
doc.pipe(fs.createWriteStream(outPath))

const GOLD = "#8a6d1f"
const DARK = "#1a1a1a"
const GRAY = "#555555"

// Title block
doc.fillColor(DARK).font("Helvetica-Bold").fontSize(20).text("Arkansas Baptist College", { align: "center" })
doc.moveDown(0.2)
doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(14).text("Academic Calendar 2026–2028", { align: "center" })
doc.moveDown(0.2)
doc.fillColor(GRAY).font("Helvetica").fontSize(10).text("Main Campus — Important dates and deadlines", { align: "center" })
doc.moveDown(1)

for (const b of blocks) {
  if (b.type === "h2") {
    if (doc.y > doc.page.height - 120) doc.addPage()
    doc.moveDown(0.6)
    doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(15).text(b.text)
    doc.moveTo(doc.x, doc.y + 2).lineTo(doc.page.width - doc.page.margins.right, doc.y + 2).strokeColor(GOLD).lineWidth(1).stroke()
    doc.moveDown(0.4)
  } else if (b.type === "h3") {
    if (doc.y > doc.page.height - 100) doc.addPage()
    doc.moveDown(0.3)
    doc.fillColor(DARK).font("Helvetica-Bold").fontSize(12).text(b.text)
    doc.moveDown(0.15)
  } else if (b.type === "date") {
    doc.fillColor(GRAY).font("Helvetica-Oblique").fontSize(9.5).text(b.text)
    doc.moveDown(0.2)
  } else if (b.type === "li") {
    if (doc.y > doc.page.height - 70) doc.addPage()
    doc.fillColor(DARK).font("Helvetica").fontSize(9.5).text("• " + b.text, { indent: 6, lineGap: 1 })
  }
}

doc.moveDown(1)
doc.fillColor(GRAY).font("Helvetica-Oblique").fontSize(8.5).text(
  "Dates are subject to change. Contact the Registrar's Office at 501-420-1200 for the most current calendar.",
)

doc.end()
console.log("[v0] Wrote", outPath, "with", blocks.length, "blocks")
