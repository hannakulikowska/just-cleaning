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
      screens: {
        'xs': '480px',
      },
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
      content: {
        'vacuum': 'url("/src/assets/svg/vacuum.svg")',
        'chemical': 'url("/src/assets/svg/experiment.svg")',
        'thumb': 'url("/src/assets/svg/thumb_up.svg")',
        'verified': 'url("/src/assets/svg/verified.svg")',
        'team': 'url("/src/assets/svg/team.svg")',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
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
          fontFamily: theme('fontFamily.quicksand'),
          fontWeight: theme('fontWeight.semibold'),
          borderRadius: theme('borderRadius.full'),
          transition: 'all 0.3s ease-in-out',
        },
        '.btn-primary': {
          backgroundColor: theme('colors.primary'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.secondary'),
          },
        },
        '.btn-white': {
          backgroundColor: theme('colors.white'),
          color: theme('colors.dark'),
          '&:hover': {
            backgroundColor: theme('colors.secondary'),
            color: theme('colors.white'),
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
