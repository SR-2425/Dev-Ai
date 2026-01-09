
import React from 'react';
import { Icons } from '../constants';
import { MetricCardData } from '../types';

const SummaryCards: React.FC = () => {
  const metrics: MetricCardData[] = [
    { label: 'Weekly Commits', value: 42, trend: 12, icon: 'Commit' },
    { label: 'Open PRs', value: 8, trend: -2, icon: 'PR' },
    { label: 'Review Velocity', value: '4.2h', trend: 25, icon: 'Trophy' },
    { label: 'Quality Score', value: 94, trend: 5, icon: 'TrendUp' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div 
          key={metric.label}
          className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg hover:border-slate-700 transition-all group"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl group-hover:scale-110 transition-transform">
              {metric.icon === 'Commit' && <Icons.Commit />}
              {metric.icon === 'PR' && <Icons.PR />}
              {metric.icon === 'Trophy' && <Icons.Trophy />}
              {metric.icon === 'TrendUp' && <Icons.TrendUp />}
            </div>
            <div className={`flex items-center gap-1 text-sm font-medium ${metric.trend >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {metric.trend >= 0 ? <Icons.TrendUp /> : <Icons.TrendDown />}
              <span>{Math.abs(metric.trend)}%</span>
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-slate-400 font-medium text-sm">{metric.label}</h4>
            <p className="text-2xl font-bold text-white tracking-tight">{metric.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
