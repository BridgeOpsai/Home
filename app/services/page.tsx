"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceCard from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Workflow, Sparkles, LinkIcon, HeadphonesIcon, BarChart, Shield, Zap, Users } from "lucide-react"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"

// Add the ServicesAnimation component to the hero section
import ServicesAnimation from "@/components/services-animation"

export default function ServicesPage() {
  const coreServices = [
    {
      title: "Effortless Workflow Automation",
      description:
        "Automate routine tasks and free your team to focus on growth and innovation. Our AI-powered workflows handle repetitive processes with precision and reliability.",
      icon: Workflow,
      color: "bg-blue-500",
    },
    {
      title: "Tailored AI Integration",
      description:
        "AI tools uniquely designed for your business needs and processes. We don't believe in one-size-fits-all solutions—every automation is customized to your specific requirements.",
      icon: Sparkles,
      color: "bg-purple-500",
    },
    {
      title: "Unified Tool Integration",
      description:
        "Seamlessly connect tools such as Stripe, Airtable, Webflow, Twilio, OpenAI, and Google Analytics to supercharge your workflows. Create a cohesive ecosystem where all your tools work together.",
      icon: LinkIcon,
      color: "bg-green-500",
    },
    {
      title: "24/7 Dedicated Support",
      description:
        "Continuous, reliable support to help you adjust, improve, and scale your automations. Our team is always available to ensure your systems run smoothly and adapt as your business evolves.",
      icon: HeadphonesIcon,
      color: "bg-orange-500",
    },
  ]

  const specializedServices = [
    {
      title: "Data Analysis & Reporting",
      description:
        "Leverage AI to analyze your business data and generate actionable insights. Automated reports delivered when and how you need them.",
      icon: BarChart,
      color: "bg-indigo-500",
    },
    {
      title: "Secure Data Management",
      description:
        "Ensure your sensitive information is handled with the highest security standards while maintaining accessibility for authorized processes.",
      icon: Shield,
      color: "bg-red-500",
    },
    {
      title: "Performance Optimization",
      description: "Continuously improve your automated workflows for maximum efficiency and minimal resource usage.",
      icon: Zap,
      color: "bg-yellow-500",
    },
    {
      title: "Team Training & Onboarding",
      description:
        "Comprehensive training to help your team make the most of your new AI-powered systems and workflows.",
      icon: Users,
      color: "bg-teal-500",
    },
  ]

  const industries = [
    "Home Services & Trades",
    "Events & Rentals",
    "Healthcare & Wellness",
    "Hospitality & Food",
    "E-Commerce & Retail",
    "Education & Coaching",
    "Accounting, Legal & Professional Services",
    "Real Estate & Property Management",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90"></div>
            <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>
            <ServicesAnimation />

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-10 animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-10 animate-blob animation-delay-2000"></div>

            {/* Service icons floating in background */}
            <div className="absolute top-1/3 left-1/5 text-white/20">
              <Workflow className="h-24 w-24" />
            </div>
            <div className="absolute top-2/3 right-1/5 text-white/20">
              <Sparkles className="h-20 w-20" />
            </div>
            <div className="absolute bottom-1/3 left-1/3 text-white/20">
              <LinkIcon className="h-16 w-16" />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">Our Services</h1>
              <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Comprehensive AI-powered automation solutions tailored to your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Core Services</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Our fundamental offerings that form the backbone of our AI automation solutions.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {coreServices.map((service, index) => (
                <AnimateOnScroll key={service.title} animation="fade-up" delay={index * 0.1}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    iconColor={service.color}
                  />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How It Works</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Our streamlined process for implementing AI automation in your business.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="mt-12">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <AnimateOnScroll animation="fade-up" delay={0.1}>
                  <div className="relative">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                      <span className="text-lg font-bold">1</span>
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900 text-center">Discovery</h3>
                    <p className="mt-2 text-base text-gray-500 text-center">
                      We analyze your current workflows, identify automation opportunities, and understand your business
                      goals.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.2}>
                  <div className="mt-10 lg:mt-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900 text-center">Design & Development</h3>
                    <p className="mt-2 text-base text-gray-500 text-center">
                      Our team designs and builds custom AI-powered automation solutions tailored to your specific
                      needs.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.3}>
                  <div className="mt-10 lg:mt-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                      <span className="text-lg font-bold">3</span>
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900 text-center">Implementation & Support</h3>
                    <p className="mt-2 text-base text-gray-500 text-center">
                      We seamlessly integrate the solutions into your business, provide training, and offer ongoing
                      support.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Services Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Specialized Services</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Additional offerings to enhance your automation experience.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {specializedServices.map((service, index) => (
                <AnimateOnScroll key={service.title} animation="fade-up" delay={index * 0.1}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    iconColor={service.color}
                  />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section - FIXED UNIFORM CARDS */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Industries We Serve</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Our AI automation solutions are adaptable to various industries.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry, index) => (
                <AnimateOnScroll key={industry} animation="fade-up" delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 h-24">
                    <h3 className="text-lg font-medium text-gray-900 text-center">{industry}</h3>
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
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to automate your business?</h2>
                <p className="mt-4 text-xl text-blue-100">
                  Schedule a free consultation to discuss your specific needs.
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
