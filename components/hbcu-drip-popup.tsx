"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

// Show this promo until 9:00 PM Central Time on Wednesday, Aug 19, 2026.
const EXPIRES_AT = new Date("2026-08-19T21:00:00-05:00")

export function HbcuDripPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (Date.now() >= EXPIRES_AT.getTime()) return

    setOpen(true)

    // Auto-close exactly at the 9 PM cutoff if the page is still open.
    const msUntilExpiry = EXPIRES_AT.getTime() - Date.now()
    const timer = setTimeout(() => setOpen(false), msUntilExpiry)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] max-w-md overflow-y-auto p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>HBCU Drip Wednesday at Arkansas Baptist College</DialogTitle>
          <DialogDescription>
            Colors. Culture. Community. Show up and stand out for HBCU Drip Wednesday. Wear your best drip and represent
            the Buffaloes.
          </DialogDescription>
        </DialogHeader>
        <Image
          src="/images/hbcu-drip-wednesday.jpg"
          alt="HBCU Drip Wednesday flyer for Arkansas Baptist College Buffaloes — Colors, Culture, Community. Show up, stand out, all drip, all pride."
          width={576}
          height={864}
          className="h-auto w-full rounded-lg"
          priority
        />
      </DialogContent>
    </Dialog>
  )
}
