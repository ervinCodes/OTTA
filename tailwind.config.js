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
        "sonic-silver": "#737373",
        "federal-blue": "#050542",
        "dark-gold": "#60553C",
        "white-gold": "#B49F71"
      },
      spacing: {
        '128': '40rem',
        '1/2': '50%',
        '1/5': '20%',
        '2/5': '40%',
        '1/6': '16.666666%',
        '2/6': '33.333333%',
        '1/12': '0.833333%',
        '1/20': '0.05%'
      },
      fontFamily: {
        'gill-sans': [`'Gill Sans', sans-serif`]
      }
    },
  },
  plugins: [],
}
