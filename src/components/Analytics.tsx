import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// Replace with your GA Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"

export function Analytics() {
  const location = useLocation()

  useEffect(() => {
    // Only load GA if ID is configured
    if (GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
      console.warn("⚠️ GA_MEASUREMENT_ID chưa được cấu hình!")
      return
    }

    // Load GA script
    const script = document.createElement("script")
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)

    // Initialize GA
    window.dataLayer = window.dataLayer || []
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
    gtag("js", new Date())
    gtag("config", GA_MEASUREMENT_ID)
  }, [])

  // Track page views
  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
        page_title: document.title,
      })
    }
  }, [location])

  return null
}

// Add type declaration for window.gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export default Analytics