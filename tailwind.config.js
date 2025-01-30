/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custom-bg': "url('./assets/bg2.jpg')",
        'section1-bg': "url('./assets/medievalBG.webp')",
        'project-bg': "url('./assets/bg4.jpeg')",
        'rocket': "url('./src/assets/rocket.png')",
        'heartIcon': "url('./assets/heartIcon.png')",
      }
    },
    fontFamily:{
      'play-fair':['"Playfair Display", serif'],
      'poppin':['font-family: "Poppins", sans-serif'],
      'lato': ['font-family: "Lato", sans-serif']
    },
  },
  plugins: [],
}