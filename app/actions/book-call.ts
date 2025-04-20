"use server"

import { z } from "zod"

// Form validation schema
const bookCallSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  companyName: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Industry is required"),
  companySize: z.string().min(1, "Company size is required"),
  message: z.string().min(1, "Message is required"),
  appointmentDate: z.string().min(1, "Appointment date is required"),
  appointmentTime: z.string().min(1, "Appointment time is required"),
  optIn: z.boolean().optional().default(false),
})

type BookCallData = z.infer<typeof bookCallSchema>

export async function bookCallToAirtable(bookCallData: BookCallData) {
  try {
    // Validate form data
    const validatedData = bookCallSchema.parse(bookCallData)

    // Airtable API endpoint
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
    const AIRTABLE_TABLE_NAME = "Form Submissions" // Using the existing table name

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      throw new Error("Airtable credentials are not configured")
    }

    // Format the appointment details to be clearly visible
    const appointmentDetails = `📅 SCHEDULED CALL: ${validatedData.appointmentDate} at ${validatedData.appointmentTime}`

    // Prepare the record for Airtable - only include fields known to exist
    const record = {
      fields: {
        Name: `${validatedData.firstName} ${validatedData.lastName}`,
        Email: validatedData.email,
        Phone: validatedData.phone || "",
        Company: validatedData.companyName,
        // Put appointment details at the beginning of the message for visibility
        Message: `${appointmentDetails}\n\nIndustry: ${validatedData.industry}\nCompany Size: ${validatedData.companySize}\n\nAdditional Message: ${validatedData.message}`,
        Source: "Call Booking Form",
        "Marketing Opt-In": validatedData.optIn ? "Yes" : "No",
        "Submission Date": new Date().toISOString(),
      },
    }

    // Send data to Airtable
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ records: [record] }),
      },
    )

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Airtable API error: ${JSON.stringify(errorData)}`)
    }

    return { success: true }
  } catch (error) {
    console.error("Book call submission error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}
