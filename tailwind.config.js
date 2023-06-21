/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepage_bg': "url('../public/images/willis_tower_bg.jpg')",
      }
    },
  },
  plugins: [],
}

