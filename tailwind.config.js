const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        'warm-gray': colors.warmGray,
        teal: colors.teal,
        primary: '#265299'
      },
      'animation': {
        'text': 'text 6s infinite',
        'second': 'text-second 6s infinite',
      },
      'keyframes': {
        'text': {
          '0%, 16.66%, 100%': {
            'opacity': '1',
          },
          '33.333%, 83.333%': {
            'opacity': '0',
          }
        },
        'text-second': {
          '0%, 16.66%, 100%': {
            'opacity': '0',
          },
          '33.333%, 83.333%': {
            'opacity': '1',
          }
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}