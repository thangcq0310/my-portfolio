/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'ui-monospace', 'Consolas', 'monospace'],
      },
      colors: {
        background: 'hsl(0, 0%, 3.9%)',
        foreground: 'hsl(0, 0%, 100%)',
        primary: 'hsl(346, 77%, 50%)',
        secondary: 'hsl(217.2, 91%, 50%)',
        muted: {
          DEFAULT: 'hsl(0, 0%, 14%)',
          foreground: 'hsl(0, 0%, 63%)',
        },
        border: 'hsl(0, 0%, 14%)',
      },
      borderRadius: {
        DEFAULT: '0.75rem',
      },
    },
  },
  plugins: [],
}