/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        colorRed: "#fc4747",
        colorDarkBlue: "#10141e",
        colorGreyishBlue: "#5a698f",
        colorSemiDarkBlue: "#161d2f",
        colorWhite: "#ffffff",
      },
    },
  },
  plugins: [],
};
