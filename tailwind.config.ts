import type { Config } from "tailwindcss";
import { content, plugin } from "flowbite-react/tailwind";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    content()
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      }
    },
    extend: {
      colors: {
        brand: {
          dark: "#3E2B24",
          light: "#C4B693",
          mid: '#534039',
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Default sans-serif font
      },
    },
  },
  plugins: [plugin(), require("@tailwindcss/typography")],
} satisfies Config;
