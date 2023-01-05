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
        "davys-grey": "#4A4E59",
        "eerie-black": "#181517",
        "silver": "#C1BFBE",
        "silver-metallic": "#A9ACB0",
        "metallic-sunburst": "#A38041"
      },
      spacing: {
        '128': '40rem',
      },
      fontFamily: {
        'lato': [`'Lato', sans-serif`],
        'catamaran': [`'Catamaran', sans-serif`]
      }
    },
  },
  plugins: [],
}
