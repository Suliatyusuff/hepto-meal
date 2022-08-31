module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'food-pan': "url('/images/food-bg.png')",
      },
      colors: {
        "primary-500": "#43703F"
      },
      screens: {
        "4xl": "2560px",
      },
    },
  },
  plugins: [],
}