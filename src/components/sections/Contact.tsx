import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin } from "lucide-react"
import { resume } from "@/data/resume"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
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
    <section id="contact" className="py-12 max-w-2xl">
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

        <GlassCard className="space-y-6">
          {/* Contact Info */}
          <div className="flex flex-col gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-pink-500" />
              <a href={`mailto:${resume.email}`} className="hover:text-pink-500 transition-colors">
                {resume.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-pink-500" />
              <span className="text-muted-foreground">{resume.location}</span>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium mb-2 block"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-white/5 border-white/10"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium mb-2 block"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-white/5 border-white/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="text-sm font-medium mb-2 block"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                required
                className="bg-white/5 border-white/10"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium mb-2 block"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={5}
                required
                className="bg-white/5 border-white/10 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-pink-500 hover:bg-pink-600 disabled:opacity-50"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>

            {submitted && (
              <p className="text-green-500 text-sm text-center">
                Thanks for your message! I'll get back to you soon.
              </p>
            )}
          </form>
        </GlassCard>
      </motion.div>
    </section>
  )
}