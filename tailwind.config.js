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
        "eerie-black": "#181517",
        "silver": "#C1BFBE",
        "sonic-silver": "#737373",
        "vegas-gold": "#CDAD5C",
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
