/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      "width": {
        "50vw": "50vw",
        "60vw": "60vw",
        "70vw": "70vw",
      },
      "height": {
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
      },
      "colors": {
        "brown": "#b8775c",
        "dark-brown": "#7d5a4b",
      },
    },
  },
  plugins: [],
};
