import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  imageUrl?: string
}

export default function TeamMember({ name, role, bio, imageUrl }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="aspect-w-1 aspect-h-1 h-64">
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
          {imageUrl ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
          ) : (
            <User className="h-16 w-16 text-blue-500" />
          )}
        </div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-sm font-medium text-blue-600">{role}</p>
        <p className="mt-3 text-base text-gray-500 flex-grow">{bio}</p>
      </CardContent>
    </Card>
  )
}
