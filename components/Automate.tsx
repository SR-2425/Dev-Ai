
import React from 'react';

const Automate: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4 pb-24">
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-aquatic-400 animate-pulse"></div>
          <span className="text-[10px] font-black text-aquatic-400 uppercase tracking-[0.4em]">Engine Status: Active</span>
        </div>
        <h1 className="text-6xl font-light text-white tracking-tight leading-tight">Sync <span className="font-bold text-aquatic-400">Automation</span></h1>
        <p className="text-xl text-white/40 max-w-2xl font-medium">Orchestrating real-time data ingestion and recomputation across your codebase clusters.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Visual Timeline */}
          <div className="glass-panel p-10 rounded-[2.5rem]">
            <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.4em] mb-12">Event Stream History</h3>
            <div className="relative space-y-12">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5"></div>
              
              {[
                { label: 'GitHub Meta-Data Re-sync', time: '10:45 AM', type: 'SUCCESS', details: 'Updated 42 commit references.' },
                { label: 'Productivity XP Recalculation', time: '09:12 AM', type: 'SUCCESS', details: 'Assigned +120 XP to @alexdev_pulse.' },
                { label: 'Anomaly Detection Audit', time: '04:00 AM', type: 'WARNING', details: 'Detected spike in late-night push events (Repo: infra-audit).' },
                { label: 'Weekly Summary Export', time: '00:01 AM', type: 'SUCCESS', details: 'Generated PDF audit for Team Lead.' },
              ].map((event, idx) => (
                <div key={idx} className="relative pl-16 group animate-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className={`absolute left-[1.35rem] top-1 w-2.5 h-2.5 rounded-full border-2 border-deep-950 transition-all group-hover:scale-125 ${
                    event.type === 'SUCCESS' ? 'bg-aquatic-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'bg-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.5)]'
                  }`}></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-white group-hover:text-aquatic-400 transition-colors">{event.label}</p>
                      <p className="text-xs text-white/40 leading-relaxed">{event.details}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{event.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-10 rounded-[2.5rem]">
            <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.4em] mb-10">Intelligent Triggers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Inactivity Warning', desc: 'Notify team lead if repository activity stalls for > 48h.', active: true },
                { title: 'Velocity Spike', desc: 'Alert on unsustainable PR load increases detected in real-time.', active: true },
                { title: 'Late Night Alert', desc: 'Warning when dev sessions occur consistently between 02:00-05:00.', active: false },
                { title: 'XP Level Up', desc: 'Send notification when a team member hits a new badge threshold.', active: true }
              ].map((t, idx) => (
                <div key={t.title} className={`p-8 glass-card border-none hover:bg-white/5 rounded-3xl space-y-6 transition-all group animate-in zoom-in-95 duration-500`} style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white tracking-tight">{t.title}</span>
                    <button className={`w-12 h-6 rounded-full flex items-center px-1 border transition-all ${t.active ? 'bg-aquatic-400/20 border-aquatic-400/30' : 'bg-white/5 border-white/10'}`}>
                      <div className={`w-4 h-4 rounded-full transition-all ${t.active ? 'bg-aquatic-400 translate-x-6 shadow-[0_0_10px_#22d3ee]' : 'bg-white/20 translate-x-0'}`}></div>
                    </button>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed font-medium">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="glass-panel p-10 rounded-[2.5rem] bg-gradient-to-br from-aquatic-400/10 to-transparent border-aquatic-400/20">
            <h4 className="text-sm font-bold text-aquatic-400 uppercase tracking-widest mb-6">Synchronization Pulse</h4>
            <p className="text-xs text-white/40 mb-10 leading-relaxed">Defining the temporal resolution of codebase data ingestion.</p>
            <div className="space-y-4">
              {[
                { label: 'Real-time Hook', desc: 'Instant event-driven sync' },
                { label: 'Hourly Roundup', desc: 'Aggregate data every 60min' },
                { label: 'Daily Closure', desc: 'Full system audit at midnight' }
              ].map((opt, i) => (
                <button key={i} className={`group w-full p-6 rounded-2xl transition-all text-left border ${i === 0 ? 'bg-aquatic-400 border-aquatic-400 text-deep-950' : 'glass-card border-white/5 text-white/60 hover:text-white'}`}>
                  <p className="text-sm font-black uppercase tracking-widest mb-1">{opt.label}</p>
                  <p className={`text-[10px] ${i === 0 ? 'text-deep-950/60' : 'text-white/20'}`}>{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
          
          <div className="glass-panel p-10 rounded-[2.5rem]">
            <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-8">Manual Overrides</h4>
            <button className="w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-aquatic-400 hover:text-deep-950 hover:border-aquatic-400 transition-all mb-6">
              FORCE SYSTEM RE-SYNC
            </button>
            <button className="w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-rose-400 hover:text-deep-950 hover:border-rose-400 transition-all">
              PURGE PRECOMPUTED CACHE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automate;
