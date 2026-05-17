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
        // Sistema de colores refinado — mayor contraste, más legible
        ink: {
          DEFAULT: "#161310",
          soft: "#3d362e",
          muted: "#6b6357",
          light: "#9a9085",
        },
        paper: {
          DEFAULT: "#f7f3ea",
          soft: "#f0ebe0",
          warm: "#ebe4d3",
        },
        accent: {
          DEFAULT: "#b8492c",
          soft: "#c66744",
          warm: "#e8a690",
          glow: "#f4d4c5",
        },
        line: {
          DEFAULT: "#d8cdb8",
          soft: "#e5dcc8",
        },
      },
      fontSize: {
        // Escala tipográfica con line-heights afinados
        "display-xl": ["2.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "500" }],
        "display-lg": ["2rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "display": ["1.5rem", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "500" }],
        "title": ["1.125rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "500" }],
        "body": ["0.9375rem", { lineHeight: "1.5", letterSpacing: "0" }],
        "body-sm": ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0" }],
        "label": ["0.6875rem", { lineHeight: "1", letterSpacing: "0.12em", fontWeight: "500" }],
      },
      spacing: {
        // Base 4px
        "0.5": "0.125rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem",
      },
      boxShadow: {
        // Sombras muy sutiles — capa única
        soft: "0 1px 2px rgba(22, 19, 16, 0.04), 0 0 0 1px rgba(22, 19, 16, 0.04)",
        card: "0 1px 3px rgba(22, 19, 16, 0.06), 0 0 0 0.5px rgba(22, 19, 16, 0.06)",
        elevated: "0 4px 12px -2px rgba(22, 19, 16, 0.08), 0 0 0 0.5px rgba(22, 19, 16, 0.06)",
      },
      animation: {
        "slide-up": "slideUp 240ms cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fadeIn 180ms ease-out",
        "scale-in": "scaleIn 160ms cubic-bezier(0.16, 1, 0.3, 1)",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};
