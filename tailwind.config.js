/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Be Vietnam Pro', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Consolas', 'monospace'],
      },
      colors: {
        // Enterprise theme tokens
        primary: '#072C2C',       // Dark teal - primary brand
        secondary: '#FF5F03',      // Orange - secondary accent
        success: '#16A34A',        // Green - success states
        warning: '#D97706',        // Amber - warning states
        danger: '#DC2626',          // Red - error/danger states
        surface: '#F8FAFC',        // Light background (slate-50 equivalent)
        'text-primary': '#0F172A', // Dark slate for headings
        'text-secondary': '#475569', // Medium slate for body
      },
      borderRadius: {
        DEFAULT: '0.75rem',
      },
    },
  },
  plugins: [],
}