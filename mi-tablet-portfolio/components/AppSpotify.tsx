// src/components/AppSpotify.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Heart, 
  MoreHorizontal 
} from 'lucide-react';

interface AppSpotifyProps {
  onClose: () => void;
}

const AppSpotify = ({ onClose }: AppSpotifyProps) => {
  const songs = [
    { id: 0, title: 'Taste', artist: 'Sabrina Carpenter', cover: '/photos/artists/SabrinaCarpenter.jpeg', url: '/music/Taste.mp3' },
    { id: 1, title: 'Vampire', artist: 'Olivia Rodrigo', cover: '/photos/artists/OliviaRodrigo.png', url: '/music/Vampire.mp3' },
    { id: 2, title: 'The Fate of Ophelia', artist: 'Taylor Swift', cover: '/photos/artists/TaylorSwift.png', url: encodeURI('/music/The Fate of Ophelia.mp3') }
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [isLiked, setIsLiked] = useState(true);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = songs[currentTrackIndex];

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setProgress((current / total) * 100);
      setCurrentTime(formatTime(current));
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(formatTime(audioRef.current.duration));
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      audioRef.current.currentTime = (x / rect.width) * audioRef.current.duration;
    }
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  const nextSong = () => { setCurrentTrackIndex((prev) => (prev + 1) % songs.length); setIsPlaying(true); };
  const prevSong = () => { setCurrentTrackIndex((prev) => (prev - 1 + songs.length) % songs.length); setIsPlaying(true); };

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play().catch(() => setIsPlaying(false)) : audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-[200] p-4 bg-black/40 backdrop-blur-sm">
      <audio 
        ref={audioRef} 
        src={currentTrack.url} 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={nextSong}
      />
      
      {/* Contenedor principal adaptable: bg-white -> dark:bg-[#121212] */}
      <div className="w-full max-w-md bg-white dark:bg-[#121212] text-zinc-900 dark:text-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col h-[600px] animate-in slide-in-from-bottom-10 duration-500 border border-zinc-200 dark:border-white/5 transition-colors">
        
        {/* Cabecera dinámica */}
        <div className="p-6 flex justify-between items-center bg-gradient-to-b from-zinc-100 dark:from-zinc-800 to-white dark:to-[#121212]">
          <MoreHorizontal className="text-zinc-400 dark:text-zinc-500 cursor-pointer" size={20} />
          <span className="text-[10px] font-bold uppercase tracking-[2px] text-zinc-500 dark:text-zinc-400">Coding Playlist</span>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-black/40 flex items-center justify-center hover:bg-zinc-300 dark:hover:bg-white/10 transition-colors">
            <X size={16} className="text-zinc-800 dark:text-white" />
          </button>
        </div>

        <div className="flex-1 px-10 flex flex-col items-center justify-center -mt-4">
          {/* Portada */}
          <div className="w-56 h-56 rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.2)] dark:shadow-[0_15px_45px_rgba(0,0,0,0.8)] mb-8 overflow-hidden">
            <img 
              src={currentTrack.cover} 
              alt={currentTrack.title}
              className={`w-full h-full object-cover transition-transform duration-[3000ms] ease-out ${isPlaying ? 'scale-110' : 'scale-100'}`}
            />
          </div>

          {/* Info de la canción */}
          <div className="flex items-center justify-between w-full mb-6">
            <div className="flex-1 min-w-0 pr-4">
              <h2 className="text-2xl font-bold truncate text-left">{currentTrack.title}</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-base font-medium mt-1 text-left">{currentTrack.artist}</p>
            </div>
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="transition-transform active:scale-75 group"
            >
              <Heart 
                size={28} 
                className={`transition-colors duration-300 ${isLiked ? 'fill-[#1DB954] text-[#1DB954]' : 'text-zinc-300 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white'}`} 
              />
            </button>
          </div>

          {/* Barra de Progreso */}
          <div className="w-full mb-8">
            <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full cursor-pointer group relative" onClick={handleProgressClick}>
              <div 
                className="h-full bg-zinc-900 dark:bg-white group-hover:bg-[#1DB954] rounded-full transition-all duration-100 ease-linear relative" 
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-900 dark:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
              </div>
            </div>
            <div className="flex justify-between text-[11px] text-zinc-400 dark:text-zinc-500 mt-2 font-bold tracking-tight">
              <span>{currentTime}</span>
              <span>{duration}</span>
            </div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-10 w-full mb-4">
            <button onClick={prevSong} className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all active:scale-90">
              <SkipBack size={32} fill="currentColor" />
            </button>
            
            <button 
              onClick={togglePlay} 
              className="w-16 h-16 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all active:scale-95"
            >
              {isPlaying ? (
                <Pause size={30} fill="currentColor" />
              ) : (
                <Play size={30} fill="currentColor" className="ml-1" />
              )}
            </button>

            <button onClick={nextSong} className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all active:scale-90">
              <SkipForward size={32} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSpotify;