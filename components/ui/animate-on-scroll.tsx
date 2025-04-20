"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out"

interface AnimateOnScrollProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

export function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  // Define animation classes
  const animationClasses = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-down": "translate-y-[-10px] opacity-0",
    "fade-left": "translate-x-[-10px] opacity-0",
    "fade-right": "translate-x-10 opacity-0",
    "zoom-in": "scale-95 opacity-0",
    "zoom-out": "scale-105 opacity-0",
  }

  const visibleClass = "translate-y-0 translate-x-0 scale-100 opacity-100"

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
      data-animate={animation}
      data-visible={isVisible}
    >
      <div
        className={`${isVisible ? visibleClass : animationClasses[animation]}`}
        style={{
          transitionDuration: `${duration}s`,
          transitionDelay: `${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
