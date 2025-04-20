"use client"
import { AnimateOnScroll } from "./ui/animate-on-scroll"
import { Quote } from "lucide-react"

export default function Testimonial() {
  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="zoom-in">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="mx-auto h-12 w-12 text-blue-400" />
            <blockquote className="mt-6">
              <p className="text-xl font-medium text-gray-900">
                "BridgeOps.ai completely reshaped our approach. We handle twice as many customers effortlessly, with
                dramatically reduced costs."
              </p>
              <footer className="mt-6">
                <p className="text-base font-medium text-blue-600">John Anderson</p>
                <p className="text-base text-gray-500">Suffolk Tent & Party Rentals</p>
              </footer>
            </blockquote>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
