import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin } from "lucide-react"
import { resume } from "@/data/resume"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
}

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(formRef.current!)

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL || "#", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitted(true)
        formRef.current?.reset()
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-8 max-w-xl mx-auto" aria-label="Contact">
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <div className="mb-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-base text-muted-foreground mt-1">
            Let's connect and build something great together
          </p>
        </div>

        {/* Contact Info */}
        <div className="glass-card p-4 mb-4">
          <div className="flex flex-wrap gap-6">
            <a
              href={`mailto:${resume.email}`}
              className="flex items-center gap-3 hover:text-pink-400 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:glow-pink transition-all">
                <Mail className="w-4 h-4" />
              </div>
               <span className="text-base">{resume.email}</span>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
               <span className="text-base text-muted-foreground">{resume.location}</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="glass-card p-4 space-y-3"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <label htmlFor="name" className="text-base font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="glass-input w-full px-4 py-3"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-base font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="glass-input w-full px-4 py-3"
              />
            </div>
          </div>

          <div className="space-y-2">
              <label htmlFor="subject" className="text-base font-medium">
                Subject
              </label>
            <input
              id="subject"
              name="subject"
              placeholder="What's this about?"
              required
              className="glass-input w-full px-4 py-3"
            />
          </div>

          <div className="space-y-2">
              <label htmlFor="message" className="text-base font-medium">
                Message
              </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message..."
              rows={5}
              required
              className="glass-input w-full px-4 py-3 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="glass-btn w-full py-3.5 text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>

          {submitted && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
               <p className="text-base text-emerald-400">
                 Thanks for your message! I'll get back to you soon.
               </p>
            </div>
          )}
        </form>
      </motion.div>
    </section>
  )
}