
import React from 'react';

const Integrations: React.FC = () => {
  const services = [
    { name: 'GitHub', desc: 'Core source control & activity stream.', icon: '🐱', connected: true },
    { name: 'Slack', desc: 'Real-time workflow alerts.', icon: '💬', connected: true },
    { name: 'Jira Software', desc: 'Project backlog monitoring.', icon: '📘', connected: false },
    { name: 'AWS Cloud', desc: 'Deployment & uptime metrics.', icon: '☁️', connected: false },
    { name: 'SonarQube', desc: 'Static analysis & quality audits.', icon: '🧪', connected: false },
    { name: 'Linear', desc: 'High-frequency issue tracking.', icon: '📐', connected: false },
  ];

  return (
    <div className="space-y-12 animate-in zoom-in-95 duration-1000">
      <header className="flex flex-col gap-2">
        <h1 className="text-5xl font-light text-slate-900 dark:text-white tracking-tight">Data <span className="font-bold text-brand-600">Streams</span></h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg">Extending the DevPulse engine with specialized third-party data sources.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={service.name} className={`glass-card p-10 relative overflow-hidden group animate-in fade-in slide-in-from-bottom-6 duration-700 stagger-${idx%4+1}`}>
            {service.connected && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 blur-[40px] rounded-full -mr-16 -mt-16 group-hover:bg-brand-500/10 transition-all"></div>
            )}
            
            <div className="flex justify-between items-center mb-8 relative z-10">
              <span className="text-5xl drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]">{service.icon}</span>
              <span className={`px-4 py-1 rounded-full text-[9px] font-black tracking-[0.2em] ${service.connected ? 'bg-brand-600 text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700'}`}>
                {service.connected ? 'CONNECTED' : 'DISCONNECTED'}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">{service.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-medium">{service.desc}</p>
            
            <button className={`w-full py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all ${
              service.connected 
              ? 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700' 
              : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-brand-500 hover:text-brand-600'
            }`}>
              {service.connected ? 'Config Interface' : 'Connect Source'}
            </button>
          </div>
        ))}
      </div>

      <div className="glass-card p-12 text-center max-w-3xl mx-auto mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-500/5 blur-[100px] pointer-events-none"></div>
        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Open API Architecture</h4>
        <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto">Build custom synchronization points or request specialized data feeds via our secure developer documentation.</p>
        <button className="text-brand-600 font-black text-xs uppercase tracking-[0.4em] hover:opacity-80 transition-opacity">Request API Credentials →</button>
      </div>
    </div>
  );
};

export default Integrations;
