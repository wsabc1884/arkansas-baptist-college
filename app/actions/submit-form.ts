"use server"

interface FormData {
  formType: "facility-request" | "work-order" | "key-request" | "entrepreneurship-fund"
  fields: Record<string, string>
}

const recipientEmail = process.env.FORMS_RECIPIENT_EMAIL || "support@arkansasbaptist.edu"

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

    // Send email via Brevo REST API
    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY!,
        },
        body: JSON.stringify({
          subject: `${formTypeDisplay} Form #${ticketNumber}`,
          htmlContent: `
            <h2>${formTypeDisplay} Submission #${ticketNumber}</h2>
            <p>${formatFormData(data.fields)}</p>
          `,
          sender: { name: "Arkansas Baptist College", email: "noreply@arkansasbaptist.edu" },
          to: [{ email: recipientEmail }],
        }),
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
