/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#121212',
        'broxworx-turq': '#53b5a5',
      },
      fontFamily: {
        'chakra-petch': ['"Chakra Petch"', 'sans-serif'],
      }
    }
  },
  variants: {},
  plugins: [],
}

