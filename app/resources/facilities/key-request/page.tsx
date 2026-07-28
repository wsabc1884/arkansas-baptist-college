"use client"

import { useState, useRef } from "react"
import Link from "next/link"

import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Send, AlertTriangle, Loader2, CheckCircle } from "lucide-react"
import { submitForm } from "@/app/actions/submit-form"

export default function KeyRequestPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [ticketNumber, setTicketNumber] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      const fields: Record<string, string> = {}

      for (const [key, value] of formData.entries()) {
        if (value instanceof File) continue
        fields[key] = String(value)
      }

      const result = await submitForm({
        formType: "key-request",
        fields,
      })

      if (result.success) {
        setSubmitted(true)
        setTicketNumber(result.ticketNumber || null)
        formRef.current?.reset()
      } else {
        setError(result.error || "Failed to submit form")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      console.error("[v0] Form submission error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <main id="main-content">
        <SectionWrapper>
          <div className="mx-auto max-w-2xl">
            <Link
              href="/resources/facilities"
              className="mb-6 inline-flex items-center text-sm text-primary hover:underline"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Facilities
            </Link>

            <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Key Request Form
            </h1>
            <p className="mt-2 text-muted-foreground">
              Request a key or access card for a campus building or office.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-lg border border-yellow-300 bg-yellow-50 p-4 dark:border-yellow-700 dark:bg-yellow-950/30">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-600" />
              <div>
                <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                  Form Currently Unavailable
                </p>
                <p className="mt-1 text-sm text-yellow-700 dark:text-yellow-400">This form is temporarily disabled while we configure the email system. Please check back soon.</p>
              </div>
            </div>

            {error && (
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-red-300 bg-red-50 p-4 dark:border-red-700 dark:bg-red-950/30">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <div>
                  <p className="text-sm font-medium text-red-800 dark:text-red-300">
                    Submission Error
                  </p>
                  <p className="mt-1 text-sm text-red-700 dark:text-red-400">{error}</p>
                </div>
              </div>
            )}

            {submitted ? (
              <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-950/20">
                <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
                <h2 className="mt-4 text-xl font-semibold text-foreground">Key Request Submitted Successfully</h2>
                <p className="mt-2 text-muted-foreground">
                  Your key request has been received{ticketNumber && ` (Ticket #${ticketNumber})`}. The Facilities department will review and contact you.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/resources/facilities">Return to Facilities</Link>
                </Button>
              </div>
            ) : (
              <form
                ref={formRef}
                className="mt-8 space-y-6"
                onSubmit={handleSubmit}
              >
                <fieldset className="rounded-lg border bg-card p-6">
                  <legend className="px-2 text-lg font-semibold text-foreground">
                    Requestor Information
                  </legend>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="title">Title / Position</Label>
                      <Input id="title" name="title" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Input id="department" name="department" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="supervisor">Supervisor Name</Label>
                      <Input id="supervisor" name="supervisor" required className="mt-1" />
                    </div>
                  </div>
                </fieldset>

                <fieldset className="rounded-lg border bg-card p-6">
                  <legend className="px-2 text-lg font-semibold text-foreground">
                    Key Details
                  </legend>
                  <div className="mt-4 grid gap-4">
                    <div>
                      <Label htmlFor="building">Building Name</Label>
                      <Input id="building" name="building" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="room">Room Number(s)</Label>
                      <Input id="room" name="room" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="reason">Reason for Key Request</Label>
                      <textarea
                        id="reason"
                        name="reason"
                        rows={3}
                        required
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Describe why you need access to this space."
                      />
                    </div>
                  </div>
                </fieldset>

                <Button type="submit" size="lg" className="w-full" disabled={true}>
                  <Send className="mr-2 h-4 w-4" />
                  Form Temporarily Unavailable
                </Button>
              </form>
            )}
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
