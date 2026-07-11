import fs from "fs"
import { createCanvas } from "@napi-rs/canvas"
const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs")
const data = new Uint8Array(fs.readFileSync("/tmp/facility-fixed.pdf"))
const doc = await pdfjs.getDocument({ data, useSystemFonts: true }).promise
for (let p = 1; p <= doc.numPages; p++) {
  const page = await doc.getPage(p)
  const viewport = page.getViewport({ scale: 1.4 })
  const canvas = createCanvas(viewport.width, viewport.height)
  const ctx = canvas.getContext("2d")
  ctx.fillStyle = "white"
  ctx.fillRect(0, 0, viewport.width, viewport.height)
  await page.render({ canvasContext: ctx, viewport, canvasFactory: {
    create: (w, h) => { const c = createCanvas(w, h); return { canvas: c, context: c.getContext("2d") } },
    reset: (cc, w, h) => { cc.canvas.width = w; cc.canvas.height = h },
    destroy: (cc) => { cc.canvas.width = 0; cc.canvas.height = 0 },
  }}).promise
  fs.writeFileSync(`/tmp/fxpage-${p}.png`, canvas.toBuffer("image/png"))
  console.log("rendered page", p)
}
