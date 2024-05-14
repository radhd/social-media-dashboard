/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "selector",
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        custom: {
          100: "#8C98C6",
          200: "#63687D",
          greenText: "#1EB589",
          redText: "#DC414C",
        },
      },
    },
  },
  plugins: [],
};
