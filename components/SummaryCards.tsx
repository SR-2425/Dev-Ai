
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {metrics.map((metric, idx) => (
        <div 
          key={metric.label}
          className={`glass-panel p-8 lg:p-10 rounded-[1.5rem] lg:rounded-[2rem] hover:translate-y-[-10px] animate-in fade-in slide-in-from-bottom-8 duration-700 stagger-${idx + 1}`}
        >
          <div className="flex justify-between items-start mb-8 lg:mb-10">
            <div className="w-12 h-12 lg:w-14 lg:h-14 glass-button rounded-2xl flex items-center justify-center text-aquatic-400 group-hover:animate-pulse-glow">
              {metric.icon === 'Commit' && <Icons.Commit />}
              {metric.icon === 'PR' && <Icons.PR />}
              {metric.icon === 'Trophy' && <Icons.Trophy />}
              {metric.icon === 'TrendUp' && <Icons.TrendUp />}
            </div>
            <div className={`text-[9px] font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full border ${metric.trend >= 0 ? 'border-aquatic-400/30 text-aquatic-400' : 'border-rose-400/30 text-rose-400'}`}>
              {metric.trend >= 0 ? '↑' : '↓'} {Math.abs(metric.trend)}%
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-white/30 font-bold text-[10px] uppercase tracking-[0.3em]">{metric.label}</h4>
            <div className="text-4xl lg:text-5xl font-light text-white tracking-tighter">
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
