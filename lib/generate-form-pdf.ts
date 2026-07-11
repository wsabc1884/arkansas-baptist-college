import PDFDocument from "pdfkit"
import fs from "fs"
import path from "path"

type Fields = Record<string, string>

const NAVY = "#3d1a5c"
const GRAY = "#555555"

function isYes(value?: string) {
  return (value || "").trim().toLowerCase() === "yes"
}

export async function generateFormPDF(
  formType: string,
  ticketNumber: number,
  fields: Fields
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: "letter", margin: 50 })
      const chunks: Buffer[] = []
      doc.on("data", (chunk: Buffer) => chunks.push(chunk))
      doc.on("end", () => resolve(Buffer.concat(chunks)))
      doc.on("error", reject)

      if (formType === "facility-request") {
        renderFacilityRequest(doc, ticketNumber, fields)
      } else {
        renderGeneric(doc, formType, ticketNumber, fields)
      }

      doc.end()
    } catch (error) {
      reject(error)
    }
  })
}

/* ---------- Facility Request (official layout) ---------- */

function renderFacilityRequest(doc: PDFKit.PDFDocument, ticketNumber: number, f: Fields) {
  const left = doc.page.margins.left
  const right = doc.page.width - doc.page.margins.right
  const width = right - left

  // Logo
  const logoPath = path.join(process.cwd(), "public", "logo.jpg")
  if (fs.existsSync(logoPath)) {
    doc.image(logoPath, left, 30, { width: 60, height: 60 })
  }

  // Header
  doc.fontSize(16).font("Helvetica-Bold").fillColor(NAVY)
  doc.text("Arkansas Baptist College", left, 40, { align: "center" })
  doc.fontSize(13).text("Official Facility Request Form", { align: "center" })
  doc.moveDown(0.4)
  doc.fontSize(9).font("Helvetica").fillColor(GRAY)
  doc.text(`Ticket #${ticketNumber}  |  Submitted: ${new Date().toLocaleString()}`, { align: "center" })
  doc.moveDown(0.8)

  // Instructions + disclaimer
  doc.fillColor("#000000").fontSize(8).font("Helvetica-Oblique")
  doc.text(
    "Please complete this form three weeks prior to your requested date. All requests are subject to approval and availability. Incomplete forms will not be processed.",
    { align: "left" }
  )
  doc.moveDown(0.3)
  doc.font("Helvetica-Bold").text("Legal Disclaimer: ", { continued: true })
  doc.font("Helvetica-Oblique").text(
    "Arkansas Baptist College reserves the right to review, approve, or deny any facility request at its sole discretion. Submission of this request form does not guarantee approval or availability of the requested space. The College further retains the right to cancel or revoke approval if policies, procedures, or institutional interests are compromised."
  )
  doc.moveDown(0.6)

  sectionHeader(doc, "Requester Information", left, width)
  row(doc, [
    ["Name", f.requesterName],
    ["Department/Organization", f.department],
  ], left, width)
  row(doc, [
    ["Phone Number", f.phone],
    ["Email Address", f.email],
  ], left, width)

  sectionHeader(doc, "Event Information", left, width)
  row(doc, [["Event Title/Name", f.eventTitle]], left, width)
  row(doc, [
    ["Type of Event", f.eventType],
    ["Date(s) Requested", f.eventDate],
  ], left, width)
  row(doc, [
    ["Start Time", formatTime(f.startTime)],
    ["End Time", formatTime(f.endTime)],
    ["Expected Attendance", f.expectedAttendance],
  ], left, width)
  row(doc, [
    ["Admission Fee/Ticketed Event", f.admissionFee],
    ["Co-Sponsorship Requested", f.coSponsorship],
  ], left, width)
  row(doc, [["Campus Contact Person Name & Telephone Number", f.campusContact || "—"]], left, width)
  row(doc, [
    ["Facility/Space Requested", f.facilitySpace],
    ["Please Specify", f.facilitySpecify || "—"],
  ], left, width)

  sectionHeader(doc, "Setup & Equipment Needs", left, width)
  row(doc, [
    ["Tables (Quantity)", f.tablesQty || "—"],
    ["Chairs (Quantity)", f.chairsQty || "—"],
  ], left, width)
  checkboxRow(
    doc,
    [
      ["Podium", isYes(f.podium)],
      ["Projector/Screen", isYes(f.projector)],
      ["Microphone/Sound System", isYes(f.microphone)],
      ["Stage/Platform", isYes(f.stage)],
      ["Floor Tarp (Gym Only)", isYes(f.floorTarp)],
    ],
    left,
    width
  )
  row(doc, [["Other (please specify)", f.setupOther || "—"]], left, width)

  sectionHeader(doc, "Additional Services", left, width)
  checkboxRow(
    doc,
    [
      ["Custodial Support Needed", isYes(f.custodialSupport)],
      ["Security Needed", isYes(f.securityNeeded)],
      ["Technology Support Needed", isYes(f.technologySupport)],
      ["Facility Deposit Fee Paid", isYes(f.depositPaid)],
    ],
    left,
    width
  )
  row(doc, [["Outside Organization — Proof/Name of Insurance Provided", f.insuranceProvider || "—"]], left, width)

  sectionHeader(doc, "Signatures", left, width)
  row(doc, [
    ["Requester's Signature", f.requesterSignature],
    ["Date", f.signatureDate],
  ], left, width)
  row(doc, [
    ["Department Head Approval", "________________________"],
    ["Date", "____________"],
  ], left, width)

  // Divider + Office Use Only (blank)
  doc.moveDown(0.6)
  const yLine = doc.y
  doc.moveTo(left, yLine).lineTo(right, yLine).strokeColor("#000000").lineWidth(1).stroke()
  doc.moveDown(0.5)

  doc.fillColor(NAVY).font("Helvetica-Bold").fontSize(11)
  doc.text("For Facilities Office Use Only", left, doc.y)
  doc.moveDown(0.6)
  doc.fillColor("#000000").font("Helvetica").fontSize(10)
  doc.text("Request Received:  ____/____/____                    Approved  [  ]        Denied  [  ]")
  doc.moveDown(0.8)
  doc.text("Campus Safety Office:  __________________________________________")
  doc.moveDown(0.8)
  doc.text("Campus Facilities:  ______________________________________________")
  doc.moveDown(0.8)
  doc.text("Office of Business & Finance:  ____________________________________")
}

function sectionHeader(doc: PDFKit.PDFDocument, title: string, left: number, width: number) {
  ensureSpace(doc, 40)
  doc.moveDown(0.5)
  const y = doc.y
  doc.rect(left, y, width, 18).fill(NAVY)
  doc.fillColor("#ffffff").font("Helvetica-Bold").fontSize(10)
  doc.text(title, left + 6, y + 4)
  doc.fillColor("#000000")
  doc.moveDown(0.6)
}

function row(doc: PDFKit.PDFDocument, cells: [string, string | undefined][], left: number, width: number) {
  ensureSpace(doc, 34)
  const gap = 12
  const colWidth = (width - gap * (cells.length - 1)) / cells.length
  const startY = doc.y
  let maxBottom = startY

  cells.forEach((cell, i) => {
    const x = left + i * (colWidth + gap)
    doc.font("Helvetica-Bold").fontSize(8).fillColor(GRAY)
    doc.text(cell[0].toUpperCase(), x, startY, { width: colWidth })
    doc.moveDown(0.2)
    doc.font("Helvetica").fontSize(10).fillColor("#000000")
    doc.text(cell[1] && cell[1].trim() !== "" ? cell[1] : "—", x, doc.y, { width: colWidth })
    if (doc.y > maxBottom) maxBottom = doc.y
    doc.y = startY
  })

  doc.y = maxBottom
  doc.moveDown(0.7)
}

function checkboxRow(
  doc: PDFKit.PDFDocument,
  items: [string, boolean][],
  left: number,
  width: number
) {
  const cols = 2
  const gap = 24
  const colWidth = (width - gap) / cols
  const rowSpacing = 8
  doc.font("Helvetica").fontSize(10).fillColor("#000000")

  // Render two checkboxes per row, tracking the tallest column so the next
  // row starts below both (prevents overlapping / stacked text).
  for (let i = 0; i < items.length; i += cols) {
    ensureSpace(doc, 28)
    const startY = doc.y
    let maxBottom = startY

    for (let c = 0; c < cols; c++) {
      const item = items[i + c]
      if (!item) continue
      const x = left + c * (colWidth + gap)
      const box = item[1] ? "[X]" : "[  ]"
      doc.text(`${box}  ${item[0]}`, x, startY, { width: colWidth })
      if (doc.y > maxBottom) maxBottom = doc.y
      doc.y = startY
    }

    doc.y = maxBottom + rowSpacing
  }
  doc.moveDown(0.2)
}

function formatTime(value?: string) {
  if (!value) return ""
  const [h, m] = value.split(":")
  if (h === undefined || m === undefined) return value
  const hour = parseInt(h, 10)
  const ampm = hour >= 12 ? "PM" : "AM"
  const hour12 = hour % 12 === 0 ? 12 : hour % 12
  return `${hour12}:${m} ${ampm}`
}

function ensureSpace(doc: PDFKit.PDFDocument, needed: number) {
  const bottom = doc.page.height - doc.page.margins.bottom
  if (doc.y + needed > bottom) {
    doc.addPage()
  }
}

/* ---------- Generic layout (other form types) ---------- */

function renderGeneric(doc: PDFKit.PDFDocument, formType: string, ticketNumber: number, fields: Fields) {
  const logoPath = path.join(process.cwd(), "public", "logo.jpg")
  if (fs.existsSync(logoPath)) {
    doc.image(logoPath, 50, 20, { width: 100, height: 100 })
  }

  const formTypeDisplay = formType
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  doc.fontSize(24).font("Helvetica-Bold")
  doc.text("Arkansas Baptist College", { align: "center" }).moveDown(0.2)
  doc.fontSize(18).text(`${formTypeDisplay} Request Form`, { align: "center" }).moveDown(1)
  doc.fontSize(12).font("Helvetica")
  doc.text(`Ticket #${ticketNumber}`, { align: "center" }).moveDown(0.5)
  doc.fontSize(10).text(`Submitted: ${new Date().toLocaleString()}`, { align: "center" }).moveDown(2)

  doc.fontSize(11).font("Helvetica-Bold")
  doc.text("Form Details:", { underline: true }).moveDown(0.5)

  doc.fontSize(10).font("Helvetica")
  Object.entries(fields).forEach(([key, value]) => {
    const label = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim()
    doc.text(`${label}:`)
    doc.fontSize(9).fillColor(GRAY).text(value).fillColor("#000000").moveDown(0.3)
    doc.fontSize(10)
  })
}
