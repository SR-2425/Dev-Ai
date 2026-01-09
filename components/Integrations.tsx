
import React from 'react';

const Integrations: React.FC = () => {
  const services = [
    { name: 'GitHub', desc: 'Source control & PR analytics.', icon: '🐱', connected: true },
    { name: 'Jira Software', desc: 'Project tracking & task velocity.', icon: '📘', connected: false },
    { name: 'Slack', desc: 'Real-time productivity alerts.', icon: '💬', connected: true },
    { name: 'Trello', desc: 'Kanban board automation.', icon: '📋', connected: false },
    { name: 'AWS CloudWatch', desc: 'Deployment & uptime tracking.', icon: '☁️', connected: false },
    { name: 'SonarQube', desc: 'Code quality & debt tracking.', icon: '🧪', connected: false },
  ];

  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-white tracking-tight">Integrations</h1>
        <p className="text-slate-400">Extend DevPulse with your favorite development tools.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.name} className={`bg-slate-900 border ${service.connected ? 'border-indigo-500/30 bg-indigo-500/5' : 'border-slate-800'} rounded-2xl p-6 transition-all`}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-4xl">{service.icon}</span>
              <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${service.connected ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-500'}`}>
                {service.connected ? 'CONNECTED' : 'NOT CONNECTED'}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
            <p className="text-sm text-slate-500 mb-6">{service.desc}</p>
            
            <button className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all ${
              service.connected 
              ? 'border border-slate-700 text-slate-400 hover:bg-slate-800' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20'
            }`}>
              {service.connected ? 'Configure' : 'Connect Now'}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center max-w-2xl mx-auto">
        <h4 className="text-lg font-bold text-white mb-2">Missing something?</h4>
        <p className="text-sm text-slate-500 mb-6">Our API is modular. Request a custom integration or build your own using our developer SDK.</p>
        <button className="text-indigo-400 font-bold hover:underline">View Developer API Docs →</button>
      </div>
    </div>
  );
};

export default Integrations;
