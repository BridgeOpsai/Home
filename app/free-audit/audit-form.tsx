"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarDays } from "lucide-react"

export default function AuditForm() {
  const [showCalendly, setShowCalendly] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [optIn, setOptIn] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would submit the form data to your backend
    setFormSubmitted(true)
    // Optionally show Calendly after form submission
    setShowCalendly(true)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free AI Audit</h2>

      {!formSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Smith" required />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>

          <div>
            <Label htmlFor="business-type">Business Type</Label>
            <Select>
              <SelectTrigger id="business-type">
                <SelectValue placeholder="Select your business type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional-services">Professional Services</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="real-estate">Real Estate</SelectItem>
                <SelectItem value="construction">Construction</SelectItem>
                <SelectItem value="hospitality">Hospitality</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="bottleneck">Main Bottleneck</Label>
            <Textarea
              id="bottleneck"
              placeholder="What's the most time-consuming task in your business?"
              className="resize-none"
              rows={3}
              required
            />
          </div>

          <div className="flex items-start mt-4">
            <div className="flex items-center h-5">
              <input
                id="optIn"
                name="optIn"
                type="checkbox"
                checked={optIn}
                onChange={(e) => setOptIn(e.target.checked)}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="optIn" className="font-medium text-gray-700">
                Marketing Communications
              </label>
              <p className="text-gray-500">
                I agree to receive emails and/or SMS messages about products, services, and events. You can unsubscribe
                at any time.
              </p>
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Get My Free Audit
          </Button>

          <p className="text-xs text-gray-500 text-center mt-2">
            We respect your privacy. Your information will never be shared.
          </p>
        </form>
      ) : (
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            We've received your information and will be in touch shortly with your custom AI workflow audit.
          </p>

          {showCalendly ? (
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                <CalendarDays className="h-5 w-5 mr-2 text-blue-600" />
                Schedule Your Consultation
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Pick a time that works for you to discuss your audit results.
              </p>
              <div className="bg-gray-100 p-4 rounded text-center">
                {/* Calendly embed would go here */}
                <p className="text-sm text-gray-500">Calendly embed placeholder</p>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Schedule Now</Button>
              </div>
            </div>
          ) : (
            <Button onClick={() => setShowCalendly(true)} className="bg-blue-600 hover:bg-blue-700">
              Schedule a Consultation
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
