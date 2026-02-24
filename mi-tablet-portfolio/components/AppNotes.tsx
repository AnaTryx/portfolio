// src/components/AppNotes.tsx
'use client';

import React from 'react';
import { X, ChevronLeft, Share } from 'lucide-react';

const AppNotes = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-10 bg-black/20 backdrop-blur-sm animate-in fade-in zoom-in duration-300">
      <div className="bg-[#fcfcfc] w-full max-w-2xl h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden text-zinc-800">
        
        {/* Barra superior de la ventana */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-white/50">
          <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors text-yellow-600">
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-4">
            <Share size={20} className="text-yellow-600 cursor-pointer" />
            <X size={20} className="text-zinc-400 cursor-pointer hover:text-red-500 transition-colors" onClick={onClose} />
          </div>
        </div>

        {/* Contenido de la Nota */}
        <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
          <span className="text-zinc-400 text-sm font-medium uppercase tracking-widest">23 de febrero de 2026</span>
          <h2 className="text-3xl font-bold mt-2 mb-6">Sobre mi Portfolio 📝</h2>
          
          <div className="space-y-4 text-lg leading-relaxed text-zinc-600">
            <p>
              ¡Hola! Este es mi entorno de trabajo digital. He diseñado este sistema operativo para mostrar mis proyectos de una forma diferente.
            </p>
            <p>
              Aquí podrás encontrar:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-zinc-800 font-medium">
              <li>Mis desarrollos más recientes.</li>
              <li>Tecnologías que domino (mira el widget de la izquierda).</li>
              <li>Mi gusto por el diseño minimalista.</li>
            </ul>
            <p className="pt-4 italic border-t border-zinc-100">
              "El código es poesía cuando el diseño es armonía."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNotes;