"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronRight, Check } from "lucide-react"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"

interface Benefit {
  title: string
  description: string
}

interface UseCase {
  title: string
  description: string
}

interface Testimonial {
  quote: string
  author: string
  company: string
}

interface IndustryPageLayoutProps {
  industry: {
    name: string
    description: string
    color: string
    heroDescription: string
    benefits: Benefit[]
    useCases: UseCase[]
    automations: string[]
    testimonials: Testimonial[]
  }
}

export default function IndustryPageLayout({ industry }: IndustryPageLayoutProps) {
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
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">{industry.name}</h1>
              <p className="mt-3 max-w-md mx-auto text-base text-white/80 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                {industry.heroDescription}
              </p>
              <div className="mt-8">
                <Button
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50"
                  onClick={() => {
                    window.location.href = "/book-call"
                  }}
                >
                  Book a Strategy Call
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Benefits for {industry.name} Businesses
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  See how AI automation can transform your {industry.name.toLowerCase()} business
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-3">
              {industry.benefits.map((benefit, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 0.1}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-500">{benefit.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Real-World Applications</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  How our clients in the {industry.name.toLowerCase()} industry use our solutions
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-2">
              {industry.useCases.map((useCase, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 0.1}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-500">{useCase.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Automations Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What We Can Automate</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Key processes we can streamline with AI in your business
                </p>
              </div>
            </AnimateOnScroll>

            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 gap-4">
                {industry.automations.map((automation, index) => (
                  <AnimateOnScroll key={index} animation="fade-up" delay={index * 0.05}>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{automation}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Our Clients Say</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Hear from other {industry.name.toLowerCase()} businesses that use BridgeOps.ai
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-3">
              {industry.testimonials.map((testimonial, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 0.1}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                    <div className="text-3xl text-gray-300 mb-4">"</div>
                    <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Ready to transform your {industry.name.toLowerCase()} business?
                </h2>
                <p className="mt-4 text-xl text-blue-100">
                  Schedule a free consultation to discuss your specific automation needs.
                </p>
                <div className="mt-8 flex justify-center">
                  <Button
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50"
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
