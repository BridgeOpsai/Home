"use client"
import { useState, useEffect } from "react"
import { AnimateOnScroll } from "./ui/animate-on-scroll"
import { Quote } from "lucide-react"

// Define the testimonial data structure
interface TestimonialData {
  quote: string
  name: string
  title: string
  company: string
}

// Create an array of testimonials
const testimonials: TestimonialData[] = [
  {
    quote:
      "BridgeOps.ai completely reshaped our approach. We handle twice as many customers effortlessly, with dramatically reduced costs.",
    name: "Mike",
    title: "Owner",
    company: "Suffolk Tent & Party Rentals",
  },
  {
    quote:
      "The automation solutions from BridgeOps.ai saved our team over 30 hours per week on repetitive tasks. Our customer satisfaction has increased by 40%.",
    name: "Sarah Johnson",
    title: "Operations Director",
    company: "Coastal Medical Group",
  },
  {
    quote:
      "Implementing BridgeOps.ai's workflow automation was the best business decision we made this year. Our ROI was realized within the first month.",
    name: "David Chen",
    title: "CEO",
    company: "Nexus Technologies",
  },
  {
    quote:
      "What impressed me most was how quickly they understood our unique business challenges and delivered a custom solution that actually works.",
    name: "Jennifer Williams",
    title: "Founder",
    company: "Bright Path Education",
  },
]

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-advance the testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 100)
      }, 500)
    }, 8000) // Change testimonial every 8 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="zoom-in">
          <div className="max-w-3xl mx-auto text-center relative">
            <Quote className="mx-auto h-12 w-12 text-blue-400" />

            <div className="min-h-[200px] flex items-center justify-center">
              <div className="transition-all duration-700 ease-in-out" style={{ opacity: isTransitioning ? 0 : 1 }}>
                <blockquote className="mt-6">
                  <p className="text-xl font-medium text-gray-900">"{testimonials[currentIndex].quote}"</p>
                  <footer className="mt-6">
                    <p className="text-base font-medium text-blue-600">{testimonials[currentIndex].name}</p>
                    <p className="text-base text-gray-500">
                      {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-blue-600 w-4" : "bg-blue-300 w-2"
                  }`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
