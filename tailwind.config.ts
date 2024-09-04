import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bigger: ["bigger"],
        ztbro: ["ztbro"],
        ztbro_i: ["ztbro-i"],
      },
    },
  },
  plugins: [],
} satisfies Config;
