import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { resume } from "@/data/resume"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export function AboutSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const words = resume.typewriterWords
    const currentWord = words[currentWordIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1))

        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2500)
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1))

        if (displayText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 60 : 100)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentWordIndex])

  return (
    <section id="about" className="min-h-[85vh] flex items-center py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Text Content */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Heading */}
          <div className="space-y-2">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">{resume.name}</span>
            </h2>
            <div className="text-xl font-medium h-9 flex items-center">
              <span className="text-white/80">I build </span>
              <span className="text-pink-400 ml-2">
                {displayText}
                <span className="cursor-blink"></span>
              </span>
            </div>
          </div>

          {/* Bio Cards */}
          <div className="glass-card p-6 space-y-4">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              {resume.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="border-l-2 border-pink-500/60 pl-5 py-2">
            <p className="text-sm leading-relaxed text-white/70 italic">
              "As Head of Logistics directly managing import-export warehouse operations for 5 large-scale factories, I have the most practical insight into operational bottlenecks. I don't just code software; I build digital solutions to thoroughly solve real-world problems."
            </p>
            <p className="text-xs text-pink-400/70 mt-2 font-mono">
              SAP + Firebase + n8n/AI Agents
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-btn px-8 py-3 text-sm font-semibold"
            >
              View Projects
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-btn-outline px-8 py-3 text-sm font-semibold"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>

        {/* Portrait Card - Glass Effect */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
          className="relative"
        >
          {/* Glowing background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-blue-500/30 rounded-3xl blur-3xl animate-pulse-glow" />
          
          {/* Main glass card */}
          <div className="relative glass-card p-10 text-center">
            {/* Avatar */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-2xl glass flex items-center justify-center glow-pink">
              <span className="text-5xl font-bold text-gradient">
                {resume.name.charAt(0)}
              </span>
            </div>

            {/* Info */}
            <h3 className="text-xl font-bold text-white">{resume.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{resume.role}</p>
            
            {/* Skills badge */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="glass-badge">React</span>
              <span className="glass-badge">Firebase</span>
              <span className="glass-badge">SAP</span>
              <span className="glass-badge">n8n</span>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 opacity-60 blur-sm" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-40 blur-sm" />
        </motion.div>
      </div>
    </section>
  )
}