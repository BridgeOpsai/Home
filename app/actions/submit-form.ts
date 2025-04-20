"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().min(1, "Company name is required"),
  message: z.string().min(1, "Message is required"),
  source: z.string().optional(),
  optIn: z.boolean().optional().default(false), // Add this line for the opt-in checkbox
})

type FormData = z.infer<typeof formSchema>

export async function submitFormToAirtable(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // Airtable API endpoint
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
    const AIRTABLE_TABLE_NAME = "Form Submissions" // Change to your table name

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      throw new Error("Airtable credentials are not configured")
    }

    // Prepare the record for Airtable
    const record = {
      fields: {
        Name: validatedData.name,
        Email: validatedData.email,
        Phone: validatedData.phone || "",
        Company: validatedData.company,
        Message: validatedData.message,
        Source: validatedData.source || "",
        "Marketing Opt-In": validatedData.optIn ? "Yes" : "No", // Convert boolean to string
        "Submission Date": new Date(), // Changed to just pass the Date object
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
    console.error("Form submission error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}
