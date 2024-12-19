/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-bg-light": "#f8f8f8",
        "dark-blue": "#545ddc",
        "custom-gray": "#8D919B",
        "custom-pink": "#FF5474",
        "custom-orange": "#F8B55E",
        "custom-blue": "#4475FE",
      },
    },
  },

  plugins: [],
};
