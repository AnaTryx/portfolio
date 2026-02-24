// src/components/SearchBar.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, Mic, Camera, Globe, FileText, ArrowRight } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showError, setShowError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const recentWebs = [
    { name: 'Sitio Web Aimee Chau', url: 'https://aimeechau.vercel.app', tech: 'Next.js' },
   
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsFocused(false);
        setShowError(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() !== '') setShowError(true);
  };

  return (
    <div ref={containerRef} className="w-full max-w-xl mx-auto mt-20 relative z-[100] px-4">
      <form onSubmit={handleSearch} className="relative">
        
        {/* Barra Blanca Estilo Google */}
        <div className={`
          flex items-center bg-white border transition-all duration-200 px-5 py-3
          ${isFocused 
            ? 'border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-t-[24px]' 
            : 'border-[#dfe1e5] rounded-full shadow-sm hover:shadow-[0_1px_6px_rgba(32,33,36,0.28)]'}
        `}>
          {/* Icono Lupa Gris */}
          <Search size={20} className="text-[#9aa0a6] mr-3" />
          
          <input
            type="text"
            placeholder="Buscar con Google..."
            className="bg-transparent border-none outline-none text-[#202124] placeholder-[#9aa0a6] w-full text-lg"
            value={query}
            onFocus={() => setIsFocused(true)}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowError(false);
            }}
          />

          {/* Logos clásicos de Google (Voz y Cámara) */}
          <div className="flex gap-4 ml-3 items-center">
             <Mic size={22} className="text-[#4285f4] cursor-pointer hover:scale-110 transition-transform" /> 
             <Camera size={22} className="text-[#ea4335] cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>

        {/* Dropdown de Resultados / Error */}
        {(isFocused || showError) && (
          <div className="absolute top-full left-0 right-0 bg-white border-x border-b border-transparent rounded-b-[24px] pb-4 shadow-[0_8px_12px_rgba(0,0,0,0.15)] animate-in fade-in slide-in-from-top-1 duration-200">
            
            {/* Línea divisoria interna tipo Google */}
            <div className="mx-5 border-t border-[#dfe1e5] mb-3"></div>

            {showError ? (
              <div className="py-6 flex flex-col items-center text-center px-6">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-3">
                  <Globe size={24} className="text-[#ea4335]" />
                </div>
                <p className="text-[#202124] font-medium">Acceso restringido</p>
                <p className="text-[#70757a] text-sm mt-1">
                  Lo siento, este sistema no tiene acceso a internet externo. <br />
                  Solo puedes explorar los archivos locales.
                </p>
              </div>
            ) : (
              <div className="px-2">
                <p className="text-[11px] text-[#70757a] uppercase font-bold tracking-wider ml-4 mb-2">Visto recientemente</p>
                <div className="flex flex-col">
                  {recentWebs.map((web, index) => (
                    <a 
                      key={index}
                      href={web.url}
                      target="_blank"
                      className="flex items-center justify-between px-4 py-2.5 hover:bg-[#f1f3f4] transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <FileText size={18} className="text-[#9aa0a6]" />
                        <div>
                          <p className="text-[#202124] text-sm font-medium">{web.name}</p>
                          <p className="text-[#70757a] text-xs">{web.tech}</p>
                        </div>
                      </div>
                      <ArrowRight size={14} className="text-[#4285f4] opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;