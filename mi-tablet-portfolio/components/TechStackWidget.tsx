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
    <div className="w-64 bg-white/70 backdrop-blur-xl border border-white/40 rounded-[30px] p-5 shadow-xl animate-in fade-in zoom-in duration-700">
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="text-zinc-800 font-bold text-sm tracking-tight">Tech Stack</h3>
        <span className="text-[10px] bg-blue-500 text-white px-2 py-0.5 rounded-full font-bold shadow-sm">
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
                : 'border-zinc-300 bg-white/50 group-hover:border-zinc-400'}
            `}>
              {tech.completed && (
                <span className="text-white text-[10px]">✓</span>
              )}
            </div>
            <span className={`
              text-sm font-medium transition-all duration-300
              ${tech.completed ? 'text-zinc-400 line-through decoration-zinc-300' : 'text-zinc-800'}
            `}>
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-3 border-t border-zinc-200/50">
        <p className="text-[9px] text-zinc-400 font-medium text-center italic">
          Actualizado recientemente
        </p>
      </div>
    </div>
  );
};

export default TechStackWidget;