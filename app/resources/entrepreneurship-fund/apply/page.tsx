"use client"

import { useState } from "react"
import Link from "next/link"
import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Send, AlertTriangle } from "lucide-react"

export default function LoanApplicationPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="min-h-screen">
      <main id="main-content">
        <SectionWrapper>
          <div className="mx-auto max-w-2xl">
            <Link
              href="/resources/entrepreneurship-fund"
              className="mb-6 inline-flex items-center text-sm text-primary hover:underline"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Entrepreneurship Fund
            </Link>

            <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              ABC Entrepreneurship Loan Application
            </h1>
            <p className="mt-2 text-muted-foreground">
              Complete the form below to apply for a micro-loan from the ABC
              Entrepreneurship Fund. All fields are required unless noted.
            </p>

            {/* Limitation Notice */}
            <div className="mt-6 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-950/30">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <div>
                <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
                  Form Submission Limitation
                </p>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                  This form currently displays fields for reference. A backend
                  integration (email service or database) is required to process
                  submissions. Contact{" "}
                  <a
                    href="tel:5014201317"
                    className="underline"
                  >
                    501-420-1317
                  </a>{" "}
                  to apply directly in the meantime.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="mt-8 rounded-lg border bg-card p-8 text-center">
                <h2 className="text-xl font-semibold text-foreground">
                  Application Received
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Thank you for your interest in the ABC Entrepreneurship Fund.
                  A committee member will review your application and contact
                  you.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/resources/entrepreneurship-fund">
                    Return to Fund Information
                  </Link>
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
                {/* Personal Information */}
                <fieldset className="rounded-lg border bg-card p-6">
                  <legend className="px-2 text-lg font-semibold text-foreground">
                    Personal Information
                  </legend>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" required className="mt-1" />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="address">Mailing Address</Label>
                      <Input id="address" name="address" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" name="city" required className="mt-1" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input id="state" name="state" defaultValue="AR" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" name="zip" required className="mt-1" />
                      </div>
                    </div>
                  </div>
                </fieldset>

                {/* ABC Affiliation */}
                <fieldset className="rounded-lg border bg-card p-6">
                  <legend className="px-2 text-lg font-semibold text-foreground">
                    ABC Affiliation
                  </legend>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="studentId">Student ID (if applicable)</Label>
                      <Input id="studentId" name="studentId" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="gradYear">Graduation Year (or Expected)</Label>
                      <Input id="gradYear" name="gradYear" className="mt-1" />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="major">Major / Program of Study</Label>
                      <Input id="major" name="major" className="mt-1" />
                    </div>
                  </div>
                </fieldset>

                {/* Business Information */}
                <fieldset className="rounded-lg border bg-card p-6">
                  <legend className="px-2 text-lg font-semibold text-foreground">
                    Business Information
                  </legend>
                  <div className="mt-4 grid gap-4">
                    <div>
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input id="businessName" name="businessName" required className="mt-1" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="businessType">Type of Business</Label>
                        <Input id="businessType" name="businessType" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="loanAmount">Loan Amount Requested (up to $5,000)</Label>
                        <Input id="loanAmount" name="loanAmount" type="number" min="1" max="5000" required className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="businessDescription">Business Description</Label>
                      <textarea
                        id="businessDescription"
                        name="businessDescription"
                        rows={4}
                        required
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Describe your business model and how the loan funds will be used."
                      />
                    </div>
                  </div>
                </fieldset>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Application
                </Button>
              </form>
            )}
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
