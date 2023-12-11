/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary: "#7F56D9"
      },
      colors:{
        primary: "#7F56D9",
        pink:"#FFC0CB",
        red:"#FF0000",
        yellow:"#FFFF00",
        orange:"#FFA500",
      }
    },
  },
  plugins: [],
}
