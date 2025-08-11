import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6BA292",
        secondary: "#F6E7CB",
        accent: "#E5C687",
        ink: "#333333",
        paper: "#FAFAF8"
      },
      borderRadius: {
        "2xl": "1.25rem"
      }
    },
  },
  plugins: [],
};
export default config;