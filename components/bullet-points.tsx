import { Check } from "lucide-react"

export default function BulletPoints() {
  const bullets = [
    "Automate repetitive tasks across operations, sales, and customer service.",
    "Build custom AI systems that save time, cut costs, and drive real growth.",
    "Get 24/7 ongoing support to optimize automations as you scale.",
  ]

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">BridgeOps.ai helps businesses:</h2>
          <div className="space-y-6">
            {bullets.map((bullet, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <p className="ml-3 text-lg text-gray-700 text-left">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
