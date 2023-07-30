/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.{hbs,js}"],
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

