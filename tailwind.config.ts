import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("/hero.png")',
        "red-gradient":
          "linear-gradient(92deg, rgb(34 211 238) 2.87%, rgb(67 56 202) 96.18%)",
      },
    },
  },
  plugins: [],
};
export default config;
