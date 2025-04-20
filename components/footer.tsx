"use client"

import type React from "react"

import { AnimateOnScroll } from "./ui/animate-on-scroll"

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="mb-8 lg:mb-0">
              <p className="text-base text-gray-400">
                &copy; {new Date().getFullYear()} BridgeOps.ai. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/terms" className="text-sm text-gray-400 hover:text-gray-300">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-gray-300">
                Privacy Policy
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  )
}

const Link = ({ href, className, children }: { href: string; className: string; children: React.ReactNode }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
