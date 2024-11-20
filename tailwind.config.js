const plugin = require('tailwindcss/plugin');

export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      maxWidth: {
        '8xl': '96rem',
        '9xl': '112rem',
        '10xl': '128rem',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        primary: "#fba311",
        secondary: "#09042d",
        indigo: "#565656",
        neutral: "#f0f2f4",
        blue: "#abc6e9",
        dark: "#001837",
        white: "#ffffff",
        transparent: "transparent",
      },
    },
  },
  plugins: [
    plugin(function({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        'h1': {
          fontSize: theme('fontSize.2xl'),
        },
        'h2': {
          fontSize: theme('fontSize.xl'),
        },
      })
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-primary': {
          backgroundColor: theme('colors.primary'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.secondary'),
          },
        },
        '.btn-transparent': {
          backgroundColor: theme('colors.transparent'),
          color: theme('colors.white'),
          '&:hover': {
            color: theme('colors.primary'),
          },
        },
      })
      addUtilities({
        '@keyframes wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        '.animate-wiggle': {
          animation: 'wiggle 0.5s ease-in-out infinite',
          },

        '.stretch-lines': {
          transform: 'scaleX(1.5)',
        },
        '.transition-stretch': {
          transition: 'transform 0.5s ease-in-out',
        },
      })
    })
  ],
  variants: {
    extend: {
      textColor: ['aria-current'],
    },
  },
}
