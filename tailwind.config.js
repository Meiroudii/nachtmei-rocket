/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.html", "./static/scripts/*.js"],
  theme: {
    extend: {
        screens: {
            'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
            'tallscreen': { 'raw': '(min-aspect-ratio: 1/2)' },
        }
    },
  },
  plugins: [],
}

