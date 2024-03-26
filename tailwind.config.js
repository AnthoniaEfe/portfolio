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
        purple: {
          light: "#E1C6FD",
          dark: "#400272",
          darker: "#36025F",
          darkest: "#1F0738",
        },
      },

      screens: {
        xs: { min: "200px", max: "330px" },
      },
      spacing: {
        "1/6": "16.666667%",
      },
      backgroundSize: {
        "70%": "40%",
        16: "4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
