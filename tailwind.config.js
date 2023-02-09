/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        oranienbaum: ["Oranienbaum"]
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
