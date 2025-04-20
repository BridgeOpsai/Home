"use server"

import { z } from "zod"

// Form validation schema
const demoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().min(1, "Company name is required"),
  businessType: z.string().min(1, "Business type is required"),
  industry: z.string().min(1, "Industry is required"),
  size: z.string().min(1, "Company size is required"),
  painPoints: z.string().min(1, "Pain points are required"),
  goals: z.string().optional(),
  optIn: z.boolean().optional().default(false),
})

type DemoData = z.infer<typeof demoSchema>

export async function submitDemoToAirtable(demoData: DemoData) {
  try {
    // Validate form data
    const validatedData = demoSchema.parse(demoData)

    // Airtable API endpoint
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
    const AIRTABLE_TABLE_NAME = "Demo Requests"

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
        "Business Type": validatedData.businessType,
        Industry: validatedData.industry,
        "Company Size": validatedData.size,
        "Pain Points": validatedData.painPoints,
        Goals: validatedData.goals || "",
        "Marketing Opt-In": validatedData.optIn ? "Yes" : "No",
        "Submission Date": new Date(),
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
