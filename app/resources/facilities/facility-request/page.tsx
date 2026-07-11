"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Send, AlertTriangle, Loader2, CheckCircle } from "lucide-react"
import { submitForm } from "@/app/actions/submit-form"
import { NumberPad } from "@/components/number-pad"

const EVENT_TYPES = [
  "Meeting",
  "Conference",
  "Worship Service / Convocation",
  "Concert / Performance",
  "Athletic Event",
  "Banquet / Reception",
  "Class / Workshop",
  "Community Event",
  "Fundraiser",
  "Other",
]

const FACILITY_SPACES = [
  "Administration Building",
  "J.C. Oliver Library",
  "Academic Building",
  "Student Center",
  "Chapel",
  "Gymnasium",
  "Athletic Field",
  "Residence Hall Common Area",
  "Other",
]

const REQUIRED_FIELDS = [
  "requesterName",
  "department",
  "phone",
  "email",
  "eventTitle",
  "eventType",
  "eventDate",
  "startTime",
  "endTime",
  "expectedAttendance",
  "admissionFee",
  "coSponsorship",
  "facilitySpace",
  "custodialSupport",
  "securityNeeded",
  "technologySupport",
  "depositPaid",
  "requesterSignature",
  "signatureDate",
]

const selectClasses =
  "mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

export default function FacilityRequestPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [ticketNumber, setTicketNumber] = useState<number | null>(null)
  const [attendeesValue, setAttendeesValue] = useState("")
  const [showNumberPad, setShowNumberPad] = useState(false)
  const [campusPhoneValue, setCampusPhoneValue] = useState("")
  const [showCampusPad, setShowCampusPad] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const attendeesInputRef = useRef<HTMLInputElement>(null)
  const campusPhoneInputRef = useRef<HTMLInputElement>(null)

  const handleAttendeesChange = (newValue: string) => {
    const numericValue = newValue.replace(/\D/g, "")
    setAttendeesValue(numericValue)
    if (attendeesInputRef.current) attendeesInputRef.current.value = numericValue
  }

  const handleAttendeesInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttendeesValue(e.target.value.replace(/\D/g, ""))
  }

  const handleCampusPhoneChange = (newValue: string) => {
    const formatted = formatPhoneNumber(newValue)
    setCampusPhoneValue(formatted)
    if (campusPhoneInputRef.current) campusPhoneInputRef.current.value = formatted
  }

  const handleCampusPhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCampusPhoneValue(formatPhoneNumber(e.target.value))
  }

  const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, "")
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = formatPhoneNumber(e.target.value)
  }

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

      // Ensure checkbox keys are always present (unchecked ones are absent in FormData)
      for (const key of ["podium", "projector", "microphone", "stage", "floorTarp"]) {
        fields[key] = fields[key] ? "Yes" : "No"
      }

      // Combine the split campus contact name + phone into a single value for the PDF
      const campusName = (fields.campusContactName || "").trim()
      const campusPhone = (fields.campusContactPhone || "").trim()
      fields.campusContact = [campusName, campusPhone].filter(Boolean).join(" — ") || "—"

      // Client-side required validation
      const missing = REQUIRED_FIELDS.filter((k) => !fields[k] || fields[k].trim() === "")
      if (missing.length > 0) {
        setError("Please fill in all required fields (marked with *).")
        setLoading(false)
        return
      }

      const result = await submitForm({
        formType: "facility-request",
        fields,
        requiredFields: REQUIRED_FIELDS,
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

            <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Facility Request Form</h1>
            <p className="mt-2 text-muted-foreground">
              Please complete this form three weeks prior to your requested date. All requests are subject to approval
              and availability. Incomplete forms will not be processed.
            </p>

            <div className="mt-4 rounded-lg border border-border bg-muted/40 p-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Legal Disclaimer:</strong> Arkansas Baptist College reserves the
                right to review, approve, or deny any facility request at its sole discretion. Submission of this request
                form does not guarantee approval or availability of the requested space. The College further retains the
                right to cancel or revoke approval if policies, procedures, or institutional interests are compromised.
              </p>
            </div>

            {error && (
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-red-300 bg-red-50 p-4 dark:border-red-700 dark:bg-red-950/30">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <div>
                  <p className="text-sm font-medium text-red-800 dark:text-red-300">Submission Error</p>
                  <p className="mt-1 text-sm text-red-700 dark:text-red-400">{error}</p>
                </div>
              </div>
            )}

            {submitted ? (
              <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-950/20">
                <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
                <h2 className="mt-4 text-xl font-semibold text-foreground">Request Submitted Successfully</h2>
                <p className="mt-2 text-muted-foreground">
                  Your facility request has been received{ticketNumber && ` (Ticket #${ticketNumber})`}. The Facilities
                  department will review your request and contact you shortly.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/resources/facilities">Return to Facilities</Link>
                </Button>
              </div>
            ) : (
              <form ref={formRef} className="mt-8 space-y-6" onSubmit={handleSubmit}>
                {/* Requester Information */}
                <fieldset className="rounded-lg border bg-card p-6">
                  <legend className="px-2 text-lg font-semibold text-foreground">Requester Information</legend>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="requesterName">Name *</Label>
                      <Input id="requesterName" name="requesterName" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="department">Department / Organization *</Label>
                      <Input id="department" name="department" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        placeholder="XXX-XXX-XXXX"
                        onChange={handlePhoneChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" className="mt-1" />
                    </div>
                  </div>
                </fieldset>

                {/* Event Information */}
                <fieldset className="rounded-lg border bg-card p-6">
                  <legend className="px-2 text-lg font-semibold text-foreground">Event Information</legend>
                  <div className="mt-4 grid gap-4">
                    <div>
                      <Label htmlFor="eventTitle">Event Title / Name *</Label>
                      <Input id="eventTitle" name="eventTitle" className="mt-1" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="eventType">Type of Event *</Label>
                        <select id="eventType" name="eventType" className={selectClasses} defaultValue="">
                          <option value="" disabled>
                            Choose an item
                          </option>
                          {EVENT_TYPES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="eventDate">Date(s) Requested *</Label>
                        <Input id="eventDate" name="eventDate" type="date" className="mt-1" />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <Label htmlFor="startTime">Start Time *</Label>
                        <Input
                          id="startTime"
                          name="startTime"
                          type="time"
                          step="900"
                          defaultValue="08:00"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="endTime">End Time *</Label>
                        <Input
                          id="endTime"
                          name="endTime"
                          type="time"
                          step="900"
                          defaultValue="17:00"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="expectedAttendance">Expected Attendance *</Label>
                        <Input
                          ref={attendeesInputRef}
                          id="expectedAttendance"
                          name="expectedAttendance"
                          type="text"
                          inputMode="numeric"
                          placeholder="0"
                          value={attendeesValue}
                          onChange={handleAttendeesInputChange}
                          onFocus={() => setShowNumberPad(true)}
                          className="mt-1"
                        />
                        <NumberPad
                          isOpen={showNumberPad}
                          currentValue={attendeesValue}
                          onInput={handleAttendeesChange}
                          onClose={() => setShowNumberPad(false)}
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="admissionFee">Admission Fee / Ticketed Event *</Label>
                        <select id="admissionFee" name="admissionFee" className={selectClasses} defaultValue="">
                          <option value="" disabled>
                            Choose an item
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="coSponsorship">Co-Sponsorship Requested *</Label>
                        <select id="coSponsorship" name="coSponsorship" className={selectClasses} defaultValue="">
                          <option value="" disabled>
                            Choose an item
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="campusContactName">Campus Contact Person Name</Label>
                        <Input id="campusContactName" name="campusContactName" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="campusContactPhone">Campus Contact Telephone Number</Label>
                        <Input
                          ref={campusPhoneInputRef}
                          id="campusContactPhone"
                          name="campusContactPhone"
                          type="text"
                          inputMode="numeric"
                          placeholder="XXX-XXX-XXXX"
                          value={campusPhoneValue}
                          onChange={handleCampusPhoneInputChange}
                          onFocus={() => setShowCampusPad(true)}
                          className="mt-1"
                        />
                        <NumberPad
                          isOpen={showCampusPad}
                          currentValue={campusPhoneValue.replace(/\D/g, "")}
                          onInput={handleCampusPhoneChange}
                          onClose={() => setShowCampusPad(false)}
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="facilitySpace">Facility / Space Requested *</Label>
                        <select id="facilitySpace" name="facilitySpace" className={selectClasses} defaultValue="">
                          <option value="" disabled>
                            Choose an item
                          </option>
                          {FACILITY_SPACES.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="facilitySpecify">Please Specify</Label>
                        <Input id="facilitySpecify" name="facilitySpecify" className="mt-1" />
                      </div>
                    </div>
                  </div>
                </fieldset>

                {/* Setup & Equipment */}
                <fieldset className="rounded-lg border bg-card p-6">
                  <legend className="px-2 text-lg font-semibold text-foreground">Setup &amp; Equipment Needs</legend>
                  <div className="mt-4 grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="tablesQty">Tables (Quantity)</Label>
                        <Input id="tablesQty" name="tablesQty" type="text" inputMode="numeric" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="chairsQty">Chairs (Quantity)</Label>
                        <Input id="chairsQty" name="chairsQty" type="text" inputMode="numeric" className="mt-1" />
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        { name: "podium", label: "Podium" },
                        { name: "projector", label: "Projector / Screen" },
                        { name: "microphone", label: "Microphone / Sound System" },
                        { name: "stage", label: "Stage / Platform" },
                        { name: "floorTarp", label: "Floor Tarp (Gym Only)" },
                      ].map((item) => (
                        <label
                          key={item.name}
                          htmlFor={item.name}
                          className="flex items-center gap-3 rounded-md border border-input bg-background px-3 py-2 text-sm"
                        >
                          <input
                            type="checkbox"
                            id={item.name}
                            name={item.name}
                            value="Yes"
                            className="h-4 w-4 rounded border-input"
                          />
                          {item.label}
                        </label>
                      ))}
                    </div>
                    <div>
                      <Label htmlFor="setupOther">Other (please specify)</Label>
                      <Input id="setupOther" name="setupOther" className="mt-1" />
                    </div>
                  </div>
                </fieldset>

                {/* Additional Services */}
                <fieldset className="rounded-lg border bg-card p-6">
                  <legend className="px-2 text-lg font-semibold text-foreground">Additional Services</legend>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {[
                      { name: "custodialSupport", label: "Custodial Support Needed? *" },
                      { name: "securityNeeded", label: "Security Needed? *" },
                      { name: "technologySupport", label: "Technology Support Needed? *" },
                      { name: "depositPaid", label: "Facility Deposit Fee Paid to Business Office? *" },
                    ].map((item) => (
                      <div key={item.name}>
                        <Label htmlFor={item.name}>{item.label}</Label>
                        <select id={item.name} name={item.name} className={selectClasses} defaultValue="">
                          <option value="" disabled>
                            Choose an item
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    *If a deposit fee has been paid, please attach a copy of the receipt verifying fees have been paid.
                  </p>
                  <div className="mt-4">
                    <Label htmlFor="insuranceProvider">
                      Outside Organization &mdash; Proof / Name of Insurance Provided
                    </Label>
                    <Input id="insuranceProvider" name="insuranceProvider" className="mt-1" />
                  </div>
                </fieldset>

                {/* Signature */}
                <fieldset className="rounded-lg border bg-card p-6">
                  <legend className="px-2 text-lg font-semibold text-foreground">Signature</legend>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="requesterSignature">Requester&apos;s Signature (type full name) *</Label>
                      <Input id="requesterSignature" name="requesterSignature" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="signatureDate">Date *</Label>
                      <Input id="signatureDate" name="signatureDate" type="date" className="mt-1" />
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Department Head approval will be completed by the College after submission.
                  </p>
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
