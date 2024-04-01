/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html", // Path to all HTML files
    "./src/assets/js/**/*.js", // Path to JS files if you use Tailwind classes in JS
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2",
        accent: "#EF7021",
      },
    },
  },
  plugins: [],
};
