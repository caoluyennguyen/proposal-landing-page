"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"

interface HeaderProps {
  lang: "vi" | "en"
}

const navItems = {
  vi: [
    { label: "Giải pháp", href: "#solutions" },
    { label: "Tuỳ chọn", href: "#options" },
    { label: "Phạm vi", href: "#scope" },
    { label: "Thời gian", href: "#timeline" },
    { label: "Chi phí", href: "#pricing" },
  ],
  en: [
    { label: "Solution", href: "#solutions" },
    { label: "Options", href: "#options" },
    { label: "Scope", href: "#scope" },
    { label: "Timeline", href: "#timeline" },
    { label: "Pricing", href: "#pricing" },
  ],
}

export function Header({ lang }: HeaderProps) {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="sticky top-0 z-50">
      <header
        className={`relative transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md border-b border-border"
            : "bg-background/80 backdrop-blur border-b border-transparent"
        } ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link
                href={`/${lang}`}
                className="font-semibold text-lg text-foreground transition-all duration-300 hover:text-primary hover:scale-105 flex items-center gap-2"
              >
                {/* <span>🎄</span> */}
                LN Tech
                {/* <span>🎅</span> */}
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                {navItems[lang].map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="flex items-center gap-2 border border-border rounded-full p-1 transition-all duration-300 hover:shadow-md hover:border-primary/30">
                <Link
                  href="/vi"
                  className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
                    lang === "vi"
                      ? "bg-primary text-primary-foreground scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  VI
                </Link>
                <Link
                  href="/en"
                  className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
                    lang === "en"
                      ? "bg-primary text-primary-foreground scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  EN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
