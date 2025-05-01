import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import { ChevronRight, TrendingUp, BarChart3, Target, CheckCircle2, Users, Briefcase } from "lucide-react"
import Navbar from "@/components/navbar"

export const metadata = {
  title: "Investment Fund | BridgeOps.ai",
  description:
    "BridgeOps.ai Investment Fund provides capital for businesses at various stages, from seed funding to growth capital.",
}

export default function InvestmentFundPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-blue-600 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-700/20"></div>

          {/* Animated blobs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <AnimateOnScroll animation="fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
                BridgeOps.ai Investment Fund
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mb-8">
                Fueling innovation and growth for businesses at every stage. We provide capital, expertise, and
                strategic guidance to help companies scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#apply">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    Apply for Funding
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#criteria">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-blue-700"
                  >
                    Investment Criteria
                  </Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Investing in the Future of Business
                </h2>
                <p className="text-xl text-gray-600">
                  The BridgeOps.ai Investment Fund is dedicated to supporting innovative businesses with capital and
                  strategic guidance. Whether you're seeking seed funding or raising capital for growth, we're
                  interested in exploring opportunities.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimateOnScroll animation="fade-up" delay={0.1}>
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Seed Funding</h3>
                  <p className="text-gray-600">
                    For early-stage companies with promising ideas and initial traction. We provide the capital needed
                    to validate your business model and reach key milestones.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.2}>
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth Capital</h3>
                  <p className="text-gray-600">
                    For established businesses looking to scale operations, enter new markets, or accelerate growth. We
                    provide the financial resources to take your business to the next level.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.3}>
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Investments</h3>
                  <p className="text-gray-600">
                    For businesses with synergies to our core operations. We invest in companies that complement our
                    technology stack or can benefit from our automation expertise.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Investment Criteria Section */}
        <section id="criteria" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Investment Criteria</h2>
                <p className="text-xl text-gray-600">
                  We look for businesses with strong fundamentals, innovative approaches, and significant growth
                  potential. Our investment decisions are guided by the following criteria:
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimateOnScroll animation="fade-up" delay={0.1}>
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2" />
                    Market Opportunity
                  </h3>
                  <p className="text-gray-600">
                    We invest in businesses addressing large, growing markets with a clear opportunity for significant
                    scale.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.2}>
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2" />
                    Strong Team
                  </h3>
                  <p className="text-gray-600">
                    We look for passionate, experienced founders and management teams with domain expertise and a track
                    record of execution.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.3}>
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2" />
                    Innovative Technology
                  </h3>
                  <p className="text-gray-600">
                    We prioritize businesses with proprietary technology, unique approaches, or innovative business
                    models that create competitive advantages.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.4}>
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2" />
                    Traction & Validation
                  </h3>
                  <p className="text-gray-600">
                    We seek evidence of product-market fit, customer adoption, and a clear path to sustainable growth
                    and profitability.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Focus Industries Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Focus Industries</h2>
                <p className="text-xl text-gray-600">
                  While we consider opportunities across various sectors, we have particular expertise and interest in
                  the following industries:
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { icon: <Users className="h-6 w-6" />, name: "SaaS & Enterprise Software" },
                { icon: <Briefcase className="h-6 w-6" />, name: "Business Process Automation" },
                { icon: <Users className="h-6 w-6" />, name: "AI & Machine Learning" },
                { icon: <Briefcase className="h-6 w-6" />, name: "FinTech" },
                { icon: <Users className="h-6 w-6" />, name: "Healthcare Technology" },
                { icon: <Briefcase className="h-6 w-6" />, name: "E-commerce & Retail Tech" },
                { icon: <Users className="h-6 w-6" />, name: "Real Estate Technology" },
                { icon: <Briefcase className="h-6 w-6" />, name: "Professional Services" },
              ].map((industry, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 0.1}>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      {industry.icon}
                    </div>
                    <p className="text-gray-800 font-medium">{industry.name}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Investment Process</h2>
                <p className="text-xl text-gray-600">
                  Our streamlined investment process is designed to be efficient and transparent, allowing us to make
                  decisions quickly while conducting thorough due diligence.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2 hidden md:block"></div>

              <div className="space-y-12">
                {[
                  {
                    title: "Initial Application",
                    description:
                      "Submit your business information, pitch deck, and funding requirements through our application form.",
                  },
                  {
                    title: "Preliminary Review",
                    description:
                      "Our investment team reviews your application to assess alignment with our investment criteria and focus areas.",
                  },
                  {
                    title: "Initial Meeting",
                    description:
                      "If there's potential alignment, we'll schedule a meeting to learn more about your business, team, and vision.",
                  },
                  {
                    title: "Due Diligence",
                    description:
                      "For promising opportunities, we conduct a thorough review of your business, market, financials, and growth potential.",
                  },
                  {
                    title: "Investment Decision",
                    description:
                      "Based on our due diligence findings, we make an investment decision and present terms if we decide to proceed.",
                  },
                  {
                    title: "Closing & Partnership",
                    description:
                      "Once terms are agreed upon, we finalize the investment and begin our partnership to help accelerate your growth.",
                  },
                ].map((step, index) => (
                  <AnimateOnScroll key={index} animation="fade-up" delay={index * 0.1}>
                    <div className="relative">
                      <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div className={`md:text-right ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                          <div className={`relative ${index % 2 === 1 ? "md:pl-8" : "md:pr-8"}`}>
                            {/* Circle marker */}
                            <div className="hidden md:block absolute top-5 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center z-10 transform -translate-y-1/2 text-sm">
                              {index + 1}
                            </div>
                            {/* Content */}
                            <div
                              className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm ${index % 2 === 0 ? "md:mr-4" : "md:ml-4"}`}
                            >
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                              <p className="text-gray-600">{step.description}</p>
                            </div>
                          </div>
                        </div>
                        {index % 2 === 1 && <div className="hidden md:block"></div>}
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Apply Section */}
        <section id="apply" className="py-16 md:py-24 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-700/20"></div>

          {/* Animated blobs */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Accelerate Your Growth?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  If you're seeking funding and believe your business aligns with our investment criteria, we'd love to
                  hear from you. Apply now to start the conversation.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    Apply for Funding
                  </Button>
                </Link>
                <p className="text-blue-200 mt-6">
                  You can also email us directly at{" "}
                  <a href="mailto:investments@bridgeops.ai" className="underline hover:text-white">
                    investments@bridgeops.ai
                  </a>
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">
                  Find answers to common questions about our investment fund and process.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    question: "What investment stages do you focus on?",
                    answer:
                      "We invest across multiple stages, from seed funding for early-stage startups to growth capital for established businesses looking to scale. Our investment size typically ranges from $50,000 to $500,000, depending on the stage and needs of the business.",
                  },
                  {
                    question: "What industries do you invest in?",
                    answer:
                      "While we consider opportunities across various sectors, we have particular expertise and interest in SaaS, business process automation, AI/ML, FinTech, healthcare technology, e-commerce, real estate technology, and professional services.",
                  },
                  {
                    question: "What is your investment timeline?",
                    answer:
                      "Our investment process typically takes 4-8 weeks from initial application to funding, depending on the complexity of the business and the thoroughness of the information provided. We aim to be efficient while conducting proper due diligence.",
                  },
                  {
                    question: "Do you provide support beyond capital?",
                    answer:
                      "Yes, we take an active approach to our investments. Beyond capital, we offer strategic guidance, operational expertise, technology resources, and access to our network of industry connections to help accelerate your growth.",
                  },
                  {
                    question: "What information should I include in my application?",
                    answer:
                      "Your application should include a pitch deck, business plan, financial projections, information about your team, current traction/metrics, and details about your funding requirements and how you plan to use the capital.",
                  },
                ].map((faq, index) => (
                  <AnimateOnScroll key={index} animation="fade-up" delay={index * 0.1}>
                    <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="bg-blue-600 rounded-2xl overflow-hidden shadow-xl">
                <div className="relative px-6 py-10 sm:px-12 sm:py-16 md:py-20 md:px-16 text-center">
                  <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
                  <div className="relative">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Let's Build Something Great Together
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                      Whether you're just starting out or looking to scale, our investment fund can provide the capital
                      and expertise you need to reach your goals.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Link href="/contact">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                          Apply for Funding
                        </Button>
                      </Link>
                      <Link href="/book-call">
                        <Button
                          size="lg"
                          variant="outline"
                          className="bg-transparent border-white text-white hover:bg-blue-700"
                        >
                          Schedule a Call
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
    </>
  )
}
