// src/components/AppNotes.tsx
'use client';

import React from 'react';
import { X, ChevronLeft, Download } from 'lucide-react'; // Cambié Share por Download que queda mejor para un CV

const AppNotes = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-10 bg-black/20 backdrop-blur-sm animate-in fade-in zoom-in duration-300">
      {/* Ventana: de blanco hueso a zinc casi negro */}
      <div className="bg-[#fcfcfc] dark:bg-zinc-950 w-full max-w-2xl h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden text-zinc-800 dark:text-zinc-200 border dark:border-zinc-800 transition-colors duration-500">
        
        {/* Barra superior de la ventana */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md transition-colors">
          <button onClick={onClose} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-yellow-600">
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-4 items-center">
            {/* BOTÓN DE DESCARGA DE CV */}
            <a 
              href="/documents/CV_Ana_Rita.pdf" 
              download="CV_Ana_Rita.pdf"
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-yellow-600 flex items-center justify-center"
              title="Descargar mi CV"
            >
              <Download size={20} className="cursor-pointer" />
            </a>

            <X 
              size={20} 
              className="text-zinc-400 cursor-pointer hover:text-red-500 transition-colors" 
              onClick={onClose} 
            />
          </div>
        </div>

        {/* Contenido de la Nota */}
        <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
          <span className="text-zinc-400 dark:text-zinc-500 text-sm font-medium uppercase tracking-widest">23 de febrero de 2026</span>
          <h2 className="text-3xl font-bold mt-2 mb-6 dark:text-white">Sobre mi Portfolio <span className="text-blue-500">📝</span></h2>
          
          <div className="space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 transition-colors">
            <p>
              ¡Hola! Este es mi entorno de trabajo digital. He diseñado este sistema operativo para mostrar mis proyectos de una forma diferente, fusionando código y diseño en una sola experiencia.
            </p>
            <p>
              Aquí podrás encontrar:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-zinc-800 dark:text-zinc-200 font-medium">
              <li>Mis desarrollos más recientes y retos técnicos superados.</li>
              <li>Tecnologías que domino (mira el widget de la izquierda).</li>
              <li>
                <strong className="text-zinc-900 dark:text-white">Mi Mundo:</strong> Cosas que forman parte de mi día a día, como las canciones que me inspiran, fotos de mis momentos favoritos y mi gusto por el minimalismo.
              </li>
            </ul>
            <p className="pt-4 italic border-t border-zinc-100 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400">
              "El código es poesía cuando el diseño es armonía."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNotes;