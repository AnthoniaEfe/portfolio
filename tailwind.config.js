module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      blobbychug: ["blobbychug", "sans"],
      mali: ["Mali", "sans"],
      akaya: ["AkayaTelivigala", "mali", "sans"],
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        vesta: {
          1: "#7239A1",
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
        atsev: {
          1: "#E1C6FD",
          2: "#B79AD2",
          3: "#C6AEDF",
          4: "#AA95C0",
          5: "#8C6DA7",
          6: "#736482",
          7: "#62417C",
        },
      },

      screens: {
        xs: { min: "200px", max: "330px" },
      },
      spacing:{
        '1/6': '16.666667%',
      },
      backgroundSize: {
        '70%': '40%',
        '16': '4rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
