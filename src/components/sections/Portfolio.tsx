import { motion } from "framer-motion"
import { ExternalLink, GitBranch, Folder, ArrowUpRight } from "lucide-react"
import { resume } from "@/data/resume"

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-8" aria-label="Featured projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-5"
      >
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <p className="text-base text-muted-foreground mt-1">
          Solutions I've built for real-world operations
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr"
      >
        {resume.projects.map((project) => (
          <motion.div
            key={project.title}
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.01 }}
            className="liquid-glass overflow-hidden group h-full flex flex-col min-h-[20rem]"
            role="article"
          >
            {/* Project Image Placeholder */}
            <div className="relative h-48 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 flex-shrink-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl liquid-glass flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Folder className="w-8 h-8 text-pink-400" />
                </div>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn px-5 py-2.5 text-sm flex items-center gap-2 hover-shine touch-target"
                    aria-label={`View ${project.title} demo`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn-outline px-5 py-2.5 text-sm flex items-center gap-2 hover-lift touch-target"
                    aria-label={`View ${project.title} code`}
                  >
                    <GitBranch className="w-4 h-4" />
                    Code
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 flex-1 flex flex-col">
              <div>
                <h3 className="text-lg font-bold flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-pink-400/80 mt-0.5">{project.client}</p>
              </div>

               <p className="text-base text-muted-foreground leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="glass-badge hover-scale cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Timeline */}
              <div className="pt-2 border-t border-white/5">
                <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {project.timeline}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}