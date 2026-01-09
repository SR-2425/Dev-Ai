
import React, { useState, useEffect } from 'react';
import SummaryCards from './SummaryCards';
import ActivityCharts from './ActivityCharts';
import RankingSection from './RankingSection';
import InsightsPanel from './InsightsPanel';
import SkeletonLoader from './SkeletonLoader';
import RankRoadmap from './RankRoadmap';
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
      <div className="space-y-8 animate-in fade-in duration-500">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => <SkeletonLoader key={i} className="h-32 rounded-xl" />)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <SkeletonLoader className="lg:col-span-2 h-[400px] rounded-xl" />
          <SkeletonLoader className="h-[400px] rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-20 animate-in fade-in duration-700">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border transition-all ${
              user.badgeLevel === 'Platinum' ? 'border-indigo-200 text-indigo-700 bg-indigo-50 dark:border-indigo-800 dark:text-indigo-400 dark:bg-indigo-950/30' :
              user.badgeLevel === 'Gold' ? 'border-yellow-200 text-yellow-700 bg-yellow-50 dark:border-yellow-800 dark:text-yellow-400 dark:bg-yellow-950/30' :
              'border-brand-200 text-brand-700 bg-brand-50 dark:border-brand-800 dark:text-brand-400 dark:bg-brand-950/30'
            }`}>
              {user.badgeLevel} Tier Excellence
            </div>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-[10px] font-bold text-brand-600 uppercase tracking-widest">{user.rank} Level Reached</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            My <span className="text-brand-600">Progress</span>
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400 max-w-2xl">
            Individual engineering performance audit and career path milestones for <span className="font-semibold text-slate-700 dark:text-slate-200">@{user.githubUsername}</span>.
          </p>
        </div>
        
        <div className="flex gap-4">
           <div className="glass-card px-6 py-4 flex flex-col items-center justify-center min-w-[140px]">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Personal Score</span>
              <span className="text-3xl font-bold text-brand-600">92</span>
           </div>
           <div className="glass-card px-6 py-4 flex flex-col items-center justify-center min-w-[140px]">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Active Days</span>
              <span className="text-3xl font-bold text-slate-900 dark:text-white">14d</span>
           </div>
        </div>
      </header>

      <SummaryCards />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-8">
          <div className="glass-card p-8">
            <div className="flex justify-between items-center mb-8">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Contribution Density</h3>
                <p className="text-xs text-slate-400">Your activity heat across the last 40 weeks</p>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-400">
                <span>IDLE</span>
                <div className="flex gap-1">
                  {[0.1, 0.4, 0.7, 1].map(o => (
                    <div key={o} className="w-2.5 h-2.5 rounded-sm bg-brand-600" style={{ opacity: o }}></div>
                  ))}
                </div>
                <span>PEAK</span>
              </div>
            </div>
            <div className="flex gap-1 overflow-x-auto pb-4 custom-scrollbar">
               {Array.from({ length: 40 }).map((_, w) => (
                 <div key={w} className="flex flex-col gap-1 shrink-0">
                    {Array.from({ length: 7 }).map((_, d) => {
                      const level = Math.random();
                      return (
                        <div 
                          key={d} 
                          className="w-3 h-3 rounded-sm transition-all hover:scale-125 cursor-pointer"
                          style={{ 
                            backgroundColor: level > 0.4 ? '#3b82f6' : '#e2e8f0',
                            opacity: level > 0.4 ? level : 0.2,
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

        <div className="space-y-8">
          <RankRoadmap currentRank={user.rank} />

          <div className="glass-card p-8 border-l-4 border-l-emerald-500">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sustainability Audit</h3>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Optimal</span>
                  <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest">Personal Flow Verified</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-slate-400 block mb-1">STRESS LEVEL</span>
                  <span className="text-xl font-bold text-slate-900 dark:text-white">04<span className="text-sm opacity-30">%</span></span>
                </div>
              </div>
              
              <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: '4%' }}></div>
              </div>
              
              <div className="space-y-3">
                 <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>REST CYCLES: COMPLIANT</span>
                 </div>
                 <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>OFF-HOUR COMMITS: 0</span>
                 </div>
              </div>
            </div>
          </div>

          <RankingSection user={user} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
