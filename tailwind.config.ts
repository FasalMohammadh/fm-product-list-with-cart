import type { Config } from "tailwindcss";

import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-redhat)", ...fontFamily.sans],
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        red: "hsl(var(--red))",
        green: "hsl(var(--green))",
        "rose-50": "hsl(var(--rose-50))",
        "rose-100": "hsl(var(--rose-100))",
        "rose-300": "hsl(var(--rose-300))",
        "rose-400": "hsl(var(--rose-400))",
        "rose-500": "hsl(var(--rose-500))",
        "rose-900": "hsl(var(--rose-900))",
        "hawaiian-malasada": "hsl(var(--hawaiian-malasada))",
      },
    },
  },
  plugins: [],
};

export default config;
