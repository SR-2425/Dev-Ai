
import React, { useState, useEffect } from 'react';
import { Icons } from '../constants';
import { MetricCardData } from '../types';

const CountUp: React.FC<{ end: number | string, suffix?: string }> = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const target = typeof end === 'number' ? end : parseFloat(end);
  
  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = 10;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [target]);

  return <span>{typeof end === 'number' ? count : count.toFixed(1)}{suffix}</span>;
};

const SummaryCards: React.FC = () => {
  const metrics: MetricCardData[] = [
    { label: 'Weekly Commits', value: 42, trend: 12, icon: 'Commit' },
    { label: 'Open PRs', value: 8, trend: -2, icon: 'PR' },
    { label: 'Review Velocity', value: '4.2h', trend: 25, icon: 'Trophy' },
    { label: 'Quality Score', value: 94, trend: 5, icon: 'TrendUp' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, idx) => (
        <div 
          key={metric.label}
          className={`glass-card p-6 lg:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 stagger-${idx + 1}`}
        >
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
              {metric.icon === 'Commit' && <Icons.Commit />}
              {metric.icon === 'PR' && <Icons.PR />}
              {metric.icon === 'Trophy' && <Icons.Trophy />}
              {metric.icon === 'TrendUp' && <Icons.TrendUp />}
            </div>
            <div className={`text-[10px] font-bold px-2 py-0.5 rounded ${metric.trend >= 0 ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-400' : 'text-rose-600 bg-rose-50 dark:bg-rose-950/30 dark:text-rose-400'}`}>
              {metric.trend >= 0 ? '↑' : '↓'}{Math.abs(metric.trend)}%
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-slate-400 dark:text-slate-500 font-bold text-[10px] uppercase tracking-wider">{metric.label}</h4>
            <div className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {typeof metric.value === 'number' ? (
                <CountUp end={metric.value} />
              ) : (
                <CountUp end={metric.value.replace('h', '')} suffix="h" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
