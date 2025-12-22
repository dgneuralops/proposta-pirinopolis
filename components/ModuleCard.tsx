import React from 'react';
import { Check, Info } from 'lucide-react';
import { ModuleItem } from '../types';

interface ModuleCardProps {
  module: ModuleItem;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ module, isSelected, onToggle }) => {
  return (
    <div 
      className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col h-full
        ${isSelected 
          ? 'bg-brand-gray border-brand-lime shadow-[0_0_20px_rgba(163,230,53,0.1)]' 
          : 'bg-brand-dark border-white/10 hover:border-white/20 opacity-80 hover:opacity-100'
        }`}
      onClick={() => !module.required && onToggle(module.id)}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-lg ${isSelected ? 'bg-brand-lime text-brand-black' : 'bg-white/5 text-white'}`}>
          <module.icon size={24} />
        </div>
        
        {module.required ? (
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white/60 uppercase tracking-wide">
            Principal
          </span>
        ) : (
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
            ${isSelected ? 'bg-brand-lime border-brand-lime' : 'border-white/30'}`}>
            {isSelected && <Check size={14} className="text-brand-black" />}
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
      <p className="text-brand-textGray text-sm mb-6 leading-relaxed flex-grow">
        {module.description}
      </p>

      <ul className="space-y-3 mb-8">
        {module.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
            <Check size={16} className="text-brand-lime shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-brand-textGray uppercase tracking-wider font-semibold">Investimento</span>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-white">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(module.price)}
            </span>
            <span className="text-xs text-gray-500 mb-1">único</span>
          </div>
          {module.monthly && (
            <div className="flex items-end gap-2 mt-1">
               <span className="text-lg font-semibold text-brand-lime">
                + {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(module.monthly)}
              </span>
              <span className="text-xs text-gray-500 mb-1">/mês (manutenção)</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};