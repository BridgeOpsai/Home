"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import { CheckCircle2, CalendarIcon, Clock, User, Building, MessageSquare } from "lucide-react"
import { format } from "date-fns"
import { bookCallToAirtable } from "@/app/actions/book-call"

export default function BookCallPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    industry: "",
    companySize: "",
    message: "",
    optIn: false, // Add opt-in field
  })
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Available time slots
  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
  ]

  // Industry options
  const industries = [
    "Retail",
    "Healthcare",
    "Finance",
    "Real Estate",
    "Education",
    "Manufacturing",
    "Technology",
    "Hospitality",
    "Construction",
    "Professional Services",
    "Other",
  ]

  // Company size options
  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    setFormData((prev) => ({ ...prev, [name]: val }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleTimeSelect = (time: string) => {
    setTimeSlot(time)
  }

  const handleNextStep = () => {
    // Validate current step
    if (step === 1) {
      if (!date || !timeSlot) {
        alert("Please select both a date and time for your call")
        return
      }
    } else if (step === 2) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        alert("Please fill out all required contact information fields")
        return
      }
    }

    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate final step
    if (!formData.companyName || !formData.industry || !formData.companySize || !formData.message) {
      alert("Please fill out all required business information fields")
      return
    }

    try {
      // Prepare the data for submission
      const bookingData = {
        ...formData,
        appointmentDate: date ? format(date, "yyyy-MM-dd") : "",
        appointmentTime: timeSlot,
      }

      const result = await bookCallToAirtable(bookingData)

      if (result.success) {
        // Show success message
        setIsSubmitted(true)
        window.scrollTo(0, 0)
      } else {
        alert(`Failed to book your call: ${result.error || "Unknown error"}`)
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
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">Book Your Strategy Call</h1>
              <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Schedule a personalized consultation to discuss how AI automation can transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {isSubmitted ? (
              <AnimateOnScroll animation="fade-up">
                <Card className="bg-green-50 border border-green-200">
                  <CardContent className="pt-6 text-center">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Call is Scheduled!</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      Thank you for booking a strategy call with BridgeOps.ai
                    </p>
                    <div className="bg-white rounded-lg p-6 mb-6 inline-block">
                      <div className="flex items-center mb-4">
                        <CalendarIcon className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="font-medium">{date ? format(date, "EEEE, MMMM d, yyyy") : ""}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="font-medium">{timeSlot} EST</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">
                      We've sent a calendar invitation to your email. Our team is looking forward to discussing how we
                      can help automate your business processes.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => (window.location.href = "/")}>
                      Return to Homepage
                    </Button>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ) : (
              <AnimateOnScroll animation="fade-up">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {step === 1 && "Step 1: Choose Your Appointment Time"}
                      {step === 2 && "Step 2: Your Contact Information"}
                      {step === 3 && "Step 3: Tell Us About Your Business"}
                    </CardTitle>
                    <CardDescription>
                      {step === 1 && "Select a date and time that works best for your 30-minute strategy call."}
                      {step === 2 && "Provide your contact details so we can reach you."}
                      {step === 3 && "Share information about your business and automation needs."}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      {/* Step 1: Calendar and Time Selection */}
                      {step === 1 && (
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Select a Date <span className="text-red-500">*</span>
                            </label>
                            <div className="border rounded-md p-4">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="mx-auto"
                                disabled={
                                  (date) =>
                                    date < new Date(new Date().setHours(0, 0, 0, 0)) || // Disable past dates
                                    date.getDay() === 0 || // Disable Sundays
                                    date.getDay() === 6 // Disable Saturdays
                                }
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Select a Time (EST) <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {timeSlots.map((time) => (
                                <button
                                  key={time}
                                  type="button"
                                  className={`py-2 px-4 rounded-md text-sm ${
                                    timeSlot === time
                                      ? "bg-blue-600 text-white"
                                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                  }`}
                                  onClick={() => handleTimeSelect(time)}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4">
                            <Button
                              type="button"
                              className="w-full bg-blue-600 hover:bg-blue-700"
                              onClick={handleNextStep}
                            >
                              Continue to Contact Information
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Contact Information */}
                      {step === 2 && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                First Name <span className="text-red-500">*</span>
                              </label>
                              <div className="mt-1">
                                <Input
                                  id="firstName"
                                  name="firstName"
                                  value={formData.firstName}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                            <div>
                              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name <span className="text-red-500">*</span>
                              </label>
                              <div className="mt-1">
                                <Input
                                  id="lastName"
                                  name="lastName"
                                  value={formData.lastName}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-1">
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-1">
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="flex justify-between pt-4">
                            <Button type="button" variant="outline" onClick={handlePrevStep}>
                              Back
                            </Button>
                            <Button type="button" className="bg-blue-600 hover:bg-blue-700" onClick={handleNextStep}>
                              Continue to Business Information
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Business Information */}
                      {step === 3 && (
                        <div className="space-y-6">
                          <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                              Company Name <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-1">
                              <Input
                                id="companyName"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                              Industry <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-1">
                              <Select
                                value={formData.industry}
                                onValueChange={(value) => handleSelectChange("industry", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your industry" />
                                </SelectTrigger>
                                <SelectContent>
                                  {industries.map((industry) => (
                                    <SelectItem key={industry} value={industry}>
                                      {industry}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                              Company Size <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-1">
                              <Select
                                value={formData.companySize}
                                onValueChange={(value) => handleSelectChange("companySize", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select company size" />
                                </SelectTrigger>
                                <SelectContent>
                                  {companySizes.map((size) => (
                                    <SelectItem key={size} value={size}>
                                      {size}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                              What are you looking to automate? <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-1">
                              <Textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Please describe your business processes and what you're looking to automate."
                                required
                              />
                            </div>
                          </div>

                          {/* Add opt-in checkbox */}
                          <div className="flex items-start mt-4">
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
                                I agree to receive emails and/or SMS messages about products, services, and events. You
                                can unsubscribe at any time.
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between pt-4">
                            <Button type="button" variant="outline" onClick={handlePrevStep}>
                              Back
                            </Button>
                            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                              Schedule Your Call
                            </Button>
                          </div>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            )}
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900">What to Expect on Your Call</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Your 30-minute strategy call is designed to be focused and productive
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimateOnScroll animation="fade-up" delay={0.1}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4 mx-auto">
                      <User className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-center mb-2">Introduction & Discovery</h3>
                    <p className="text-gray-500 text-center">
                      We'll get to know your business and understand your current workflows and pain points.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.2}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4 mx-auto">
                      <Building className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-center mb-2">Solution Exploration</h3>
                    <p className="text-gray-500 text-center">
                      We'll discuss potential automation solutions tailored to your specific business needs.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.3}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4 mx-auto">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-center mb-2">Next Steps</h3>
                    <p className="text-gray-500 text-center">
                      We'll outline a clear path forward and discuss how we can help implement AI automation in your
                      business.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
