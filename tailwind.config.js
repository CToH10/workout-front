/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      brand: {
        1: "#2805F0",
        2: "#3E16CC",
        3: "#A698FA",
        4: "#E3DEFF",
      },
      grey: {
        0: "#0B0D0D",
        1: "#212529",
        2: "#495057",
        3: "#868E96",
        4: "#ADB5BD",
        5: "#CED4DA",
        6: "#DEE2E6",
        7: "#E9ECEF",
        8: "#F1F3F5",
        9: "#F8F9FA",
        10: "#FDFDFD",
        whiteFixed: "#FFFFFF",
        black29: "rgb(0, 0, 0, 0.29)",
        black100: "#000",
      },
      alert: {
        1: "#CD2B31",
        2: "#FDD8D8",
        3: "#FFE5E5",
      },
      success: {
        1: "#18794E",
        2: "#CCEBD7",
        3: "#DDF3E4",
      },
    },
    fontSize: {
      heading1: ["2.75rem", "3.5rem"],
      heading2: ["2.25rem", "2.75rem"],
      heading3: ["2rem", "2.5rem"],
      heading4: ["1.75rem", "2.25rem"],
      heading5: ["1.5rem", "1.875rem"],
      heading6: ["1.25rem", "1.625rem"],
      heading7: ["1rem", "1.25rem"],
      body1: ["1rem", "1.75rem"],
      body2: ["0.875rem", "1.5rem"],
      btnBig: ["1rem", "0rem"],
      btnMedium: ["0.875rem", "0rem"],
      inputPlace: ["1rem", "0rem"],
      inputLabel: ["0.875rem", "1rem"],
    },
    fontFamily: {
      inter: ["inter", "sans-serif"],
    },
    extend: {
      boxShadow: {
        white: "0 20px 13px rgb(250, 250, 250 , 0.07))",
      },
    },
  },
  plugins: [],
};
