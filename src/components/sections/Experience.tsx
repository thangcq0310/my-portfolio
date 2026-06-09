import { motion } from "framer-motion"
import { resume } from "@/data/resume"

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-8 space-y-3" aria-label="Work experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <span className="text-gradient">Kinh nghiệm</span>
        </h2>
        <p className="text-base text-muted-foreground mt-1">
          My professional journey
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-3"
      >
        {resume.experience.map((exp, idx) => {
          const gradients = [
            "from-pink-500/10 to-pink-500/5",
            "from-blue-500/10 to-blue-500/5",
          ]
          
          return (
            <motion.div
              key={exp.title + idx}
              variants={fadeInUp}
              whileHover={{ x: 6 }}
              className={`bg-gray-900/50 border border-white/10 rounded-xl p-4 bg-gradient-to-br ${gradients[idx % 2]} relative overflow-hidden group`}
            >
              {/* Glow accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-50 ${
                idx === 0 ? "bg-pink-500/20" : "bg-blue-500/20"
              }`} />
              
              <div className="relative flex items-start gap-5">
                {/* Icon/Logo */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gray-900/50 border border-white/10 flex items-center justify-center font-bold text-lg shrink-0 group-hover:scale-110 transition-transform ${
                    idx === 0 ? "text-pink-400" : "text-blue-400"
                  }`}
                >
                  {exp.icon || exp.company.substring(0, 2)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className={`text-lg font-bold ${
                      idx === 0 ? "text-pink-400" : "text-blue-400"
                    }`}>
                      {exp.title}
                    </h3>
                    <span className="text-sm text-muted-foreground px-2 py-0.5 rounded-full glass">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-base text-muted-foreground mt-0.5">
                    {exp.company}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-2.5">
                    {exp.highlights.map((highlight, highlightIdx) => (
                      <li
                        key={highlightIdx}
                        className="text-base text-white/80 flex items-start gap-3"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                          idx === 0 ? "bg-pink-400" : "bg-blue-400"
                        }`} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}