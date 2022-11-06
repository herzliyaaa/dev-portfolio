/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      "width": {
        "50vw": "50vw",
        "60vw": "60vw",
      },
      "height": {
        "50vh": "50vh",
        "60vh": "60vh",
      },
    },
  },
  plugins: [],
};
