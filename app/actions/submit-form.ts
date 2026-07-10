"use server"

import sgMail from "@sendgrid/mail"

interface FormData {
  formType: "facility-request" | "work-order" | "key-request" | "entrepreneurship-fund"
  fields: Record<string, string>
}

const recipientEmail = process.env.FORMS_RECIPIENT_EMAIL || "helpdesk@arkansasbaptist.edu"

// In-memory ticket counter for each form type
const ticketCounters: Record<string, number> = {
  "facility-request": 1000,
  "work-order": 2000,
  "key-request": 3000,
  "entrepreneurship-fund": 4000,
}

// Helper to get next ticket number
function getNextTicketNumber(formType: string): number {
  if (!ticketCounters[formType]) {
    ticketCounters[formType] = 1000
  }
  ticketCounters[formType]++
  return ticketCounters[formType]
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
    // Validate environment variables
    if (!process.env.SENDGRID_API_KEY) {
      console.error("[v0] Missing SendGrid API key")
      return {
        success: false,
        error: "Email service is not properly configured. Please contact support.",
      }
    }
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    // Validate required fields
    if (!data.formType || !data.fields) {
      return {
        success: false,
        error: "Invalid form data",
      }
    }

    // Check all fields are non-empty
    const emptyFields = Object.entries(data.fields).filter(([, value]) => !value || value.trim() === "")
    if (emptyFields.length > 0) {
      return {
        success: false,
        error: `Please fill in all required fields: ${emptyFields.map(([key]) => key).join(", ")}`,
      }
    }

    // Get next ticket number
    const ticketNumber = getNextTicketNumber(data.formType)

    // Format form type for display
    const formTypeDisplay = data.formType
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    const emailSubject = `${formTypeDisplay} Form #${ticketNumber}`

    // Format email body with form data
    const emailBody = `New Form Submission: ${formTypeDisplay} (Ticket #${ticketNumber})\n\n${formatFormData(data.fields)}`

    console.log("[v0] Sending email to:", recipientEmail)
    
    // Send email via SendGrid
    const msg = {
      to: recipientEmail,
      from: process.env.SENDGRID_FROM_EMAIL || "noreply@arkansasbaptist.edu",
      subject: emailSubject,
      text: emailBody,
      html: `<pre>${emailBody}</pre>`,
    }

    const response = await sgMail.send(msg)
    console.log("[v0] Email sent successfully:", response[0].statusCode)

    return {
      success: true,
      ticketNumber,
      message: `Your ${formTypeDisplay} has been submitted successfully (Ticket #${ticketNumber})`,
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    const fullError = error instanceof Error ? error.stack : errorMessage
    console.error("[v0] Form submission error:", errorMessage)
    console.error("[v0] Full error details:", fullError)
    
    // Provide more specific error messages
    if (errorMessage.includes("401") || errorMessage.includes("Unauthorized") || errorMessage.includes("Invalid API key")) {
      console.error("[v0] Authentication error detected")
      return {
        success: false,
        error: "Email service authentication failed. Please verify the SendGrid API key.",
      }
    }
    if (errorMessage.includes("ENOTFOUND") || errorMessage.includes("getaddrinfo") || errorMessage.includes("Network")) {
      console.error("[v0] Network error detected")
      return {
        success: false,
        error: "Email service is unreachable. Please try again later.",
      }
    }
    
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
