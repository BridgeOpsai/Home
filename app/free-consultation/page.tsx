"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import { Calendar, CheckCircle, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function FreeConsultationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500 opacity-10 transform rotate-12 translate-x-1/2 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-indigo-500 opacity-10 transform -rotate-12 -translate-x-1/2 translate-y-1/4"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  Free Automation Consultation
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Discover how we can streamline your business with custom automation solutions tailored to your
                  specific needs.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How It Works</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Our consultation process is designed to understand your business and provide tailored automation
                  solutions.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimateOnScroll animation="fade-up" delay={0.1}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">1. Discovery Call</h3>
                  <p className="mt-2 text-base text-gray-500">
                    We'll discuss your business processes, pain points, and goals to identify automation opportunities.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.2}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">2. Custom Solution</h3>
                  <p className="mt-2 text-base text-gray-500">
                    We'll create a tailored automation plan based on your specific workflows and requirements.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.3}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">3. Proposal & Pricing</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Receive a detailed proposal with custom pricing based on your specific automation flows.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Custom Pricing Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Custom Pricing</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  We believe in transparent, value-based pricing tailored to your specific needs.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-8">
                <AnimateOnScroll animation="fade-up" delay={0.1}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Don't Have Fixed Pricing</h3>
                  <p className="text-gray-600 mb-6">
                    Every business is unique, with different processes, complexities, and requirements. We provide
                    custom pricing based on:
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-gray-600">
                        <span className="font-medium text-gray-900">Workflow Complexity:</span> Simple to advanced
                        automation flows have different requirements
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-gray-600">
                        <span className="font-medium text-gray-900">Integration Needs:</span> The number and types of
                        systems that need to be connected
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-gray-600">
                        <span className="font-medium text-gray-900">Data Volume:</span> The amount of data being
                        processed through your automation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-gray-600">
                        <span className="font-medium text-gray-900">Customization Level:</span> Standard vs. highly
                        customized solutions
                      </span>
                    </li>
                  </ul>

                  <p className="text-gray-600 mb-6">
                    This approach ensures you only pay for what you need, and receive a solution that perfectly fits
                    your business.
                  </p>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Find answers to common questions about our consultation and pricing.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="mt-12 max-w-3xl mx-auto">
              <div className="space-y-8">
                <AnimateOnScroll animation="fade-up" delay={0.1}>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Is the consultation really free?</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Yes, the initial consultation is completely free with no obligation. We want to understand your
                      business and demonstrate the value we can provide before you make any commitment.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.2}>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">How long does the consultation process take?</h3>
                    <p className="mt-2 text-base text-gray-500">
                      The initial discovery call typically takes 30-45 minutes. After that, we'll need some time to
                      analyze your needs and prepare a custom proposal, usually within 2-3 business days.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.3}>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      What's the typical price range for automation solutions?
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Pricing varies widely based on complexity and scope. Simple automation flows might start at a few
                      hundred dollars, while comprehensive enterprise solutions can be several thousand. We'll provide
                      transparent pricing based on your specific needs.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.4}>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Do you offer ongoing support after implementation?
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Yes, we offer various support options to ensure your automation continues to run smoothly. Support
                      packages can be included in your custom pricing proposal.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.5}>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      How quickly can you implement automation solutions?
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Implementation timelines vary based on complexity. Simple workflows can be set up in days, while
                      more complex solutions might take several weeks. We'll provide a detailed timeline in your
                      proposal.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to streamline your business?</h2>
                <p className="mt-4 text-xl text-blue-100">
                  Schedule your free consultation today and discover how automation can transform your operations.
                </p>
                <div className="mt-8">
                  <Link href="/book-call">
                    <Button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50">
                      Book Your Free Consultation
                    </Button>
                  </Link>
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
