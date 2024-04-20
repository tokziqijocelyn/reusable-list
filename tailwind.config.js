/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{tsx,ts,js,jsx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./components/scrollableList/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        header: "#F7F7F9",
      },
    },
  },
  plugins: [],
};
