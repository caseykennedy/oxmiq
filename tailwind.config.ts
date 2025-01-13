import containerQueries from "@tailwindcss/container-queries"
import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      borderColor: {
        DEFAULT: "var(--border)",
      },
      borderWidth: {
        6: "6px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        highlight: "var(--highlight)",
      },
      fontSize: {
        base: "1rem",
        h1: ["7.993rem", { lineHeight: "1.25", fontWeight: "600" }],
        h2: ["5.653rem", { lineHeight: "1.25", fontWeight: "500" }],
        h3: ["3.998rem", { lineHeight: "1.35", fontWeight: "500" }],
        h4: ["2.827rem", { lineHeight: "1.45", fontWeight: "500" }],
        h5: ["1.999rem", { lineHeight: "1.55", fontWeight: "500" }],
        h6: ["1.414rem", { lineHeight: "1.65", fontWeight: "500" }],
        p: ["1.75rem", { lineHeight: "1.3", fontWeight: "500" }],
        small: ["1.25rem", { lineHeight: "1.3", fontWeight: "500" }],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-fast": "spin 0.5s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        meteor: "meteor 9s linear infinite",
        shine: "shine var(--duration) infinite linear",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
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
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-900px)",
            opacity: "0",
          },
        },
        shine: {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      transitionTimingFunction: {
        // Easing functions for smooth transitions
        linear: "linear", // Default linear easing
        ease: "ease", // Default "ease" easing
        "ease-in": "ease-in", // Accelerates at the beginning
        "ease-out": "ease-out", // Decelerates at the end
        "ease-in-out": "ease-in-out", // Accelerates and then decelerates

        // Custom cubic-bezier curves
        "in-fast": "cubic-bezier(0.19, 1, 0.22, 1)", // Fast in
        "out-fast": "cubic-bezier(0.19, 1, 0.22, 1)", // Fast out
        "ease-in-sine": "cubic-bezier(0.47, 0, 0.745, 0.715)", // Gentle in
        "ease-out-sine": "cubic-bezier(0.39, 0.575, 0.565, 1)", // Gentle out
        "ease-in-out-sine": "cubic-bezier(0.445, 0.05, 0.55, 0.95)", // Gentle in and out
        "ease-in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)", // Sharper in
        "ease-out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Sharper out
        "ease-in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)", // Sharper in and out
        "ease-in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)", // Cubic in
        "ease-out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)", // Cubic out
        "ease-in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)", // Cubic in and out
        "ease-in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)", // Quartic in
        "ease-out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)", // Quartic out
        "ease-in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)", // Quartic in and out
        "ease-in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)", // Exponential in
        "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)", // Exponential out
        "ease-in-out-expo": "cubic-bezier(1, 0, 0, 1)", // Exponential in and out

        // Custom timing for bounce-like animations
        "ease-in-bounce": "cubic-bezier(0.6, -0.28, 0.735, 0.045)", // Bouncy in
        "ease-out-bounce": "cubic-bezier(0.175, 0.885, 0.32, 1.275)", // Bouncy out
        "ease-in-out-bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)", // Bouncy in and out
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
      },
    },
  },
  plugins: [tailwindcssAnimate, containerQueries],
} satisfies Config
