/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#252A34",
        textColor: "#EAEAEA",
        highlight: "#FF2E63",
        borderColor: "#08D9D6",
      },
    },
  },
  plugins: [],
}

