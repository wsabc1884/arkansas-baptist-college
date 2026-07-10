"use server"

import { Resend } from "resend"
import { kv } from "@vercel/kv"

interface FormData {
  formType: "facility-request" | "work-order" | "key-request" | "entrepreneurship-fund"
  fields: Record<string, string>
}

const recipientEmail = process.env.FORMS_RECIPIENT_EMAIL || "helpdesk@arkansasbaptist.edu"

// Helper to get next ticket number
async function getNextTicketNumber(formType: string): Promise<number> {
  const key = `form_tickets_${formType}`
  const current = await kv.get<number>(key)
  const next = (current || 0) + 1
  await kv.set(key, next)
  return next
}

// Helper to format form data as readable text
function formatFormData(fields: Record<string, string>): string {
  let text = ""
  Object.entries(fields).forEach(([key, value]) => {
    const label = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim()
    text += `${label}: ${value}\n`
  })
  return text
}

// Helper to generate PDF content as base64
function generatePDFContent(formType: string, ticketNumber: number, fields: Record<string, string>): string {
  // Simple PDF generation - in production, you might use a library like pdfkit
  // For now, we'll format the data and let email handle it
  const formattedData = formatFormData(fields)
  return formattedData
}

export async function submitForm(data: FormData) {
  try {
    console.log("[v0] Form submission started for:", data.formType)
    console.log("[v0] API Key present:", !!process.env.RESEND_API_KEY)
    
    // Initialize Resend here (at runtime) instead of module level
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Validate required fields
    if (!data.formType || !data.fields) {
      console.log("[v0] Validation failed - missing formType or fields")
      return {
        success: false,
        error: "Invalid form data",
      }
    }

    // Note: Fields are optional since we removed required attributes for testing
    // In production, you may want to validate specific fields

    // Get next ticket number
    console.log("[v0] Getting ticket number for:", data.formType)
    const ticketNumber = await getNextTicketNumber(data.formType)
    console.log("[v0] Ticket number:", ticketNumber)

    // Format form type for display
    const formTypeDisplay = data.formType
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    const emailSubject = `${formTypeDisplay} Form #${ticketNumber}`

    // Format email body with form data
    const emailBody = `New Form Submission: ${formTypeDisplay} (Ticket #${ticketNumber})\n\n${formatFormData(data.fields)}`

    // Send email with Resend
    console.log("[v0] Sending email to:", recipientEmail)
    console.log("[v0] Email subject:", emailSubject)
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: recipientEmail,
      subject: emailSubject,
      text: emailBody,
      html: `<pre>${emailBody}</pre>`,
    })

    console.log("[v0] Resend response:", response)
    
    if (response.error) {
      console.error("[v0] Resend error:", response.error)
      return {
        success: false,
        error: "Failed to submit form. Please try again.",
      }
    }
    
    console.log("[v0] Email sent successfully with ID:", response.id)

    return {
      success: true,
      ticketNumber,
      message: `Your ${formTypeDisplay} has been submitted successfully (Ticket #${ticketNumber})`,
    }
  } catch (error) {
    console.error("[v0] Form submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
