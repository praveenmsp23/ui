import { uiTW } from "@praveenmsp23/ui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@praveenmsp23/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  tailwindFunctions: ["clsx", "cn", "cva"],
  darkMode: "class",
  plugins: [
    uiTW({
      defaultTheme: "dark",
    }),
  ],
};

export default config;
