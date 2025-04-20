"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimateOnScroll } from "./ui/animate-on-scroll"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { submitFormToAirtable } from "@/app/actions/submit-form"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    source: "",
    optIn: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await submitFormToAirtable(formData)

      if (result.success) {
        setFormData({ name: "", email: "", phone: "", company: "", message: "", source: "", optIn: false })
        setIsSubmitted(true)

        // Reset submission state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        setError(result.error || "Failed to submit form. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Ready to Automate Your Success?
            </h2>
            <div className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Take the first step towards business transformation today. Experience how BridgeOps.ai can elevate your
              operations and profitability through advanced AI solutions.
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={0.2}>
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {isSubmitted ? (
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-lg text-gray-600">
                  Your message has been received. Our team will get back to you shortly to discuss your custom AI
                  automation solution.
                </p>
              </div>
            ) : (
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Get Your Custom AI Solution</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="(123) 456-7890"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Acme Inc."
                      />
                    </div>

                    <div>
                      <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">
                        How did you hear about us?
                      </label>
                      <select
                        id="source"
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Please select</option>
                        <option value="ai-demo">AI Automation Demo</option>
                        <option value="search">Search Engine</option>
                        <option value="social">Social Media</option>
                        <option value="referral">Referral</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your business challenges or which AI automations you're interested in..."
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="optIn"
                          name="optIn"
                          type="checkbox"
                          checked={formData.optIn}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="optIn" className="text-sm text-gray-700">
                          I agree to receive emails and/or SMS messages about products, services, and events. You can
                          unsubscribe at any time.
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 transition-colors duration-200"
                  >
                    {isSubmitting ? "Submitting..." : "Get Your Custom AI Solution"}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
