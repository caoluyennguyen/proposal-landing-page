import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { OptionCard } from "@/components/option-card"
import { Button } from "@/components/ui/button"
import { Check, Clock, Banknote } from "lucide-react"

export default function EnglishPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header lang="en" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Corporate Website Redesign Proposal
            </h1>
            <p className="text-lg md:text-xl text-primary font-medium mb-4">
              Clear options – Transparent scope – Guided decisions
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
              Helping businesses choose the most suitable website redesign approach while controlling cost and timeline.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Please review the suitable options
            </Button>
          </div>
        </section>

        {/* Design Approach Options */}
        <Section id="solutions" title="Website Design Levels">
          <div className="grid md:grid-cols-3 gap-6">
            <OptionCard
              title="UI Redesign"
              badge="Cost-effective"
              costLevel="low"
              details={[
                "Refresh the website interface",
                "Keep existing structure and content",
                "Suitable when only visual improvement is needed",
              ]}
            />
            <OptionCard
              title="Redesign + Structure"
              badge="Balanced"
              costLevel="mid"
              details={["Redesign interface", "Reorganize layout, menu and content flow", "Improve user experience"]}
            />
            <OptionCard
              title="Complete Website Rebuild"
              badge="Premium"
              costLevel="high"
              details={[
                "Design and build a new website",
                "Clear, scalable structure",
                "Suitable for content-rich corporate websites",
              ]}
            />
          </div>
        </Section>

        {/* UI/UX Design Levels */}
        <Section id="options" title="UI/UX Design Levels" className="bg-muted/30">
          <div className="grid md:grid-cols-3 gap-6">
            <OptionCard
              title="Clean & Modern"
              badge="Cost-effective"
              costLevel="low"
              details={["Standard layouts, easy to use", "Minimal animations", "Cost and time efficient"]}
            />
            <OptionCard
              title="Brand-focused Design"
              badge="Balanced"
              costLevel="mid"
              details={["Brand colors and typography", "Custom layouts for main pages", "Light animations"]}
            />
            <OptionCard
              title="Premium Design"
              badge="Premium"
              costLevel="high"
              details={["Custom UI/UX design (Figma)", "Micro-interactions", "Brand guideline compliance"]}
            />
          </div>
        </Section>

        {/* Content & Image Sources */}
        <Section title="Content & Image Sources">
          <div className="grid md:grid-cols-3 gap-6">
            <OptionCard
              title="Client-provided"
              badge="Cost-effective"
              costLevel="low"
              details={["Text and images provided by client", "Developer handles display implementation"]}
            />
            <OptionCard
              title="Editing Support"
              badge="Balanced"
              costLevel="mid"
              details={["Content editing and restructuring", "Basic free images"]}
            />
            <OptionCard
              title="Full Content Package"
              badge="Premium"
              costLevel="high"
              details={["Content rewriting", "Professional images", "Industry-optimized messaging"]}
            />
          </div>
        </Section>

        {/* Delivery Scope */}
        <Section title="Delivery Scope" className="bg-muted/30">
          <div className="grid md:grid-cols-3 gap-6">
            <OptionCard
              title="Handover & Deploy"
              badge="Cost-effective"
              costLevel="low"
              details={["Full source code handover", "Deploy to client-provided hosting"]}
            />
            <OptionCard
              title="Short-term Technical Warranty"
              badge="Balanced"
              costLevel="mid"
              details={["Full source code handover", "Deploy to client-provided hosting", "7-14 days warranty"]}
            />
            <OptionCard
              title="Post-delivery Support"
              badge="Premium"
              costLevel="high"
              details={["Full source code handover", "Deploy to client-provided hosting", "1 month warranty"]}
            />
          </div>
        </Section>

        {/* Project Scope */}
        <Section id="scope" title="Project Scope">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <ul className="space-y-4">
                {[
                  "Design & build new website",
                  "Approximately 27–30 pages",
                  "Content search functionality",
                  "Basic SEO",
                  "Responsive for all devices",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-card-foreground">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Timeline & Pricing */}
        <Section id="timeline" title="Timeline & Pricing" className="bg-muted/30">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Estimated Completion</h3>
              <p className="text-2xl font-bold text-primary">≤ 14 days</p>
              <p className="text-sm text-muted-foreground mt-2">after scope confirmation</p>
            </div>
            <div id="pricing" className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Banknote className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Estimated Cost</h3>
              <p className="text-2xl font-bold text-primary">From approx. 2.4M VND</p>
              <p className="text-sm text-muted-foreground mt-2">depending on options</p>
            </div>
          </div>
          {/* <div className="text-center mt-10">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Discuss & Confirm Your Option
            </Button>
          </div> */}
        </Section>
      </main>

      <Footer lang="en" />
    </div>
  )
}
