const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{vue,js}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      minWidth: {
        48: '12rem' /* 192px */,
      },
    },
  },

  plugins: [],
}
