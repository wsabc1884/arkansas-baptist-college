import PDFDocument from "pdfkit"
import fs from "fs"
import path from "path"

export async function generateFormPDF(
  formType: string,
  ticketNumber: number,
  fields: Record<string, string>
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: "letter",
        margin: 50,
      })

      const chunks: Buffer[] = []

      doc.on("data", (chunk: Buffer) => {
        chunks.push(chunk)
      })

      doc.on("end", () => {
        resolve(Buffer.concat(chunks))
      })

      doc.on("error", reject)

      // Add logo (if it exists)
      const logoPath = path.join(process.cwd(), "public", "logo.jpg")
      if (fs.existsSync(logoPath)) {
        doc.image(logoPath, 50, 20, { width: 100, height: 100 })
      }

      // Add header
      doc.fontSize(24).font("Helvetica-Bold")
      const formTypeDisplay = formType
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      doc.text(`Arkansas Baptist College`, { align: "center" }).moveDown(0.2)
      doc.fontSize(18).text(`${formTypeDisplay} Request Form`, { align: "center" }).moveDown(1)

      // Add ticket number
      doc.fontSize(12).font("Helvetica")
      doc.text(`Ticket #${ticketNumber}`, { align: "center" }).moveDown(0.5)

      // Add submission date
      doc.fontSize(10).text(`Submitted: ${new Date().toLocaleString()}`, { align: "center" }).moveDown(2)

      // Add form data
      doc.fontSize(11).font("Helvetica-Bold")
      doc.text("Form Details:", { underline: true }).moveDown(0.5)

      doc.fontSize(10).font("Helvetica")
      Object.entries(fields).forEach(([key, value]) => {
        const label = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())
          .trim()

        doc.text(`${label}:`, { underline: false })
        doc.fontSize(9).text(value, { color: "#555555" }).moveDown(0.3)
        doc.fontSize(10)
      })

      doc.end()
    } catch (error) {
      reject(error)
    }
  })
}
