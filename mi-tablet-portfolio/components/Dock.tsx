// src/components/Dock.tsx
import React from 'react';
import Image from 'next/image';

interface DockProps {
  onOpenMessages: () => void;
  onOpenGallery: () => void;
  onOpenSpotify: () => void;
  onOpenNotes: () => void;
  onOpenSettings: () => void;
}

const Dock = ({ 
  onOpenMessages, 
  onOpenGallery, 
  onOpenSpotify,
  onOpenNotes,
  onOpenSettings
}: DockProps) => {
  
  const apps = [
    { id: 'messages', image: '/photos/icons/Messages.jpg', color: 'bg-[#cbe2fe] dark:bg-[#334155]', action: onOpenMessages },
    { id: 'spotify', image: '/photos/icons/Spotify.png', color: 'bg-[#cbe2fe] dark:bg-[#334155]', action: onOpenSpotify },
    { id: 'gallery', image: '/photos/icons/Gallery.png', color: 'bg-[#cbe2fe] dark:bg-[#334155]', action: onOpenGallery },
    { id: 'notes', image: '/photos/icons/Notes.png', color: 'bg-[#cbe2fe] dark:bg-[#334155]', action: onOpenNotes },
    { id: 'settings', image: '/photos/icons/Settings.png', color: 'bg-[#cbe2fe] dark:bg-[#334155]', action: onOpenSettings },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="bg-white/20 dark:bg-black/40 backdrop-blur-3xl border border-white/30 dark:border-white/10 px-6 py-4 rounded-[40px] flex items-center gap-6 shadow-2xl transition-colors duration-500">
        {apps.map((app) => (
          <div
            key={app.id}
            onClick={app.action}
            className={`${app.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm cursor-pointer hover:scale-110 active:scale-90 transition-all duration-200 select-none overflow-hidden relative`}
          >
            <Image 
              src={app.image} 
              alt={app.id}
              // Definimos el tamaño exacto que ocupan (14 * 4 = 56px)
              width={56}
              height={56}
              // priority hace que carguen de inmediato sin esperar al resto de la web
              priority
              // califica la calidad (75 es un buen balance entre peso y nitidez)
              quality={80}
              className={`w-full h-full object-contain transition-all duration-300 ${
                app.id === 'spotify' 
                  ? 'scale-140' 
                  : app.id === 'messages'
                  ? 'scale-90 rounded-full' 
                  : 'scale-90'
              } ${app.id !== 'spotify' ? 'dark:brightness-90' : ''}`} 
            />
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Dock;