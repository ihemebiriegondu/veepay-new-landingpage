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
        invalid: "#C4C4C4",
        warning: "#FF0000",
        formBg: "#CFD7E4",
        mobileFormBg: '#E7EBF2',
        feedbackBg: '#D9D9D9E5',
      },
      spacing: {
        130: "28.7rem",
        140: "32rem",
        150: "39.6rem",
      },
      screens: {
        xs: "480px",
      },
      skew: {
        8: "8.488deg",
      },
    },
  },
  plugins: [],
};
