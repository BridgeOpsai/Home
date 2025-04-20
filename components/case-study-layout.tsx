"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronRight, Check, ArrowLeft } from "lucide-react"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import Link from "next/link"

interface Metric {
  value: string
  label: string
}

interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
}

interface CaseStudyLayoutProps {
  caseStudy: {
    title: string
    industry: string
    color: string
    companyName: string
    companyDescription: string
    problemTitle: string
    problemDescription: string
    solutionTitle: string
    solutionDescription: string
    implementationSteps: string[]
    metrics: Metric[]
    results: string[]
    testimonial: Testimonial
    relatedCaseStudies?: {
      title: string
      industry: string
      slug: string
    }[]
  }
}

export default function CaseStudyLayout({ caseStudy }: CaseStudyLayoutProps) {
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
              <Link href="/case-studies" className="inline-flex items-center text-white/80 hover:text-white mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
              <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">{caseStudy.title}</h1>
              <p className="mt-3 max-w-md mx-auto text-base text-white/80 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                {caseStudy.industry}
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About {caseStudy.companyName}</h2>
              </div>
              <div className="prose prose-lg mx-auto">
                <p>{caseStudy.companyDescription}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{caseStudy.problemTitle}</h2>
              </div>
              <div className="prose prose-lg mx-auto">
                <p>{caseStudy.problemDescription}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{caseStudy.solutionTitle}</h2>
              </div>
              <div className="prose prose-lg mx-auto mb-12">
                <p>{caseStudy.solutionDescription}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation Process</h3>
                <ol className="space-y-4">
                  {caseStudy.implementationSteps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Results</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {caseStudy.metrics.map((metric, index) => (
                  <AnimateOnScroll key={index} animation="fade-up" delay={index * 0.1}>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-100">
                      <div className="text-4xl font-bold text-blue-600 mb-2">{metric.value}</div>
                      <div className="text-gray-700">{metric.label}</div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Outcomes</h3>
                <ul className="space-y-3">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-gray-700">{result}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="bg-blue-50 rounded-lg p-8 shadow-md border border-blue-100">
                <div className="text-4xl text-blue-300 mb-4">"</div>
                <p className="text-xl text-gray-700 italic mb-6">{caseStudy.testimonial.quote}</p>
                <div>
                  <p className="font-medium text-gray-900">{caseStudy.testimonial.author}</p>
                  <p className="text-gray-600">{caseStudy.testimonial.position}</p>
                  <p className="text-gray-600">{caseStudy.testimonial.company}</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Related Case Studies */}
        {caseStudy.relatedCaseStudies && caseStudy.relatedCaseStudies.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimateOnScroll animation="fade-up">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Related Case Studies</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {caseStudy.relatedCaseStudies.map((relatedCase, index) => (
                    <AnimateOnScroll key={index} animation="fade-up" delay={index * 0.1}>
                      <Link href={`/case-studies/${relatedCase.slug}`} className="block h-full">
                        <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                          <h3 className="text-lg font-medium text-gray-900 mb-2">{relatedCase.title}</h3>
                          <p className="text-gray-600 mb-4">{relatedCase.industry}</p>
                          <div className="text-blue-600 font-medium flex items-center">
                            Read Case Study
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </div>
                        </div>
                      </Link>
                    </AnimateOnScroll>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Ready for similar results in your business?
                </h2>
                <p className="mt-4 text-xl text-blue-100">
                  Schedule a free consultation to discuss how we can help you achieve your automation goals.
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
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
