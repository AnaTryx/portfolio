// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} h-screen w-screen overflow-hidden relative bg-[#dae4ee]`}>
        
        {/* FONDO DE CÓDIGO (Simulando la imagen orgánica) */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Mancha azul principal */}
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-400/30 blur-[120px]" />
          
          {/* Forma fluida clara (la onda blanca/gris) */}
          <div className="absolute top-[20%] right-[-5%] w-[60%] h-[80%] rounded-full bg-white/40 blur-[100px] rotate-12" />
          
          {/* Acento azul oscuro suave abajo */}
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[100px]" />
          
          {/* Toque cálido sutil para dar profundidad */}
          <div className="absolute top-[40%] left-[30%] w-[30%] h-[40%] rounded-full bg-slate-300/30 blur-[80px]" />
        </div>

        {/* CONTENIDO DE LA TABLET */}
        <div className="relative h-full w-full flex flex-col">
          {children}
        </div>
        
      </body>
    </html>
  );
}