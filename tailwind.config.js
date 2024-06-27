import { uiTW } from "./package/src/tw-plugin/plugin.ts";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  tailwindFunctions: ["clsx", "cn", "cva"],
  darkMode: "class",
  plugins: [uiTW()],
};

export default config;
