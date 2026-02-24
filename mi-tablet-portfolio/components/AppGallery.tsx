// src/components/AppGallery.tsx
'use client';

import React from 'react';
import { X, Heart, MoreHorizontal } from 'lucide-react'; // Iconos para que se vea pro

interface AppGalleryProps {
  onClose: () => void;
}

const AppGallery = ({ onClose }: AppGalleryProps) => {
  // Asegúrate de que las fotos existan en public/photos/...
  const photos = [
    { id: 1, title: 'Noche de código', src: '/photos/me/coding.jpg' },
    { id: 2, title: 'ICPC 2025', src: '/photos/me/icpc.jpg' }, 
    { id: 3, title: 'Universidad(UCLV-Villa Clara)', src: '/photos/me/university.jpg' },
    { id: 4, title: 'Foto profesional', src: '/photos/me/fotoProfesional.png' },
    { id: 5, title: 'Pizza Time', src: '/photos/me/pizza.jpg' },
    { id: 6, title: 'Karaoke Night', src: '/photos/me/karaoke.jpg' },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center z-[200] p-4 bg-black/20 backdrop-blur-sm">
      <div className="w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-[40px] shadow-2xl overflow-hidden flex flex-col h-[80vh] animate-in fade-in zoom-in duration-300 border border-white/20">
        
        {/* Header Estilo Galería */}
        <div className="p-8 pb-4 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Galería</h2>
            <p className="text-zinc-500 text-sm font-medium italic">Álbum: Personal • {photos.length} elementos</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-zinc-200 transition-colors">
                <MoreHorizontal size={20} />
            </button>
            <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-zinc-200 transition-colors"
            >
                <X size={20} />
            </button>
          </div>
        </div>

        {/* Grid de Fotos */}
        <div className="flex-1 overflow-y-auto p-8 pt-4 scrollbar-hide">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="group relative aspect-square bg-zinc-100 rounded-[32px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* LA CORRECCIÓN: Quitamos el prefijo /images/ porque ya está en el objeto */}
                <img 
                  src={photo.src} 
                  alt={photo.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Si la foto no existe, muestra un color sólido en lugar de un icono roto
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.classList.add('bg-zinc-200');
                  }}
                /> 
                
                {/* Overlay al hacer Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex justify-between items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white font-semibold text-sm">{photo.title}</span>
                    <Heart size={18} className="text-white hover:text-red-500 hover:fill-red-500 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppGallery;