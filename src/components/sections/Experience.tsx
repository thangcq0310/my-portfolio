import { motion } from "framer-motion"
import { resume } from "@/data/resume"
import { GlassCard } from "@/components/ui/glass-card"

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const variantMap: Record<string, "pink" | "blue" | "emerald" | "amber"> = {
  pink: "pink",
  blue: "blue",
  emerald: "emerald",
  amber: "amber",
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 space-y-6">
      <h2 className="text-3xl font-bold mb-8">Experience & Education</h2>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {resume.experience.map((exp, idx) => {
          const variant = variantMap[
            ["pink", "blue", "emerald", "amber"][idx % 4]
          ] as "pink" | "blue" | "emerald" | "amber"

          return (
            <motion.div key={exp.title + idx} variants={fadeInUp}>
              <GlassCard variant={variant} className="p-6">
                <div className="flex items-start gap-4">
                  {/* Logo/Icon */}
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg ${exp.containerClass || "bg-white/10"} ${exp.textClass || "text-white"}`}
                  >
                    {exp.icon || exp.company.charAt(0)}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className={`text-lg font-semibold ${exp.textClass}`}
                    >
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.period}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, highlightIdx) => (
                        <li
                          key={highlightIdx}
                          className="text-sm flex items-start gap-2"
                        >
                          <span className="text-pink-500">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}