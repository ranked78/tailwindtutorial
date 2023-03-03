/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens:{
      sm:'480px',
      md: '768',
      lg: '976',
      xl: '1440px'
    },
    extend: {
      colors:{
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight:'hsl(12, 88%, 69%)',
        brightRedRedSupLight:'hsl(12, 88%, 95%)',
        darkBlue:'hsl(12, 39%, 23%)',
        darkGrayishBlue:'hsl(227, 12%, 13%)',
        veryDarkBlue:'hsl(233, 12%, 13%)',
        verypaleRed:'hsl(13, 100%, 96%)',
        veryLightGray:'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}
