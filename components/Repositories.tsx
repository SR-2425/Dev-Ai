
import React from 'react';

const Repositories: React.FC = () => {
  const repos = [
    { name: 'devpulse-core-frontend', lang: 'TypeScript', commits: 452, status: 'Active', color: '#3b82f6' },
    { name: 'devpulse-exchange-api', lang: 'Go', commits: 210, status: 'Active', color: '#00add8' },
    { name: 'infra-audit-cdk', lang: 'TypeScript', commits: 120, status: 'Stable', color: '#3b82f6' },
    { name: 'legacy-reporting-node', lang: 'Python', commits: 12, status: 'Inactive', color: '#3572A5' },
    { name: 'shared-ui-tokens', lang: 'TypeScript', commits: 88, status: 'Active', color: '#3b82f6' },
    { name: 'data-liquidity-v2', lang: 'Java', commits: 34, status: 'Active', color: '#b07219' },
  ];

  return (
    <div className="space-y-12 animate-in slide-in-from-right-8 duration-1000">
      <header className="flex flex-col gap-2">
        <h1 className="text-5xl font-light text-slate-900 dark:text-white tracking-tight">Project <span className="font-bold text-brand-600">Inventory</span></h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg">Monitoring core codebase repositories across all development clusters.</p>
      </header>

      <div className="flex flex-col sm:flex-row gap-6 mb-12">
        <div className="relative flex-1 group">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors">🔍</span>
          <input 
            type="text" 
            placeholder="Filter repositories by name..." 
            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-14 pr-6 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:border-brand-600 outline-none transition-all shadow-sm"
          />
        </div>
        <button className="bg-brand-600 hover:bg-brand-700 text-white font-black py-4 px-10 rounded-2xl transition-all shadow-lg uppercase tracking-widest text-[11px] shrink-0">
          Connect Repository +
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {repos.map((repo, idx) => (
          <div key={repo.name} className={`glass-card p-10 group hover:scale-[1.03] animate-in fade-in slide-in-from-bottom-8 duration-700 stagger-${idx%4+1}`}>
            <div className="flex justify-between items-start mb-10">
              <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors tracking-tight">{repo.name}</h3>
              <span className={`px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-widest ${
                repo.status === 'Active' ? 'bg-brand-50 text-brand-600 border border-brand-100 dark:bg-brand-900/30 dark:text-brand-400 dark:border-brand-800' : 
                repo.status === 'Stable' ? 'bg-slate-50 text-slate-500 border border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700' : 'bg-slate-50 text-slate-400 border border-slate-200 dark:bg-slate-800 dark:text-slate-500 dark:border-slate-700'
              }`}>
                {repo.status}
              </span>
            </div>
            
            <div className="flex items-center gap-8 text-[11px] font-bold text-slate-400 dark:text-slate-500 mb-10 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.color, boxShadow: `0 0 10px ${repo.color}` }}></div>
                <span>{repo.lang}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-900 dark:text-white">{repo.commits} COMMITS</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-8 border-t border-slate-100 dark:border-slate-800">
              <button className="text-[10px] font-black text-slate-400 hover:text-brand-600 uppercase tracking-widest transition-colors">Activity Logs</button>
              <button className="text-[10px] font-black text-slate-400 hover:text-brand-600 uppercase tracking-widest transition-colors">Settings</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repositories;
