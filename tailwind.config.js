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
      },
      backgroundImage:{
        'minecraft':"url(./img/mc.gif')",
        'heroImage' : "url(./img/hero.png)"
      }
    },
  },
  plugins: [],
}