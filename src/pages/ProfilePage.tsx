import { SkillsSection } from "@/components/sections/Skills"
import { PortfolioSection } from "@/components/sections/Portfolio"
import { ExperienceSection } from "@/components/sections/Experience"

export function ProfilePage() {
  return (
    <div className="space-y-12">
      <SkillsSection />
      <PortfolioSection />
      <ExperienceSection />
    </div>
  );
}