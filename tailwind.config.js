/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'primary1': '#465C21',
        'primary2': '#232E10'

        
      },
      letterSpacing:{
        'widest': '12px'
      }
    },
  },
  plugins: [],
}

