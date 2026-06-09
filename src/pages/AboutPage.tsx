import { AboutSection } from "@/components/sections/About"
import { SkillsSection } from "@/components/sections/Skills"
import { ExperienceSection } from "@/components/sections/Experience"
import { PortfolioSection } from "@/components/sections/Portfolio"

export function AboutPage() {
  return (
    <div className="space-y-12">
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <PortfolioSection />
    </div>
  )
}