/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-brand': '#e41e2d',
        'primary-background': '#04293c', 
        'secondary-brand': '#77c5e0',
        'secondary-brand-2': '#77c5ee',
        'tertiary-brand': '#ff808a',
        'primary-type': '#ffffff',
        'primaryBackground': '#04293c',
        'primaryType': '#ffffff',
      },
      fontFamily: {
        'sans': ['IBM Plex Mono', 'monospace'],
      },
      backgroundImage: {
        'homepage': "url('https://images.unsplash.com/photo-1509653087866-91f6c2ab59f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80')",
        'grid': "url('/public/images/backgrounds/grid-background.png')",
        'grid-navy': "url('/public/images/backgrounds/grid-background-navy.png')",
        'showcase': "url('/public/images/backgrounds/showcase_bg.png')",
        'holiday': "url('/public/images/backgrounds/holidayBackground.png')",
      }
    },
  },
  plugins: [],
}
