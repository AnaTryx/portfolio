// src/components/StatusBar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Plane, Battery, BatteryCharging, BatteryLow, BatteryMedium, BatteryFull, WifiOff } from 'lucide-react';

const StatusBar = () => {
  const [time, setTime] = useState(new Date());
  const [battery, setBattery] = useState({
    level: 100,
    charging: false,
  });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    const getBatteryStatus = async () => {
      try {
        // @ts-ignore
        if (navigator.getBattery) {
          // @ts-ignore
          const bat = await navigator.getBattery();
          const updateBattery = () => {
            setBattery({
              level: Math.round(bat.level * 100),
              charging: bat.charging
            });
          };
          updateBattery();
          bat.addEventListener('levelchange', updateBattery);
          bat.addEventListener('chargingchange', updateBattery);
        }
      } catch (error) {
        console.log("Battery API not supported");
      }
    };

    getBatteryStatus();
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  const formattedDate = time.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' });

  const getBatteryIcon = () => {
    // Si carga, verde siempre se ve bien
    if (battery.charging) return <BatteryCharging size={16} className="text-green-600 dark:text-green-400" />;
    // Si está baja, rojo siempre
    if (battery.level <= 20) return <BatteryLow size={16} className="text-red-500" />;
    // Normal: Slate-900 en claro, Blanco en oscuro
    if (battery.level <= 60) return <BatteryMedium size={16} className="text-slate-900 dark:text-white" />;
    return <BatteryFull size={16} className="text-slate-900 dark:text-white" />;
  };

  return (
    <div className="fixed top-0 left-0 w-full px-6 py-3 flex justify-between items-start z-[100] pointer-events-none select-none">
      {/* Lado Izquierdo: Hora y Fecha */}
      <div className="flex flex-col items-start leading-tight">
        <span className="text-[14px] font-bold text-slate-900 dark:text-white transition-colors duration-300">
          {formattedTime}
        </span>
        <span className="text-[11px] font-medium text-slate-700 dark:text-zinc-300 capitalize transition-colors duration-300">
          {formattedDate.replace('.', '')}
        </span>
      </div>

      {/* Lado Derecho: Iconos y Batería */}
      <div className="flex gap-4 items-center pt-1">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white transition-colors duration-300">
          <Plane size={14} />
          <WifiOff size={14} className="opacity-30 dark:opacity-40" />
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[12px] font-bold text-slate-900 dark:text-white transition-colors duration-300">
            {battery.level}%
          </span>
          <div className="flex items-center transition-colors duration-300">
            {getBatteryIcon()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;