"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  notIncluded: string[]
  cta: string
  popular: boolean
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  notIncluded,
  cta,
  popular,
}: PricingCardProps) {
  // Calculate the total number of items to display
  const totalItems = 9 // Set a fixed number for all cards
  const displayedFeatures = features.slice(0, totalItems)
  const remainingSlots = totalItems - displayedFeatures.length
  const displayedNotIncluded = notIncluded.slice(0, remainingSlots)

  return (
    <Card
      className={`flex flex-col overflow-hidden h-full ${popular ? "border-blue-500 shadow-lg" : "border-gray-200"}`}
    >
      {popular && (
        <div className="bg-blue-500 py-1 text-center text-sm font-semibold uppercase text-white">Most Popular</div>
      )}
      <CardHeader className="bg-white p-6">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-extrabold tracking-tight text-gray-900">{price}</span>
          {price !== "Custom" && <span className="ml-1 text-xl font-medium text-gray-500">/month</span>}
        </div>
        <p className="mt-5 text-base text-gray-500">{description}</p>
      </CardHeader>
      <CardContent className="flex flex-col justify-between flex-1 p-6 bg-gray-50 space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-900">What's included:</h4>
          <ul className="mt-4 space-y-3">
            {displayedFeatures.map((feature) => (
              <li key={feature} className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="ml-3 text-sm text-gray-500">{feature}</span>
              </li>
            ))}
            {displayedNotIncluded.map((feature) => (
              <li key={feature} className="flex items-start">
                <X className="flex-shrink-0 h-5 w-5 text-gray-400" />
                <span className="ml-3 text-sm text-gray-400">{feature}</span>
              </li>
            ))}
            {/* Add empty slots if needed to maintain consistent height */}
            {Array.from({ length: totalItems - displayedFeatures.length - displayedNotIncluded.length }).map((_, i) => (
              <li key={`empty-${i}`} className="h-5 invisible">
                <span className="text-sm">&nbsp;</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          className={`w-full mt-auto ${popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
          onClick={() => {
            // Navigate to home page and scroll to contact section
            window.location.href = "/#contact"
          }}
        >
          {cta}
        </Button>
      </CardContent>
    </Card>
  )
}
