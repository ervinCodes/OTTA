const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}"],
  theme: {
    screens: {
      xs: "280px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "davys-grey": "#4A4E59",
        "eerie-black": "#181517",
        "silver": "#C1BFBE",
        "silver-metallic": "#A9ACB0",
        "metallic-sunburst": "#A38041",
        "jasmine": "#F0D574",
        "sonic-silver": "#737373",
        "vegas-gold": "#CDAD5C",
        "satin-sheen": "#C69D42",
        "dark-goldenrd": "#B58632",
        "queen-blue": "#5C6D8B",
        "space-cadet": "#1C2646"
      },
      spacing: {
        '128': '40rem',
        '2/5': '40%',
        '2/6': '33.333333%',
      },
      fontFamily: {
        'lato': [`'Lato', sans-serif`],
        'catamaran': [`'Catamaran', sans-serif`]
      }
    },
  },
  plugins: [],
}
