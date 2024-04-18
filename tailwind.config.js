/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{tsx,ts,js,jsx}", "./components/**/*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {
      colors: {
        header: "#F7F7F9",
      },
    },
  },
  plugins: [],
};
