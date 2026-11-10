"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// Shows on each fresh visit until the end of Friday, November 13, 2026.
// Arkansas is Central Time; mid-November is CST (UTC-6).
const DEADLINE = new Date("2026-11-13T23:59:59-06:00")
const SESSION_KEY = "abc-football-leadership-change-dismissed"

const ORANGE = "#e8962e"

export function LeadershipChangePopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (Date.now() > DEADLINE.getTime()) return
    try {
      if (window.sessionStorage.getItem(SESSION_KEY) === "1") return
    } catch {
      // sessionStorage unavailable -- still show the popup.
    }
    setOpen(true)
  }, [])

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (!next) {
      try {
        window.sessionStorage.setItem(SESSION_KEY, "1")
      } catch {
        // ignore
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="flex max-h-[90vh] flex-col gap-0 overflow-hidden border-0 p-0 sm:max-w-2xl [&>button]:text-primary-foreground [&>button]:opacity-90">
        <header className="flex items-center gap-4 bg-primary px-6 py-5 text-primary-foreground">
          <Image
            src="/logo.jpg"
            alt=""
            width={64}
            height={64}
            className="h-16 w-16 shrink-0 rounded-md bg-background object-contain p-1"
          />
          <div className="flex flex-col gap-1">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: ORANGE }}
            >
              Buffaloe Football
            </p>
            <DialogTitle className="font-serif text-xl leading-tight text-balance sm:text-2xl">
              Statement Regarding Change of Leadership
            </DialogTitle>
          </div>
        </header>
        <div className="h-1.5 w-full" style={{ backgroundColor: ORANGE }} aria-hidden="true" />

        <div className="flex flex-col gap-4 overflow-y-auto px-6 py-6 text-sm leading-relaxed text-foreground sm:text-base">
          <DialogDescription className="text-sm leading-relaxed text-foreground sm:text-base">
            The Arkansas Baptist College football team concluded the 2026 football season fielding
            its most competitive team since joining the National Association of Intercollegiate
            Athletics (NAIA). The future is extremely bright. After birthing and leading the football
            program since 2007, Coach Richard Wilson has passed the baton to Ashdone Bailey, an
            Arkadelphia native, former Buffaloe and the program&apos;s current Associate Head
            Football Coach.
          </DialogDescription>

          <p>
            Coach Wilson will assume additional administrative and teaching duties for the College
            while also mentoring Coach Bailey who takes over the daily operations of leading the
            football program.
          </p>

          <blockquote className="flex flex-col gap-2 rounded-r-md border-l-4 border-primary bg-accent px-4 py-3 text-accent-foreground">
            <p className="italic">
              &ldquo;Coach Bailey has been the rock of this program for several years...there is
              nobody more prepared for the daily challenges associated with leading this football
              program than him. I am certain he will elevate the program sooner than later. He is
              prepared for this opportunity and I am glad to continue this journey with him.&rdquo;
            </p>
            <cite className="text-sm font-semibold not-italic">&mdash; Coach Richard Wilson</cite>
          </blockquote>

          <blockquote className="flex flex-col gap-2 rounded-r-md border-l-4 border-primary bg-accent px-4 py-3 text-accent-foreground">
            <p className="italic">
              &ldquo;This is a dream come true for me. Where God guides, He provides. We want to
              develop quality football players and raise young men who will aspire to pursue and live
              out their Godly purpose by committing to join the Buffaloe Family as I did when
              graduating high school. The best is yet to come and I am totally committed to making
              this opportunity count.&rdquo;
            </p>
            <cite className="text-sm font-semibold not-italic">&mdash; Coach Ashdone Bailey</cite>
          </blockquote>

          <p>
            Buffaloe Family, let&apos;s get on Board with Bailey as he takes the baton from Coach
            Wilson and navigates the next steps in bringing a championship-caliber football team to
            1600 Dr. Martin Luther King Drive.
          </p>

          <p className="font-serif text-lg font-semibold text-primary">
            The best is yet to come. Buff Up!
          </p>
        </div>

        <footer className="flex justify-end border-t border-border bg-muted/40 px-6 py-4">
          <Button onClick={() => handleOpenChange(false)}>Buff Up!</Button>
        </footer>
      </DialogContent>
    </Dialog>
  )
}
