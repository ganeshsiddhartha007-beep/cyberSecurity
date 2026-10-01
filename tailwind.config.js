/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#070b14',
          card: '#0d1527',
          surface: '#121d36',
          border: '#1f2e4d',
          accent: '#38bdf8',
          primary: '#0284c7',
          glow: '#0ea5e9',
          danger: '#ef4444',
          warning: '#f59e0b',
          success: '#10b981',
          purple: '#8b5cf6',
          muted: '#64748b'
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'cyber-blue': '0 0 20px -5px rgba(56, 189, 248, 0.3)',
        'cyber-red': '0 0 20px -5px rgba(239, 68, 68, 0.4)',
        'cyber-green': '0 0 20px -5px rgba(16, 185, 129, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scan 8s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        }
      }
    },
  },
  plugins: [],
}
