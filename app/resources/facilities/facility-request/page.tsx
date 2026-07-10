"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Send, AlertTriangle, Loader2, CheckCircle } from "lucide-react"
import { submitForm } from "@/app/actions/submit-form"

export default function FacilityRequestPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [ticketNumber, setTicketNumber] = useState<number | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    // Set default time inputs to 8:00 AM - 5:00 PM
    const startTimeInput = document.getElementById("startTime") as HTMLInputElement
    const endTimeInput = document.getElementById("endTime") as HTMLInputElement

    if (startTimeInput && !startTimeInput.value) {
      startTimeInput.value = "08:00"
    }
    if (endTimeInput && !endTimeInput.value) {
      endTimeInput.value = "17:00"
    }
  }, [])

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "")
    
    // Format as XXX-XXX-XXXX
    if (digits.length <= 3) {
      return digits
    } else if (digits.length <= 6) {
      return `${digits.slice(0, 3)}-${digits.slice(3)}`
    } else {
      return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    e.target.value = formatted
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      const fields: Record<string, string> = {}

      // Collect all form fields
      for (const [key, value] of formData.entries()) {
        if (value instanceof File) continue
        fields[key] = String(value)
      }

      const result = await submitForm({
        formType: "facility-request",
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
              Facility Request Form
            </h1>
            <p className="mt-2 text-muted-foreground">
              Reserve a room or campus space for an event or activity.
            </p>

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
                <h2 className="mt-4 text-xl font-semibold text-foreground">Request Submitted Successfully</h2>
                <p className="mt-2 text-muted-foreground">
                  Your facility request has been received{ticketNumber && ` (Ticket #${ticketNumber})`}. The Facilities department will review your request and contact you shortly.
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
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="department">Department / Organization</Label>
                      <Input id="department" name="department" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" onChange={handlePhoneChange} className="mt-1" placeholder="XXX-XXX-XXXX" />
                    </div>
                  </div>
                </fieldset>

                <fieldset className="rounded-lg border bg-card p-6">
                  <legend className="px-2 text-lg font-semibold text-foreground">
                    Event Details
                  </legend>
                  <div className="mt-4 grid gap-4">
                    <div>
                      <Label htmlFor="eventName">Event / Activity Name</Label>
                      <Input id="eventName" name="eventName" className="mt-1" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="facility">Facility</Label>
                        <Input id="facility" name="facility" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="room">Room Requested</Label>
                        <Input id="room" name="room" className="mt-1" />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="attendees">Expected Number of Attendees</Label>
                        <Input 
                          id="attendees" 
                          name="attendees" 
                          type="number" 
                          min="1" 
                          className="mt-1" 
                          inputMode="numeric"
                          placeholder="Enter number"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="date">Date of Event</Label>
                      <Input 
                        id="date" 
                        name="date" 
                        type="date" 
                        className="mt-1"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="startTime">Start Time</Label>
                        <Input id="startTime" name="startTime" type="time" step="900" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="endTime">End Time</Label>
                        <Input id="endTime" name="endTime" type="time" step="900" className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="setupNeeds">Setup / Equipment Needs</Label>
                      <textarea
                        id="setupNeeds"
                        name="setupNeeds"
                        rows={3}
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Describe any tables, chairs, AV equipment, or other setup requirements."
                      />
                    </div>
                  </div>
                </fieldset>

                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Facility Request
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
