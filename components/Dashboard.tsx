
import React, { useState, useEffect } from 'react';
import SummaryCards from './SummaryCards';
import ActivityCharts from './ActivityCharts';
import RankingSection from './RankingSection';
import InsightsPanel from './InsightsPanel';
import SkeletonLoader from './SkeletonLoader';
import { User, MetricCardData } from '../types';

const Dashboard: React.FC<{ user: User }> = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching from precomputed backend
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-8 animate-in fade-in duration-500">
        <header className="flex flex-col gap-2">
          <SkeletonLoader className="w-64 h-8" />
          <SkeletonLoader className="w-96 h-4" />
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => <SkeletonLoader key={i} className="h-32 rounded-2xl" />)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <SkeletonLoader className="lg:col-span-2 h-[400px] rounded-2xl" />
          <SkeletonLoader className="h-[400px] rounded-2xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-white tracking-tight">Developer Pulse Dashboard</h1>
        <p className="text-slate-400">Real-time productivity analytics for <span className="text-indigo-400 font-medium">@{user.githubUsername}</span></p>
      </header>

      {/* Summary KPI Cards */}
      <SummaryCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Main Analytics Charts */}
        <div className="lg:col-span-2 space-y-8">
          <ActivityCharts />
          <InsightsPanel />
        </div>

        {/* Gamification & Ranking */}
        <div className="space-y-8">
          <RankingSection user={user} />
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span>🚀</span> Next Achievement
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Review Master II</span>
                <span className="text-indigo-400 font-medium">85%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed italic">
                Conduct 3 more pull request reviews this week to reach Silver rank.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
