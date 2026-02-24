// src/components/Dock.tsx
import React from 'react';

const Dock = ({ 
  onOpenMessages, 
  onOpenGallery, 
  onOpenSpotify,
  onOpenNotes,
  onOpenSettings
}: { 
  onOpenMessages: () => void; 
  onOpenGallery: () => void; 
  onOpenSpotify: () => void;
  onOpenNotes: () => void; 
  onOpenSettings: () => void;
}) => {
  const apps = [
    { id: 'messages', image: '/photos/icons/Messages.jpg', color: 'bg-[#cbe2fe]' },
    { id: 'spotify', image: '/photos/icons/Spotify.png', color: 'bg-[#cbe2fe]' },
    { id: 'gallery', image: '/photos/icons/Gallery.png', color: 'bg-[#cbe2fe]' },
    { id: 'notes', image: '/photos/icons/Notes.png', color: 'bg-[#cbe2fe]' },
    { id: 'settings', image: '/photos/icons/Settings.png', color: 'bg-[#cbe2fe]' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="bg-white/20 backdrop-blur-3xl border border-white/30 px-6 py-4 rounded-[40px] flex items-center gap-6 shadow-2xl">
        {apps.map((app) => (
          <div
            key={app.id}
            onClick={() => {
              if (app.id === 'messages') onOpenMessages();
              if (app.id === 'gallery') onOpenGallery();
              if (app.id === 'spotify') onOpenSpotify();
              if (app.id === 'notes') onOpenNotes(); 
              if (app.id === 'settings') onOpenSettings();
            }}
            className={`${app.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm cursor-pointer hover:scale-110 active:scale-90 transition-all duration-200 select-none overflow-hidden`}
          >
            {app.image ? (
              <img 
                src={app.image} 
                alt={app.id} 
                className={`w-full h-full object-contain ${
                  app.id === 'spotify' 
                    ? 'scale-140' 
                    : app.id === 'messages'
                    ? 'scale-90  rounded-full' 
                    : 'scale-90'
                }`} 
              />
            ) : null}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Dock;