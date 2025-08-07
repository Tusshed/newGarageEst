// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "480px", // 👈 for xs breakpoin
      },
    },
  },
  plugins: [],
};
