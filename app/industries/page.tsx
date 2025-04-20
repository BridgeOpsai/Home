"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import Link from "next/link"

export default function IndustriesPage() {
  const industries = [
    {
      id: "home-services",
      name: "Home Services & Trades",
      description: "HVAC, plumbing, electrical, landscaping, cleaning, pest control",
    },
    {
      id: "events-rentals",
      name: "Events & Rentals",
      description: "Party rentals, tent companies, catering, wedding planners, DJs",
    },
    {
      id: "healthcare-wellness",
      name: "Healthcare & Wellness",
      description: "Clinics, dentists, therapists, chiropractors, wellness coaches",
    },
    {
      id: "hospitality-food",
      name: "Hospitality & Food",
      description: "Restaurants, food trucks, meal prep services, catering companies",
    },
    {
      id: "ecommerce-retail",
      name: "E-Commerce & Retail",
      description: "Online stores, boutique brands, Shopify sellers",
    },
    {
      id: "education-coaching",
      name: "Education & Coaching",
      description: "Online course creators, tutors, consultants, coaches",
    },
    {
      id: "professional-services",
      name: "Accounting, Legal & Professional Services",
      description: "Accountants, bookkeepers, attorneys, insurance brokers",
    },
    {
      id: "real-estate",
      name: "Real Estate & Property Management",
      description: "Agents, brokers, Airbnb hosts, commercial property managers",
    },
    {
      id: "construction",
      name: "Construction & Home Improvement",
      description: "Contractors, builders, remodelers, home improvement specialists",
    },
    {
      id: "finance-services",
      name: "Finance Services",
      description: "Credit card processing, merchant cash advance, payment solutions",
    },
    {
      id: "insurance",
      name: "Insurance",
      description: "Insurance agencies, brokers, carriers, claims processing",
    },
    {
      id: "lead-generation",
      name: "Lead Generation",
      description: "Automated lead generation, qualification, and nurturing",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-blue-600 py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-blue-600 opacity-90"></div>
            <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-10 animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-10 animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">Industry Solutions</h1>
              <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Tailored AI automation solutions for your specific industry needs
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Select Your Industry</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Discover how BridgeOps.ai can transform operations in your specific field
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <AnimateOnScroll key={industry.id} animation="fade-up" delay={index * 0.1}>
                  <Link href={`/industries/${industry.id}`} className="block h-full">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                        <p className="text-gray-600 mb-6">{industry.description}</p>
                        <div className="flex items-center text-blue-600 font-medium">
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose BridgeOps.ai */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose BridgeOps.ai?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Industry-specific expertise combined with cutting-edge AI technology
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-3">
              <AnimateOnScroll animation="fade-up" delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Industry-Specific Solutions</h3>
                  <p className="text-gray-500">
                    Our automation solutions are tailored to the unique challenges and workflows of your specific
                    industry.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Proven Results</h3>
                  <p className="text-gray-500">
                    Our clients consistently report time savings of 20+ hours per week and cost reductions of 30% or
                    more.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.3}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Dedicated Support</h3>
                  <p className="text-gray-500">
                    Our team of industry experts provides personalized support to ensure your automation success.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to transform your business?</h2>
                <p className="mt-4 text-xl text-blue-100">
                  Schedule a free consultation to discuss your industry-specific automation needs.
                </p>
                <div className="mt-8">
                  <Button
                    className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800"
                    onClick={() => {
                      window.location.href = "/book-call"
                    }}
                  >
                    Book a Strategy Call
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
