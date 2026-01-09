
import React, { useMemo } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
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
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg shadow-lg">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">{label} Activity</p>
          <div className="space-y-2">
            {payload.map((entry: any, index: number) => (
              <div key={index} className="flex items-center justify-between gap-8 text-xs font-semibold uppercase">
                <span className="text-slate-500 dark:text-slate-400">{entry.name}</span>
                <span className="text-slate-900 dark:text-white">{entry.value}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-card p-8">
      <div className="flex items-center justify-between mb-10">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Contribution Flow</h3>
          <p className="text-xs font-medium text-slate-400">Real-time developer velocity analysis</p>
        </div>
        <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(100,116,139,0.1)" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgba(100,116,139,0.5)', fontSize: 10, fontWeight: 600 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgba(100,116,139,0.5)', fontSize: 10, fontWeight: 600 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="commits" 
              name="Commits"
              stroke="#3b82f6" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorCommits)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityCharts;
