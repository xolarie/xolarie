/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('src/images/Rectangle_6.png')",
        "home-bg": "url('src/images/Hero Bg.png')"
      }
    },
  },
  plugins: [],
}

