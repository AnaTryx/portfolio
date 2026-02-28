// src/components/AppMessages.tsx
'use client';

import React from 'react';

interface AppMessagesProps {
  onClose: () => void;
}

const AppMessages = ({ onClose }: AppMessagesProps) => {
  const chats = [
    { id: 1, name: 'Mamá ❤️', lastMsg: '¿Vas a venir a comer?', time: '10:30' },
    { id: 2, name: 'Grupo Diseño', lastMsg: 'Ana, el prototipo quedó genial', time: '09:15' },
    { id: 3, name: 'Samsung Support', lastMsg: 'Tu nueva tablet está lista', time: 'Ayer' },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center z-[200] p-4 bg-black/10 backdrop-blur-sm">
      {/* Ventana de la App: dark:bg-zinc-900 y dark:border-zinc-800 */}
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-[32px] shadow-2xl overflow-hidden flex flex-col h-[500px] animate-in fade-in zoom-in duration-300 border dark:border-zinc-800">
        
        {/* Cabecera: dark:bg-zinc-800/50 y dark:border-zinc-700 */}
        <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 border-b dark:border-zinc-700 flex justify-between items-center">
          <h2 className="text-xl font-bold text-zinc-800 dark:text-white">Mensajes</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/30 text-zinc-800 dark:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Lista de Chats */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div key={chat.id} className="p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer flex items-center gap-4 border-b border-zinc-50 dark:border-zinc-800">
              <div className="w-12 h-12 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {chat.name[0]}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">{chat.name}</span>
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">{chat.time}</span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate">{chat.lastMsg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppMessages;