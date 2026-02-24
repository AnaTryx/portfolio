'use client';
import React from 'react';
import { X, Gift, Bell } from 'lucide-react';

const AppCalendar = ({ onClose }: { onClose: () => void }) => {
  const now = new Date();
  const currentMonth = now.toLocaleString('es-ES', { month: 'long' });
  const currentYear = now.getFullYear();
  
  // Lógica para generar los días del mes actual
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const firstDayIndex = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  const daysOfWeek = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  // Ajuste para que la semana empiece en Lunes (0) a Domingo (6)
  const adjustedFirstDay = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

  const calendarDays = Array(adjustedFirstDay).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString())
  );

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop con desenfoque */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" onClick={onClose} />
      
      {/* Ventana Estilo iOS/iPadOS */}
      <div className="relative bg-white dark:bg-zinc-900 w-full max-w-sm rounded-[38px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/20">
        
        {/* Cabecera Minimalista */}
        <div className="p-6 pb-2 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-red-500 capitalize">{currentMonth}</h3>
            <p className="text-zinc-400 font-medium">{currentYear}</p>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center rounded-full text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Cuerpo del Calendario */}
        <div className="p-6 pt-2">
          <div className="grid grid-cols-7 mb-4 text-center">
            {daysOfWeek.map(d => (
              <span key={d} className="text-[10px] font-bold text-zinc-300 uppercase">{d}</span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-y-1 text-center">
            {calendarDays.map((day, index) => {
              const isToday = day === now.getDate().toString();
              return (
                <div key={index} className="h-9 flex items-center justify-center">
                  {day && (
                    <span className={`
                      text-sm font-medium w-8 h-8 flex items-center justify-center rounded-full transition-colors
                      ${isToday 
                        ? 'bg-red-500 text-white font-bold shadow-lg shadow-red-200' 
                        : 'text-zinc-700 dark:text-zinc-300'}
                    `}>
                      {day}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* SECCIÓN DE RECORDATORIOS (Fija) */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-2 px-1">
              <Bell size={14} className="text-zinc-400" />
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Recordatorios importantes</span>
            </div>
            
            <div className="group bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-zinc-800 p-4 rounded-2xl border border-red-100 dark:border-red-900/30 transition-transform hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="bg-red-500 p-2.5 rounded-xl shadow-md text-white shrink-0">
                  <Gift size={20} />
                </div>
                <div>
                  <p className="text-xs text-red-500 font-bold uppercase tracking-tight">22 de Noviembre</p>
                  <p className="text-zinc-800 dark:text-zinc-100 font-bold text-base leading-tight">Mi 21 cumpleaños 🎂</p>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1 leading-relaxed text-pretty">
                    Nacida en 2005. Este día celebro un año más de aprendizaje y código.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCalendar;