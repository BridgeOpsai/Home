"use client"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 md:pt-0">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-white"></div>
        <div className="absolute inset-0 bg-grid-blue/[0.05] bg-[length:30px_30px]"></div>

        {/* Subtle animated blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative pt-10 pb-20 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32">
          <div className="px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                Streamline Your Business With AI Automation
              </h1>
              <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 bg-white/70 backdrop-blur-sm p-2 rounded-lg">
                Custom AI systems built to automate your workflow, boost your revenue, and lower your costs — with 24/7
                support.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <Link href="/book-call">
                  <Button className="px-8 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Book Your Free AI Audit
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Modern illustration */}
            <div className="block relative mt-8 lg:mt-0">
              <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
                {/* Central element */}
                <div className="relative z-10">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl flex items-center justify-center transform transition-transform hover:scale-105 duration-500">
                    <div className="text-white text-3xl md:text-5xl font-bold">AI</div>
                  </div>

                  {/* Pulsing ring */}
                  <div
                    className="absolute inset-0 -z-10 animate-ping-slow opacity-30 bg-blue-400 rounded-2xl"
                    style={{ animationDuration: "3s" }}
                  ></div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-8 md:top-12 left-0 bg-white p-3 md:p-4 rounded-lg shadow-lg animate-float">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 md:h-6 md:w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm md:text-base">Automate</div>
                      <div className="text-xs md:text-sm text-gray-500">Workflows</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 bg-white p-3 md:p-4 rounded-lg shadow-lg animate-float animation-delay-2000">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 md:h-6 md:w-6 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm md:text-base">Accelerate</div>
                      <div className="text-xs md:text-sm text-gray-500">Growth</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 right-0 bg-white p-3 md:p-4 rounded-lg shadow-lg animate-float animation-delay-1000">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 md:h-6 md:w-6 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm md:text-base">Optimize</div>
                      <div className="text-xs md:text-sm text-gray-500">Results</div>
                    </div>
                  </div>
                </div>

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
                  <line
                    x1="50%"
                    y1="50%"
                    x2="20%"
                    y2="20%"
                    stroke="rgba(99, 102, 241, 0.3)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="20%"
                    y2="80%"
                    stroke="rgba(99, 102, 241, 0.3)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="80%"
                    y2="50%"
                    stroke="rgba(99, 102, 241, 0.3)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
