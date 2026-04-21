import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { resume } from "@/data/resume"
import { Button } from "@/components/ui/button"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
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
          setTimeout(() => setIsDeleting(true), 2000)
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
    <section id="about" className="min-h-[80vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text Content */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          <h2 className="text-5xl font-bold">
            Hi, I'm{" "}
            <span className="text-gradient">{resume.name}</span>
          </h2>

          <div className="text-xl font-semibold text-muted-foreground h-8">
            I create{" "}
            <span className="text-pink-500">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <div className="space-y-4 text-muted-foreground">
            {resume.bio.map((paragraph, idx) => (
              <p key={idx} className="text-lg leading-relaxed">{paragraph}</p>
            ))}
          </div>
          
          <p className="text-sm leading-relaxed text-muted-foreground/80 border-l-2 border-pink-500/50 pl-4">
            As Head of Logistics directly managing import-export warehouse operations for 5 large-scale factories, I have the most practical insight into operational bottlenecks. I don't just code software; I build digital solutions to thoroughly solve real-world problems. My strength lies in combining SAP system architecture (ERP), Cloud infrastructure (Firebase), and the power of Automation (n8n/AI Agents) to create real value for organizations.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
              View Projects
            </Button>
            <Button size="lg" variant="outline">
              Get in Touch
            </Button>
          </div>
        </motion.div>

        {/* Portrait Image Placeholder */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
          <div className="relative w-64 h-64 mx-auto rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
            <span className="text-6xl font-bold text-muted-foreground">
              {resume.name.charAt(0)}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}