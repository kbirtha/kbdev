/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['"Roboto"'],
    },
    screens: {
      'md': '640px',
      'lg': '960px',
    },
  },
  plugins: [],
}
