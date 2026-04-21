import { motion } from "framer-motion"
import { Code, Accessibility, Zap, MessageSquareText } from "lucide-react"
import { resume } from "@/data/resume"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
}

const skillColors = [
  "pink",
  "blue",
  "emerald",
  "amber",
] as const

const attrIcons: Record<string, React.ElementType> = {
  Accessibility,
  Zap,
  MessageSquareText,
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-12">
      <GlassCard>
        <div className="flex items-center gap-3 mb-6">
          <Code className="w-6 h-6 text-pink-500" />
          <h3 className="text-2xl font-bold">Technical Arsenal</h3>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {resume.skills.map((skill, idx) => (
            <motion.div key={skill} variants={fadeInUp}>
              <Badge
                variant={skillColors[idx % skillColors.length]}
                className="px-4 py-1.5 text-sm"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </GlassCard>

      {/* Attributes */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-6">What to Expect</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resume.attributes.map((attr, idx) => {
            const Icon = attrIcons[attr.icon] || Accessibility
            return (
              <GlassCard
                key={attr.label}
                variant={skillColors[idx % skillColors.length] as "pink" | "blue" | "emerald" | "amber"}
              >
                <Icon className={`w-8 h-8 ${attr.color}`} />
                <h4 className="text-lg font-semibold">{attr.label}</h4>
                <p className="text-muted-foreground">{attr.description}</p>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}