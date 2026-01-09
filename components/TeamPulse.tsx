
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

  const COLORS = ['#3b82f6', '#2563eb', '#1d4ed8', '#1e3a8a'];

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Group Performance: Nominal</span>
        </div>
        <h1 className="text-5xl font-light text-slate-900 dark:text-white tracking-tight leading-tight">Team <span className="font-bold text-brand-600">Progress</span></h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">High-level view of collective output, milestone tracking, and cross-functional momentum.</p>
      </header>

      {/* Global Milestone Progress */}
      <div className="glass-card p-10 bg-brand-50/20 dark:bg-brand-900/10 border-brand-200 dark:border-brand-800/30">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div className="space-y-1">
             <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Q1 Engineering Roadmap</h3>
             <p className="text-sm text-slate-500 dark:text-slate-400">Overall project completion across 4 active repositories.</p>
          </div>
          <div className="text-right">
             <span className="text-3xl font-black text-brand-600">74%</span>
             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Cycle Progress</span>
          </div>
        </div>
        <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
           <div className="h-full bg-brand-600 shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-1000" style={{ width: '74%' }}></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 border-t border-slate-100 dark:border-slate-800 pt-8">
           {[
             { label: 'Frontend V2', status: '88%' },
             { label: 'Auth Migration', status: 'DONE' },
             { label: 'Data Lake', status: '42%' },
             { label: 'CI/CD Audit', status: '60%' }
           ].map(milestone => (
             <div key={milestone.label} className="space-y-1">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{milestone.label}</p>
               <p className={`text-sm font-bold ${milestone.status === 'DONE' ? 'text-emerald-600' : 'text-slate-900 dark:text-white'}`}>{milestone.status}</p>
             </div>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="glass-card p-10">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.4em] mb-12">Functional Unit Velocity</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={teamData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: 'currentColor', fontSize: 10, fontWeight: 700, className: 'text-slate-400' }} />
                <Tooltip 
                  cursor={{ fill: 'rgba(0,0,0,0.03)' }}
                  contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px' }}
                />
                <Bar 
                  dataKey="velocity" 
                  fill="#3b82f6" 
                  radius={[0, 10, 10, 0]} 
                  barSize={20} 
                  animationDuration={2000}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-10">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.4em] mb-12">Collective Effort Mix</h3>
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
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest whitespace-nowrap">{d.name}</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-24">
        {[
          { label: 'Synergy', title: 'High-Velocity Peer Reviews', desc: 'Collective code audits are finalized within a 12h temporal window.', color: 'brand-600' },
          { label: 'Risk Audit', title: 'Technical Debt Surge', desc: 'Backlog depth in Legacy-Reporting-Node has increased significantly.', color: 'rose-600' },
          { label: 'Efficiency', title: 'Workflow Alignment', desc: 'PR approval latency has decreased by 14% this quarter.', color: 'brand-600' }
        ].map((item, idx) => (
          <div key={item.label} className="glass-card p-10 space-y-4 animate-in zoom-in-95 duration-1000" style={{ animationDelay: `${idx*200}ms` }}>
            <p className={`text-[10px] font-black uppercase tracking-[0.3em] text-${item.color}`}>{item.label}</p>
            <p className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{item.title}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPulse;
