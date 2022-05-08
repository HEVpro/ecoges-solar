const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Inter": ["Inter", ...defaultTheme.fontFamily.sans],
        "Barlow": ["Barlow", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'darkGreen': '#1C3A27',
        'softGreen': '#53C351',
        'secondaryGreen': '#E2EEEC',
        'bone': '#F4F9F8'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}