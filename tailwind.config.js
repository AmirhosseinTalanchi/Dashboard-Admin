/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['"Inter"'],
        'Inter-SemiBold': ['"Inter-SemiBold"'],
        'Inter-Bold': ['"Inter-Bold"'],
      },
      colors:{
        'Primary': '#5C59E8',
        'Neutral': '#667085'
      }
    },
  },
  plugins: [],
}