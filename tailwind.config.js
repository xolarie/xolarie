/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['inter', 'sans-serif']
      },
      backgroundImage: {
        "header-bg": "url('/images/Rectangle_6.png')",
        "home-bg": "url('/images/Hero Bg.png')",
        "grid1_bg": "url('/images/Frame_2.png')",
        "grid4_bg": "url('/images/image_1.png')",
      }
    },
  },
  plugins: [],
}

