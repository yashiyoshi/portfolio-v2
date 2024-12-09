import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D192A",
        primary_1: "#92BCFF",
        primary_2: "#587499",
        primary_3: "#FFE01A",
        indicator_red: "#FF8E8E",
        indicator_green: "#99FF8E",
        white: "#D9D9D9",
      },
      fontFamily: {
        sans: ["Roboto Mono", "sans-serif"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
