// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        vesta: {
          1: "7239A1",
          2: "#642598",
          3: "#550F8E",
          4: "#4E0C83",
          5: "#460977",
          6: "#400272",
          7: "#36025F",
          8: "#300555",
          9: "#1F0738",
          10: "#170A25",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
