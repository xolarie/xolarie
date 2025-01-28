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
      },
      backgroundImage: {
        "header-bg": "url('src/images/Rectangle_6.png')",
        "home-bg": "url('src/images/Hero Bg.png')",
        "grid1_bg": "url('src/images/Frame_2.png')",
        "grid4_bg": "url('src/images/image_1.png')",
      }
    },
  },
  plugins: [],
}

