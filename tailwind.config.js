module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "clr-primary-cyan": "hsl(179, 62%, 43%)",
        "clr-primary-cyan-light": "hsl(179, 47%, 52%)",
        "clr-primary-bright-yellow": "hsl(71, 73%, 54%)",
        "clr-neutral-light-gray": "#242A45",
        "clr-bookmark-grey": "#9194A2",
        "clr-grayish-blue": "#f7f7f7",
      },
    },
    fontFamily: {
      Karla: ["Karla, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
