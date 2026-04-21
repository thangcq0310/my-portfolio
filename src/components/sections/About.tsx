import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { resume } from "@/data/resume"
import { MapPin, ExternalLink, Send } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
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
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentWordIndex])

  return (
    <section id="about" className="min-h-[85vh] flex items-center py-8">
      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="w-full space-y-10"
      >
        {/* Hero */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold leading-[1.2]">
            Hi, I'm{" "}
            <span className="text-gradient">{resume.name}</span>
          </h2>

          <div className="text-lg lg:text-xl font-medium flex items-center gap-2">
            <span className="text-white/70">I build</span>
            <span className="text-pink-400">
              {displayText}
              <span className="cursor-blink"></span>
            </span>
          </div>
        </motion.div>

        {/* Bio Cards */}
        <motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="glass-card p-6 space-y-4">
            <p className="text-sm text-white/90 leading-relaxed">
              {resume.bio[0]}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {resume.bio[1]}
            </p>
          </div>

          <div className="glass-card p-6 space-y-4 border-l-2 border-pink-500/50">
            <p className="text-sm text-white/70 leading-relaxed italic">
              "As Head of Logistics directly managing import-export warehouse operations for 5 large-scale factories, I have the most practical insight into operational bottlenecks."
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="glass-badge">SAP</span>
              <span className="glass-badge">Firebase</span>
              <span className="glass-badge">n8n</span>
              <span className="glass-badge">AI Agents</span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="glass-btn px-6 py-3 text-sm font-semibold flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="glass-btn-outline px-6 py-3 text-sm font-semibold flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Get in Touch
          </button>
        </motion.div>

        {/* Quick Stats */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 pt-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-pink-400" />
            <span>{resume.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Available for opportunities</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}