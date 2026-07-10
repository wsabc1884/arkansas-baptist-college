"use server"

import nodemailer from "nodemailer"
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
    // Validate environment variables
    if (!process.env.OFFICE365_EMAIL || !process.env.OFFICE365_PASSWORD) {
      console.error("[v0] Missing Office 365 credentials")
      return {
        success: false,
        error: "Email service is not properly configured. Please contact support.",
      }
    }

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
    const ticketNumber = await getNextTicketNumber(data.formType)

    // Format form type for display
    const formTypeDisplay = data.formType
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    const emailSubject = `${formTypeDisplay} Form #${ticketNumber}`

    // Format email body with form data
    const emailBody = `New Form Submission: ${formTypeDisplay} (Ticket #${ticketNumber})\n\n${formatFormData(data.fields)}`

    // Create Nodemailer transporter with Office 365 SMTP
    console.log("[v0] Creating transporter with email:", process.env.OFFICE365_EMAIL)
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.OFFICE365_EMAIL,
        pass: process.env.OFFICE365_PASSWORD,
      },
    })

    console.log("[v0] Sending email to:", recipientEmail)
    // Send email
    const info = await transporter.sendMail({
      from: process.env.OFFICE365_EMAIL,
      to: recipientEmail,
      subject: emailSubject,
      text: emailBody,
      html: `<pre>${emailBody}</pre>`,
    })

    console.log("[v0] Email sent successfully:", info.messageId)

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
    if (errorMessage.includes("EAUTH") || errorMessage.includes("Invalid login") || errorMessage.includes("authentication")) {
      console.error("[v0] Authentication error detected")
      return {
        success: false,
        error: "Email authentication failed. Please verify the Office 365 credentials.",
      }
    }
    if (errorMessage.includes("ENOTFOUND") || errorMessage.includes("getaddrinfo")) {
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
