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
        dmSerifR: ["Dm-Serif-Regular","sans-serif"],
        dmSerifI: ["Dm-Serif-Italic","sans-serif"],
      },
      screens: {
        mini: "320px",
        xs: "435px",
        sm: "550px",
        md: "768px",
        lg: "850px", 
        xl: "1024px",
      },
    },
  },
  plugins: [],
};
