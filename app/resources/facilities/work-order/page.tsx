"use client"

import { useState, useRef } from "react"
import Link from "next/link"

import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Send, AlertTriangle, CheckCircle } from "lucide-react"
import { submitForm } from "@/app/actions/submit-form"
import { BuildingSelector } from "@/components/building-selector"
import { PhoneDialPad } from "@/components/phone-dial-pad"
import { RequestorNameFields } from "@/components/requestor-name-fields"

// Fields that must be present before the work order can be submitted.
const REQUIRED_FIELDS: Record<string, string> = {
  firstName: "First Name",
  lastName: "Last Name",
  department: "Department",
  email: "Email Address",
  phone: "Phone Number",
  building: "Building Name",
  room: "Room Number",
  priority: "Priority Level",
  description: "Description of Issue",
}

export default function WorkOrderPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [ticketNumber, setTicketNumber] = useState<number | null>(null)
  const [showPriorityPrompt, setShowPriorityPrompt] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    const formData = new FormData(e.currentTarget)
    const fields: Record<string, string> = {}

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) continue
      fields[key] = String(value)
    }

    // If no priority was selected, show the on-screen popup and stop here.
    if (!fields.priority || fields.priority.trim() === "") {
      setShowPriorityPrompt(true)
      return
    }

    // Block submission if any required information is missing.
    const missing = Object.keys(REQUIRED_FIELDS).filter(
      (key) => !fields[key] || fields[key].trim() === "",
    )
    if (missing.length > 0) {
      setError(
        `Please fill in all required fields: ${missing
          .map((key) => REQUIRED_FIELDS[key])
          .join(", ")}.`,
      )
      return
    }

    setLoading(true)

    try {
      const result = await submitForm({
        formType: "work-order",
        fields,
        requiredFields: Object.keys(REQUIRED_FIELDS),
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
              Work Order Request
            </h1>
            <p className="mt-2 text-muted-foreground">
              Report a maintenance issue or request a repair on campus.
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
                <h2 className="mt-4 text-xl font-semibold text-foreground">Work Order Submitted Successfully</h2>
                <p className="mt-2 text-muted-foreground">
                  Your work order has been received{ticketNumber && ` (Ticket #${ticketNumber})`}. The Facilities department will review and dispatch maintenance as needed.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/resources/facilities">Return to Facilities</Link>
                </Button>
              </div>
            ) : (
              <form
                ref={formRef}
                noValidate
                className="mt-8 space-y-6"
                onSubmit={handleSubmit}
              >
                <fieldset className="rounded-lg border bg-card p-6">
                  <legend className="px-2 text-lg font-semibold text-foreground">
                    Requestor Information
                  </legend>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <RequestorNameFields />
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Input id="department" name="department" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" required className="mt-1" />
                    </div>
                    <PhoneDialPad name="phone" />
                  </div>
                </fieldset>

                <fieldset className="rounded-lg border bg-card p-6">
                  <legend className="px-2 text-lg font-semibold text-foreground">
                    Work Order Details
                  </legend>
                  <div className="mt-4 grid gap-4">
                    <BuildingSelector name="building" label="Building Name" />
                    <div>
                      <Label htmlFor="room">Room Number</Label>
                      <Input id="room" name="room" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="priority">Priority Level</Label>
                      <select
                        id="priority"
                        name="priority"
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select priority</option>
                        <option value="low">Low - Routine maintenance</option>
                        <option value="medium">Medium - Needs attention soon</option>
                        <option value="high">High - Urgent repair needed</option>
                        <option value="emergency">Emergency - Safety hazard</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="description">Description of Issue</Label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        required
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Describe the maintenance issue or repair needed in detail."
                      />
                    </div>
                  </div>
                </fieldset>

                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  <Send className="mr-2 h-4 w-4" />
                  {loading ? "Submitting..." : "Submit Work Order"}
                </Button>
              </form>
            )}

            {showPriorityPrompt && (
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="priority-prompt-title"
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                onClick={() => setShowPriorityPrompt(false)}
              >
                <div
                  className="w-full max-w-sm rounded-lg border bg-card p-6 text-center shadow-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <AlertTriangle className="mx-auto h-10 w-10 text-amber-500" />
                  <h2 id="priority-prompt-title" className="mt-4 text-lg font-semibold text-foreground">
                    Priority Level Required
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Please select a priority level for this work order before submitting.
                  </p>
                  <Button className="mt-6 w-full" onClick={() => setShowPriorityPrompt(false)}>
                    Select Priority
                  </Button>
                </div>
              </div>
            )}
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
