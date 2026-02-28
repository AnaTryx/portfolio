import type { Config } from "tailwindcss";

const config: Config = {
  // 1. ACTIVAR EL MODO CLASE
  darkMode: "class",
  
  // 2. RASTREAR TUS ARCHIVOS (Asegúrate de que estas rutas coincidan con tus carpetas)
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;