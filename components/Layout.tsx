
import React, { useState, useEffect } from 'react';
import { User } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  user: User;
  onLogout: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  enableTransitions: boolean;
  onTransitionToggle: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, user, onLogout, activeTab, setActiveTab, enableTransitions, onTransitionToggle }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on navigation on mobile
  useEffect(() => {
    setSidebarOpen(false);
  }, [activeTab]);

  const menuItems = [
    { label: 'Overview', icon: 'M4 6h16M4 12h16M4 18h16' },
    { label: 'Automate', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { label: 'Team Pulse', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { label: 'Repositories', icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z' },
    { label: 'Integrations', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' },
    { label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-deep-950">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden animate-in fade-in duration-300" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`fixed lg:relative z-[70] h-full transition-all duration-500 ease-out 
        ${isSidebarOpen ? 'translate-x-0 w-72' : '-translate-x-full lg:translate-x-0 lg:w-24'} 
        bg-black/40 backdrop-blur-3xl border-r border-white/5 flex flex-col`}>
        
        <div className="p-10 flex items-center gap-4">
          <div className="w-8 h-8 bg-aquatic-400 shrink-0 shadow-[0_0_20px_#22d3ee]"></div>
          {(isSidebarOpen) && <span className="text-xl font-light tracking-tighter animate-in slide-in-from-left-4">Dev<span className="font-black text-aquatic-400">Pulse</span></span>}
        </div>

        <nav className="flex-1 px-6 space-y-2 py-10 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const active = activeTab === item.label;
            return (
              <button
                key={item.label}
                onClick={() => setActiveTab(item.label)}
                className={`w-full flex items-center gap-6 px-6 py-4 rounded-2xl transition-all ${active ? 'bg-aquatic-400/10 text-aquatic-400 border border-aquatic-400/20' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                {(isSidebarOpen) && <span className="text-xs font-bold uppercase tracking-widest animate-in fade-in slide-in-from-left-2">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-8 border-t border-white/5">
           <button onClick={onLogout} className="w-full flex items-center gap-6 px-6 py-4 text-white/20 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
              {(isSidebarOpen) && <span className="text-xs font-bold uppercase tracking-widest">Terminate</span>}
           </button>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 flex items-center justify-between px-6 lg:px-12 border-b border-white/5 bg-black/20 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-6 overflow-hidden">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)} 
              className="p-2 text-white/40 hover:text-white transition-colors lg:hidden"
            >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            
            {/* Desktop Navigation in Top Corner */}
            <nav className="hidden lg:flex items-center bg-white/5 rounded-full px-2 py-1.5 border border-white/5">
              {menuItems.slice(0, 5).map((item) => (
                <button
                  key={item.label}
                  onClick={() => setActiveTab(item.label)}
                  className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === item.label ? 'bg-aquatic-400 text-deep-950 shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'text-white/40 hover:text-white'}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <span className="lg:hidden text-xs font-black text-aquatic-400 uppercase tracking-widest truncate">{activeTab}</span>
          </div>
          
          <div className="flex items-center gap-4 lg:gap-8 shrink-0">
             {/* Transition FX Toggle (Mobile) */}
             <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">Logic FX</span>
                <button 
                  onClick={onTransitionToggle}
                  className={`w-10 h-5 rounded-full border border-white/10 flex items-center px-0.5 transition-all ${enableTransitions ? 'bg-aquatic-400/20' : 'bg-white/5'}`}
                  title="Toggle Visual Transitions"
                >
                  <div className={`w-3.5 h-3.5 rounded-full transition-all ${enableTransitions ? 'translate-x-5 bg-aquatic-400 shadow-[0_0_8px_#22d3ee]' : 'translate-x-0 bg-white/20'}`}></div>
                </button>
             </div>

             <div className="h-8 w-px bg-white/5 mx-1 hidden sm:block"></div>

             <div className="flex items-center gap-4">
                <div className="text-right hidden md:block">
                   <p className="text-xs font-bold text-white truncate max-w-[120px]">{user.name}</p>
                   <p className="text-[9px] font-black text-aquatic-400 uppercase tracking-widest">ID: {user.id.split('_')[1]}</p>
                </div>
                <img src={user.avatarUrl} className="w-10 h-10 rounded-full border border-white/10 ring-2 ring-transparent hover:ring-aquatic-400/40 transition-all cursor-pointer" alt="Avatar" />
             </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-6 lg:p-12 max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
