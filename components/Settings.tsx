
import React from 'react';
import { User } from '../types';

interface SettingsProps {
  user: User;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  enableTransitions: boolean;
  onTransitionToggle: () => void;
}

const Settings: React.FC<SettingsProps> = ({ user, theme, onThemeToggle, enableTransitions, onTransitionToggle }) => {
  return (
    <div className={`space-y-8 lg:space-y-12 pb-32 ${enableTransitions ? 'animate-in slide-in-from-top-4 duration-500' : ''}`}>
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
          <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Configuration Node</span>
        </div>
        <h1 className="text-4xl lg:text-6xl font-light text-white tracking-tight leading-tight">System <span className="font-bold text-white">Preferences</span></h1>
        <p className="text-lg lg:text-xl text-white/40 max-w-2xl font-medium">Managing your platform identity and data stream visibility parameters.</p>
      </header>

      <div className="max-w-4xl space-y-8 lg:space-y-12">
        <section className="glass-panel p-8 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 border-b border-white/5 pb-12">
            <div className="relative group shrink-0">
              <img src={user.avatarUrl} className="w-24 h-24 lg:w-32 lg:h-32 rounded-[2rem] lg:rounded-[2.5rem] border-2 border-aquatic-400 shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-transform group-hover:scale-105" alt="Avatar" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 lg:w-10 lg:h-10 bg-deep-950 border border-white/10 rounded-full flex items-center justify-center text-aquatic-400 shadow-xl">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
              </div>
            </div>
            <div className="text-center md:text-left space-y-3">
               <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">{user.name}</h3>
               <p className="text-aquatic-400 font-black tracking-[0.3em] uppercase text-[9px] lg:text-[10px]">Verified Contributor — Node ID: {user.id}</p>
               <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
                 <span className="text-[10px] font-bold text-white/30 border border-white/10 px-3 py-1 rounded-lg bg-white/5 uppercase tracking-widest">GITHUB: @{user.githubUsername}</span>
                 <span className="text-[10px] font-bold text-white/30 border border-white/10 px-3 py-1 rounded-lg bg-white/5 uppercase tracking-widest">{user.rank}</span>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-1">Email Endpoint</label>
              <input type="text" defaultValue={user.email} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm font-medium focus:border-aquatic-400 focus:ring-1 focus:ring-aquatic-400 outline-none transition-all" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-1">Display Alias</label>
              <input type="text" defaultValue={user.name} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm font-medium focus:border-aquatic-400 outline-none transition-all" />
            </div>
          </div>
        </section>

        <section className="glass-panel p-8 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] space-y-10">
           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
             <h3 className="text-2xl font-bold text-white tracking-tight">Interface Controls</h3>
             <div className="flex items-center gap-6 bg-white/5 p-2 rounded-2xl">
                <span className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">{theme.toUpperCase()} MODE</span>
                <button 
                  onClick={onThemeToggle}
                  className="w-16 h-8 glass-card border-white/10 rounded-full flex items-center px-1 transition-all"
                >
                  <div className={`w-6 h-6 rounded-full transition-all flex items-center justify-center ${theme === 'dark' ? 'translate-x-8 bg-aquatic-400 shadow-[0_0_15px_#22d3ee]' : 'translate-x-0 bg-white shadow-lg'}`}>
                    {theme === 'dark' ? '🌙' : '☀️'}
                  </div>
                </button>
             </div>
           </div>
           
           <div className="space-y-4 lg:space-y-6">
              {[
                { label: 'Motion Logic (FX)', desc: 'Enable hardware-accelerated animations and page transitions.', active: enableTransitions, action: onTransitionToggle },
                { label: 'Sustainability Notifications', desc: 'Get alerts when burnout risk parameters are exceeded.', active: true },
                { label: 'Weekly Performance Audit', desc: 'Receive a high-density summary of all repository output.', active: true },
                { label: 'XP Public Visibility', desc: 'Allow team members to view your current rank and badges.', active: true },
              ].map((pref, i) => (
                <div key={i} className="flex items-center justify-between p-6 lg:p-8 bg-white/5 rounded-[1.5rem] lg:rounded-[2rem] border border-white/5 hover:border-aquatic-400/20 transition-all group">
                  <div className="space-y-1 pr-8">
                    <p className="font-bold text-white group-hover:text-aquatic-400 transition-colors">{pref.label}</p>
                    <p className="text-xs text-white/30 font-medium leading-relaxed">{pref.desc}</p>
                  </div>
                  <button 
                    onClick={pref.action}
                    className={`w-12 h-6 rounded-full flex items-center px-1 border transition-all shrink-0 ${pref.active ? 'bg-aquatic-400/20 border-aquatic-400/30' : 'bg-white/5 border-white/10'}`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-all ${pref.active ? 'translate-x-6 bg-aquatic-400 shadow-[0_0_10px_#22d3ee]' : 'translate-x-0 bg-white/20'}`}></div>
                  </button>
                </div>
              ))}
           </div>
        </section>

        <div className="flex flex-col md:flex-row justify-end gap-6 pt-8">
          <button className="px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-white hover:bg-white/5 transition-all">TERMINATE SESSION</button>
          <button className="bg-aquatic-400 px-14 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.4em] text-deep-950 shadow-[0_15px_30px_rgba(34,211,238,0.3)] hover:scale-105 active:scale-95 transition-all">SAVE CONFIGURATION</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
