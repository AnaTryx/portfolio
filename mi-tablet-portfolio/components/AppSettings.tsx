// src/components/AppSettings.tsx
'use client';

import React, { useState } from 'react';
import { 
  X, Palette, Monitor, Info, User, Check, 
  Instagram, Github, Mail, ExternalLink 
} from 'lucide-react';

const AppSettings = ({ onClose, setWallpaper, currentWallpaper }: { 
  onClose: () => void; 
  setWallpaper: (img: string) => void;
  currentWallpaper?: string; 
}) => {
  const [activeTab, setActiveTab] = useState('apariencia');

  const wallpapers = [
    { id: 'minimalist', url: '/photos/wallpaper/Wallpaper1.jpg', image: '/photos/wallpaper/Wallpaper1.jpg' },
    { id: 'cute', url: '/photos/wallpaper/Wallpaper2.jpg', image: '/photos/wallpaper/Wallpaper2.jpg' },
    { id: 'ocean', url: '/photos/wallpaper/Wallpaper3.jpg', image: '/photos/wallpaper/Wallpaper3.jpg' },
  ];

  const socialAccounts = [
    { 
      name: 'Instagram', 
      user: '@ana_tryx', 
      icon: <Instagram size={20} className="text-pink-600" />, 
      url: 'https://instagram.com/ana_tryx',
      color: 'bg-pink-50'
    },
    { 
      name: 'GitHub', 
      user: 'AnaTryx', 
      icon: <Github size={20} className="text-zinc-900" />, 
      url: 'https://github.com/AnaTryx',
      color: 'bg-zinc-100'
    },
    { 
      name: 'Correo', 
      user: 'anatryx@gmail.com', 
      icon: <Mail size={20} className="text-blue-600" />, 
      url: 'mailto:anatryx@gmail.com',
      color: 'bg-blue-50'
    },
  ];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 bg-black/40 backdrop-blur-sm animate-in fade-in zoom-in duration-300">
      <div className="bg-white/90 backdrop-blur-2xl w-full max-w-3xl h-[90vh] sm:h-[580px] rounded-[40px] shadow-2xl flex flex-col sm:flex-row overflow-hidden border border-white/20">
        
        {/* Sidebar Lateral */}
        <div className="w-full sm:w-64 bg-zinc-100/50 border-b sm:border-b-0 sm:border-r border-zinc-200 p-4 sm:p-6 flex flex-row sm:flex-col gap-2 overflow-x-auto sm:overflow-x-visible">
          <h2 className="hidden sm:block text-xl font-bold mb-6 text-zinc-800 px-2 tracking-tight">Ajustes</h2>
          
          <button 
            onClick={() => setActiveTab('apariencia')}
            className={`flex items-center gap-3 p-3 rounded-2xl transition-all whitespace-nowrap ${activeTab === 'apariencia' ? 'bg-blue-500 text-white shadow-md shadow-blue-200' : 'text-zinc-600 hover:bg-zinc-200/50'}`}
          >
            <Palette size={20} /> <span className="text-sm font-semibold">Apariencia</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('perfil')}
            className={`flex items-center gap-3 p-3 rounded-2xl transition-all whitespace-nowrap ${activeTab === 'perfil' ? 'bg-blue-500 text-white shadow-md shadow-blue-200' : 'text-zinc-600 hover:bg-zinc-200/50'}`}
          >
            <User size={20} /> <span className="text-sm font-semibold">Perfil</span>
          </button>

          <button 
            onClick={() => setActiveTab('pantalla')}
            className={`flex items-center gap-3 p-3 rounded-2xl transition-all whitespace-nowrap ${activeTab === 'pantalla' ? 'bg-blue-500 text-white shadow-md shadow-blue-200' : 'text-zinc-600 hover:bg-zinc-200/50'}`}
          >
            <Monitor size={20} /> <span className="text-sm font-semibold">Pantalla</span>
          </button>
          
          <div className="hidden sm:flex mt-auto items-center gap-3 text-zinc-400 p-3 text-[10px] font-bold uppercase tracking-widest">
            <Info size={14} /> <span>v1.0.4</span>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="flex-1 flex flex-col min-h-0 bg-white/50">
          <div className="flex justify-end p-6 pb-2">
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-zinc-100 transition-colors text-zinc-400 hover:text-zinc-800"
            >
              <X size={24} />
            </button>
          </div>

          <div className="px-6 sm:px-10 overflow-y-auto pb-10 scrollbar-hide">
            {activeTab === 'apariencia' && (
              <div className="animate-in slide-in-from-right-4 duration-300">
                <h3 className="text-2xl font-bold text-zinc-800 mb-6 tracking-tight">Personalización</h3>
                <div className="space-y-6">
                  <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[2px]">Fondo de pantalla</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {wallpapers.map((wp) => (
                      <div 
                        key={wp.id}
                        onClick={() => setWallpaper(wp.url)}
                        className={`
                          group h-28 rounded-[24px] cursor-pointer hover:scale-[1.03] active:scale-95 
                          transition-all shadow-md border-4 flex items-center justify-center 
                          relative overflow-hidden
                          ${currentWallpaper === wp.url ? 'border-blue-500' : 'border-white'}
                        `}
                      >
                        <img src={wp.image} className="absolute inset-0 w-full h-full object-cover" alt="Wallpaper preview" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
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
                {/* CABECERA CON TU LOGO */}
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-20 h-20 rounded-full overflow-hidden shadow-xl border-4 border-white shrink-0 bg-zinc-100">
                    <img 
                      src="/photos/me/logo.png" 
                      alt="Ana Rita"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-zinc-200 text-zinc-400 font-bold text-xl">AC</div>';
                      }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold text-zinc-800 truncate tracking-tight">Ana Rita García Chau</h3>
                    <p className="text-blue-500 text-sm font-bold mt-0.5">FrontEnd Developer</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[2px]">Cuentas vinculadas</p>
                  <div className="space-y-3">
                    {socialAccounts.map((account, index) => (
                      <a 
                        key={index}
                        href={account.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-[24px] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 ${account.color} rounded-xl flex items-center justify-center shadow-sm`}>
                            {account.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="text-zinc-800 font-bold text-sm">{account.name}</p>
                            <p className="text-zinc-500 text-xs truncate">{account.user}</p>
                          </div>
                        </div>
                        <ExternalLink size={16} className="text-zinc-300 group-hover:text-blue-500 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pantalla' && (
              <div className="animate-in slide-in-from-right-4 duration-300">
                <h3 className="text-2xl font-bold text-zinc-800 mb-6 tracking-tight">Pantalla</h3>
                <div className="bg-zinc-100/50 p-5 rounded-[24px] flex justify-between items-center border border-zinc-100">
                  <div>
                    <p className="text-zinc-800 font-bold">Luz Nocturna</p>
                    <p className="text-zinc-500 text-xs mt-1">Reduce la fatiga visual por la noche.</p>
                  </div>
                  <div className="w-12 h-6 bg-zinc-200 rounded-full p-1 cursor-not-allowed opacity-60 relative">
                    <div className="bg-white w-4 h-4 rounded-full shadow-md"></div>
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