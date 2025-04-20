"use client"

import { useEffect, useRef } from "react"

export default function ServicesAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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
    const gears: Gear[] = []
    const colors = ["#3b82f6", "#6366f1", "#8b5cf6", "#4f46e5"]

    // Create gears
    for (let i = 0; i < 12; i++) {
      gears.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 20 + Math.random() * 40,
        teeth: 8 + Math.floor(Math.random() * 8),
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.1 + Math.random() * 0.2,
      })
    }

    // Animation loop
    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update gears
      gears.forEach((gear) => {
        // Update rotation
        gear.rotation += gear.rotationSpeed

        // Draw gear
        ctx.save()
        ctx.translate(gear.x, gear.y)
        ctx.rotate(gear.rotation)

        // Draw gear teeth
        ctx.beginPath()
        for (let i = 0; i < gear.teeth; i++) {
          const angle = (i / gear.teeth) * Math.PI * 2
          const innerRadius = gear.radius * 0.7
          const outerRadius = gear.radius
          const toothDepth = gear.radius * 0.3

          // Inner point
          ctx.lineTo(innerRadius * Math.cos(angle), innerRadius * Math.sin(angle))

          // Outer point 1
          ctx.lineTo(outerRadius * Math.cos(angle - 0.1), outerRadius * Math.sin(angle - 0.1))

          // Tooth tip
          ctx.lineTo((outerRadius + toothDepth) * Math.cos(angle), (outerRadius + toothDepth) * Math.sin(angle))

          // Outer point 2
          ctx.lineTo(outerRadius * Math.cos(angle + 0.1), outerRadius * Math.sin(angle + 0.1))
        }
        ctx.closePath()

        // Fill gear
        ctx.fillStyle = `${gear.color}${Math.floor(gear.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        // Draw center circle
        ctx.beginPath()
        ctx.arc(0, 0, gear.radius * 0.2, 0, Math.PI * 2)
        ctx.fillStyle = `${gear.color}${Math.floor((gear.opacity + 0.1) * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        ctx.restore()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full absolute inset-0 z-0" style={{ pointerEvents: "none" }} />
}

// Types for animation
interface Gear {
  x: number
  y: number
  radius: number
  teeth: number
  rotation: number
  rotationSpeed: number
  color: string
  opacity: number
}
