// src/app/page.tsx
'use client';

import { useState } from 'react';
import StatusBar from '@/components/StatusBar';
import Dock from '@/components/Dock';
import AppMessages from '@/components/AppMessages';
import AppGallery from '@/components/AppGallery';
import AppSpotify from '@/components/AppSpotify';
import AppNotes from '@/components/AppNotes';
import AppSettings from '@/components/AppSettings'; 
import AppCalendar from '@/components/AppCalendar';
import SearchBar from '@/components/SearchBar';
import TechStackWidget from '@/components/TechStackWidget';

export default function TabletPage() {
  const [openApp, setOpenApp] = useState<string | null>(null);
  
  // Estado para el fondo de pantalla
  const [wallpaper, setWallpaper] = useState('/wallpapers/default.jpg');

  // Lógica para el icono dinámico del calendario
  const today = new Date();
  const dayName = today.getDate(); 
  const monthName = today.toLocaleString('es-ES', { month: 'short' }).replace('.', '');

  return (
    <main 
      className="relative h-screen w-screen overflow-hidden transition-all duration-700 bg-cover bg-center"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      {/* Capa de oscurecimiento suave */}
      <div className="absolute inset-0 bg-black/5 z-0" />

      {/* --- CAPA 1: ESCRITORIO (Widgets, Buscador, Dock) --- */}
      <div className="relative z-10 h-full w-full flex flex-col">
        <StatusBar />
        
        {/* Contenedor principal del escritorio */}
        <div className="relative h-full w-full flex flex-col p-8 pt-14">
          
          {/* Fila superior: Widgets e Iconos */}
          <div className="flex justify-start items-start mt-4 gap-8">
            <TechStackWidget />
            
            {/* Icono del Calendario Dinámico */}
            <button 
              onClick={() => setOpenApp('calendar')}
              className="flex flex-col items-center gap-2 group transition-transform active:scale-95"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex flex-col items-center justify-center shadow-lg overflow-hidden border border-white/20">
                <div className="bg-red-500 w-full h-5 flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-wider">
                  {monthName}
                </div>
                <div className="flex-1 flex items-center justify-center text-2xl font-bold text-zinc-800">
                  {dayName}
                </div>
              </div>
              <span className="text-black dark:text-white text-xs font-medium drop-shadow-md">Calendario</span>
            </button>
          </div>

          {/* Parte Central: Barra de Búsqueda */}
          <div className="flex-1 flex items-center justify-center -mt-10"> 
            <SearchBar />
          </div>

          {/* Espacio para que el contenido no baje hasta el final */}
          <div className="h-32" /> 
        </div>
          
        <Dock 
          onOpenMessages={() => setOpenApp('messages')} 
          onOpenGallery={() => setOpenApp('gallery')} 
          onOpenSpotify={() => setOpenApp('spotify')}
          onOpenNotes={() => setOpenApp('notes')}
          onOpenSettings={() => setOpenApp('settings')} 
        />
      </div>

      {/* --- CAPA 2: VENTANAS DE APLICACIONES --- */}
      {/* Usamos fixed e inset-0 para asegurar que las apps tengan 
          toda la pantalla como referencia para centrarse.
          pointer-events-none permite hacer clic al fondo si no hay apps abiertas.
      */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center pointer-events-none ${openApp ? 'visible' : 'invisible'}`}>
        <div className="w-full h-full relative flex items-center justify-center pointer-events-auto p-4 sm:p-10">
          
          {openApp === 'messages' && <AppMessages onClose={() => setOpenApp(null)} />}
          {openApp === 'gallery' && <AppGallery onClose={() => setOpenApp(null)} />}
          {openApp === 'spotify' && <AppSpotify onClose={() => setOpenApp(null)} />}
          {openApp === 'notes' && <AppNotes onClose={() => setOpenApp(null)} />}
          {openApp === 'calendar' && <AppCalendar onClose={() => setOpenApp(null)} />}
          
          {openApp === 'settings' && (
            <AppSettings 
              onClose={() => setOpenApp(null)} 
              setWallpaper={setWallpaper} 
              currentWallpaper={wallpaper}
            />
          )}

        </div>
      </div>
    </main>
  );
}