"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Bot, User, Loader2, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Add the import for the server action
import { submitDemoToAirtable } from "@/app/actions/submit-demo"

interface Message {
  role: "user" | "assistant"
  content: string
}

type DemoStep = "contact-info" | "business-info" | "chat"

export default function DemoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [step, setStep] = useState<DemoStep>("contact-info")
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showContactPrompt, setShowContactPrompt] = useState(false)
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    optIn: false, // Add this line for the opt-in checkbox state
  })
  const [businessInfo, setBusinessInfo] = useState({
    businessType: "",
    industry: "",
    size: "",
    painPoints: "",
    goals: "",
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Reset state when modal is opened
  useEffect(() => {
    if (isOpen) {
      setStep("contact-info")
      setMessages([])
      setInput("")
      setIsLoading(false)
      setShowContactPrompt(false)
      setContactInfo({
        name: "",
        email: "",
        phone: "",
        company: "",
        optIn: false,
      })
      setBusinessInfo({
        businessType: "",
        industry: "",
        size: "",
        painPoints: "",
        goals: "",
      })
    }
  }, [isOpen])

  const handleContactInfoChange = (field: string, value: string | boolean) => {
    setContactInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleBusinessInfoChange = (field: string, value: string) => {
    setBusinessInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleContactInfoSubmit = () => {
    // Validate form
    if (!contactInfo.name || !contactInfo.email || !contactInfo.company) {
      alert("Please fill out all required fields")
      return
    }

    // Move to business info step
    setStep("business-info")
  }

  // Find the handleBusinessInfoSubmit function and replace it with this:
  const handleBusinessInfoSubmit = async () => {
    // Validate form
    if (!businessInfo.businessType || !businessInfo.industry || !businessInfo.size || !businessInfo.painPoints) {
      alert("Please fill out all required fields")
      return
    }

    try {
      // Submit to Airtable
      const result = await submitDemoToAirtable({
        ...contactInfo,
        ...businessInfo,
      })

      if (result.success) {
        // Move to chat step
        setStep("chat")

        // Create initial messages
        const userMessage: Message = {
          role: "user",
          content: `I'm ${contactInfo.name} from ${contactInfo.company}. We are a ${businessInfo.size} ${businessInfo.businessType} in the ${businessInfo.industry} industry. Our main challenges are: ${businessInfo.painPoints}. Our business goals include: ${businessInfo.goals}`,
        }

        setMessages([userMessage])
        setIsLoading(true)

        // Simulate AI response with delay
        setTimeout(() => {
          generateAutomationRecommendations()
        }, 1500)
      } else {
        alert(`Failed to submit your information: ${result.error || "Unknown error"}`)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error submitting your information. Please try again.")
    }
  }

  const generateAutomationRecommendations = () => {
    // Generate industry-specific recommendations
    const industryRecommendations = getIndustrySpecificRecommendations(businessInfo.industry)

    // Generate general recommendations
    const generalRecommendations = [
      {
        title: "Customer Onboarding Automation",
        description:
          "Automate welcome emails, resource delivery, and follow-up sequences to improve customer experience and reduce manual work.",
      },
      {
        title: "Meeting Scheduler AI",
        description:
          "Implement an AI assistant that handles meeting scheduling, reschedules, and sends reminders to eliminate scheduling conflicts.",
      },
      {
        title: "Document Processing Automation",
        description:
          "Use AI to extract data from invoices, receipts, and forms to reduce manual data entry and processing time.",
      },
      {
        title: "Customer Support Chatbot",
        description:
          "Deploy an AI chatbot to handle common customer inquiries 24/7, reducing support ticket volume and improving response times.",
      },
      {
        title: "Social Media Content Generator",
        description:
          "Leverage AI to create and schedule engaging social media content based on your business goals and audience preferences.",
      },
      {
        title: "Email Marketing Optimization",
        description:
          "Use AI to optimize email subject lines, content, and send times to improve open rates and conversions.",
      },
      {
        title: "Inventory Management Automation",
        description: "Implement AI-driven inventory forecasting to optimize stock levels and reduce carrying costs.",
      },
    ]

    // Combine and select top recommendations
    const allRecommendations = [...industryRecommendations, ...generalRecommendations]
    const topRecommendations = allRecommendations.slice(0, 10)

    // Format the response
    let responseContent = `Thank you for sharing about ${contactInfo.company}, ${contactInfo.name}. Based on your ${businessInfo.size} ${businessInfo.businessType} in the ${businessInfo.industry} industry, here are the top 10 AI automations that would increase sales and lower expenses:\n\n`

    topRecommendations.forEach((rec, index) => {
      responseContent += `${index + 1}. **${rec.title}**\n${rec.description}\n\n`
    })

    responseContent +=
      "These automations can be customized to address your specific challenges: " + businessInfo.painPoints + "\n\n"
    responseContent += "Would you like me to build this out custom for your business?"

    const aiMessage: Message = {
      role: "assistant",
      content: responseContent,
    }

    setMessages((prev) => [...prev, aiMessage])
    setIsLoading(false)
    setShowContactPrompt(true)
  }

  const getIndustrySpecificRecommendations = (industry: string) => {
    const recommendations: { title: string; description: string }[] = []

    switch (industry.toLowerCase()) {
      case "retail":
        recommendations.push(
          {
            title: "Personalized Product Recommendations",
            description:
              "AI-driven product recommendations based on customer browsing and purchase history to increase average order value.",
          },
          {
            title: "Dynamic Pricing Optimization",
            description:
              "Automatically adjust pricing based on demand, competition, and inventory levels to maximize profit margins.",
          },
          {
            title: "Visual Search Capability",
            description:
              "Allow customers to search for products using images, improving the shopping experience and conversion rates.",
          },
        )
        break

      case "healthcare":
        recommendations.push(
          {
            title: "Patient Appointment Reminder System",
            description: "Reduce no-shows with automated appointment reminders and easy rescheduling options.",
          },
          {
            title: "Medical Record Summarization",
            description:
              "AI that summarizes patient records to help practitioners quickly access relevant information.",
          },
          {
            title: "Prescription Refill Automation",
            description: "Streamline the prescription refill process with automated approvals for routine medications.",
          },
        )
        break

      case "finance":
        recommendations.push(
          {
            title: "Fraud Detection System",
            description: "AI-powered system that identifies suspicious transactions and activities in real-time.",
          },
          {
            title: "Automated Financial Reporting",
            description: "Generate financial reports automatically, saving time and reducing errors.",
          },
          {
            title: "Client Risk Assessment Tool",
            description:
              "Assess client risk profiles automatically to provide appropriate financial advice and products.",
          },
        )
        break

      case "real estate":
        recommendations.push(
          {
            title: "Lead Qualification Automation",
            description:
              "Automatically score and qualify leads based on behavior and demographics to focus on high-value prospects.",
          },
          {
            title: "Property Matching Algorithm",
            description:
              "Match clients with properties that meet their criteria, improving satisfaction and closing rates.",
          },
          {
            title: "Automated Market Analysis",
            description:
              "Generate property valuation and market analysis reports automatically to support pricing decisions.",
          },
        )
        break

      case "manufacturing":
        recommendations.push(
          {
            title: "Predictive Maintenance System",
            description: "Predict equipment failures before they happen to reduce downtime and maintenance costs.",
          },
          {
            title: "Quality Control Automation",
            description: "Use computer vision to automatically detect product defects and quality issues.",
          },
          {
            title: "Supply Chain Optimization",
            description:
              "Optimize inventory levels and supplier orders based on production schedules and market demand.",
          },
        )
        break

      default:
        recommendations.push(
          {
            title: "Customer Segmentation and Targeting",
            description:
              "Use AI to segment customers and create targeted marketing campaigns to improve conversion rates.",
          },
          {
            title: "Workflow Automation Platform",
            description:
              "Implement a customizable workflow automation platform to streamline your specific business processes.",
          },
          {
            title: "Business Intelligence Dashboard",
            description:
              "Automated data collection and visualization to provide real-time insights into business performance.",
          },
        )
    }

    return recommendations
  }

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let responseContent = ""

      if (
        showContactPrompt &&
        (input.toLowerCase().includes("yes") ||
          input.toLowerCase().includes("sure") ||
          input.toLowerCase().includes("ok"))
      ) {
        responseContent =
          "Great! We already have your contact information, and our team will reach out to you within 24 hours to discuss your custom automation solution in more detail. Is there anything specific you'd like us to focus on when we contact you?"

        // Add a timeout to redirect to contact form after positive response
        setTimeout(() => {
          handleRedirectToContact()
        }, 5000)
      } else if (showContactPrompt) {
        responseContent =
          "I understand. If you change your mind or have any other questions about how our AI automation can help your business, feel free to ask!"
      } else {
        responseContent =
          "Thank you for sharing that information. I'd be happy to discuss how our AI automation solutions can address these challenges. Is there a specific area you'd like to focus on first?"
      }

      const aiMessage: Message = {
        role: "assistant",
        content: responseContent,
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleRedirectToContact = () => {
    onClose()
    // Scroll to contact section
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-blue-500" />
            AI Automation Demo
          </DialogTitle>
          <DialogDescription>
            Experience how BridgeOps.ai can automate your business workflows with custom AI solutions.
          </DialogDescription>
        </DialogHeader>

        {step === "contact-info" ? (
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Your Contact Information</h3>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  placeholder="John Smith"
                  value={contactInfo.name}
                  onChange={(e) => handleContactInfoChange("name", e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={contactInfo.email}
                  onChange={(e) => handleContactInfoChange("email", e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={contactInfo.phone}
                  onChange={(e) => handleContactInfoChange("phone", e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="company"
                  placeholder="Acme Inc."
                  value={contactInfo.company}
                  onChange={(e) => handleContactInfoChange("company", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex items-start mt-4">
              <div className="flex items-center h-5">
                <input
                  id="optIn"
                  type="checkbox"
                  checked={contactInfo.optIn}
                  onChange={(e) => handleContactInfoChange("optIn", e.target.checked)}
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

            <div className="text-xs text-gray-500">
              <p>
                By proceeding, you agree to our privacy policy and terms of service. We'll use this information to
                provide you with a personalized demo.
              </p>
            </div>

            <Button onClick={handleContactInfoSubmit} className="w-full flex items-center justify-center gap-2">
              Continue to Business Information
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        ) : step === "business-info" ? (
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Your Business Information</h3>
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Business <span className="text-red-500">*</span>
                </label>
                <Input
                  id="businessType"
                  placeholder="e.g., E-commerce Store, Consulting Firm, Restaurant"
                  value={businessInfo.businessType}
                  onChange={(e) => handleBusinessInfoChange("businessType", e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                  Industry <span className="text-red-500">*</span>
                </label>
                <Select
                  value={businessInfo.industry}
                  onValueChange={(value) => handleBusinessInfoChange("industry", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="real estate">Real Estate</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="hospitality">Hospitality</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Size <span className="text-red-500">*</span>
                </label>
                <Select value={businessInfo.size} onValueChange={(value) => handleBusinessInfoChange("size", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your business size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (1-10 employees)</SelectItem>
                    <SelectItem value="medium">Medium (11-50 employees)</SelectItem>
                    <SelectItem value="large">Large (51-200 employees)</SelectItem>
                    <SelectItem value="enterprise">Enterprise (201+ employees)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="painPoints" className="block text-sm font-medium text-gray-700 mb-1">
                  What are your biggest business challenges or pain points? <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="painPoints"
                  placeholder="e.g., Manual data entry, customer response times, inventory management, etc."
                  rows={3}
                  value={businessInfo.painPoints}
                  onChange={(e) => handleBusinessInfoChange("painPoints", e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">
                  What are your primary business goals for the next 12 months?
                </label>
                <Textarea
                  id="goals"
                  placeholder="e.g., Increase sales by 20%, reduce operational costs, expand to new markets, etc."
                  rows={3}
                  value={businessInfo.goals}
                  onChange={(e) => handleBusinessInfoChange("goals", e.target.value)}
                />
              </div>
            </div>

            <Button onClick={handleBusinessInfoSubmit} className="w-full flex items-center justify-center gap-2">
              Generate AI Automation Recommendations
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <>
            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 my-4 border rounded-md bg-gray-50 min-h-[300px]">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user" ? "bg-blue-600 text-white" : "bg-white border border-gray-200"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.role === "assistant" && <Bot className="h-5 w-5 mt-1 flex-shrink-0" />}
                      <div className="whitespace-pre-line">{message.content}</div>
                      {message.role === "user" && <User className="h-5 w-5 mt-1 flex-shrink-0" />}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-white border border-gray-200">
                    <div className="flex items-center gap-2">
                      <Bot className="h-5 w-5" />
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm text-gray-500">Generating recommendations...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={!input.trim() || isLoading} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>

            {/* Contact prompt */}
            {showContactPrompt && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-700">
                      Ready to implement these solutions? Type "yes" to get started with a custom solution for your
                      business.
                    </p>
                    <Button
                      variant="link"
                      className="text-blue-600 p-0 h-auto text-sm"
                      onClick={handleRedirectToContact}
                    >
                      Or click here to contact us directly
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
