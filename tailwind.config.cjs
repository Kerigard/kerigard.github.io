const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      minWidth: {
        auto: 'auto',
        12: '3rem' /* 48px */,
        40: '10rem' /* 160px */,
        48: '12rem' /* 192px */,
        64: '16rem' /* 256px */,
        80: '20rem' /* 320px */,
      },
      minHeight: {
        12: '3rem' /* 48px */,
        48: '12rem' /* 192px */,
      },
    },
  },

  plugins: [],
}
