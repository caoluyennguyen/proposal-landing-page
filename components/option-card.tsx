import { Check } from "lucide-react"

type CostLevel = "low" | "mid" | "high"

interface OptionCardProps {
  title: string
  description?: string
  details?: string[]
  badge?: string
  costLevel?: CostLevel
  isSelected?: boolean
}

export function OptionCard({ title, description, details, badge, costLevel = "low", isSelected }: OptionCardProps) {
  const costStyles = {
    low: {
      bg: "bg-muted/50 dark:bg-muted/30",
      border: "border-border",
      badge: "bg-slate-200 text-slate-700",
      check: "text-muted-foreground",
    },
    mid: {
      bg: "bg-primary/5 dark:bg-primary/10",
      border: "border-primary/30",
      badge: "bg-sky-200 text-sky-700",
      check: "text-primary",
    },
    high: {
      bg: "bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20",
      border: "border-primary/50",
      badge: "bg-indigo-200 text-indigo-700",
      check: "text-primary",
    },
  }

  const styles = costStyles[costLevel]

  return (
    <div
      className={`relative rounded-xl border-2 p-6 h-full flex flex-col
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl
        ${styles.bg} ${
          isSelected
            ? `${styles.border} shadow-lg ring-2 ring-offset-2 ring-offset-background ring-primary/50`
            : `${styles.border} hover:border-primary/50 hover:shadow-primary/10`
        }`}
    >
      {badge && (
        <span
          className={`absolute -top-3 left-4 px-3 py-1 text-xs font-semibold rounded-full transition-transform duration-300 hover:scale-105 ${
            isSelected ? "bg-primary text-primary-foreground" : styles.badge
          }`}
        >
          {badge}
        </span>
      )}
      <h3 className="text-lg font-semibold mb-3 text-foreground">{title}</h3>
      {description && <p className="text-muted-foreground text-sm mb-3">{description}</p>}
      {details && details.length > 0 && (
        <ul className="space-y-2 flex-1">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${isSelected ? "text-primary" : styles.check}`} />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
