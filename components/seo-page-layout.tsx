"use client"

import type React from "react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import Link from "next/link"

interface Benefit {
  title: string
  description: string
  icon: React.ReactNode
}

interface UseCase {
  title: string
  description: string
}

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

interface SEOPageLayoutProps {
  page: {
    title: string
    description: string
    heroDescription: string
    overview: string
    benefits: Benefit[]
    useCases: UseCase[]
    features: Feature[]
    ctaTitle: string
    ctaDescription: string
  }
}

export default function SEOPageLayout({ page }: SEOPageLayoutProps) {
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
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">{page.title}</h1>
              <p className="mt-3 max-w-md mx-auto text-base text-white/80 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                {page.heroDescription}
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

        {/* Overview Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="lg:text-center">
                <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Overview</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {page.description}
                </p>
                <div className="mt-6 max-w-3xl mx-auto text-xl text-gray-500 lg:mx-auto">
                  <p>{page.overview}</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Key Benefits</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  How {page.title} can transform your business operations
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-3">
              {page.benefits.map((benefit, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 0.1}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-500">{benefit.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Common Use Cases</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Real-world applications of {page.title} across industries
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-2">
              {page.useCases.map((useCase, index) => (
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

        {/* Features Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How It Works</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Our approach to implementing {page.title} solutions
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-3">
              {page.features.map((feature, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 0.1}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-500">{feature.description}</p>
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
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{page.ctaTitle}</h2>
                <p className="mt-4 text-xl text-blue-100">{page.ctaDescription}</p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50"
                    onClick={() => {
                      window.location.href = "/book-call"
                    }}
                  >
                    Book a Strategy Call
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white hover:bg-white/10"
                    >
                      Explore All Solutions
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
