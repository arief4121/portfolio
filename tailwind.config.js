const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
        'dosis': ['Dosis', 'sans-serif'],
      },
      colors: {
        primary: '#FF4C29',
        gradientUp: '#2C5364',
        gradientDown: '#0F2027',
        orange: '#FF4301',
      },
      backgroundImage: theme => ({
        'image': "url('/hero-image.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
