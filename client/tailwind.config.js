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
  variants:{
    extends:{
      lineclamp: ["hover"]
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("@tailwindcss/line-clamp"),
    require('tailwind-scrollbar'),
  ],
}
