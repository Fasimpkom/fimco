// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tny: "280px",
      vsm: "320px",
      msm: "360px",
      smm: "400px",
      xsm: "480px",
      smd: "586px",
      hal: "768px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        rflex: ["R-Flex", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
