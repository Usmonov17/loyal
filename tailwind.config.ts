/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserratR: ["Montserrat-Regular", "sans-serif"],
        mulishB: ["Mulish-Bold", "sans-serif"],
        mulishR: ["Mulish-Regular", "sans-serif"],
        robotoR: ["Roboto-Regular", "sans-serif"],
        robotoM: ["Roboto-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
