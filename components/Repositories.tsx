
import React from 'react';

const Repositories: React.FC = () => {
  const repos = [
    { name: 'devpulse-frontend', lang: 'TypeScript', commits: 452, status: 'Active', color: '#3178c6' },
    { name: 'devpulse-backend-api', lang: 'Go', commits: 210, status: 'Active', color: '#00add8' },
    { name: 'infrastructure-cdk', lang: 'TypeScript', commits: 120, status: 'Stable', color: '#3178c6' },
    { name: 'legacy-reporting-service', lang: 'Python', commits: 12, status: 'Inactive', color: '#3572A5' },
    { name: 'shared-ui-components', lang: 'TypeScript', commits: 88, status: 'Active', color: '#3178c6' },
    { name: 'data-pipeline-v2', lang: 'Java', commits: 34, status: 'Active', color: '#b07219' },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-white tracking-tight">Repositories</h1>
        <p className="text-slate-400">Manage and monitor connected codebase activity.</p>
      </header>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
          <input 
            type="text" 
            placeholder="Search repositories..." 
            className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-xl transition-colors">
          Connect Repo +
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div key={repo.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-lg group-hover:text-indigo-400 transition-colors">{repo.name}</h3>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                repo.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 
                repo.status === 'Stable' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-slate-800 text-slate-500'
              }`}>
                {repo.status}
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.color }}></div>
                <span>{repo.lang}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>⚡</span>
                <span>{repo.commits} commits</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-slate-800">
              <button className="text-xs font-bold text-slate-400 hover:text-white uppercase tracking-wider">Metrics</button>
              <button className="text-xs font-bold text-slate-400 hover:text-white uppercase tracking-wider">Settings</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repositories;
