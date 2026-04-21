import { Layout } from "@/components/Layout"
import { AboutSection } from "@/components/sections/About"
import { SkillsSection } from "@/components/sections/Skills"
import { PortfolioSection } from "@/components/sections/Portfolio"
import { ExperienceSection } from "@/components/sections/Experience"
import { ContactSection } from "@/components/sections/Contact"

function App() {
  return (
    <Layout>
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ExperienceSection />
      <ContactSection />
    </Layout>
  )
}

export default App