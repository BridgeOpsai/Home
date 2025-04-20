"use client"

import { useEffect, useRef } from "react"

export default function AboutAnimation() {
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
    const particles: Particle[] = []
    const values = ["AI", "ML", "NLP", "API", "ETL", "RPA", "OCR", "GPT", "LLM"]
    const colors = ["#3b82f6", "#6366f1", "#8b5cf6", "#4f46e5"]

    // Create particles
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 30 + Math.random() * 30,
        value: values[Math.floor(Math.random() * values.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: 0.1 + Math.random() * 0.3,
      })
    }

    // Animation loop
    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.rotation += particle.rotationSpeed

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1
        }

        // Draw particle
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation)
        ctx.font = `bold ${particle.size}px sans-serif`
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(particle.value, 0, 0)
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
interface Particle {
  x: number
  y: number
  size: number
  value: string
  color: string
  vx: number
  vy: number
  rotation: number
  rotationSpeed: number
  opacity: number
}
