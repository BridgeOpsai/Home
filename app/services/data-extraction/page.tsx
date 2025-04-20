"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronRight, FileText, Database, Code, BarChart } from "lucide-react"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"

export default function DataExtractionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-blue-600 opacity-90"></div>
            <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-10 animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-10 animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">AI-Powered Data Extraction</h1>
              <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Transform unstructured data into actionable insights with our intelligent extraction solutions
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Unlock the Value in Your Data</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Our AI-powered data extraction solutions help businesses transform unstructured information into
                  structured, actionable data.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <AnimateOnScroll animation="fade-up" delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Document Processing</h3>
                  <p className="text-gray-500">
                    Extract data from invoices, receipts, contracts, and other business documents with high accuracy.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                    <Database className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Data Integration</h3>
                  <p className="text-gray-500">
                    Seamlessly integrate extracted data with your existing systems, databases, and workflows.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.3}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Custom Extraction</h3>
                  <p className="text-gray-500">
                    Tailor extraction models to your specific business needs and document types for optimal results.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.4}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics & Insights</h3>
                  <p className="text-gray-500">
                    Transform extracted data into actionable insights with advanced analytics and reporting.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Data Extraction Use Cases</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  See how businesses across industries leverage our data extraction solutions
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimateOnScroll animation="fade-up" delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Invoice Processing</h3>
                  <p className="text-gray-500 mb-4">
                    Automatically extract vendor information, line items, totals, and payment terms from invoices to
                    streamline accounts payable.
                  </p>
                  <div className="text-sm text-blue-600 font-medium">
                    Popular in: Finance, Accounting, Professional Services
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Contract Analysis</h3>
                  <p className="text-gray-500 mb-4">
                    Extract key terms, obligations, and expiration dates from contracts to improve compliance and
                    renewal management.
                  </p>
                  <div className="text-sm text-blue-600 font-medium">Popular in: Legal, Real Estate, Insurance</div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.3}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Form Processing</h3>
                  <p className="text-gray-500 mb-4">
                    Convert paper and digital forms into structured data for faster processing and reduced manual entry.
                  </p>
                  <div className="text-sm text-blue-600 font-medium">Popular in: Healthcare, Government, Education</div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.4}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Receipt Capture</h3>
                  <p className="text-gray-500 mb-4">
                    Extract vendor, date, amount, and item details from receipts to streamline expense reporting and
                    reimbursement.
                  </p>
                  <div className="text-sm text-blue-600 font-medium">
                    Popular in: Retail, Hospitality, Professional Services
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.5}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Email Processing</h3>
                  <p className="text-gray-500 mb-4">
                    Extract key information from emails to automate responses, task creation, and workflow triggers.
                  </p>
                  <div className="text-sm text-blue-600 font-medium">
                    Popular in: Customer Service, Sales, E-commerce
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.6}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">ID Verification</h3>
                  <p className="text-gray-500 mb-4">
                    Extract and verify information from IDs, passports, and other identity documents for secure
                    onboarding.
                  </p>
                  <div className="text-sm text-blue-600 font-medium">
                    Popular in: Financial Services, Healthcare, Hospitality
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How It Works</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Our data extraction process is designed for accuracy, efficiency, and seamless integration
                </p>
              </div>
            </AnimateOnScroll>

            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-between">
                <AnimateOnScroll animation="fade-up" delay={0.1}>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mx-auto">
                      1
                    </div>
                    <div className="mt-4 max-w-xs">
                      <h3 className="text-lg font-medium text-gray-900">Document Intake</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Upload documents via API, email, or web interface for processing
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.2}>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mx-auto">
                      2
                    </div>
                    <div className="mt-4 max-w-xs">
                      <h3 className="text-lg font-medium text-gray-900">AI Processing</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Our AI models identify and extract relevant data points
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.3}>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mx-auto">
                      3
                    </div>
                    <div className="mt-4 max-w-xs">
                      <h3 className="text-lg font-medium text-gray-900">Validation</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Extracted data is validated for accuracy and completeness
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.4}>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mx-auto">
                      4
                    </div>
                    <div className="mt-4 max-w-xs">
                      <h3 className="text-lg font-medium text-gray-900">Integration</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Structured data is delivered to your systems via API or export
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Benefits of AI Data Extraction</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Transform your data processing with intelligent automation
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-2">
              <AnimateOnScroll animation="fade-right">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Reduce manual data entry by up to 95%</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Process documents 10x faster than manual methods</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Improve data accuracy to 99%+ with AI validation</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Scale processing capacity without adding staff</span>
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Business Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Reduce operational costs by 40-60%</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Accelerate business processes and decision-making</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Improve compliance with automatic audit trails</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Free up staff for higher-value activities</span>
                    </li>
                  </ul>
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
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Ready to transform your data processing?
                </h2>
                <p className="mt-4 text-xl text-blue-100">
                  Schedule a demo to see our data extraction solutions in action.
                </p>
                <div className="mt-8">
                  <Button
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50"
                    onClick={() => {
                      window.location.href = "/book-call"
                    }}
                  >
                    Book a Demo
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
