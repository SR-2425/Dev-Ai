
import React from 'react';
import { User, RankingItem } from '../types';

interface RankingSectionProps {
  user: User;
}

const RankingSection: React.FC<RankingSectionProps> = ({ user }) => {
  const topContributors: RankingItem[] = [
    { username: 'sarah_codes', score: 2840, avatar: 'https://picsum.photos/seed/s/40/40', trend: 'up' },
    { username: 'dev_mark', score: 2610, avatar: 'https://picsum.photos/seed/m/40/40', trend: 'neutral' },
    { username: user.githubUsername, score: 2450, avatar: user.avatarUrl, trend: 'up' },
    { username: 'liam_j', score: 2100, avatar: 'https://picsum.photos/seed/l/40/40', trend: 'down' },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
      <div className="p-6 border-b border-slate-800 bg-slate-900/50">
        <h3 className="text-xl font-bold text-white">Top Pulse Contributors</h3>
        <p className="text-sm text-slate-500">Global leaderboard for current Sprint</p>
      </div>
      
      <div className="divide-y divide-slate-800">
        {topContributors.map((item, idx) => (
          <div key={item.username} className={`flex items-center justify-between p-4 hover:bg-slate-800/50 transition-colors ${item.username === user.githubUsername ? 'bg-indigo-500/5' : ''}`}>
            <div className="flex items-center gap-4">
              <span className={`w-6 text-sm font-bold ${idx === 0 ? 'text-amber-400' : idx === 1 ? 'text-slate-300' : 'text-slate-500'}`}>
                #{idx + 1}
              </span>
              <img src={item.avatar} alt={item.username} className="w-10 h-10 rounded-full bg-slate-700" />
              <div>
                <p className={`text-sm font-semibold ${item.username === user.githubUsername ? 'text-indigo-400' : 'text-white'}`}>
                  @{item.username}
                </p>
                <p className="text-xs text-slate-500">{item.score.toLocaleString()} XP</p>
              </div>
            </div>
            
            <div className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
              item.trend === 'up' ? 'text-emerald-400' : item.trend === 'down' ? 'text-rose-400' : 'text-slate-500'
            }`}>
              {item.trend === 'up' && '▲'}
              {item.trend === 'down' && '▼'}
              {item.trend === 'neutral' && '•'}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-slate-900/80">
        <button className="w-full py-2.5 rounded-xl border border-slate-700 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors">
          View All Contributors
        </button>
      </div>
    </div>
  );
};

export default RankingSection;
