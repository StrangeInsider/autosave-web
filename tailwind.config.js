/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bpg: ["bpg", "sans-serif"],
        fira: ["fira", "sans-serif"],
      }
    },
    screens: {
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1680px",
    },
  },
  plugins: [],
}

