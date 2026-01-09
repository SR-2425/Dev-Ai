
import React, { useState } from 'react';

const Automate: React.FC = () => {
  // State for Intelligent Triggers
  const [triggers, setTriggers] = useState([
    { id: 'inactivity', title: 'Inactivity Warning', desc: 'Get a nudge if no code is pushed for 2 days so you can stay on track.', active: true },
    { id: 'velocity', title: 'Velocity Spike', desc: 'Get an alert if your workload is growing too fast, helping you manage stress.', active: true },
    { id: 'late-night', title: 'Late Night Alert', desc: 'Receive a friendly reminder if you are working too late, ensuring you get enough rest.', active: true },
    { id: 'xp-level', title: 'XP Level Up', desc: 'Celebrate your growth! Get notified immediately when you reach a new career rank.', active: true }
  ]);

  // State for Sync Pulse
  const [activePulse, setActivePulse] = useState(0);

  // State for Manual Overrides
  const [isSyncing, setIsSyncing] = useState(false);
  const [isPurging, setIsPurging] = useState(false);
  const [syncStatus, setSyncStatus] = useState<string | null>(null);

  const toggleTrigger = (id: string) => {
    setTriggers(prev => prev.map(t => t.id === id ? { ...t, active: !t.active } : t));
  };

  const handleForceSync = () => {
    setIsSyncing(true);
    setSyncStatus('Initiating global re-sync...');
    setTimeout(() => {
      setIsSyncing(false);
      setSyncStatus('System synchronized successfully.');
      setTimeout(() => setSyncStatus(null), 3000);
    }, 2000);
  };

  const handlePurgeCache = () => {
    if (confirm('Are you sure you want to purge the precomputed cache? This will trigger a full re-computation of XP and velocity metrics.')) {
      setIsPurging(true);
      setSyncStatus('Purging cache...');
      setTimeout(() => {
        setIsPurging(false);
        setSyncStatus('Cache purged. Re-computation scheduled.');
        setTimeout(() => setSyncStatus(null), 3000);
      }, 1500);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4 pb-24">
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${isSyncing ? 'bg-amber-500 animate-spin' : 'bg-brand-600 animate-pulse'}`}></div>
          <span className="text-[10px] font-black text-brand-600 uppercase tracking-[0.4em]">
            {isSyncing ? 'Engine Status: Syncing' : 'Engine Status: Active'}
          </span>
        </div>
        <h1 className="text-6xl font-light text-slate-900 dark:text-white tracking-tight leading-tight">Sync <span className="font-bold text-brand-600">Automation</span></h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl font-medium">Orchestrating real-time data ingestion and recomputation across your codebase clusters.</p>
      </header>

      {syncStatus && (
        <div className="bg-brand-600 text-white p-4 rounded-2xl flex items-center justify-between animate-in slide-in-from-top-4 duration-300">
          <span className="text-xs font-black uppercase tracking-widest">{syncStatus}</span>
          <button onClick={() => setSyncStatus(null)} className="opacity-60 hover:opacity-100">✕</button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Visual Timeline */}
          <div className="glass-card p-10">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.4em] mb-12">Event Stream History</h3>
            <div className="relative space-y-12">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>
              
              {[
                { label: 'GitHub Meta-Data Re-sync', time: '10:45 AM', type: 'SUCCESS', details: 'Updated 42 commit references.' },
                { label: 'Productivity XP Recalculation', time: '09:12 AM', type: 'SUCCESS', details: 'Assigned +120 XP to @alexdev_pulse.' },
                { label: 'Anomaly Detection Audit', time: '04:00 AM', type: 'WARNING', details: 'Detected spike in late-night push events (Repo: infra-audit).' },
                { label: 'Weekly Summary Export', time: '00:01 AM', type: 'SUCCESS', details: 'Generated PDF audit for Team Lead.' },
              ].map((event, idx) => (
                <div key={idx} className="relative pl-16 group animate-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className={`absolute left-[1.35rem] top-1 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-slate-900 transition-all group-hover:scale-125 ${
                    event.type === 'SUCCESS' ? 'bg-emerald-500 shadow-sm' : 'bg-rose-500 shadow-sm'
                  }`}></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">{event.label}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{event.details}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{event.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-10">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.4em] mb-10">Intelligent Triggers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {triggers.map((t, idx) => (
                <div key={t.id} className={`p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl space-y-6 transition-all group animate-in zoom-in-95 duration-500 ${t.active ? 'ring-1 ring-brand-600/20' : ''}`} style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900 dark:text-white tracking-tight">{t.title}</span>
                    <button 
                      onClick={() => toggleTrigger(t.id)}
                      className={`w-10 h-5 rounded-full flex items-center px-0.5 border transition-all ${t.active ? 'bg-brand-600 border-brand-600 shadow-sm' : 'bg-slate-200 dark:bg-slate-700 border-slate-300 dark:border-slate-600'}`}
                    >
                      <div className={`w-3.5 h-3.5 rounded-full transition-all bg-white ${t.active ? 'translate-x-5' : 'translate-x-0'}`}></div>
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="glass-card p-10 bg-brand-50/50 dark:bg-brand-900/10">
            <h4 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-6">Synchronization Pulse</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">Defining the temporal resolution of codebase data ingestion.</p>
            <div className="space-y-4">
              {[
                { label: 'Real-time Hook', desc: 'Instant event-driven sync' },
                { label: 'Hourly Roundup', desc: 'Aggregate data every 60min' },
                { label: 'Daily Closure', desc: 'Full system audit at midnight' }
              ].map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => setActivePulse(i)}
                  className={`group w-full p-6 rounded-2xl transition-all text-left border ${activePulse === i ? 'bg-brand-600 border-brand-600 text-white shadow-lg' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:border-brand-600'}`}
                >
                  <p className="text-sm font-black uppercase tracking-widest mb-1">{opt.label}</p>
                  <p className={`text-[10px] ${activePulse === i ? 'text-white/70' : 'text-slate-400'}`}>{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-10">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Manual Overrides</h4>
            <button 
              disabled={isSyncing}
              onClick={handleForceSync}
              className={`w-full py-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-black uppercase tracking-[0.3em] text-slate-700 dark:text-slate-300 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all mb-6 disabled:opacity-50 flex items-center justify-center gap-3`}
            >
              {isSyncing && <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
              {isSyncing ? 'SYNCING...' : 'FORCE SYSTEM RE-SYNC'}
            </button>
            <button 
              disabled={isPurging}
              onClick={handlePurgeCache}
              className={`w-full py-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-black uppercase tracking-[0.3em] text-slate-700 dark:text-slate-300 hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all disabled:opacity-50 flex items-center justify-center gap-3`}
            >
              {isPurging && <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
              {isPurging ? 'PURGING...' : 'PURGE PRECOMPUTED CACHE'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automate;
