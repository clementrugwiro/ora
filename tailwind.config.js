/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(202 138 4)",
        secondary: "#173B3F",
        "light-bg": "#F9F9FB",
      },
    },
  },
  plugins: [],
};
