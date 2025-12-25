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
      bg: "bg-slate-50",
      border: "border-slate-200",
      badge: "bg-slate-200 text-slate-700",
      check: "text-slate-500",
    },
    mid: {
      bg: "bg-sky-50",
      border: "border-sky-200",
      badge: "bg-sky-200 text-sky-700",
      check: "text-sky-500",
    },
    high: {
      bg: "bg-gradient-to-br from-indigo-50 to-purple-50",
      border: "border-indigo-300",
      badge: "bg-indigo-200 text-indigo-700",
      check: "text-indigo-500",
    },
  }

  const styles = costStyles[costLevel]

  return (
    <div
      className={`relative rounded-xl border-2 p-6 transition-all h-full flex flex-col ${styles.bg} ${
        isSelected
          ? `${styles.border} shadow-lg ring-2 ring-offset-2 ${
              costLevel === "high" ? "ring-indigo-300" : costLevel === "mid" ? "ring-sky-300" : "ring-slate-300"
            }`
          : `${styles.border} hover:shadow-md`
      }`}
    >
      {badge && (
        <span
          className={`absolute -top-3 left-4 px-3 py-1 text-xs font-semibold rounded-full ${
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
