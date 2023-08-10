/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E387A",
        secondary: "#FBC304",
        darkSecondary: "#FFA500"
      },
      spacing: {
        140: '32rem'
      },
    },
  },
  plugins: [],
};
