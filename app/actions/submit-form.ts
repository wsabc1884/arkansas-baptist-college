"use server"

import { generateFormPDF } from "@/lib/generate-form-pdf"
import { getNextTicketNumber } from "@/lib/ticket-counter"

interface Attachment {
  // Base64-encoded file content (without the data: URI prefix)
  content: string
  // File name shown in the email
  name: string
}

interface FormData {
  formType: "facility-request" | "work-order" | "key-request" | "entrepreneurship-fund"
  fields: Record<string, string>
  // Optional list of field keys that must be non-empty. When provided, only these
  // are validated (allowing optional fields like checkboxes to be blank).
  requiredFields?: string[]
  // Optional user-uploaded documents to include in the email.
  attachments?: Attachment[]
}

// Default recipient used for any form without a specific route below.
const defaultRecipientEmail = process.env.FORMS_RECIPIENT_EMAIL || "support@arkansasbaptist.edu"

// Per-form email routing. Each form sends to its own primary recipient ("to")
// with any additional recipients copied ("cc"). Forms not listed here fall back
// to the default recipient above.
const formRecipients: Record<
  FormData["formType"],
  { to: string[]; cc?: string[] }
> = {
  "facility-request": {
    to: ["Phillip.rodgers@arkansasbaptist.edu"],
    cc: ["christopher.gregory@arkansasbaptist.edu"],
  },
  "work-order": {
    to: ["phillip.rodgers@arkansasbaptist.edu"],
    cc: ["denise.alford@arkansasbaptist.edu"],
  },
  "key-request": {
    to: ["christopher.gregory@arkansasbaptist.edu"],
  },
  "entrepreneurship-fund": {
    to: [defaultRecipientEmail],
  },
}

// Helper to format form data
function formatFormData(fields: Record<string, string>): string {
  return Object.entries(fields)
    .map(([key, value]) => {
      const label = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .trim()
      return `<strong>${label}:</strong> ${value}`
    })
    .join("<br/>")
}

export async function submitForm(data: FormData) {
  try {
    // Validate environment variable
    if (!process.env.BREVO_API_KEY) {
      console.error("[v0] Missing Brevo API key")
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

    // Validate required fields. If a requiredFields list is provided, only those
    // must be non-empty (optional fields like checkboxes may be blank). Otherwise
    // fall back to requiring every submitted field.
    const keysToValidate =
      data.requiredFields && data.requiredFields.length > 0
        ? data.requiredFields
        : Object.keys(data.fields)
    const emptyFields = keysToValidate.filter(
      (key) => !data.fields[key] || data.fields[key].trim() === "",
    )
    if (emptyFields.length > 0) {
      return {
        success: false,
        error: `Please fill in all required fields: ${emptyFields.join(", ")}`,
      }
    }

    // Format form type for display (e.g. "key-request" -> "Key Request")
    const formTypeDisplay = data.formType
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    // Get the next rising ticket number. Each form type has its own independent
    // counter persisted in the database, so numbers never reset or collide.
    const ticketNumber = await getNextTicketNumber(data.formType)

    // Generate PDF
    let pdfBuffer: Buffer | null = null
    try {
      pdfBuffer = await generateFormPDF(data.formType, ticketNumber, data.fields)
      console.log("[v0] PDF generated successfully for ticket #", ticketNumber)
    } catch (pdfError) {
      console.error("[v0] PDF generation failed:", pdfError)
      // Continue anyway - send email even if PDF fails
    }

    // Resolve the recipients for this form type (falls back to the default).
    const route = formRecipients[data.formType] ?? { to: [defaultRecipientEmail] }

    // Send email via Brevo REST API with PDF attachment
    try {
      const emailBody: Record<string, unknown> = {
        subject: `${formTypeDisplay} #${ticketNumber}`,
        htmlContent: `
          <h2>${formTypeDisplay} #${ticketNumber}</h2>
          <p>Please see the attached PDF for full form details.</p>
        `,
        sender: { name: "Arkansas Baptist College", email: "helpdesk@arkansasbaptist.edu" },
        to: route.to.map((email) => ({ email })),
      }
      if (route.cc && route.cc.length > 0) {
        emailBody.cc = route.cc.map((email) => ({ email }))
      }

      // Collect all attachments: the generated PDF plus any user-uploaded documents.
      const attachments: Attachment[] = []
      if (pdfBuffer) {
        attachments.push({
          content: pdfBuffer.toString("base64"),
          name: `${formTypeDisplay} #${ticketNumber}.pdf`,
        })
      }
      if (data.attachments && data.attachments.length > 0) {
        for (const file of data.attachments) {
          if (file.content && file.name) {
            attachments.push({ content: file.content, name: file.name })
          }
        }
      }
      if (attachments.length > 0) {
        emailBody.attachment = attachments
      }

      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY!,
        },
        body: JSON.stringify(emailBody),
      })

      if (!response.ok) {
        const error = await response.text()
        console.error("[v0] Brevo API error:", response.status, error)
      } else {
        console.log("[v0] Email sent successfully for ticket #", ticketNumber)
      }
    } catch (emailError) {
      console.error("[v0] Email sending failed:", emailError)
      // Continue anyway - don't fail the form submission if email fails
    }

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
