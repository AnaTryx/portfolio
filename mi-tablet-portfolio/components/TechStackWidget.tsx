// src/components/TechStackWidget.tsx
'use client';

import React, { useState } from 'react';

const TechStackWidget = () => {
  const [techs, setTechs] = useState([
    { id: 1, name: 'React / Next.js', completed: true },
    { id: 2, name: 'TypeScript', completed: true },
    { id: 3, name: 'Tailwind CSS', completed: true },
    { id: 4, name: 'Node.js', completed: true }, 
    { id: 5, name: 'Framer Motion', completed: true },
  ]);

  const toggleTech = (id: number) => {
    setTechs(techs.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  return (
    <div className="w-64 bg-white/70 dark:bg-zinc-900/90 backdrop-blur-xl border border-white/40 dark:border-white/20 rounded-[30px] p-5 shadow-xl animate-in fade-in zoom-in duration-700">
      <div className="flex items-center justify-between mb-4 px-1">
        {/* Título: Zinc 800 en claro, Blanco puro en oscuro */}
        <h3 className="text-zinc-800 dark:text-white font-bold text-sm tracking-tight">Tech Stack</h3>
        <span className="text-[10px] bg-blue-600 dark:bg-blue-500 text-white px-2 py-0.5 rounded-full font-bold shadow-sm">
          {techs.filter(t => t.completed).length}/{techs.length}
        </span>
      </div>

      <div className="space-y-3">
        {techs.map((tech) => (
          <div 
            key={tech.id} 
            onClick={() => toggleTech(tech.id)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className={`
              w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300
              ${tech.completed 
                ? 'bg-blue-500 border-blue-500 shadow-md' 
                : 'border-zinc-300 dark:border-zinc-500 bg-white/50 dark:bg-zinc-800/80 group-hover:border-zinc-400 dark:group-hover:border-zinc-300'}
            `}>
              {tech.completed && (
                <span className="text-white text-[10px]">✓</span>
              )}
            </div>
            
            {/* Texto: Negro en claro, Blanco/Gris claro en oscuro */}
            <span className={`
              text-sm font-semibold transition-all duration-300
              ${tech.completed 
                ? 'text-zinc-400 dark:text-zinc-500 line-through decoration-zinc-300 dark:decoration-zinc-600' 
                : 'text-zinc-900 dark:text-zinc-100'}
            `}>
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Separador con más brillo en oscuro */}
      <div className="mt-5 pt-3 border-t border-zinc-200/50 dark:border-white/10">
        <p className="text-[9px] text-zinc-500 dark:text-zinc-400 font-bold text-center italic tracking-wider">
          ACTUALIZADO RECIENTEMENTE
        </p>
      </div>
    </div>
  );
};

export default TechStackWidget;