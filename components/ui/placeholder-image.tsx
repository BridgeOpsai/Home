import type { ReactNode } from "react"
import { ImageIcon } from "lucide-react"

interface PlaceholderImageProps {
  width?: number
  height?: number
  text?: string
  icon?: ReactNode
  className?: string
}

export function PlaceholderImage({ width = 400, height = 300, text, icon, className = "" }: PlaceholderImageProps) {
  // Generate a color based on the text
  const getColor = (text: string) => {
    const colors = [
      "bg-blue-100",
      "bg-green-100",
      "bg-purple-100",
      "bg-yellow-100",
      "bg-pink-100",
      "bg-indigo-100",
      "bg-teal-100",
    ]

    let sum = 0
    for (let i = 0; i < text.length; i++) {
      sum += text.charCodeAt(i)
    }

    return colors[sum % colors.length]
  }

  const bgColor = text ? getColor(text) : "bg-gray-100"

  return (
    <div
      className={`flex items-center justify-center ${bgColor} ${className}`}
      style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "100%" }}
    >
      {icon ? (
        icon
      ) : text ? (
        <span className="text-lg font-medium text-gray-600">{text}</span>
      ) : (
        <ImageIcon className="h-12 w-12 text-gray-400" />
      )}
    </div>
  )
}
