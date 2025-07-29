/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bitter: ['Bitter', 'serif'],
      },
      colors: {
        bg: "#0D0D0D",
        btn: "#c7f889",
        icon: "#32CD32",
        bg2: "#1A1A1A",
        btnh: "#c7f889",
        gris: "#AAAAAA",
      },
    },
  },
  plugins: [],
};