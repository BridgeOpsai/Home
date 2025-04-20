"use client"

import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import Link from "next/link"
import Footer from "@/components/footer"

export default function CaseStudiesPage() {
  const featuredCaseStudy = {
    title: "How Johnson Heating & Cooling Reduced Administrative Work by 70%",
    industry: "Home Services & Trades - HVAC",
    description:
      "Johnson Heating & Cooling implemented our AI automation solution to streamline scheduling, dispatch, and invoicing. The result was a 70% reduction in administrative work, 35% increase in service calls per day, and 42% growth in maintenance contracts.",
    slug: "home-services-hvac",
  }

  const caseStudies = [
    {
      title: "How Premier Party Rentals Increased Event Capacity by 40%",
      industry: "Events & Rentals - Tent Company",
      description:
        "Premier Party Rentals automated their booking, inventory management, and delivery logistics, enabling them to handle 40% more events with the same staff while eliminating scheduling conflicts.",
      slug: "events-rentals-tent",
    },
    {
      title: "How Bright Smile Dental Reduced No-Shows by 80%",
      industry: "Healthcare & Wellness - Dental Practice",
      description:
        "Bright Smile Dental implemented automated appointment reminders and recall systems, reducing no-shows from 15% to just 3% and increasing hygiene appointments by 40%.",
      slug: "healthcare-dental",
    },
    {
      title: "How Harvest Table Restaurant Reduced Food Waste by 35%",
      industry: "Hospitality & Food - Restaurant",
      description:
        "Harvest Table Restaurant automated their inventory management and staff scheduling, reducing food waste by 35% and labor costs by 22% while improving overall profit margins.",
      slug: "hospitality-restaurant",
    },
    {
      title: "How Modern Home Goods Recovered 15% of Abandoned Carts",
      industry: "E-Commerce & Retail - Shopify Store",
      description:
        "Modern Home Goods implemented automated cart recovery and inventory management, recovering 15% of abandoned carts and enabling 40% growth without adding staff.",
      slug: "ecommerce-shopify",
    },
    {
      title: "How Digital Marketing Academy Increased Course Completion by 60%",
      industry: "Education & Coaching - Online Course Creator",
      description:
        "Digital Marketing Academy automated student engagement and progress tracking, increasing course completion rates from 25% to 40% and growing enrollment by 45%.",
      slug: "education-course",
    },
    {
      title: "How Williams Tax & Accounting Reduced Tax Season Overtime by 40%",
      industry: "Professional Services - Accounting Firm",
      description:
        "Williams Tax & Accounting automated document collection and client communication, reducing tax season overtime by 40% and administrative work by 60%.",
      slug: "professional-accounting",
    },
    {
      title: "How Elite Real Estate Group Increased Lead Conversion by 35%",
      industry: "Real Estate & Property Management - Real Estate Agency",
      description:
        "Elite Real Estate Group implemented lead nurturing and transaction management automation, increasing lead conversion by 35% and referral business by 40%.",
      slug: "real-estate-agency",
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
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">Success Stories</h1>
              <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Real-world examples of how our AI automation solutions have transformed businesses across industries
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Success Story</h2>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8 md:p-12">
                  <div className="md:max-w-3xl mx-auto">
                    <div className="mb-6 inline-block px-4 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                      {featuredCaseStudy.industry}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{featuredCaseStudy.title}</h3>
                    <p className="text-gray-600 text-lg mb-8">{featuredCaseStudy.description}</p>
                    <Link href={`/case-studies/${featuredCaseStudy.slug}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Read Full Case Study
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">More Success Stories</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Discover how businesses across various industries have benefited from our solutions
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((caseStudy, index) => (
                <AnimateOnScroll key={caseStudy.slug} animation="fade-up" delay={index * 0.1}>
                  <Link href={`/case-studies/${caseStudy.slug}`} className="block h-full">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="p-6">
                        <div className="mb-4 inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                          {caseStudy.industry}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                        <p className="text-gray-600 mb-6">{caseStudy.description}</p>
                        <div className="text-blue-600 font-medium flex items-center">
                          Read Case Study
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

        {/* CTA Section */}
        <section className="py-12 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Ready to become our next success story?
                </h2>
                <p className="mt-4 text-xl text-blue-100">
                  Schedule a free consultation to discuss how we can help you achieve similar results.
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
