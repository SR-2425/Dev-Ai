
import React, { useMemo } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';

const ActivityCharts: React.FC = () => {
  const data = useMemo(() => [
    { name: 'M', commits: 4, prs: 1, reviews: 2 },
    { name: 'T', commits: 7, prs: 2, reviews: 4 },
    { name: 'W', commits: 5, prs: 0, reviews: 3 },
    { name: 'T', commits: 12, prs: 3, reviews: 6 },
    { name: 'F', commits: 8, prs: 1, reviews: 2 },
    { name: 'S', commits: 2, prs: 0, reviews: 1 },
    { name: 'S', commits: 1, prs: 0, reviews: 0 },
  ], []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-deep-950/80 backdrop-blur-3xl border border-white/10 p-6 rounded-2xl shadow-2xl animate-in zoom-in-95">
          <p className="text-[10px] font-black text-aquatic-400 uppercase tracking-[0.4em] mb-4 border-b border-white/10 pb-3">{label} DATA</p>
          <div className="space-y-3">
            {payload.map((entry: any, index: number) => (
              <div key={index} className="flex items-center justify-between gap-12 text-xs font-bold uppercase tracking-widest">
                <span className="text-white/40">{entry.name}</span>
                <span className="text-white">{entry.value}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-16">
      <div className="glass-panel p-12 rounded-[2.5rem]">
        <div className="flex items-center justify-between mb-16">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-white tracking-tight">Contribution Flow</h3>
            <p className="text-sm font-medium text-white/40">Real-time aggregate developer velocity</p>
          </div>
          <select className="glass-button px-6 py-2 rounded-full text-[10px] font-bold text-white focus:outline-none uppercase">
            <option className="bg-deep-950">7 Day Window</option>
            <option className="bg-deep-950">30 Day Window</option>
          </select>
        </div>

        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: 700 }}
                dy={20}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: 700 }}
                dx={-10}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(34,211,238,0.3)', strokeWidth: 1 }} />
              <Area 
                type="monotone" 
                dataKey="commits" 
                name="Commits"
                stroke="#22d3ee" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorCommits)" 
                animationDuration={2500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ActivityCharts;
