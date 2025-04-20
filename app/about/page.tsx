"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronRight, Users, Lightbulb, Target, Zap } from "lucide-react"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"

// Add the AboutAnimation component to the hero section
import AboutAnimation from "@/components/about-animation"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700">
            <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>
            <AboutAnimation />

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-10 animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-10 animate-blob animation-delay-2000"></div>

            {/* Abstract graphics */}
            <div className="absolute top-1/3 right-1/5 w-32 h-32 bg-white/10 rounded-lg transform rotate-12"></div>
            <div className="absolute bottom-1/3 left-1/5 w-40 h-24 bg-white/10 rounded-lg transform -rotate-6"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">About BridgeOps.ai</h1>
              <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                We're on a mission to revolutionize how businesses operate through AI-driven automation.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <AnimateOnScroll animation="fade-right">
                <div>
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Story</h2>
                  <p className="mt-3 text-lg text-gray-500">
                    <strong>BridgeOps.ai was founded by Adam Pierce in 2023</strong>, an AI enthusiast and business
                    automation expert who recognized a gap in the market: small to medium-sized businesses were being
                    left behind in the AI revolution.
                  </p>
                  <p className="mt-3 text-lg text-gray-500">
                    We set out to create accessible, powerful AI solutions that could transform how these businesses
                    operate, helping them compete with larger enterprises without requiring massive IT departments or
                    technical expertise.
                  </p>
                  <p className="mt-3 text-lg text-gray-500">
                    Today, we're proud to serve hundreds of businesses across various industries, helping them automate
                    workflows, reduce costs, and focus on what truly matters—growth and innovation.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-left" delay={0.2}>
                <div className="mt-10 lg:mt-0">
                  <div className="relative">
                    {/* Company vision box */}
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-full h-full p-8 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="flex justify-center mb-6">
                            <Users className="h-24 w-24" />
                          </div>
                          <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                          <p className="text-xl max-w-md mx-auto">
                            Making AI accessible and practical for businesses of all sizes
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Fixed positioning of the founded box */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-lg shadow-lg flex items-center justify-center z-10">
                      <div className="text-center">
                        <div className="text-blue-600 font-bold text-3xl">2023</div>
                        <div className="text-gray-600 text-sm">Founded</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  To make powerful automation accessible to businesses of all sizes.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <AnimateOnScroll animation="fade-up" delay={0.1}>
                  <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden h-full flex flex-col">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-bl-full flex items-center justify-center">
                      <Lightbulb className="h-8 w-8 text-blue-500 transform -translate-x-1 translate-y-1" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">Simplify</h3>
                    <p className="mt-2 text-base text-gray-500">
                      We transform complex AI technology into user-friendly solutions that anyone can implement and
                      manage.
                      <br />
                      <br />
                    </p>
                    <div className="mt-4 flex-grow">
                      <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center p-4">
                        <div className="text-center">
                          <div className="text-blue-600 font-medium">From Complex</div>
                          <div className="text-xs text-gray-500 my-1">to</div>
                          <div className="text-blue-600 font-bold">Simple</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.2}>
                  <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden h-full flex flex-col">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-bl-full flex items-center justify-center">
                      <Target className="h-8 w-8 text-blue-500 transform -translate-x-1 translate-y-1" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">Empower</h3>
                    <p className="mt-2 text-base text-gray-500">
                      We give businesses the tools they need to automate routine tasks and focus on strategic growth.
                      <br />
                      <br />
                    </p>
                    <div className="mt-4 flex-grow">
                      <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center p-4">
                        <div className="text-center">
                          <div className="text-blue-600 font-medium">From Manual</div>
                          <div className="text-xs text-gray-500 my-1">to</div>
                          <div className="text-blue-600 font-bold">Automated</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.3}>
                  <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden h-full flex flex-col">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-bl-full flex items-center justify-center">
                      <Zap className="h-8 w-8 text-blue-500 transform -translate-x-1 translate-y-1" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">Innovate</h3>
                    <p className="mt-2 text-base text-gray-500">
                      We continuously evolve our technology to stay at the forefront of AI advancements and business
                      needs.
                      <br />
                      <br />
                    </p>
                    <div className="mt-4 flex-grow">
                      <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center p-4">
                        <div className="text-center">
                          <div className="text-blue-600 font-medium">From Static</div>
                          <div className="text-xs text-gray-500 my-1">to</div>
                          <div className="text-blue-600 font-bold">Dynamic</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Approach</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  How we deliver exceptional automation solutions
                </p>
              </div>
            </AnimateOnScroll>

            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <AnimateOnScroll animation="fade-up" delay={0.1}>
                  <div className="bg-white p-6 rounded-lg shadow-md h-full">
                    <div className="text-blue-600 text-2xl font-bold mb-2">01</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Discover</h3>
                    <p className="text-gray-500">
                      We begin by understanding your business processes, pain points, and goals to identify the best
                      automation opportunities.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.2}>
                  <div className="bg-white p-6 rounded-lg shadow-md h-full">
                    <div className="text-blue-600 text-2xl font-bold mb-2">02</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Design</h3>
                    <p className="text-gray-500">
                      We create a custom automation solution tailored to your specific needs, integrating with your
                      existing systems.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.3}>
                  <div className="bg-white p-6 rounded-lg shadow-md h-full">
                    <div className="text-blue-600 text-2xl font-bold mb-2">03</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Develop</h3>
                    <p className="text-gray-500">
                      Our experts build your solution using cutting-edge AI technology, ensuring it's robust, secure,
                      and user-friendly.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.4}>
                  <div className="bg-white p-6 rounded-lg shadow-md h-full">
                    <div className="text-blue-600 text-2xl font-bold mb-2">04</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Deploy & Support</h3>
                    <p className="text-gray-500">
                      We implement your solution with minimal disruption and provide ongoing support to ensure long-term
                      success.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Company Culture</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  We believe in creating an environment where innovation thrives
                </p>
              </div>
            </AnimateOnScroll>

            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimateOnScroll animation="fade-right">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                    <div className="aspect-w-16 aspect-h-9">
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <div className="text-center p-8">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation Hub</h3>
                          <p className="text-gray-600">
                            Our company is designed to foster creativity and collaboration, with dedicated resources for
                            brainstorming and experimentation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-left">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                    <div className="aspect-w-16 aspect-h-9">
                      <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                        <div className="text-center p-8">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
                          <p className="text-gray-600">
                            We invest in continuous education through regular training, workshops, and conference
                            attendance to stay at the cutting edge of AI technology.
                          </p>
                        </div>
                      </div>
                    </div>
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
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to transform your business?</h2>
                <p className="mt-4 text-xl text-blue-100">
                  Join hundreds of businesses already benefiting from our AI-powered automation solutions.
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
