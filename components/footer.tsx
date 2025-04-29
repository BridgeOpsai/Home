"use client"
import Link from "next/link"
import { AnimateOnScroll } from "./ui/animate-on-scroll"

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">BridgeOps.ai</h3>
              <p className="text-gray-400 text-sm">
                Streamlining businesses with AI automation solutions that boost revenue and lower costs.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-400 hover:text-white text-sm">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/investment-fund" className="text-gray-400 hover:text-white text-sm">
                    Investment Fund
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 text-sm mb-2">30 Hudson Yards, New York, NY 10001</p>
              <p className="text-gray-400 text-sm">
                <a href="mailto:info@bridgeops.ai" className="hover:text-white">
                  info@bridgeops.ai
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} BridgeOps.ai. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/terms" className="text-sm text-gray-400 hover:text-gray-300">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-gray-300">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  )
}
