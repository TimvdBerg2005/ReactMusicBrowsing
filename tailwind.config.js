/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}", './public/index.html'],
  theme: {
    extend: {
      colors: {
        'gray-1': '#121212',
        'gray-2': '#181818',
        'black-1': '#000000',
        'white-1': '#d8ffff',
        'white-2': '#b5b5b5'
      },
    },
  },
  plugins: [],
}
