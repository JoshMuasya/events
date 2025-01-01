import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        golden: "0px 4px 15px rgba(255, 215, 0, 0.6)",
        bottomLeft: "-10px 10px 20px rgba(255, 215, 0, 0.2)"
      },
    },
  },
  plugins: [],
} satisfies Config;
