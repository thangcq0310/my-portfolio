import { Routes, Route } from "react-router-dom"
import { Layout } from "@/components/Layout"
import { AboutPage } from "@/pages/AboutPage"
import { SkillsPage } from "@/pages/SkillsPage"
import { PortfolioPage } from "@/pages/PortfolioPage"
import { ExperiencePage } from "@/pages/ExperiencePage"
import { ContactPage } from "@/pages/ContactPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AboutPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
