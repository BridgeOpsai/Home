"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Clock } from "lucide-react"
// Update the imports at the top to include the server action
import { submitFormToAirtable } from "@/app/actions/submit-form"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
    optIn: false, // Add opt-in field
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  // Find the handleSubmit function and replace it with this:
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const result = await submitFormToAirtable(formData)

      if (result.success) {
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          interest: "",
          optIn: false,
        })
        alert("Thank you for your message! We'll get back to you soon.")
      } else {
        alert(`Failed to submit form: ${result.error || "Unknown error"}`)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error submitting your form. Please try again.")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section - Updated to add animation and make it taller */}
        <section className="relative overflow-hidden bg-blue-600 py-16 md:py-20">
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0">
            {/* Animated circles */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-overlay opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-overlay opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-indigo-400 rounded-full mix-blend-overlay opacity-20 animate-blob animation-delay-4000"></div>

            {/* Animated dots pattern */}
            <div className="absolute inset-0 bg-[url('/single-red-dot.png')] bg-repeat opacity-10"></div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">Contact Us</h1>
              <p className="mt-4 max-w-md mx-auto text-xl text-blue-100 sm:text-2xl">
                Have questions or ready to get started? We're here to help.
              </p>

              {/* Add a subtle animated element */}
              <div className="mt-8 flex justify-center">
                <div className="w-16 h-1 bg-white rounded-full opacity-70 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:gap-8">
              {/* Contact Form */}
              <div className="lg:flex-1">
                <h2 className="text-2xl font-extrabold text-gray-900">Get in Touch</h2>
                <p className="mt-3 text-lg text-gray-500">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="mt-9 grid grid-cols-1 gap-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <div className="mt-1">
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <div className="mt-1">
                      <Input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <div className="mt-1">
                      <Input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                      I'm interested in
                    </label>
                    <div className="mt-1">
                      <Select onValueChange={handleSelectChange} value={formData.interest}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="workflow-automation">Workflow Automation</SelectItem>
                          <SelectItem value="ai-integration">AI Integration</SelectItem>
                          <SelectItem value="tool-integration">Tool Integration</SelectItem>
                          <SelectItem value="custom-solution">Custom Solution</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="mt-1">
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Add opt-in checkbox */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="optIn"
                        name="optIn"
                        type="checkbox"
                        checked={formData.optIn}
                        onChange={handleChange}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="optIn" className="font-medium text-gray-700">
                        Marketing Communications
                      </label>
                      <p className="text-gray-500">
                        I agree to receive emails and/or SMS messages about products, services, and events. You can
                        unsubscribe at any time.
                      </p>
                    </div>
                  </div>

                  <div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="mt-12 lg:mt-0 lg:flex-1 lg:flex lg:flex-col">
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg flex-grow">
                  <div className="px-6 py-8">
                    <h3 className="text-xl font-medium text-gray-900">Contact Information</h3>
                    <p className="mt-2 text-base text-gray-500">
                      We're here to answer any questions you have about our services.
                    </p>
                    <div className="mt-8 space-y-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-3 text-base text-gray-500">
                          <p>info@bridgeops.ai</p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <MapPin className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-3 text-base text-gray-500">
                          <p>30 Hudson Yards</p>
                          <p>New York, NY 10001</p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <Clock className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-3 text-base text-gray-500">
                          <p>Monday - Friday</p>
                          <p>9:00 AM - 5:00 PM EST</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 px-6 py-8">
                    <h3 className="text-xl font-medium text-gray-900">Schedule a Demo</h3>
                    <p className="mt-2 text-base text-gray-500">
                      See our AI automation solutions in action with a personalized demo.
                    </p>
                    <div className="mt-6">
                      <Link href="/book-call">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Book a Demo</Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder - Update this section */}
                <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                  <div className="h-64 bg-blue-50 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2663110888737!2d-74.00271492346!3d40.75376797138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259b615f9b8bd%3A0x3e14ae2b0ad1da08!2s30%20Hudson%20Yards%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1712624407204!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="BridgeOps.ai Office Location"
                      className="absolute inset-0"
                    ></iframe>
                    <div className="absolute bottom-2 right-2 bg-white/90 px-3 py-2 text-sm text-gray-700 rounded shadow-sm">
                      30 Hudson Yards, New York, NY 10001
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">How quickly can you implement a solution?</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Implementation timelines vary based on complexity, but most solutions can be up and running within
                    2-4 weeks. Simple automations may be implemented in as little as a few days.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Do you offer custom solutions?</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Yes, we specialize in creating custom AI automation solutions tailored to your specific business
                    needs. Our team will work closely with you to understand your requirements and develop a solution
                    that fits perfectly.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    What kind of support do you provide after implementation?
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    We provide ongoing support for all our solutions, including regular updates, troubleshooting, and
                    optimization. The level of support depends on your chosen plan, with options ranging from email
                    support to 24/7 priority assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
