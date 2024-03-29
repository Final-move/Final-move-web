/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      opensans: ["opensans", "sans-serif"],
      montserrat: ["montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "about-banner": "url('/src/assets/media/images/about-bg.jpg')",
        "search-banner": "url('/src/assets/media/images/search-banner.jpg')",
        "contact-banner": "url('/src/assets/media/images/contact-banner.jpg')",
        "blog-banner": "url('/src/assets/media/images/blog-banner.jpg')",
      },

      gridTemplateColumns: {
        "home-col": "repeat(auto-fill, minmax(280px, 1fr))",
        "blog-col": "repeat(auto-fill, minmax(320px, 1fr))",
        "blog-col-2": "repeat(auto-fill, minmax(400px, 1fr))",
        "aside-card": "2fr 4fr",
        "home-news": "5fr 2fr",
      },

      colors: {
        primary: {
          DEFAULT: "#56453D",
          100: "rgba(86, 69, 61, .1)",
          200: "rgba(86, 69, 61, .2)",
          300: "rgba(86, 69, 61, .3)",
          400: "rgba(86, 69, 61, .4)",
          500: "rgba(86, 69, 61, .5)",
          600: "rgba(86, 69, 61, .6)",
          700: "rgba(86, 69, 61, .7)",
          800: "rgba(86, 69, 61, .8)",
          900: "rgba(86, 69, 61, .9)",

          light: {
            DEFAULT: "#8E837E",
            100: "rgba(142, 131, 126, .1)",
            200: "rgba(142, 131, 126, .2)",
            300: "rgba(142, 131, 126, .3)",
            400: "rgba(142, 131, 126, .4)",
            500: "rgba(142, 131, 126, .5)",
            600: "rgba(142, 131, 126, .6)",
            700: "rgba(142, 131, 126, .7)",
            800: "rgba(142, 131, 126, .8)",
            900: "rgba(142, 131, 126, .9)",
          },

          lighter: {
            DEFAULT: "#C7C1BE",
            100: "rgba(199, 193, 190, .1)",
            200: "rgba(199, 193, 190, .2)",
            300: "rgba(199, 193, 190, .3)",
            400: "rgba(199, 193, 190, .4)",
            500: "rgba(199, 193, 190, .5)",
            600: "rgba(199, 193, 190, .6)",
            700: "rgba(199, 193, 190, .7)",
            800: "rgba(199, 193, 190, .8)",
            900: "rgba(199, 193, 190, .9)",
          },
        },
        secondary: {
          DEFAULT: "#FFE5B4",
          100: "rgba(255, 229, 180, .1)",
          200: "rgba(255, 229, 180, .2)",
          300: "rgba(255, 229, 180, .3)",
          400: "rgba(255, 229, 180, .4)",
          500: "rgba(255, 229, 180, .5)",
          600: "rgba(255, 229, 180, .6)",
          700: "rgba(255, 229, 180, .7)",
          800: "rgba(255, 229, 180, .8)",
          900: "rgba(255, 229, 180, .9)",

          darker: {
            DEFAULT: "rgba(121, 89, 0, 1)",
            100: "rgba(121, 89, 0, .1)",
            200: "rgba(121, 89, 0, .2)",
            300: "rgba(121, 89, 0, .3)",
            400: "rgba(121, 89, 0, .4)",
            500: "rgba(121, 89, 0, .5)",
            600: "rgba(121, 89, 0, .6)",
            700: "rgba(121, 89, 0, .7)",
            800: "rgba(121, 89, 0, .8)",
            900: "rgba(121, 89, 0, .9)",
          },
        },
      },
    },
  },
  plugins: [],
};
