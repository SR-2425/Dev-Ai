
import React, { useState, useEffect } from 'react';
import SummaryCards from './SummaryCards';
import ActivityCharts from './ActivityCharts';
import RankingSection from './RankingSection';
import InsightsPanel from './InsightsPanel';
import SkeletonLoader from './SkeletonLoader';
import { User } from '../types';

interface DashboardProps {
  user: User;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-12 animate-in fade-in duration-500">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map(i => <SkeletonLoader key={i} className="h-40 rounded-[2rem]" />)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <SkeletonLoader className="lg:col-span-2 h-[500px] rounded-[2.5rem]" />
          <SkeletonLoader className="h-[500px] rounded-[2.5rem]" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-24 animate-in fade-in duration-700">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
              user.badgeLevel === 'Platinum' ? 'border-indigo-400/30 text-indigo-400 bg-indigo-400/10' :
              user.badgeLevel === 'Gold' ? 'border-yellow-400/30 text-yellow-400 bg-yellow-400/10' :
              'border-aquatic-400/30 text-aquatic-400 bg-aquatic-400/10'
            }`}>
              {user.badgeLevel} Tier Excellence
            </div>
            <span className="text-white/10">|</span>
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Efficiency Coefficient: 1.4x</span>
          </div>
          <h1 className="text-6xl font-light text-white tracking-tight leading-tight">
            Output <span className="font-bold text-aquatic-400">Intelligence</span>
          </h1>
          <p className="text-lg text-white/40 max-w-2xl font-medium">
            Analyzing engineering flow and contribution velocity for <span className="text-white">@{user.githubUsername}</span>.
          </p>
        </div>
        
        <div className="flex gap-4">
           <div className="glass-card px-8 py-6 flex flex-col items-center justify-center min-w-[160px]">
              <span className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Productivity</span>
              <span className="text-4xl font-black text-aquatic-400">92</span>
           </div>
           <div className="glass-card px-8 py-6 flex flex-col items-center justify-center min-w-[160px]">
              <span className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Streak</span>
              <span className="text-4xl font-black text-white">14d</span>
           </div>
        </div>
      </header>

      <SummaryCards />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
        <div className="xl:col-span-2 space-y-12">
          {/* Consistency Heatmap */}
          <div className="glass-card p-10">
            <div className="flex justify-between items-center mb-10">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.3em]">Contribution Density</h3>
                <p className="text-xs text-white/20">Temporal distribution of engineering output (Last 40 weeks)</p>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold text-white/20">
                <span>IDLE</span>
                <div className="flex gap-1">
                  {[0.1, 0.3, 0.5, 0.7, 1].map(o => (
                    <div key={o} className="w-3 h-3 rounded-sm bg-aquatic-400" style={{ opacity: o }}></div>
                  ))}
                </div>
                <span>PEAK</span>
              </div>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-6 custom-scrollbar">
               {Array.from({ length: 40 }).map((_, w) => (
                 <div key={w} className="flex flex-col gap-1.5 shrink-0">
                    {Array.from({ length: 7 }).map((_, d) => {
                      const level = Math.random();
                      return (
                        <div 
                          key={d} 
                          className="w-3.5 h-3.5 rounded-sm transition-all hover:scale-125 hover:z-10 cursor-pointer"
                          style={{ 
                            backgroundColor: level > 0.4 ? '#22d3ee' : '#22d3ee11',
                            opacity: level > 0.4 ? level : 1,
                            boxShadow: level > 0.8 ? '0 0 10px rgba(34,211,238,0.4)' : 'none'
                          }}
                        ></div>
                      );
                    })}
                 </div>
               ))}
            </div>
          </div>

          <ActivityCharts />
          <InsightsPanel />
        </div>

        <div className="space-y-12">
          {/* Burnout Risk Assessment */}
          <div className="glass-card p-10 relative overflow-hidden group border-l-4 border-l-emerald-400">
            <div className="absolute top-0 right-0 p-8">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_15px_#10b981]"></div>
            </div>
            <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-6">Cognitive Load Audit</h3>
            <div className="space-y-8">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-4xl font-light text-white tracking-tighter">Optimal</span>
                  <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Sustainability Verified</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-white/40 block mb-1">RISK INDEX</span>
                  <span className="text-2xl font-black text-white">04<span className="text-sm opacity-20">%</span></span>
                </div>
              </div>
              
              <div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-emerald-400 shadow-[0_0_15px_#10b981]" style={{ width: '4%' }}></div>
              </div>
              
              <div className="space-y-4">
                 <div className="flex items-center gap-3 text-[10px] font-bold text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>REST CYCLES: STABLE</span>
                 </div>
                 <div className="flex items-center gap-3 text-[10px] font-bold text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>LATE NIGHT SESSIONS: 0/7</span>
                 </div>
              </div>
              <p className="text-xs text-white/40 leading-relaxed font-medium">Flow state is balanced. Contribution velocity matches rest window requirements.</p>
            </div>
          </div>

          <RankingSection user={user} />
          
          <div className="glass-card p-10 bg-gradient-to-br from-aquatic-400/10 to-transparent border-aquatic-400/20">
             <div className="flex justify-between items-start mb-8">
                <h3 className="text-[10px] font-black text-aquatic-400 uppercase tracking-[0.3em]">Platinum Upgrade</h3>
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">84% Progress</span>
             </div>
             <div className="space-y-6">
                <div className="flex items-center gap-6">
                   <div className="text-4xl font-black text-white tracking-tighter">1.6k<span className="text-sm font-light text-white/20 ml-2">/ 2k XP</span></div>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-aquatic-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]" style={{ width: '84%' }}></div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                   <p className="text-[10px] text-white/40 leading-relaxed font-medium">Requirement: Achieve a <span className="text-white">4.5h median PR review velocity</span> for 3 consecutive days to unlock Diamond access.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
