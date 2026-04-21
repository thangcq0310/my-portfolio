import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  User,
  Briefcase,
  Code,
  Mail,
  Menu,
  X,
  Ghost,
  Circle,
  Square,
  MapPin,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { resume } from "@/data/resume"

const socialIcons: Record<string, React.ElementType> = {
  Github: Ghost,
  LinkedIn: Circle,
  Facebook: Square,
  Mail,
}

interface LayoutProps {
  children: React.ReactNode
}

const navItems = [
  { id: "about", label: "About me", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "portfolio", label: "Portfolio", icon: Briefcase },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact me", icon: Mail },
]

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar - Glassmorphism */}
      <aside className="fixed left-0 top-0 h-full w-80 glass hidden lg:flex flex-col z-50">
        {/* Logo & Name */}
        <div className="p-6">
          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
            <span className="text-white font-bold text-xl">
              {resume.name.charAt(0)}
            </span>
          </div>
          <h1 className="text-2xl font-bold mt-4">{resume.name}</h1>
          <p className="text-muted-foreground">{resume.role}</p>
          <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{resume.location}</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-2 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                activeSection === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="p-6 pt-0">
          <div className="flex gap-3">
            {resume.contact.socials.map((social) => {
              const Icon = socialIcons[social.icon] || Ghost
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 glass z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
            <span className="text-white font-bold">
              {resume.name.charAt(0)}
            </span>
          </div>
          <div>
            <h1 className="font-bold">{resume.name}</h1>
            <p className="text-xs text-muted-foreground">{resume.role}</p>
          </div>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-10 h-10 rounded-lg flex items-center justify-center"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed inset-0 top-16 bg-background z-40"
          >
            <nav className="p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                    activeSection === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-white/5"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="lg:ml-80 min-h-screen pt-16 lg:pt-0">
        <div className="container max-w-6xl mx-auto px-6 py-12">
          {children}
        </div>
      </main>
    </div>
  )
}