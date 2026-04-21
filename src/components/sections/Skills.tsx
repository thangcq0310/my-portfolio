import { motion } from "framer-motion"
import { Code, Zap, Sparkles } from "lucide-react"
import { resume } from "@/data/resume"

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
}

const attrIcons: Record<string, React.ElementType> = {
  Zap,
  Code,
  Sparkles,
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      {/* Technical Arsenal - Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 mb-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
            <Code className="w-5 h-5 text-pink-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Technical Arsenal</h3>
            <p className="text-xs text-muted-foreground">Skills & Technologies</p>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {resume.skills.map((skill) => (
            <motion.div
              key={skill}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="glass px-4 py-2 rounded-full text-xs font-medium cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* What to Expect - Bento Grid */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="text-gradient">What to Expect</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resume.attributes.map((attr, idx) => {
            const Icon = attrIcons[attr.icon] || Zap
            const colors = [
              "from-pink-500/20 to-pink-500/5",
              "from-blue-500/20 to-blue-500/5",
              "from-emerald-500/20 to-emerald-500/5",
            ]
            
            return (
              <motion.div
                key={attr.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`glass-card p-6 bg-gradient-to-br ${colors[idx % 3]} space-y-4`}
              >
                <div className={`w-12 h-12 rounded-xl glass flex items-center justify-center ${attr.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold">{attr.label}</h4>
                <p className="text-sm text-muted-foreground">{attr.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}