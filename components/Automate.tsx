
import React from 'react';

const Automate: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-white tracking-tight">Automation Engine</h1>
        <p className="text-slate-400">Streamline data synchronization and intelligent alerts.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-indigo-400">⚙️</span> Synchronization Status
            </h3>
            <div className="space-y-6">
              {[
                { label: 'GitHub Real-time Sync', status: 'Active', lastRun: '2 mins ago', color: 'emerald' },
                { label: 'Metric Recomputation', status: 'Scheduled', lastRun: '4 hours ago', color: 'amber' },
                { label: 'Notification Dispatcher', status: 'Standby', lastRun: '1 hour ago', color: 'indigo' },
              ].map((job) => (
                <div key={job.label} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full bg-${job.color}-500 animate-pulse`}></div>
                    <div>
                      <p className="font-semibold text-white">{job.label}</p>
                      <p className="text-xs text-slate-500">Last run: {job.lastRun}</p>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-indigo-400 uppercase tracking-widest hover:text-indigo-300">Run Now</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold mb-6">Workflow Triggers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-slate-800 rounded-xl space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-slate-300">Inactivity Warning</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-indigo-500" />
                </div>
                <p className="text-xs text-slate-500">Alert team lead if no commits are pushed within 48 hours of ticket assignment.</p>
              </div>
              <div className="p-4 border border-slate-800 rounded-xl space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-slate-300">Workload Spike</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-indigo-500" />
                </div>
                <p className="text-xs text-slate-500">Notify developers if assigned PRs exceed 5 per week to prevent burnout.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-2xl p-6">
            <h4 className="font-bold text-indigo-400 mb-2">Sync Frequency</h4>
            <p className="text-sm text-slate-400 mb-6">How often should DevPulse pull fresh metadata from GitHub?</p>
            <select className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-500">
              <option>Every 15 minutes</option>
              <option>Hourly</option>
              <option>Daily at Midnight</option>
              <option>Manual Only</option>
            </select>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h4 className="font-bold text-white mb-4">Automation History</h4>
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="text-xs border-l-2 border-slate-700 pl-3 py-1">
                  <p className="text-slate-300 font-medium italic">Successfully recomputed team velocity scores.</p>
                  <p className="text-slate-500">Today, 10:45 AM</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automate;
