/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 2px 0 0 rgba(0,0,0)",
      },
    },
  },
  plugins: [],
};
