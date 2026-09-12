/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        "primary-light": "#00000080",
        gray: "#DDDDDD",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
