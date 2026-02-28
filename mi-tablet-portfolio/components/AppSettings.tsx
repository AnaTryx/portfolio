// src/components/AppSettings.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // 1. Importamos el optimizador
import { 
  X, Palette, Monitor, Info, User, Check, 
  Instagram, Github, Mail, ExternalLink, Moon, Sun 
} from 'lucide-react';

const AppSettings = ({ onClose, setWallpaper, currentWallpaper }: { 
  onClose: () => void; 
  setWallpaper: (img: string) => void;
  currentWallpaper?: string; 
}) => {
  const [activeTab, setActiveTab] = useState('apariencia');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const wallpapers = [
    { id: 'minimalist', url: '/photos/wallpaper/Wallpaper1.jpg' },
    { id: 'cute', url: '/photos/wallpaper/Wallpaper2.jpg' },
    { id: 'ocean', url: '/photos/wallpaper/Wallpaper3.jpg' },
  ];

  const socialAccounts = [
    { 
      name: 'Instagram', 
      user: '@ana_tryx', 
      icon: <Instagram size={20} className="text-pink-600" />, 
      url: 'https://instagram.com',
      color: 'bg-pink-50 dark:bg-pink-900/20'
    },
    { 
      name: 'GitHub', 
      user: 'AnaTryx', 
      icon: <Github size={20} className="text-zinc-900 dark:text-white" />, 
      url: 'https://github.com',
      color: 'bg-zinc-100 dark:bg-zinc-800'
    },
    { 
      name: 'Correo', 
      user: 'anatryx@gmail.com', 
      icon: <Mail size={20} className="text-blue-600" />, 
      url: 'mailto:anatryx@gmail.com',
      color: 'bg-blue-50 dark:bg-blue-900/20'
    },
  ];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 bg-black/40 backdrop-blur-sm animate-in fade-in zoom-in duration-300">
      
      <div className="bg-white dark:bg-black w-full max-w-3xl h-[90vh] sm:h-[580px] rounded-[40px] shadow-2xl flex flex-col sm:flex-row overflow-hidden border border-white/20 dark:border-zinc-800 transition-colors duration-500">
        
        {/* Sidebar Lateral */}
        <div className="w-full sm:w-64 bg-zinc-50 dark:bg-zinc-900/50 border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 flex flex-row sm:flex-col gap-2 overflow-x-auto sm:overflow-x-visible">
          <h2 className="hidden sm:block text-xl font-bold mb-6 text-zinc-800 dark:text-white px-2 tracking-tight">Ajustes</h2>
          
          <button 
            onClick={() => setActiveTab('apariencia')}
            className={`flex items-center gap-3 p-3 rounded-2xl transition-all whitespace-nowrap ${activeTab === 'apariencia' ? 'bg-blue-500 text-white shadow-md' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50'}`}
          >
            <Palette size={20} /> <span className="text-sm font-semibold">Apariencia</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('perfil')}
            className={`flex items-center gap-3 p-3 rounded-2xl transition-all whitespace-nowrap ${activeTab === 'perfil' ? 'bg-blue-500 text-white shadow-md' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50'}`}
          >
            <User size={20} /> <span className="text-sm font-semibold">Perfil</span>
          </button>

          <button 
            onClick={() => setActiveTab('pantalla')}
            className={`flex items-center gap-3 p-3 rounded-2xl transition-all whitespace-nowrap ${activeTab === 'pantalla' ? 'bg-blue-500 text-white shadow-md' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50'}`}
          >
            <Monitor size={20} /> <span className="text-sm font-semibold">Pantalla</span>
          </button>
          
          <div className="hidden sm:flex mt-auto items-center gap-3 text-zinc-400 dark:text-zinc-600 p-3 text-[10px] font-bold uppercase tracking-widest">
            <Info size={14} /> <span>v1.0.4</span>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="flex-1 flex flex-col min-h-0 bg-white dark:bg-black transition-colors duration-500">
          <div className="flex justify-end p-6 pb-2">
            <button onClick={onClose} className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-800 dark:hover:text-white">
              <X size={24} />
            </button>
          </div>

          <div className="px-6 sm:px-10 overflow-y-auto pb-10 scrollbar-hide">
            {activeTab === 'apariencia' && (
              <div className="animate-in slide-in-from-right-4 duration-300">
                <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-6 tracking-tight">Personalización</h3>
                <div className="space-y-6">
                  <p className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[2px]">Fondo de pantalla</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {wallpapers.map((wp) => (
                      <div 
                        key={wp.id}
                        onClick={() => setWallpaper(wp.url)}
                        className={`group h-28 rounded-[24px] cursor-pointer hover:scale-[1.03] active:scale-95 transition-all shadow-md border-4 flex items-center justify-center relative overflow-hidden ${currentWallpaper === wp.url ? 'border-blue-500' : 'border-white dark:border-zinc-800'}`}
                      >
                        {/* 2. OPTIMIZACIÓN: Usamos Image con fill y sizes */}
                        <Image 
                          src={wp.url} 
                          alt="Wallpaper preview" 
                          fill 
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-cover transition-opacity group-hover:opacity-90"
                          priority={activeTab === 'apariencia'} // Carga prioritaria si es la pestaña activa
                        />
                        {currentWallpaper === wp.url && (
                          <div className="bg-blue-500 rounded-full p-1.5 shadow-xl z-10 border-2 border-white">
                            <Check className="text-white" size={14} strokeWidth={4} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'perfil' && (
              <div className="animate-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-5 mb-10">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-zinc-800 shrink-0 bg-zinc-100 dark:bg-zinc-800">
                    {/* 3. OPTIMIZACIÓN: Imagen de perfil */}
                    <Image 
                      src="/photos/me/logo.png" 
                      alt="Ana Rita" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold text-zinc-800 dark:text-white truncate tracking-tight">Ana Rita García Chau</h3>
                    <p className="text-blue-500 text-sm font-bold mt-0.5">FrontEnd Developer</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[2px]">Cuentas vinculadas</p>
                  <div className="space-y-3">
                    {socialAccounts.map((account, index) => (
                      <a 
                        key={index}
                        href={account.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-[24px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-xl hover:-translate-y-0.5 transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 ${account.color} rounded-xl flex items-center justify-center shadow-sm`}>
                            {account.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="text-zinc-800 dark:text-zinc-200 font-bold text-sm">{account.name}</p>
                            <p className="text-zinc-500 dark:text-zinc-500 text-xs truncate">{account.user}</p>
                          </div>
                        </div>
                        <ExternalLink size={16} className="text-zinc-300 dark:text-zinc-600 group-hover:text-blue-500 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pantalla' && (
              <div className="animate-in slide-in-from-right-4 duration-300">
                <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-6 tracking-tight">Pantalla</h3>
                <div 
                  onClick={toggleDarkMode}
                  className="bg-zinc-50 dark:bg-zinc-900 p-5 rounded-[24px] flex justify-between items-center border border-zinc-100 dark:border-zinc-800 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                      {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
                    </div>
                    <div>
                      <p className="text-zinc-800 dark:text-white font-bold">Modo Oscuro</p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
                        {isDarkMode ? 'Desactivar modo oscuro' : 'Activar modo oscuro'}
                      </p>
                    </div>
                  </div>
                  <div className={`w-14 h-7 rounded-full transition-all duration-300 p-1 relative ${isDarkMode ? 'bg-blue-500' : 'bg-zinc-300 dark:bg-zinc-700'}`}>
                    <div className={`bg-white w-5 h-5 rounded-full shadow-md transition-all duration-300 transform ${isDarkMode ? 'translate-x-7' : 'translate-x-0'}`}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSettings;