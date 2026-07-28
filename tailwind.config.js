/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        classical: {
          // Luxurious warm classical cream background
          bg: '#fcfaf6',
          bgAlt: '#f4ede2',
          card: '#ffffff',
          cardDark: '#221914',
          cardHover: '#faf4eb',
          border: '#e6d8c3',
          borderGold: '#c59b27',
          text: '#221914',
          textMuted: '#68594e',
          cream: '#221914',
          creamMuted: '#68594e',
          mahogany: '#361b12',
          mahoganyLight: '#592e1f',
          gold: '#b8860b',
          goldLight: '#d4af37',
          goldDark: '#8a6508',
          brass: '#b8860b',
          rosewood: '#4a1515',
          terracotta: '#9e4738',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #b8860b 50%, #8a6508 100%)',
        'mahogany-gradient': 'linear-gradient(180deg, #361b12 0%, #1f0f0a 100%)',
        'card-gradient': 'linear-gradient(145deg, #ffffff 0%, #f9f5ed 100%)',
        'cream-gradient': 'linear-gradient(180deg, #fcfaf6 0%, #f4ede2 100%)',
        'radial-glow': 'radial-gradient(circle at center, rgba(184, 134, 11, 0.12) 0%, transparent 70%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(184, 134, 11, 0.25)',
        'gold-sm': '0 0 10px rgba(184, 134, 11, 0.2)',
        'classical-deep': '0 15px 35px rgba(54, 27, 18, 0.08)',
      },
    },
  },
  plugins: [],
}
