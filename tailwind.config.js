// const colors = require('tailwindcss/colors')

module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: "#3a7bfd",
        dark: {
          50: "#e4e5f1",
          100: "#cacde8",
          200: "#777a92",
          300: "#4d5066",
          400: "#393a4c",
          500: "#25273c",
          600: "#161722",
        },
        light: {
          50: "#fafafa",
          100: "#e4e5f1",
          200: "#d2d3db",
          300: "#9394a5",
          400: "#484b6a",
        }
      },
      backgroundImage: {
        "banner-light": "url('src/assets/img/banner-light.jpg')",
        "banner-dark": "url('src/assets/img/banner-dark.jpg')",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
}
