import React from 'react';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Concept based on NeuralOps */}
          <div className="w-10 h-10 bg-brand-black border border-white rounded-lg flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-lime opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div className="w-2 h-2 bg-white rounded-full absolute left-2 top-4"></div>
            <div className="w-2 h-2 bg-brand-lime rounded-full absolute right-2 bottom-4"></div>
            <div className="w-full h-[1px] bg-white/50 rotate-45"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            Neural<span className="text-brand-lime">Ops</span>
          </span>
        </div>
        
      </div>
    </header>
  );
};