/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent-color': '#04fbd6',
        'accent-color-dark': '#05e0bf',
        'custom-dark': 'rgb(29 42 62)',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(299deg, rgba(11,14,19,1) 0%, rgba(58,77,105,1) 48%, rgba(11,14,19,1) 100%)', // Add custom gradient
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
