"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

// The popup shows on every fresh visit until this moment, then never again.
// Arkansas is in Central Time; October 23 is still CDT (UTC-5). Change the date
// here to adjust (or remove) the deadline.
const DEADLINE = new Date("2026-10-23T23:59:59-05:00")

// Once closed, stay closed for the rest of this browser tab session so it does
// not re-open every time the visitor navigates back to the home page.
const SESSION_KEY = "abc-spring-2027-registration-dismissed"

export function WelcomeHomePopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (Date.now() > DEADLINE.getTime()) return

    let dismissed = false
    try {
      dismissed = window.sessionStorage.getItem(SESSION_KEY) === "1"
    } catch {
      // sessionStorage unavailable (private mode) -- still show the popup.
    }
    if (dismissed) return

    setOpen(true)
  }, [])

  useEffect(() => {
    if (!open) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  function handleClose() {
    setOpen(false)
    try {
      window.sessionStorage.setItem(SESSION_KEY, "1")
    } catch {
      // ignore
    }
  }

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Spring 2027 registration schedule"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative my-auto w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-lg ring-1 ring-border transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3d1a5c]"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <Image
          src="/popup-spring-registration.jpg"
          alt="Secure your spring schedule! Spring 2027 Registration, October 19-23, 2026, 9:00 a.m. to 4:00 p.m. daily at the Arkansas Baptist Student Center (Building 7). Monday, Oct 19: Band and New Students (non-athletes). Tuesday, Oct 20: Men's and Women's Basketball, Track, and Men's Baseball. Wednesday, Oct 21: Football offensive players. Thursday, Oct 22: Football defensive players. Friday, Oct 23: Last day to pre-register. Register according to your assigned student group. Office of Enrollment Management and Student Affairs."
          width={1008}
          height={1560}
          priority
          className="h-auto max-h-[90vh] w-full rounded-xl object-contain shadow-2xl"
        />
      </div>
    </div>
  )
}
