import type React from "react"
interface SectionProps {
  id?: string
  title: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">{title}</h2>
        {children}
      </div>
    </section>
  )
}
