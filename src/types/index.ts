export interface SiteConfig {
  name: string
  role: string
  location: string
  email: string
  typewriterWords: string[]
  bio: string[]
  contact: {
    socials: SocialLink[]
  }
  skills: string[]
  attributes: Attribute[]
  experience: Experience[]
  projects: Project[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Attribute {
  label: string
  description: string
  icon: string
  color: string
}

export interface Experience {
  type: "work" | "education"
  company: string
  logo?: string
  icon?: string
  containerClass?: string
  textClass?: string
  title: string
  period: string
  highlights: string[]
}

export interface Project {
  title: string
  client: string
  timeline: string
  techStack: string[]
  images: string[]
  description: string
  scope: string
  responsibilities: string[]
  languages: string[]
  repoUrl?: string
  demoUrl?: string
}