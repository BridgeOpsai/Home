"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "./ui/animate-on-scroll"

export default function DemoVideoSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Handle the "Schedule a Personalized Demo" button click
  const handleScheduleDemo = () => {
    // Navigate to book-call page
    window.location.href = "/book-call"
  }

  // Update the useEffect hook to include baskets
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Animation variables
    const nodes: Node[] = []
    const connections: Connection[] = []
    const documentIcons: DocumentIcon[] = []
    const processingCircles: ProcessingCircle[] = []
    const baskets: Basket[] = []

    // Create nodes
    for (let i = 0; i < 15; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 3 + Math.random() * 3,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        color: `rgba(59, 130, 246, ${0.3 + Math.random() * 0.5})`,
      })
    }

    // Create connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.85) {
          connections.push({
            from: i,
            to: j,
            width: 0.5 + Math.random(),
            color: `rgba(99, 102, 241, ${0.1 + Math.random() * 0.2})`,
          })
        }
      }
    }

    // Create baskets
    const basketColors = ["#3b82f6", "#6366f1", "#8b5cf6"]
    const basketLabels = ["Urgent", "Standard", "Archive"]
    const basketWidth = 80
    const basketSpacing = 120
    const basketStartX = canvas.width / 2 - ((basketColors.length - 1) * basketSpacing) / 2

    for (let i = 0; i < basketColors.length; i++) {
      baskets.push({
        x: basketStartX + i * basketSpacing,
        y: canvas.height - 60, // Moved baskets up to avoid overlapping with labels
        width: basketWidth,
        height: 50, // Reduced height slightly
        color: basketColors[i],
        label: basketLabels[i],
        documents: [],
      })
    }

    // Create document icons
    const documentTypes = ["urgent", "standard", "archive"]
    const documentColors = {
      urgent: "#3b82f6", // Blue to match the Urgent basket
      standard: "#6366f1", // Indigo to match the Standard basket
      archive: "#8b5cf6", // Purple to match the Archive basket
    }

    for (let i = 0; i < 5; i++) {
      const type = documentTypes[Math.floor(Math.random() * documentTypes.length)]
      documentIcons.push({
        x: 100 + (canvas.width - 200) * Math.random(),
        y: -50 - 150 * Math.random(),
        width: 30,
        height: 40,
        vy: 0.5 + Math.random() * 1,
        processed: false,
        processedY: canvas.height / 2 + (Math.random() - 0.5) * 100,
        color: documentColors[type as keyof typeof documentColors],
        type: type,
        sorted: false,
        basketIndex: documentTypes.indexOf(type),
        sortProgress: 0,
      })
    }

    // Create processing circles
    for (let i = 0; i < 3; i++) {
      processingCircles.push({
        x: canvas.width / 2 + (i - 1) * 120,
        y: canvas.height / 2,
        radius: 40,
        rotation: 0,
        speed: 0.01 + Math.random() * 0.02,
        color: i === 0 ? "#3b82f6" : i === 1 ? "#6366f1" : "#8b5cf6",
      })
    }

    // Animation loop
    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      connections.forEach((connection) => {
        const fromNode = nodes[connection.from]
        const toNode = nodes[connection.to]

        ctx.beginPath()
        ctx.moveTo(fromNode.x, fromNode.y)
        ctx.lineTo(toNode.x, toNode.y)
        ctx.strokeStyle = connection.color
        ctx.lineWidth = connection.width
        ctx.stroke()
      })

      // Draw and update nodes
      nodes.forEach((node) => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off walls
        if (node.x < node.radius || node.x > canvas.width - node.radius) {
          node.vx *= -1
        }
        if (node.y < node.radius || node.y > canvas.height - node.radius) {
          node.vy *= -1
        }

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()
      })

      // Draw and update processing circles
      processingCircles.forEach((circle) => {
        // Update rotation
        circle.rotation += circle.speed

        // Draw outer circle
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.strokeStyle = circle.color
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw rotating segments
        for (let i = 0; i < 3; i++) {
          const angle = circle.rotation + (i * Math.PI * 2) / 3
          const x1 = circle.x + Math.cos(angle) * (circle.radius - 10)
          const y1 = circle.y + Math.sin(angle) * (circle.radius - 10)
          const x2 = circle.x + Math.cos(angle) * (circle.radius + 10)
          const y2 = circle.y + Math.sin(angle) * (circle.radius + 10)

          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
          ctx.strokeStyle = circle.color
          ctx.lineWidth = 4
          ctx.stroke()
        }

        // Draw inner circle
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius - 15, 0, Math.PI * 2)
        ctx.fillStyle = `${circle.color}20`
        ctx.fill()
      })

      // Draw and update document icons
      documentIcons.forEach((doc) => {
        // Update position based on state
        if (!doc.processed && doc.y < doc.processedY) {
          // Moving to processing area
          doc.y += doc.vy
        } else if (!doc.processed) {
          // Just reached processing area
          doc.processed = true

          // Start sorting after a delay
          setTimeout(
            () => {
              doc.sorted = true
            },
            1000 + Math.random() * 1000,
          )

          // Create a new document at the top
          setTimeout(
            () => {
              const type = documentTypes[Math.floor(Math.random() * documentTypes.length)]
              documentIcons.push({
                x: 100 + (canvas.width - 200) * Math.random(),
                y: -50,
                width: 30,
                height: 40,
                vy: 0.5 + Math.random() * 1,
                processed: false,
                processedY: canvas.height / 2 + (Math.random() - 0.5) * 100,
                color: documentColors[type as keyof typeof documentColors],
                type: type,
                sorted: false,
                basketIndex: documentTypes.indexOf(type),
                sortProgress: 0,
              })
            },
            1000 + Math.random() * 2000,
          )
        } else if (doc.processed && doc.sorted && doc.sortProgress < 1) {
          // Moving to correct basket
          doc.sortProgress += 0.02

          const targetBasket = baskets[doc.basketIndex]
          const startX = doc.x
          const startY = doc.y
          const endX = targetBasket.x
          const endY = targetBasket.y - 20

          // Use easing function for smooth movement
          const easeOutQuad = (t: number) => t * (2 - t)
          const progress = easeOutQuad(doc.sortProgress)

          doc.x = startX + (endX - startX) * progress
          doc.y = startY + (endY - startY) * progress

          // When document reaches basket
          if (doc.sortProgress >= 1) {
            // Add to basket's documents
            baskets[doc.basketIndex].documents.push({
              width: doc.width,
              height: doc.height,
              color: doc.color,
            })

            // Remove from active documents in next frame
            setTimeout(() => {
              const index = documentIcons.indexOf(doc)
              if (index > -1) {
                documentIcons.splice(index, 1)
              }
            }, 0)
          }
        }

        // Only draw if not fully sorted
        if (doc.sortProgress < 1) {
          // Draw document icon
          ctx.fillStyle = doc.color

          // Document body
          ctx.beginPath()
          ctx.moveTo(doc.x, doc.y)
          ctx.lineTo(doc.x + doc.width, doc.y)
          ctx.lineTo(doc.x + doc.width, doc.y + doc.height)
          ctx.lineTo(doc.x, doc.y + doc.height)
          ctx.closePath()
          ctx.fill()

          // Document fold
          ctx.beginPath()
          ctx.moveTo(doc.x + doc.width * 0.7, doc.y)
          ctx.lineTo(doc.x + doc.width, doc.y + doc.width * 0.3)
          ctx.lineTo(doc.x + doc.width * 0.7, doc.y + doc.width * 0.3)
          ctx.closePath()
          ctx.fillStyle = "#ffffff30"
          ctx.fill()

          // Document lines
          ctx.fillStyle = "#ffffff50"
          for (let i = 0; i < 3; i++) {
            ctx.fillRect(doc.x + 5, doc.y + doc.height * 0.4 + i * 8, doc.width - 10, 2)
          }

          // If processed, draw a checkmark
          if (doc.processed) {
            ctx.strokeStyle = "#10b981"
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.moveTo(doc.x + 8, doc.y + doc.height / 2)
            ctx.lineTo(doc.x + 12, doc.y + doc.height / 2 + 5)
            ctx.lineTo(doc.x + 22, doc.y + doc.height / 2 - 5)
            ctx.stroke()
          }
        }
      })

      // Draw baskets
      baskets.forEach((basket, index) => {
        // Draw basket
        ctx.fillStyle = basket.color

        // Basket body (trapezoid shape)
        ctx.beginPath()
        ctx.moveTo(basket.x - basket.width / 2, basket.y)
        ctx.lineTo(basket.x + basket.width / 2, basket.y)
        ctx.lineTo(basket.x + basket.width / 2 - 10, basket.y + basket.height)
        ctx.lineTo(basket.x - basket.width / 2 + 10, basket.y + basket.height)
        ctx.closePath()
        ctx.fill()

        // Basket outline
        ctx.strokeStyle = "#ffffff50"
        ctx.lineWidth = 2
        ctx.stroke()

        // Basket label
        ctx.font = "bold 14px sans-serif"
        ctx.fillStyle = "#ffffff"
        ctx.textAlign = "center"
        ctx.fillText(basket.label, basket.x, basket.y + basket.height + 20)

        // Draw documents in the basket (limit to 6 documents per basket to prevent overflow)
        const maxDocsToShow = Math.min(basket.documents.length, 6)
        for (let docIndex = 0; docIndex < maxDocsToShow; docIndex++) {
          const doc = basket.documents[docIndex]
          const offsetX = ((docIndex % 3) - 1) * 15
          const offsetY = -Math.floor(docIndex / 3) * 10 - 10

          // Draw document
          ctx.fillStyle = doc.color

          // Document body
          ctx.beginPath()
          ctx.moveTo(basket.x + offsetX, basket.y + offsetY)
          ctx.lineTo(basket.x + offsetX + doc.width, basket.y + offsetY)
          ctx.lineTo(basket.x + offsetX + doc.width, basket.y + offsetY + doc.height)
          ctx.lineTo(basket.x + offsetX, basket.y + offsetY + doc.height)
          ctx.closePath()
          ctx.fill()

          // Document fold
          ctx.beginPath()
          ctx.moveTo(basket.x + offsetX + doc.width * 0.7, basket.y + offsetY)
          ctx.lineTo(basket.x + offsetX + doc.width, basket.y + offsetY + doc.width * 0.3)
          ctx.lineTo(basket.x + offsetX + doc.width * 0.7, basket.y + offsetY + doc.width * 0.3)
          ctx.closePath()
          ctx.fillStyle = "#ffffff30"
          ctx.fill()

          // Document lines
          ctx.fillStyle = "#ffffff50"
          for (let i = 0; i < 3; i++) {
            ctx.fillRect(basket.x + offsetX + 5, basket.y + offsetY + doc.height * 0.4 + i * 8, doc.width - 10, 2)
          }
        }
      })

      // Draw title
      ctx.font = "bold 24px sans-serif"
      ctx.fillStyle = "#1e3a8a"
      ctx.textAlign = "center"
      ctx.fillText("AI Automation in Action", canvas.width / 2, 40)

      // Draw labels
      ctx.font = "16px sans-serif"
      ctx.fillStyle = "#6b7280"
      ctx.textAlign = "center"

      processingCircles.forEach((circle, i) => {
        const labels = ["Data Intake", "AI Processing", "Classification"]
        // Position labels higher to avoid overlap with baskets
        ctx.fillText(labels[i], circle.x, circle.y + circle.radius + 25)
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">See AI Automation in Action</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Watch how BridgeOps.ai transforms business workflows with AI-powered automation.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={0.2}>
          <div className="mt-10 relative rounded-lg overflow-hidden shadow-xl bg-gray-50">
            <div className="aspect-w-16 aspect-h-9">
              <canvas ref={canvasRef} className="w-full h-full object-cover" style={{ minHeight: "450px" }} />
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={0.3}>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600">
              This animation demonstrates how our AI automation can handle document processing, data analysis, and
              workflow automation—all without human intervention.
            </p>
            <div className="mt-4">
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleScheduleDemo}>
                Schedule a Personalized Demo
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

// Add the new interfaces at the end of the file
interface Basket {
  x: number
  y: number
  width: number
  height: number
  color: string
  label: string
  documents: {
    width: number
    height: number
    color: string
  }[]
}

// Update the DocumentIcon interface
interface DocumentIcon {
  x: number
  y: number
  width: number
  height: number
  vy: number
  processed: boolean
  processedY: number
  color: string
  type: string
  sorted: boolean
  basketIndex: number
  sortProgress: number
}

// Types for animation
interface Node {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  color: string
}

interface Connection {
  from: number
  to: number
  width: number
  color: string
}

interface ProcessingCircle {
  x: number
  y: number
  radius: number
  rotation: number
  speed: number
  color: string
}
