"use server"

interface FormData {
  formType: "facility-request" | "work-order" | "key-request" | "entrepreneurship-fund"
  fields: Record<string, string>
}

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
