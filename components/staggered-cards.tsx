"use client"

import type React from "react"

import { useEffect, useRef, useState, Children, isValidElement } from "react"

interface StaggeredCardsProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggeredCards({ children, className = "", staggerDelay = 100 }: StaggeredCardsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const childCount = Children.count(children)
          for (let i = 0; i < childCount; i++) {
            setTimeout(() => {
              setVisibleIndices((prev) => new Set([...prev, i]))
            }, i * staggerDelay)
          }
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [children, staggerDelay])

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return (
            <div
              className={`transition-all duration-500 ease-out ${
                visibleIndices.has(index) ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
              }`}
            >
              {child}
            </div>
          )
        }
        return child
      })}
    </div>
  )
}
