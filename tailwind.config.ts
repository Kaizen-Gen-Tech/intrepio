import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindCssAnimate from "tailwindcss-animate";

function getRadixColors(name: string) {
  return [...Array(12).keys()].reduce(
    (colors, i) => {
      colors[i + 1] = `hsl(var(--${name}-${i + 1}) / <alpha-value>)`;
      return colors;
    },
    {} as Record<number, string>,
  );
}

export default {
  content: ["./src/**/*.tsx"],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      boxShadow: {
        sm: "2px 2px",
        md: "4px 4px",
        lg: "6px 6px",
        xl: "8px 8px",
        "2xl": "10px 10px",
      },
      colors: {
        primary: getRadixColors("amber"),
        secondary: getRadixColors("lime"),
        accent: getRadixColors("blue"),
        muted: getRadixColors("sand"),
        destructive: getRadixColors("red"),
      },
      saturate: {
        75: "0.75",
        90: "0.9",
        95: "0.95",
        105: "1.05",
        110: "1.1",
        125: "1.25",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "ping-slow": {
          "37%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ping-slow": "ping-slow 3s cubic-bezier(0, 0.2, 0, 1) infinite",
      },
    },
  },
  plugins: [tailwindCssAnimate],
} satisfies Config;
