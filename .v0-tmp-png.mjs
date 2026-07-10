import { pdfToPng } from "pdf-to-png-converter"
import fs from "fs"
const pages = await pdfToPng("/tmp/fac.pdf", { viewportScale: 2.0 })
for (const p of pages) fs.writeFileSync(`/tmp/facpg-${p.pageNumber}.png`, p.content)
console.log("wrote", pages.length)
