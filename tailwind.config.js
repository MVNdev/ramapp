/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        rick_morty: {

          "primary": "#6D997A",

          "secondary": "#527d5f",

          "accent": "#44ff00",

          "neutral": "#2c5442",

          "base-100": "#1B4332",

          "info": "#A8DADC",

          "success": "#319d00",

          "warning": "#ffac4e",

          "error": "#FF3D3D",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}

