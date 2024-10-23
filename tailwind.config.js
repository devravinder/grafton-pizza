/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx, scss}"],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ["Satisfy"],
      },
      screens: {
        small: "785px",
        mobile: "375px",
      },
    },
  },
  plugins: [],
};
