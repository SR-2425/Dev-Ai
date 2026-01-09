
import React from 'react';
import { User, RankingItem } from '../types';

interface RankingSectionProps {
  user: User;
}

const RankingSection: React.FC<RankingSectionProps> = ({ user }) => {
  const topContributors: RankingItem[] = [
    { username: 'dev_sarah', score: 2840, avatar: 'https://picsum.photos/seed/s1/100/100', trend: 'up' },
    { username: 'mark_pulse', score: 2610, avatar: 'https://picsum.photos/seed/m1/100/100', trend: 'neutral' },
    { username: user.githubUsername, score: 2450, avatar: user.avatarUrl, trend: 'up' },
    { username: 'liam_node', score: 2100, avatar: 'https://picsum.photos/seed/l1/100/100', trend: 'down' },
  ];

  return (
    <div className="glass-card overflow-hidden">
      <div className="p-10 border-b border-white/5">
        <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.3em]">Top Velocity Contributors</h3>
      </div>
      
      <div className="divide-y divide-white/5">
        {topContributors.map((item, idx) => (
          <div key={item.username} className={`flex items-center justify-between p-8 transition-colors ${item.username === user.githubUsername ? 'bg-white/5' : 'hover:bg-white/[0.02]'}`}>
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black text-white/20 w-4">{String(idx + 1).padStart(2, '0')}</span>
              <img src={item.avatar} className="w-10 h-10 rounded-xl border border-white/10" alt={item.username} />
              <div>
                <p className="text-sm font-bold text-white">@{item.username}</p>
                <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{item.score.toLocaleString()} XP</p>
              </div>
            </div>
            <div className={`text-[9px] font-black px-2 py-0.5 rounded ${
              item.trend === 'up' ? 'text-aquatic-400' : item.trend === 'down' ? 'text-rose-400' : 'text-white/20'
            }`}>
              {item.trend === 'up' && '▲'}
              {item.trend === 'down' && '▼'}
              {item.trend === 'neutral' && '—'}
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full p-8 text-[10px] font-black text-white/40 hover:text-white uppercase tracking-[0.4em] transition-colors border-t border-white/5">
        View Full Contributor Directory
      </button>
    </div>
  );
};

export default RankingSection;
