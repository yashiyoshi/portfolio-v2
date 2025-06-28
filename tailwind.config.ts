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
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        fadeIn: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        gradient: "gradient 6s ease-in infinite",
        "fade-in": "fadeIn 1s ease-out forwards 0.25s",
        "fade-in-delay-1": "fadeIn 2s ease-out forwards 0.75s",
        "fade-in-delay-2": "fadeIn 2s ease-out forwards 1.25s",
        "fade-in-delay-3": "fadeIn 1s ease-out forwards 2s",
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
      },
      colors: {
        background: "#0D192A",
        primary_1: "#92BCFF",
        primary_2: "#587499",
        primary_3: "#dec41d",
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
