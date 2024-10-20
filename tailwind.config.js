/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#FF6600', // Custom orange color for Karrots
        },
      },
    },
  },
  plugins: [],
};