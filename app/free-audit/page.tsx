import type { Metadata } from "next"
import Link from "next/link"
import AuditForm from "./audit-form"

export const metadata: Metadata = {
  title: "Free AI Workflow Audit | BridgeOps.ai",
  description:
    "Get a free AI workflow audit for your business. Discover how AI can automate your repetitive tasks and save you 15+ hours per week.",
}

export default function FreeAuditPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Simple Header */}
      <header className="py-4 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-xl">
              B
            </div>
            <span className="text-xl font-bold">BridgeOps.ai</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <div>
            <div className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full mb-4">
              Limited Time Offer
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Free AI Workflow Audit
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover how AI can automate your repetitive tasks and save you 15+ hours per week.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-lg text-gray-700">Identify tasks that can be fully automated</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-lg text-gray-700">Get a custom AI implementation plan</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-lg text-gray-700">Learn how other businesses like yours are using AI</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg mb-8">
              <p className="text-blue-800 font-medium">
                "What used to take 3 hours now runs automatically. BridgeOps.ai helped us implement AI that actually
                works for our business."
              </p>
              <p className="text-sm text-blue-600 mt-2">— Michael Ramirez, Business Owner</p>
            </div>

            {/* Mobile Form - Only visible on small screens */}
            <div className="md:hidden">
              <AuditForm />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="hidden md:block bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <AuditForm />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2025 BridgeOps.ai. All rights reserved.</p>
            <p className="mt-2">30 Hudson Yards, New York, NY 10001</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
