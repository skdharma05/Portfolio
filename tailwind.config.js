/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#111111',
        'bg-card': '#1a1a2e',
        'bg-card-hover': '#16213e',
        'primary': '#6366f1',
        'primary-glow': '#818cf8',
        'secondary': '#ec4899',
        'secondary-glow': '#f472b6',
        'accent': '#06b6d4',
        'accent-glow': '#22d3ee',
        'text-primary': '#f8fafc',
        'text-secondary': '#94a3b8',
        'text-muted': '#64748b',
        'border': 'rgba(99,102,241,0.2)',
        'border-hover': 'rgba(99,102,241,0.5)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)',
        'gradient-hero': 'radial-gradient(ellipse at top, #1a1a2e 0%, #0a0a0a 60%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(145deg, rgba(26,26,46,0.9) 0%, rgba(10,10,10,0.9) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'typing': 'typing 1.5s steps(3) infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'shimmer': 'shimmer 20s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(5deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-3deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99,102,241,0.4), 0 0 40px rgba(99,102,241,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(99,102,241,0.8), 0 0 80px rgba(99,102,241,0.4)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typing: {
          '0%': { content: '"."' },
          '33%': { content: '".."' },
          '66%': { content: '"..."' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { opacity: '0.5', transform: 'scale(1)' },
          '100%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99,102,241,0.4), 0 0 40px rgba(99,102,241,0.1)',
        'glow-lg': '0 0 40px rgba(99,102,241,0.6), 0 0 80px rgba(99,102,241,0.2)',
        'glow-pink': '0 0 20px rgba(236,72,153,0.4), 0 0 40px rgba(236,72,153,0.1)',
        'glow-cyan': '0 0 20px rgba(6,182,212,0.4), 0 0 40px rgba(6,182,212,0.1)',
        'card': '0 4px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5), 0 0 30px rgba(99,102,241,0.15)',
      },
    },
  },
  plugins: [],
}
