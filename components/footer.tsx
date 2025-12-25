interface FooterProps {
  lang: "vi" | "en"
}

export function Footer({ lang }: FooterProps) {
  const text =
    lang === "vi"
      ? "© 2025 Bản quyền thuộc về công ty LN Tech"
      : "© 2025 Copyright belongs to LN Tech"

  return (
    <footer className="border-t border-border bg-muted py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">{text}</p>
      </div>
    </footer>
  )
}
