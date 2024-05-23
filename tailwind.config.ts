import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/store/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/types/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ["var(--font-inter)"],
      ubuntu: ["var(--font-ubuntu-mono)"],
      nunito: ["var(--font-nunito)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grey: {
          200: "#F2F7FF",
          300: "#E3E9F3",
          400: "rgba(208, 213, 221, 1)",
          500: "#92A2B9",
          700: "#5c5c5ce0",

        },
        black: {
          400: "#667085",
          700: "#101828",
        },
        blue: {
          200: "#E6F2FF",
          300: "#2E90FA",
          700: "#01224A",
        },
        white: {
          100: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
