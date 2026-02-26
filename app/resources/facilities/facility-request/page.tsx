"use client"

import { useState } from "react"
import Link from "next/link"
import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Send, AlertTriangle } from "lucide-react"

export default function FacilityRequestPage() {
  const [submitted, setSubmitted] = useState(false)

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

            <div className="mt-6 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-950/30">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <div>
                <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
                  Form Submission Limitation
                </p>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                  This form currently displays fields for reference. A backend
                  integration (email service or database) is required to process
                  submissions. Contact Facilities at{" "}
                  <a href="tel:5014201200" className="underline">501-420-1200</a>{" "}
                  to submit requests directly in the meantime.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="mt-8 rounded-lg border bg-card p-8 text-center">
                <h2 className="text-xl font-semibold text-foreground">Request Submitted</h2>
                <p className="mt-2 text-muted-foreground">
                  Thank you. The Facilities department will review your request and contact you.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/resources/facilities">Return to Facilities</Link>
                </Button>
              </div>
            ) : (
              <form
                className="mt-8 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
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
                      <Label htmlFor="department">Department / Organization</Label>
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
                  </div>
                </fieldset>

                <fieldset className="rounded-lg border bg-card p-6">
                  <legend className="px-2 text-lg font-semibold text-foreground">
                    Event Details
                  </legend>
                  <div className="mt-4 grid gap-4">
                    <div>
                      <Label htmlFor="eventName">Event / Activity Name</Label>
                      <Input id="eventName" name="eventName" required className="mt-1" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="facilityName">Facility / Room Requested</Label>
                        <Input id="facilityName" name="facilityName" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="attendees">Expected Number of Attendees</Label>
                        <Input id="attendees" name="attendees" type="number" min="1" required className="mt-1" />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="date">Date of Event</Label>
                        <Input id="date" name="date" type="date" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="time">Time (Start - End)</Label>
                        <Input id="time" name="time" placeholder="e.g. 9:00 AM - 5:00 PM" required className="mt-1" />
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

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Facility Request
                </Button>
              </form>
            )}
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
