/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E387A",
        light: "#9FAFCA",
        secondary: "#FBC304",
        darkSecondary: "#FFA500",
      },
      spacing: {
        140: "32rem",
      },
    },
  },
  plugins: [],
};
