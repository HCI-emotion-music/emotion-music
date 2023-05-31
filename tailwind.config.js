/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  purge: [
      "./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"
  ],
  constent: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        xs: defaultTheme.spacing[2],
        sm: defaultTheme.spacing[3],
      }
    },
  },
  "plugins": [],
}

