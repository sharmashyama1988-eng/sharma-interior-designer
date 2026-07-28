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
          bg: '#121110',
          bgAlt: '#1a1917',
          card: '#1c1a18',
          cardDark: '#161513',
          cardHover: '#262320',
          border: '#3a342e',
          borderGold: '#8a7335',
          text: '#fdfbf7',
          textMuted: '#e3ded3',
          cream: '#fdfbf7',
          creamMuted: '#e3ded3',
          mahogany: '#2d1810',
          mahoganyLight: '#4a2b1d',
          gold: '#d4af37',
          goldLight: '#ebd278',
          goldDark: '#997a20',
          brass: '#b8860b',
          rosewood: '#3b1414',
          terracotta: '#9e4738',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #ebd278 0%, #d4af37 50%, #997a20 100%)',
        'mahogany-gradient': 'linear-gradient(180deg, #2d1810 0%, #121110 100%)',
        'card-gradient': 'linear-gradient(145deg, #1c1a18 0%, #161513 100%)',
        'radial-glow': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-sm': '0 0 10px rgba(212, 175, 55, 0.2)',
        'classical-deep': '0 20px 40px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
