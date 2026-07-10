"use server"

interface FormData {
  formType: "facility-request" | "work-order" | "key-request" | "entrepreneurship-fund"
  fields: Record<string, string>
}

// Store submissions in memory (will reset on deploy - for production, use a database)
const submissions: Array<{
  ticketNumber: number
  formType: string
  fields: Record<string, string>
  submittedAt: string
}> = []

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

    // Store the submission
    submissions.push({
      ticketNumber,
      formType: data.formType,
      fields: data.fields,
      submittedAt: new Date().toISOString(),
    })

    console.log("[v0] Form submission stored:", ticketNumber)

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
    

    
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
