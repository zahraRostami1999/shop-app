/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm': '400px',
        'md': '800px',
        'lg': '1000px',
        'xl': '1200px',
      },
      fontFamily: {
        'great-vibes': ['"Great Vibes"', 'cursive'],
        'satisfy': ['Satisfy', 'cursive'],
        'Poppins': ['Poppins', 'cursive'],
      },
    },
  },
  plugins: [],
}
