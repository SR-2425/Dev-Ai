
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const TeamPulse: React.FC = () => {
  const teamData = [
    { name: 'Frontend', velocity: 85, active: 4 },
    { name: 'Backend', velocity: 92, active: 6 },
    { name: 'DevOps', velocity: 78, active: 2 },
    { name: 'QA', velocity: 64, active: 3 },
  ];

  const distribution = [
    { name: 'Feature Work', value: 45 },
    { name: 'Bug Fixes', value: 25 },
    { name: 'Technical Debt', value: 20 },
    { name: 'Review Time', value: 10 },
  ];

  const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ec4899'];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-white tracking-tight">Team Pulse</h1>
        <p className="text-slate-400">Aggregated insights across engineering divisions.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-6">Vertical Velocity</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={teamData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                  itemStyle={{ color: '#6366f1' }}
                />
                <Bar dataKey="velocity" fill="#6366f1" radius={[0, 8, 8, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-6">Workload Allocation</h3>
          <div className="h-[300px] flex items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {distribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2">
              {distribution.map((d, i) => (
                <div key={d.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }}></div>
                  <span className="text-xs text-slate-400 whitespace-nowrap">{d.name}: {d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <h3 className="text-xl font-bold text-white mb-6">Team Health Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
            <p className="text-xs font-bold text-emerald-400 uppercase mb-1">Collaboration</p>
            <p className="text-lg font-bold text-white">Consistent High-Peer Review</p>
            <p className="text-sm text-slate-500 mt-2">Team is reviewing 90% of PRs within 12 hours.</p>
          </div>
          <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl">
            <p className="text-xs font-bold text-amber-400 uppercase mb-1">Warning</p>
            <p className="text-lg font-bold text-white">Backlog Creep</p>
            <p className="text-sm text-slate-500 mt-2">Backend technical debt tickets increased by 15% this sprint.</p>
          </div>
          <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-xl">
            <p className="text-xs font-bold text-indigo-400 uppercase mb-1">Insight</p>
            <p className="text-lg font-bold text-white">Peak Efficiency</p>
            <p className="text-sm text-slate-500 mt-2">Wednesday mornings show the highest code merge rates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPulse;
