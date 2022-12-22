const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}"],
  theme: {
    screens: {
      xs: "361px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "primary-color": "#0fa",
        "250": "inset 0 0 0 1000px rgba(0, 0, 0, 0.7)",
      },
      spacing: {
        '128': '40rem',
      }
    },
  },
  plugins: [],
}
