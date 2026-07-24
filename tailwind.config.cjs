/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    extend: {
      keyframes: {
        "slide-lines": {
          "0%": {
            transform: "translate(0,0)",
          },
          "100%": {
            transform: "translate(200px,200px)",
          },
        },

        "slide-lines-opposite": {
          "0%": {
            transform: "translate(0,0)",
          },
          "100%": {
            transform: "translate(-200px,200px)",
          },
        },
      },

      animation: {
        "line-one": "slide-lines 12s linear infinite",
        "line-two": "slide-lines-opposite 16s linear infinite",
        "line-three": "slide-lines 14s linear infinite reverse",
        "line-four": "slide-lines-opposite 18s linear infinite reverse",
      },
    },
  },

  plugins: [],
}