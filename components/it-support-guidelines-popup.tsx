"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { LifeBuoy, IdCard, User, Phone, FileText, ShieldCheck } from "lucide-react"

const guidelines = [
  {
    icon: IdCard,
    text: "Include your Student ID so we can verify your account and locate your records quickly.",
  },
  {
    icon: User,
    text: "Provide your first and last name exactly as they appear on your student record.",
  },
  {
    icon: Phone,
    text: "Share a phone number where you can be reached, if applicable.",
  },
  {
    icon: FileText,
    text: "Describe your problem in as much detail as possible, including any error messages and the steps that led to the issue.",
  },
  {
    icon: ShieldCheck,
    text: "Please note: for security and identity-verification requirements, some issues may require you to visit campus in person before assistance can be provided.",
  },
]

export function ITSupportGuidelinesPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            <LifeBuoy className="h-3.5 w-3.5" aria-hidden="true" />
            Before You Submit a Ticket
          </span>
          <DialogTitle className="font-serif text-2xl text-balance">Submitting an IT Support Ticket</DialogTitle>
          <DialogDescription className="text-pretty">
            To help our Technology Services team assist you as efficiently as possible, please include the following
            information when you submit a support ticket.
          </DialogDescription>
        </DialogHeader>

        <ul className="space-y-3">
          {guidelines.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.text} className="flex items-start gap-3 rounded-lg border border-border bg-muted/40 p-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{item.text}</span>
              </li>
            )
          })}
        </ul>

        <DialogFooter>
          <Button onClick={() => setOpen(false)}>I Understand</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
