/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepage_bg': "url('/images/willis_tower_bg.jpg')",
        'logo_light': "url('/images/ethchi_logo_light.png'"
      },
    },
  },
  plugins: [],
}
