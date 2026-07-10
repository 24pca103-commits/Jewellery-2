/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F5E6C4',     // Soft Champagne
          DEFAULT: '#D4AF37',   // Royal Polished Gold
          dark: '#B8901C',      // Deep Antique Gold
          muted: '#A67C52',     // Golden Bronze
          champagne: '#F3E5AB', // Bright Champagne Highlight
        },
        charcoal: {
          DEFAULT: '#1C120C',   // Dark Espresso
          light: '#2A1B14',     // Deep Coffee Brown
          muted: '#4A3B32',     // Rich Cocoa Brown
        },
        luxury: {
          cream: '#FAF5EF',     // Royal Ivory/Cream
          goldOverlay: 'rgba(212, 175, 55, 0.05)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px rgba(42, 27, 20, 0.08)',
        'soft': '0 10px 30px rgba(42, 27, 20, 0.05)',
        'glass': '0 8px 32px 0 rgba(212, 175, 55, 0.08)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.3)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #B8901C 100%)',
        'gold-radial': 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
        'espresso-radial': 'radial-gradient(circle, rgba(42, 27, 20, 0.8) 0%, #1C120C 100%)',
      }
    },
  },
  plugins: [],
}
