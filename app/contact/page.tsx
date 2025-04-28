"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { submitFormToAirtable } from "@/app/actions/submit-form"
import Link from "next/link"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
    optIn: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitFormToAirtable(formData)

      if (result.success) {
        setIsSuccess(true)
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
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false)
        }, 5000)
      } else {
        alert(`Failed to submit form: ${result.error || "Unknown error"}`)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error submitting your form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section - Updated with more dynamic elements */}
        <section className="relative overflow-hidden bg-blue-600 py-16 md:py-20">
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0">
            {/* Animated circles */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-overlay opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-overlay opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-indigo-400 rounded-full mix-blend-overlay opacity-20 animate-blob animation-delay-4000"></div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Contact Us</span>
                <span className="block text-blue-200 text-2xl sm:text-3xl mt-2">We're here to help</span>
              </h1>
              <p className="mt-4 max-w-md mx-auto text-xl text-blue-100 sm:text-2xl">
                Have questions or ready to get started?
              </p>

              {/* Animated element */}
              <div className="mt-8 flex justify-center">
                <div className="w-16 h-1 bg-white rounded-full opacity-70 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Contact Form and Info - Enhanced with animations */}
        <section className="py-16 bg-white relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-grid-blue/[0.02] bg-[length:30px_30px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="lg:flex lg:gap-12">
              {/* Contact Form */}
              <AnimateOnScroll animation="fade-in-left" className="lg:flex-1">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-extrabold text-gray-900">Get in Touch</h2>
                  <p className="mt-3 text-lg text-gray-500">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
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
                            className="transition-all duration-200 focus:ring-blue-500 focus:border-blue-500"
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
                            className="transition-all duration-200 focus:ring-blue-500 focus:border-blue-500"
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
                            className="transition-all duration-200 focus:ring-blue-500 focus:border-blue-500"
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
                            className="transition-all duration-200 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                        I'm interested in
                      </label>
                      <div className="mt-1">
                        <Select onValueChange={handleSelectChange} value={formData.interest}>
                          <SelectTrigger className="transition-all duration-200 focus:ring-blue-500 focus:border-blue-500">
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
                          className="transition-all duration-200 focus:ring-blue-500 focus:border-blue-500"
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
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded transition-all duration-200"
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
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : isSuccess ? (
                          <>
                            <CheckCircle className="h-5 w-5" />
                            <span>Message Sent!</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </AnimateOnScroll>

              {/* Contact Information */}
              <div className="mt-12 lg:mt-0 lg:flex-1 lg:flex lg:flex-col">
                <AnimateOnScroll animation="fade-in-right" className="flex-grow">
                  <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
                    <div className="px-6 py-8">
                      <h3 className="text-xl font-medium text-gray-900">Contact Information</h3>
                      <p className="mt-2 text-base text-gray-500">
                        We're here to answer any questions you have about our services.
                      </p>
                      <div className="mt-8 space-y-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                              <Mail className="h-5 w-5" />
                            </div>
                          </div>
                          <div className="ml-3 text-base text-gray-500">
                            <p className="font-medium text-gray-900">Email</p>
                            <p className="mt-1">info@bridgeops.ai</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                              <MapPin className="h-5 w-5" />
                            </div>
                          </div>
                          <div className="ml-3 text-base text-gray-500">
                            <p className="font-medium text-gray-900">Office</p>
                            <p className="mt-1">30 Hudson Yards</p>
                            <p>New York, NY 10001</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                              <Clock className="h-5 w-5" />
                            </div>
                          </div>
                          <div className="ml-3 text-base text-gray-500">
                            <p className="font-medium text-gray-900">Business Hours</p>
                            <p className="mt-1">Monday - Friday</p>
                            <p>9:00 AM - 5:00 PM EST</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-8 text-white">
                      <h3 className="text-xl font-medium">Schedule a Demo</h3>
                      <p className="mt-2 text-blue-100">
                        See our AI automation solutions in action with a personalized demo.
                      </p>
                      <div className="mt-6">
                        <Link href="/book-call">
                          <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300">
                            Book a Demo
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* Map */}
                <AnimateOnScroll animation="fade-in-up" className="mt-8">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
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
                      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 rounded-lg shadow-lg">
                        <strong>BridgeOps.ai</strong>
                        <br />
                        30 Hudson Yards, New York, NY 10001
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Enhanced with animations */}
        <section className="py-16 bg-gray-50 relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-grid-blue/[0.03] bg-[length:30px_30px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimateOnScroll animation="fade-in-up" className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                Find answers to common questions about our services and solutions
              </p>
            </AnimateOnScroll>

            <div className="mt-12 max-w-3xl mx-auto">
              <div className="space-y-8">
                <AnimateOnScroll
                  animation="fade-in-up"
                  delay={0.1}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-medium text-gray-900">How quickly can you implement a solution?</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Implementation timelines vary based on complexity, but most solutions can be up and running within
                    2-4 weeks. Simple automations may be implemented in as little as a few days.
                  </p>
                </AnimateOnScroll>
                <AnimateOnScroll
                  animation="fade-in-up"
                  delay={0.2}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-medium text-gray-900">Do you offer custom solutions?</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Yes, we specialize in creating custom AI automation solutions tailored to your specific business
                    needs. Our team will work closely with you to understand your requirements and develop a solution
                    that fits perfectly.
                  </p>
                </AnimateOnScroll>
                <AnimateOnScroll
                  animation="fade-in-up"
                  delay={0.3}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    What kind of support do you provide after implementation?
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    We provide ongoing support for all our solutions, including regular updates, troubleshooting, and
                    optimization. Our support includes email assistance, scheduled check-ins, and priority response for
                    urgent issues.
                  </p>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-600 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-overlay opacity-20 animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-400 rounded-full mix-blend-overlay opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to get started?</h2>
              <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
                Book a free consultation call today and discover how we can help automate your business processes.
              </p>
              <div className="mt-8">
                <Link href="/book-call">
                  <Button className="px-8 py-3 text-lg bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300">
                    Book a Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
