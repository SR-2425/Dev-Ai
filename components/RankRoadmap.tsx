
import React from 'react';

interface Rank {
  id: string;
  name: string;
  desc: string;
  xpRequired: number;
}

interface RankRoadmapProps {
  currentRank: string;
}

const RankRoadmap: React.FC<RankRoadmapProps> = ({ currentRank }) => {
  const ranks: Rank[] = [
    { id: '1', name: 'Newbie', desc: 'Entry-level starting rank', xpRequired: 0 },
    { id: '2', name: 'Coder', desc: 'Regular contributor with basic consistency', xpRequired: 500 },
    { id: '3', name: 'Pro', desc: 'Strong and consistent contributor', xpRequired: 1500 },
    { id: '4', name: 'Elite', desc: 'High-impact contributor with sustained productivity', xpRequired: 5000 },
    { id: '5', name: 'Master', desc: 'Top-tier contributor with exceptional performance', xpRequired: 10000 },
  ];

  const currentRankIndex = ranks.findIndex(r => r.name.toLowerCase() === currentRank.toLowerCase());

  return (
    <div className="glass-card p-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">Developer Career Path</h3>
        <span className="text-[10px] font-bold text-brand-600 uppercase tracking-widest">{currentRankIndex + 1} / {ranks.length} RANKS</span>
      </div>

      <div className="space-y-6">
        {ranks.map((rank, idx) => {
          const isAchieved = idx <= currentRankIndex;
          const isNext = idx === currentRankIndex + 1;
          const isCurrent = idx === currentRankIndex;

          return (
            <div key={rank.id} className="relative pl-10 group">
              {/* Connector Line */}
              {idx < ranks.length - 1 && (
                <div className={`absolute left-3 top-6 bottom-[-1.5rem] w-0.5 ${isAchieved ? 'bg-brand-600' : 'bg-slate-200 dark:bg-slate-800'}`}></div>
              )}

              {/* Status Circle */}
              <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                isAchieved ? 'bg-brand-600 border-brand-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.3)]' : 
                isNext ? 'bg-white dark:bg-slate-900 border-brand-600/50 animate-pulse' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
              }`}>
                {isAchieved ? (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                ) : (
                  <span className="text-[9px] font-bold text-slate-400">{idx + 1}</span>
                )}
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <p className={`text-sm font-bold tracking-tight transition-colors ${isAchieved ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>
                    {rank.name}
                  </p>
                  {isCurrent && (
                    <span className="bg-brand-50 dark:bg-brand-900/30 text-brand-600 text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded">Current Rank</span>
                  )}
                </div>
                <p className={`text-[10px] leading-relaxed transition-colors ${isAchieved ? 'text-slate-500 dark:text-slate-400' : 'text-slate-400/50'}`}>
                  {rank.desc}
                </p>
                {isNext && (
                  <div className="pt-2">
                    <div className="flex justify-between items-center mb-1.5">
                       <span className="text-[9px] font-bold text-brand-600 uppercase">Target: {rank.xpRequired} XP</span>
                       <span className="text-[9px] font-bold text-slate-400">84%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-600" style={{ width: '84%' }}></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RankRoadmap;
