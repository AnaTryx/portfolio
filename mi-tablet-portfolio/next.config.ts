import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Esto genera la carpeta /out con tu web estática
  images: {
    unoptimized: true,   // Esto permite que tus fotos de /public se vean sin errores
  },
  // Si tu repositorio se llama "mi-tablet" (por ejemplo), descomenta la línea de abajo:
  // basePath: '/mi-tablet', 
};

export default nextConfig;