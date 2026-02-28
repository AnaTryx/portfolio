// src/components/SearchBar.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, Globe, FileText, ArrowRight } from 'lucide-react';

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
        
        {/* Barra Estilo Google - Adaptable */}
        <div className={`
          flex items-center transition-all duration-200 px-5 py-3
          ${isFocused 
            ? 'bg-white dark:bg-[#303134] border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.3)] rounded-t-[24px]' 
            : 'bg-white dark:bg-[#202124] border-[#dfe1e5] dark:border-[#5f6368] rounded-full shadow-sm hover:shadow-[0_1px_6px_rgba(32,33,36,0.28)] dark:hover:bg-[#303134]'}
          border
        `}>
          <Search size={20} className="text-[#9aa0a6] dark:text-[#bdc1c6] mr-3" />
          
          <input
            type="text"
            placeholder="Buscar con Google"
            className="bg-transparent border-none outline-none text-[#202124] dark:text-[#e8eaed] placeholder-[#9aa0a6] dark:placeholder-[#9aa0a6] w-full text-lg"
            value={query}
            onFocus={() => setIsFocused(true)}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowError(false);
            }}
          />
        </div>

        {/* Dropdown de Resultados / Error - Adaptable */}
        {(isFocused || showError) && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-[#303134] border-x border-b border-transparent rounded-b-[24px] pb-4 shadow-[0_8px_12px_rgba(0,0,0,0.3)] animate-in fade-in slide-in-from-top-1 duration-200">
            
            {/* Línea divisoria */}
            <div className="mx-5 border-t border-[#dfe1e5] dark:border-[#5f6368] mb-3"></div>

            {showError ? (
              <div className="py-6 flex flex-col items-center text-center px-6">
                <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-3">
                  <Globe size={24} className="text-[#ea4335] dark:text-[#f28b82]" />
                </div>
                <p className="text-[#202124] dark:text-[#e8eaed] font-medium">Acceso restringido</p>
                <p className="text-[#70757a] dark:text-[#bdc1c6] text-sm mt-1">
                  Lo siento, este sistema no tiene acceso a internet externo. <br />
                  Solo puedes explorar los archivos locales.
                </p>
              </div>
            ) : (
              <div className="px-2">
                <p className="text-[11px] text-[#70757a] dark:text-[#9aa0a6] uppercase font-bold tracking-wider ml-4 mb-2">Visto recientemente</p>
                <div className="flex flex-col">
                  {recentWebs.map((web, index) => (
                    <a 
                      key={index}
                      href={web.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2.5 hover:bg-[#f1f3f4] dark:hover:bg-[#3c4043] transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <FileText size={18} className="text-[#9aa0a6] dark:text-[#bdc1c6]" />
                        <div>
                          <p className="text-[#202124] dark:text-[#e8eaed] text-sm font-medium">{web.name}</p>
                          <p className="text-[#70757a] dark:text-[#9aa0a6] text-xs">{web.tech}</p>
                        </div>
                      </div>
                      <ArrowRight size={14} className="text-[#4285f4] dark:text-[#8ab4f8] opacity-0 group-hover:opacity-100 transition-all" />
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