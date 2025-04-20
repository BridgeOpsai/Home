import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  iconColor: string
  image?: string
}

export default function ServiceCard({ title, description, icon: Icon, iconColor, image }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex items-center">
          <div className={`flex items-center justify-center h-12 w-12 rounded-md ${iconColor} text-white`}>
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="ml-4 text-lg font-medium text-gray-900">{title}</h3>
        </div>
        <p className="mt-4 text-base text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}
