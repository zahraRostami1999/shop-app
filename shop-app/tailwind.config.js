/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '450px',
        'md': '700px',
        'lg': '1000px',
        'xl': '1200px',
      },
      fontFamily: {
        'great-vibes': ['"Great Vibes"', 'cursive'],
        'satisfy': ['Satisfy', 'cursive'],
        'Poppins': ['Poppins', 'sans-serif'], 
      },
      colors: {
        'neutralLight': "rgba(0,0,0,0.83)",
        'gold': '#FFD700',
        'cherry-50': '#f9e6e6',
        'cherry-100': '#f2c2c2',
        'cherry-500': '#c43f5a',
        'cherry-800': '#9f2d3c',
      }
    },
  },
  plugins: [],
}