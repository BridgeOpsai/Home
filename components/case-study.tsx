import { Button } from "@/components/ui/button"
import { ChevronRight, BarChart, TrendingUp, Clock } from "lucide-react"
import { AnimateOnScroll } from "./ui/animate-on-scroll"
import Link from "next/link"

export default function CaseStudy() {
  return (
    <section id="case-studies" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Success Stories</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Real-World Impact Through AI
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-10 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <AnimateOnScroll animation="fade-right">
            <div className="relative">
              <div className="aspect-w-3 aspect-h-2 rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 p-8 flex flex-col justify-center">
                  <h3 className="text-white text-2xl font-bold mb-6">Party Rental Business Transformation</h3>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="flex justify-center mb-2">
                        <BarChart className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-white font-bold text-2xl">70%</div>
                      <div className="text-white text-sm">Reduction in Manual Tasks</div>
                    </div>

                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="flex justify-center mb-2">
                        <TrendingUp className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-white font-bold text-2xl">35%</div>
                      <div className="text-white text-sm">Increase in Customer Satisfaction</div>
                    </div>

                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="flex justify-center mb-2">
                        <Clock className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-white font-bold text-2xl">42%</div>
                      <div className="text-white text-sm">Revenue Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" delay={0.2}>
            <div className="mt-10 lg:mt-0">
              <div className="text-lg text-gray-500">
                <p>
                  Discover how BridgeOps.ai transformed a party rental business—reducing manual tasks by 70%, boosting
                  customer satisfaction, and significantly increasing revenue.
                </p>
                <div className="mt-8">
                  <Link href="/case-studies">
                    <Button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                      Read Case Study
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
