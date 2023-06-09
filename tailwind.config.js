/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'spotify-font-gray': '#B3B3B3',
        topbar: '#121212',
        'spotify-bg': '#121212',
        'cards-bg': '#1e1e1e',
        'cards-bg-hover': '#2a2a2a'
      }
    }
  },
  plugins: []
}
