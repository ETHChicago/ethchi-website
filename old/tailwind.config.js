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
      'secondaryBrand2': '#77C5EE',
      'tertiaryBrand': '#FF808A',
      'primaryType': '#FFFFFF',
      'white': '#FFFFFF',
    },
    fontFamily: {
      'sans': ['"IBM Plex Mono"'], // this sets the default font 
    },
    extend: {
      backgroundImage: {
        'homepage_bg': "url('https://images.unsplash.com/photo-1509653087866-91f6c2ab59f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80')",
        'grid_bg': "url('/public/images/backgrounds/grid-background.png')",
        'grid_bg_navy': "url('/public/images/backgrounds/grid-background-navy.png')",
        'showcase_bg': "url('/public/images/backgrounds/showcase_bg.png')",
        'holiday_bg': "url('/public/images/backgrounds/holidayBackground.png')",
      }
    },
  },
  plugins: [],
}

