/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        "josefin-sans": ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "hero-image": "url('./assets/desktop/image-hero.jpg')",
        "tablet-image": "url('./assets/tablet/image-header.jpg')",
        "mobile-image": "url('./assets/mobile/image-header.jpg')",
      }),

      colors: {
        customOrange: "rgb(216, 125, 74)",
      },
    },
  },
  plugins: [],
};
