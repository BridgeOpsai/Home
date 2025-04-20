import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface CaseStudyCardProps {
  title: string
  industry: string
  results: string[]
  description: string
  imageUrl?: string
}

export default function CaseStudyCard({ title, industry, results, description, imageUrl }: CaseStudyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="aspect-w-3 aspect-h-2 h-48">
        <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 p-4 flex flex-col justify-center">
          <div className="text-white text-center">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white">
              {industry}
            </span>
          </div>
        </div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <p className="mt-3 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900">Key Results:</h4>
          <ul className="mt-2 space-y-1">
            {results.map((result, index) => (
              <li key={index} className="text-sm text-gray-500 flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                {result}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <Button variant="outline" className="w-full justify-between">
            Read Case Study
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
