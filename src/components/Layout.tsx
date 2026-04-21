import { useState, useEffect } from "react"
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
  ChevronLeft,
  ArrowDown,
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
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "portfolio", label: "Work", icon: Briefcase },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
]

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [scrolled, setScrolled] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Track scroll for header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    navItems.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

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
      {/* Skip to content for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* Animated Background - Gradient Mesh */}
      <div className="fixed inset-0 bg-mesh pointer-events-none" />
      <div className="fixed inset-0 bg-dots pointer-events-none opacity-30" />

       {/* Floating Sidebar - Desktop */}
       <aside className={cn(
         "fixed left-0 top-0 h-full transition-all duration-300 hidden lg:flex flex-col z-50",
         sidebarCollapsed ? "w-20" : "w-72"
       )}>
         {/* Sidebar Background */}
         <div className="absolute inset-0 glass-sidebar" />
         
         {/* Content */}
         <div className="relative z-10 flex flex-col h-full p-6">
            {/* Logo & Name */}
            <div className={cn("text-center", sidebarCollapsed ? "mb-4" : "mb-8")}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-20 h-20 mx-auto rounded-2xl glass-card flex items-center justify-center cursor-pointer glow-pink"
              >
                <span className="text-3xl font-bold text-gradient">
                  {resume.name.charAt(0)}
                </span>
              </motion.div>
              {!sidebarCollapsed && (
                <>
                  <h1 className="text-xl font-bold mt-5">
                    {resume.name}
                  </h1>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {resume.role}
                  </p>
                  <div className="flex items-center justify-center gap-1.5 mt-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>{resume.location}</span>
                  </div>
                </>
              )}
            </div>

           {/* Collapse Toggle Button */}
           <button
             onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
             className="absolute -right-3 top-1/2 w-6 h-6 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors z-20"
             aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
           >
            <motion.div
              initial={false}
              animate={{ rotate: sidebarCollapsed ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
               <ChevronLeft className="w-3.5 h-3.5" />
             </motion.div>
           </button>

          {/* Navigation */}
          <nav className="flex-1 space-y-1.5">
            {navItems.map((item) => (
               <button
                 key={item.id}
                 onClick={() => scrollToSection(item.id)}
                 className={cn(
                   "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                   sidebarCollapsed && "gap-0 justify-center px-2",
                   activeSection === item.id
                     ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white border border-pink-500/30"
                     : "text-muted-foreground hover:bg-white/5 hover:text-white"
                 )}
               >
                <item.icon className="w-4 h-4 shrink-0" />
                <motion.span
                  initial={false}
                  animate={{ 
                    opacity: sidebarCollapsed ? 0 : 1,
                    width: sidebarCollapsed ? 0 : "auto"
                  }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
                {activeSection === item.id && !sidebarCollapsed && (
                  <motion.div
                    layoutId="active-dot"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-pink-500"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            initial={false}
            onClick={() => scrollToSection("contact")}
            animate={{ 
              opacity: sidebarCollapsed ? 0 : 1,
              height: sidebarCollapsed ? 0 : "auto",
              marginTop: sidebarCollapsed ? 0 : 16
            }}
            className="w-full py-3 rounded-xl glass-btn text-sm font-semibold flex items-center justify-center gap-2 overflow-hidden"
          >
            <span className="shrink-0">Let's Talk</span>
            <ArrowDown className="w-4 h-4 shrink-0" />
          </motion.button>

          {/* Social Links */}
          <motion.div 
            initial={false}
            animate={{ 
              opacity: sidebarCollapsed ? 0 : 1,
              height: sidebarCollapsed ? 0 : "auto",
              marginTop: sidebarCollapsed ? 0 : 24
            }}
            className="flex justify-center gap-3 overflow-hidden"
          >
            {resume.contact.socials.map((social) => {
              const Icon = socialIcons[social.icon] || Ghost
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </motion.div>
        </div>
      </aside>

      {/* Mobile Header - Floating */}
      <header 
        className={cn(
          "lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "h-14" : "h-16"
        )}
      >
        <div className={cn(
          "absolute inset-0 transition-all duration-300",
          scrolled ? "glass glass-header" : "bg-transparent"
        )} />
        <div className="relative z-10 flex items-center justify-between h-full px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
              <span className="text-sm font-bold">{resume.name.charAt(0)}</span>
            </div>
            <div>
              <h1 className="font-bold text-sm">{resume.name}</h1>
              <p className="text-[9px] text-muted-foreground">Logistics & Developer</p>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-lg glass flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 top-14 z-40 bg-background/95 backdrop-blur-xl"
          >
            <nav className="p-4 space-y-2">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-medium transition-all",
                    activeSection === item.id
                      ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                      : "text-muted-foreground hover:bg-white/5"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                onClick={() => scrollToSection("contact")}
                className="w-full mt-4 py-4 rounded-xl glass-btn text-sm font-semibold flex items-center justify-center gap-2"
              >
                Let's Talk
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

       {/* Main Content */}
        <main 
          id="main-content" 
          className={cn(
            "min-h-screen pt-14 lg:pt-0 transition-all duration-300",
            sidebarCollapsed ? "lg:ml-20" : "lg:ml-72"
          )} 
          tabIndex={-1}
        >
          <div className="container max-w-7xl mx-auto px-4 py-6 lg:py-8" tabIndex={-1}>
            {children}
          </div>
        </main>
    </div>
  )
}