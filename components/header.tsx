"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

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

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href={`/${lang}`} className="font-semibold text-lg text-foreground">
              LN Tech
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {navItems[lang].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2 border border-border rounded-full p-1">
            <Link
              href="/vi"
              className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                lang === "vi" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              VI
            </Link>
            <Link
              href="/en"
              className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
