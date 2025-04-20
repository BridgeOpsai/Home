import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thank You | Free AI Workflow Audit | BridgeOps.ai",
  description: "Thank you for requesting your free AI workflow audit. We'll be in touch shortly.",
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
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

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h1>

          <p className="text-gray-600 mb-6">
            We've received your request for a free AI workflow audit. Our team will review your information and get back
            to you within 1 business day.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
            <h2 className="font-medium text-blue-800 mb-2">What happens next?</h2>
            <ol className="text-left text-blue-700 space-y-2 text-sm">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-2 mt-0.5">
                  1
                </span>
                <span>Our team will analyze your business needs</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-2 mt-0.5">
                  2
                </span>
                <span>We'll prepare a custom AI workflow audit</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-2 mt-0.5">
                  3
                </span>
                <span>We'll schedule a call to review the opportunities</span>
              </li>
            </ol>
          </div>

          <div className="space-y-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Schedule Your Consultation</Button>

            <Link href="/" className="block text-blue-600 hover:text-blue-800 text-sm">
              Return to Homepage
            </Link>
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
