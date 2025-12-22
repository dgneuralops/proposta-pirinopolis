import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { TIMELINE_DATA } from '../constants';

export const TimelineDashboard: React.FC = () => {
  // Transform data for Recharts
  // We want a "Range" bar chart look.
  // Recharts doesn't natively do range bars easily on categorical axis without a trick.
  // Trick: Use stacked bars. [StartOffset, Duration]
  
  const data = TIMELINE_DATA.map(phase => ({
    name: phase.name,
    start: phase.startDay, // invisible bar
    duration: phase.endDay - phase.startDay, // visible bar
    fullLabel: `${phase.days}: ${phase.name}`,
    description: phase.description
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[1].payload; // payload[1] corresponds to the 'duration' bar which has the data
      return (
        <div className="bg-brand-gray border border-white/10 p-4 rounded-lg shadow-xl max-w-xs">
          <p className="font-bold text-white mb-1">{data.name}</p>
          <p className="text-brand-lime text-sm font-semibold mb-2">Dias {data.start} - {data.start + data.duration}</p>
          <p className="text-xs text-brand-textGray">{data.description}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-brand-dark border border-white/5 rounded-2xl p-6 lg:p-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-2xl font-bold text-white">Cronograma Executivo</h3>
          <p className="text-brand-textGray text-sm mt-1">Estimativa de 60 dias corridos</p>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs font-mono text-brand-textGray">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-brand-lime rounded-sm"></div>
            <span>Execução</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-white/20 rounded-sm"></div>
            <span>Dependência</span>
          </div>
        </div>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barSize={20}
          >
            <XAxis type="number" domain={[0, 65]} hide />
            <YAxis 
              type="category" 
              dataKey="name" 
              width={150} 
              tick={{ fill: '#a3a3a3', fontSize: 12 }} 
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
            {/* The invisible bar for offset */}
            <Bar dataKey="start" stackId="a" fill="transparent" />
            {/* The visible bar for duration */}
            <Bar dataKey="duration" stackId="a" radius={[4, 4, 4, 4]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#a3e635" />
              ))}
            </Bar>
            <ReferenceLine x={0} stroke="#333" />
            <ReferenceLine x={15} stroke="#333" strokeDasharray="3 3" />
            <ReferenceLine x={30} stroke="#333" strokeDasharray="3 3" />
            <ReferenceLine x={45} stroke="#333" strokeDasharray="3 3" />
            <ReferenceLine x={60} stroke="#333" strokeDasharray="3 3" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {TIMELINE_DATA.map((phase) => (
          <div key={phase.id} className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-brand-lime/30 transition-colors">
            <div className="flex justify-between items-center mb-2">
               <span className="text-xs font-bold text-brand-lime uppercase tracking-wider">{phase.days}</span>
               <span className="text-xs text-white/40">Fase {phase.id}</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-1">{phase.name}</h4>
            <p className="text-xs text-brand-textGray leading-relaxed">{phase.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
