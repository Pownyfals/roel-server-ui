/** @type {import('tailwindcss').Config} */ 

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'retroGaming':['RetroGaming','serif'],
        'minecraft':['Minecraft','serif']
      }
    },
  },
  plugins: [],
}