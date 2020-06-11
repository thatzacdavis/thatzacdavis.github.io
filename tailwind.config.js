const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          ...colors.teal,
          '200': '#27fdf5',
        },
        pink: {
          ...colors.pink,
          '600': '#f765b8'
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
