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
        }),
        keyframes: {
          float: {
            '0%, 100%': { boxShadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
              transform: 'translatey(0px)' },
            '50%': { boxShadow: '0 25px 15px 0px rgba(0,0,0,0.2)',
              transform: 'translatey(-20px)' },
          }
         },
         animation: {
          'float': 'float 3s linear infinite',
         }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
