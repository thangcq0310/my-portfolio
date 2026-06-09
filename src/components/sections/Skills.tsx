import { motion } from "framer-motion"
import { Code, Zap, Sparkles } from "lucide-react"
import { resume } from "@/data/resume"

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.03,
    },
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
}

const attrIcons: Record<string, React.ElementType> = {
  Zap,
  Code,
  Sparkles,
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-8" aria-label="Skills and expertise">
      {/* Vũ khí kỹ thuật */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900/50 border border-white/10 rounded-xl p-4 mb-4"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gray-900/50 border border-white/10 flex items-center justify-center">
            <Code className="w-5 h-5 text-pink-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Vũ khí kỹ thuật</h3>
            <p className="text-sm text-muted-foreground">Kỹ năng & Công nghệ</p>
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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900/50 border border-white/10 rounded-full px-4 py-2 text-xs font-medium cursor-default hover-glow"
              role="listitem"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* What to Expect - Bento Grid */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="text-gradient">What to Expect</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {resume.attributes.map((attr, idx) => {
            const Icon = attrIcons[attr.icon] || Zap
            const colors = [
              "from-pink-500/20 to-pink-500/5 hover-glow",
              "from-blue-500/20 to-blue-500/5 hover-glow",
              "from-emerald-500/20 to-emerald-500/5 hover-glow",
            ]
            
            return (
              <motion.div
                key={attr.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`bg-gray-900/50 border border-white/10 rounded-xl p-4 bg-gradient-to-br ${colors[idx % 3]} cursor-default`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gray-900/50 border border-white/10 flex items-center justify-center ${attr.color} mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold">{attr.label}</h4>
                <p className="text-base text-muted-foreground mt-2">{attr.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}