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
      {/* Ventana de la App */}
      <div className="w-full max-w-md bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col h-[500px] animate-in fade-in zoom-in duration-300">
        
        {/* Cabecera */}
        <div className="p-6 bg-zinc-50 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-zinc-800">Mensajes</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center hover:bg-red-100 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Lista de Chats */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div key={chat.id} className="p-4 hover:bg-zinc-50 cursor-pointer flex items-center gap-4 border-b border-zinc-50">
              <div className="w-12 h-12 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {chat.name[0]}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-semibold text-zinc-900">{chat.name}</span>
                  <span className="text-xs text-zinc-400">{chat.time}</span>
                </div>
                <p className="text-sm text-zinc-500 truncate">{chat.lastMsg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppMessages;