/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#000000",
        dark1: "#0b0a00",
        neutral900: "#171717",
        dark2: "#202020",
        dark3: "#222023",
        dark4: "#373737",
        gray1: "#4b4b4b",
        gray2: "#5a5a5a",
        gray3: "#a8a8a8",
        light1: "#ececec",
        yellow1: "#eeed00",
        yellow2: "#f7f04b",
        yellow3: "#fdf202",
        yellow4: "#fef102",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
