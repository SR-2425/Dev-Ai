
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const TeamPulse: React.FC = () => {
  const teamData = [
    { name: 'FRONTEND', velocity: 85 },
    { name: 'BACKEND', velocity: 92 },
    { name: 'DEVOPS', velocity: 78 },
    { name: 'QUALITY', velocity: 64 },
  ];

  const distribution = [
    { name: 'Feature Work', value: 45 },
    { name: 'Bug Fixes', value: 25 },
    { name: 'Refactoring', value: 20 },
    { name: 'Code Review', value: 10 },
  ];

  const COLORS = ['#22d3ee', '#0891b2', '#164e63', '#0e7490'];

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <header className="flex flex-col gap-2">
        <h1 className="text-5xl font-light text-white tracking-tight">Collaboration <span className="font-bold text-aquatic-400">Momentum</span></h1>
        <p className="text-white/40 text-lg">Aggregated flow analytics across internal engineering workspaces.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="glass-panel p-10 rounded-[2.5rem]">
          <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.4em] mb-12">Vertical Output Velocity</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={teamData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10, fontWeight: 900, letterSpacing: '0.1em' }} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                  contentStyle={{ backgroundColor: 'rgba(2, 26, 37, 0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }}
                />
                <Bar 
                  dataKey="velocity" 
                  fill="#22d3ee" 
                  radius={[0, 20, 20, 0]} 
                  barSize={20} 
                  animationDuration={2000}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-10 rounded-[2.5rem]">
          <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.4em] mb-12">Effort Distribution</h3>
          <div className="h-[350px] flex items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={8}
                  dataKey="value"
                  animationDuration={1500}
                >
                  {distribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="transparent" />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-4 pr-10">
              {distribution.map((d, i) => (
                <div key={d.name} className="flex items-center gap-4 animate-in fade-in slide-in-from-right-4 duration-700" style={{ animationDelay: `${i*150}ms` }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }}></div>
                  <span className="text-[10px] font-black uppercase text-white/40 tracking-widest">{d.name}</span>
                  <span className="text-xs font-bold text-white">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Synergy', title: 'High-Velocity Peer Reviews', desc: 'Team is finalizing code audits within a 12h temporal window.', color: 'aquatic-400' },
          { label: 'Workload Warning', title: 'Backlog Depth Increase', desc: 'Technical debt metrics have expanded by 15% this cycle.', color: 'rose-400' },
          { label: 'Flow Insight', title: 'Peak Output Window', desc: 'Contribution density maximizes between 09:00 - 11:30 CET.', color: 'white/40' }
        ].map((item, idx) => (
          <div key={item.label} className="glass-panel p-10 rounded-[2.5rem] space-y-4 animate-in zoom-in-95 duration-1000" style={{ animationDelay: `${idx*200}ms` }}>
            <p className={`text-[10px] font-black uppercase tracking-[0.3em] text-${item.color}`}>{item.label}</p>
            <p className="text-xl font-bold text-white leading-tight">{item.title}</p>
            <p className="text-xs text-white/40 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPulse;
