"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PricingCard from "@/components/pricing-card"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      description: "Perfect for small businesses just beginning with automation.",
      features: [
        "3 automated workflows",
        "Integration with up to 5 tools",
        "Email support",
        "Basic analytics",
        "Monthly updates",
      ],
      notIncluded: ["Custom AI training", "Dedicated account manager", "Advanced analytics", "Priority support"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$999",
      description: "Ideal for growing businesses with more complex needs.",
      features: [
        "10 automated workflows",
        "Integration with up to 15 tools",
        "Email and chat support",
        "Advanced analytics",
        "Bi-weekly updates",
        "Basic custom AI training",
        "Priority support",
      ],
      notIncluded: ["Dedicated account manager"],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For established businesses with advanced automation requirements.",
      features: [
        "Unlimited automated workflows",
        "Integration with unlimited tools",
        "24/7 priority support",
        "Comprehensive analytics",
        "Weekly updates",
        "Advanced custom AI training",
        "Dedicated account manager",
      ],
      notIncluded: [], // Remove empty strings
      cta: "Contact Us",
      popular: false,
    },
  ]

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
                  Simple, Transparent Pricing
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Choose the plan that's right for your business. All plans include a consultation with our automation
                  experts.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Pricing Plans - FIXED UNIFORM BOXES */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-fr">
              {pricingPlans.map((plan, index) => (
                <AnimateOnScroll key={plan.name} animation="fade-up" delay={index * 0.1}>
                  <PricingCard
                    name={plan.name}
                    price={plan.price}
                    description={plan.description}
                    features={plan.features}
                    notIncluded={plan.notIncluded}
                    cta={plan.cta}
                    popular={plan.popular}
                  />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Find answers to common questions about our pricing and services.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="mt-12 max-w-3xl mx-auto">
              <div className="space-y-8">
                <AnimateOnScroll animation="fade-up" delay={0.1}>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">What's included in the initial consultation?</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Our initial consultation includes a thorough assessment of your current workflows, identification
                      of automation opportunities, and a customized proposal tailored to your business needs.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.2}>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Can I change plans later?</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be
                      available immediately. When downgrading, the changes will take effect at the start of your next
                      billing cycle.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.3}>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">What counts as an "automated workflow"?</h3>
                    <p className="mt-2 text-base text-gray-500">
                      An automated workflow is a series of actions that are triggered by a specific event. For example,
                      automatically sending a welcome email when a new customer signs up, or updating inventory when a
                      sale is made.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.4}>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Do you offer discounts for annual billing?</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Yes, we offer a 15% discount for annual billing on all plans. This option will be available during
                      the checkout process.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.5}>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">What kind of support can I expect?</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Support varies by plan. Starter includes email support with a 24-hour response time. Professional
                      adds chat support with a 12-hour response time and priority support. Enterprise includes 24/7
                      priority support with a guaranteed 1-hour response time for critical issues and a dedicated
                      account manager.
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
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Not sure which plan is right for you?
                </h2>
                <p className="mt-4 text-xl text-blue-100">
                  Schedule a free consultation with our team to discuss your specific needs.
                </p>
                <div className="mt-8">
                  <Button
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50"
                    onClick={() => {
                      // Navigate to home page and scroll to contact section
                      window.location.href = "/#contact"
                    }}
                  >
                    Book a Consultation
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
