/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primaryBrand': '#E41E2D',
      'primaryBackground': '#04293C',
      'secondaryBrand': '#77C5E0',
      'tertiaryBrand': '#FF808A',
      'primaryType': '#FFFFFF'
    },
    extend: {
      backgroundImage: {
        'homepage_bg': "url('../public/images/willis_tower_bg.jpg')",
        'ticket_page_bg': "url('../public/images/ethchi_flag_big.jpg')",
      }
    },
  },
  plugins: [],
}

