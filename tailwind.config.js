/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B7ECC4",
        secondary: "#5CC375",
        yellow: "#FFDD00",
      },
      fontFamily: {
        sigmar: ["Sigmar One"],
        short: ["Short Stack"],
      },
    },
  },
  plugins: [],
};

