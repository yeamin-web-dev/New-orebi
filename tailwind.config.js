/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['DM Sans','sans-serif']
      },
      backgroundImage: {
        'hero-pettern':"url('/src/assets/banner.png')",
        'banner' :"url('/src/assets/banner1.jpg')",
      },
    },
  },
  plugins: [],
}