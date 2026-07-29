"use client"

import { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Delete } from "lucide-react"

// Formats up to 10 digits as (xxx) xxx-xxxx for display.
function formatPhone(raw: string) {
  const n = raw.replace(/\D/g, "").slice(0, 10)
  if (n.length === 0) return ""
  if (n.length < 4) return `(${n}`
  if (n.length < 7) return `(${n.slice(0, 3)}) ${n.slice(3)}`
  return `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6)}`
}

interface PhoneDialPadProps {
  /** Form field name written to the hidden input (e.g. "phone"). */
  name: string
  label?: string
}

// Phone input that reveals an on-screen dial pad when the field is clicked or
// focused, and closes it when any other part of the page is clicked.
export function PhoneDialPad({ name, label = "Phone Number" }: PhoneDialPadProps) {
  const [digits, setDigits] = useState("")
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  // Close the dial pad on any click/focus outside of the wrapper.
  useEffect(() => {
    if (!open) return
    function onOutside(e: MouseEvent | FocusEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onOutside)
    document.addEventListener("focusin", onOutside)
    return () => {
      document.removeEventListener("mousedown", onOutside)
      document.removeEventListener("focusin", onOutside)
    }
  }, [open])

  const press = (key: string) => {
    if (key === "back") {
      setDigits((prev) => prev.slice(0, -1))
    } else if (key === "clear") {
      setDigits("")
    } else {
      setDigits((prev) => (prev.length >= 10 ? prev : prev + key))
    }
  }

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

  return (
    <div ref={wrapRef} className="relative">
      <Label htmlFor={name}>Phone Number</Label>
      {/* Hidden input carries the raw digits through the existing FormData flow */}
      <input type="hidden" name={name} value={digits} />
      <Input
        id={name}
        value={formatPhone(digits)}
        readOnly
        placeholder="(000) 000-0000"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen(true)}
        onFocus={() => setOpen(true)}
        className="mt-1 cursor-pointer"
      />
      {open && (
        <div
          role="dialog"
          aria-label="Dial pad"
          className="absolute left-0 top-full z-50 mt-2 w-60 rounded-lg border bg-popover p-3 shadow-lg"
        >
          <div className="grid grid-cols-3 gap-2">
            {keys.map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => press(k)}
                className="rounded-md border border-input bg-background py-3 text-lg font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {k}
              </button>
            ))}
            <button
              type="button"
              onClick={() => press("clear")}
              className="rounded-md border border-input bg-background py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => press("0")}
              className="rounded-md border border-input bg-background py-3 text-lg font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              0
            </button>
            <button
              type="button"
              onClick={() => press("back")}
              aria-label="Delete last digit"
              className="flex items-center justify-center rounded-md border border-input bg-background py-3 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Delete className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
