import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { OptionCard } from "@/components/option-card"
import { Button } from "@/components/ui/button"
import { Check, Clock, Banknote } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredCards } from "@/components/staggered-cards"
import { Snowfall } from "@/components/snowfall"

export default function EnglishPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* <Snowfall /> */}
      <Header lang="en" />

      <main className="flex-1">
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background dark:from-muted/20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedSection delay={0}>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Corporate Website Redesign Proposal
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <p className="text-lg md:text-xl text-primary font-medium mb-4">
                Clear options – Transparent scope – Guided decisions
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
                Helping businesses choose the most suitable website redesign approach while controlling cost and
                timeline.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Please review the suitable options
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Design Approach Options */}
        <Section id="solutions" title="Website Design Levels">
          <StaggeredCards className="grid md:grid-cols-3 gap-6">
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
          </StaggeredCards>
        </Section>

        <Section id="options" title="UI/UX Design Levels" className="bg-muted/30 dark:bg-muted/10">
          <StaggeredCards className="grid md:grid-cols-3 gap-6">
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
          </StaggeredCards>
        </Section>

        {/* Content & Image Sources */}
        <Section title="Content & Image Sources">
          <StaggeredCards className="grid md:grid-cols-3 gap-6">
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
          </StaggeredCards>
        </Section>

        <Section title="Delivery Scope" className="bg-muted/30 dark:bg-muted/10">
          <StaggeredCards className="grid md:grid-cols-3 gap-6">
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
          </StaggeredCards>
        </Section>

        {/* Project Scope */}
        <Section id="scope" title="Project Scope">
          <AnimatedSection className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
              <ul className="space-y-4">
                {[
                  "Design & build new website",
                  "Approximately 27–30 pages",
                  "Content search functionality",
                  "Basic SEO",
                  "Responsive for all devices",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground group">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="transition-colors duration-300 group-hover:text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </Section>

        {/* Timeline & Pricing */}
        <Section id="timeline" title="Timeline & Pricing" className="bg-muted/30 dark:bg-muted/10">
          <StaggeredCards className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto" staggerDelay={150}>
            <div className="bg-card border border-border rounded-xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <Clock className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Estimated Completion</h3>
              <p className="text-2xl font-bold text-primary">≤ 14 days</p>
              <p className="text-sm text-muted-foreground mt-2">after scope confirmation</p>
            </div>
            <div
              id="pricing"
              className="bg-card border border-border rounded-xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 group"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <Banknote className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Estimated Cost</h3>
              <p className="text-2xl font-bold text-primary">From approx. 2.4M VND</p>
              <p className="text-sm text-muted-foreground mt-2">depending on options</p>
            </div>
          </StaggeredCards>
        </Section>
      </main>

      <Footer lang="en" />
    </div>
  )
}
