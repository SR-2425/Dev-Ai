
import React from 'react';

const Repositories: React.FC = () => {
  const repos = [
    { name: 'devpulse-core-frontend', lang: 'TypeScript', commits: 452, status: 'Active', color: '#22d3ee' },
    { name: 'devpulse-exchange-api', lang: 'Go', commits: 210, status: 'Active', color: '#00add8' },
    { name: 'infra-audit-cdk', lang: 'TypeScript', commits: 120, status: 'Stable', color: '#22d3ee' },
    { name: 'legacy-reporting-node', lang: 'Python', commits: 12, status: 'Inactive', color: '#3572A5' },
    { name: 'shared-ui-tokens', lang: 'TypeScript', commits: 88, status: 'Active', color: '#22d3ee' },
    { name: 'data-liquidity-v2', lang: 'Java', commits: 34, status: 'Active', color: '#b07219' },
  ];

  return (
    <div className="space-y-12 animate-in slide-in-from-right-8 duration-1000">
      <header className="flex flex-col gap-2">
        <h1 className="text-5xl font-light text-white tracking-tight">Project <span className="font-bold text-aquatic-400">Inventory</span></h1>
        <p className="text-white/40 text-lg">Monitoring core codebase repositories across all development clusters.</p>
      </header>

      <div className="flex gap-6 mb-12">
        <div className="relative flex-1 group">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-aquatic-400 transition-colors">🔍</span>
          <input 
            type="text" 
            placeholder="Filter repositories by name..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm font-medium text-white placeholder-white/20 focus:border-aquatic-400 focus:ring-0 outline-none transition-all"
          />
        </div>
        <button className="bg-aquatic-400 hover:scale-105 active:scale-95 text-deep-950 font-black py-4 px-10 rounded-2xl transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] uppercase tracking-widest text-[11px]">
          Connect Repository +
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {repos.map((repo, idx) => (
          <div key={repo.name} className={`glass-panel p-10 rounded-[2.5rem] group hover:scale-[1.03] animate-in fade-in slide-in-from-bottom-8 duration-700 stagger-${idx%4+1}`}>
            <div className="flex justify-between items-start mb-10">
              <h3 className="font-bold text-xl group-hover:text-aquatic-400 transition-colors tracking-tight">{repo.name}</h3>
              <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                repo.status === 'Active' ? 'bg-aquatic-400/10 text-aquatic-400 border border-aquatic-400/20' : 
                repo.status === 'Stable' ? 'bg-white/10 text-white/40 border border-white/5' : 'bg-white/5 text-white/20'
              }`}>
                {repo.status}
              </span>
            </div>
            
            <div className="flex items-center gap-8 text-[11px] font-bold text-white/30 mb-10 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.color, boxShadow: `0 0 10px ${repo.color}` }}></div>
                <span>{repo.lang}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⚡</span>
                <span className="text-white/60">{repo.commits} COMMITS</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-8 border-t border-white/5">
              <button className="text-[10px] font-black text-white/30 hover:text-aquatic-400 uppercase tracking-widest transition-colors">Activity Logs</button>
              <button className="text-[10px] font-black text-white/30 hover:text-aquatic-400 uppercase tracking-widest transition-colors">Settings</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repositories;
