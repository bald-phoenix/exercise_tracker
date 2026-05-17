/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        ink: "#1a1814",
        paper: "#f5f1e8",
        cream: "#ebe4d3",
        accent: "#c84b31",
        muted: "#6b6357",
        line: "#d4cab5",
      },
    },
  },
  plugins: [],
};
