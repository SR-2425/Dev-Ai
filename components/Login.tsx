
import React, { useState } from 'react';
import { User } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleGitHubLogin = async () => {
    setIsAuthenticating(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const mockUser: User = {
      id: 'usr_123',
      name: 'ALEX DEV',
      email: 'alex@example.com',
      avatarUrl: 'https://picsum.photos/seed/alex/100/100',
      githubUsername: 'alexdev_pulse',
      rank: 'Senior Contributor',
      badgeLevel: 'Gold'
    };
    
    setIsAuthenticating(false);
    onLogin(mockUser);
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-12 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aquatic-400/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-aquatic-900/20 blur-[150px] rounded-full"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#22d3ee 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

      <div className="w-full max-w-4xl relative z-10 space-y-16 text-center">
        <div className="space-y-8">
          <div className="inline-flex w-24 h-24 glass-panel rounded-[2rem] items-center justify-center mb-6 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
            <div className="w-8 h-8 bg-aquatic-400 shadow-[0_0_20px_#22d3ee]"></div>
          </div>
          <div className="space-y-4">
             <h1 className="text-7xl font-light text-white tracking-tight leading-none">
                The productivity platform of <span className="font-bold text-aquatic-400">tomorrow, today</span>
             </h1>
             <p className="text-xl text-white/50 max-w-2xl mx-auto font-medium">
                DevPulse is the <span className="text-white">leading developer analytics interface</span> built around the specific needs of the engineering community.
             </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <button
            onClick={handleGitHubLogin}
            disabled={isAuthenticating}
            className="glass-button px-12 py-5 rounded-full text-lg font-bold text-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all disabled:opacity-50 flex items-center gap-4"
          >
            {isAuthenticating ? (
              <div className="w-5 h-5 border-2 border-aquatic-400 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <svg className="w-6 h-6 text-aquatic-400" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
            )}
            <span>{isAuthenticating ? 'Authenticating...' : 'Enter DevPulse'}</span>
          </button>
          
          <div className="flex gap-16 text-white/20 font-bold text-xs uppercase tracking-[0.3em]">
            <span>Secure Access</span>
            <span>Privacy Focused</span>
            <span>Real-time Sync</span>
          </div>
        </div>
      </div>

      {/* Floating Bottom Grid Cards - Technical Theme */}
      <div className="absolute bottom-[-100px] left-0 right-0 flex justify-center gap-6 opacity-40">
        {['C', 'JS', 'GO', 'TS', 'PY', 'RS', 'KT', 'RB', 'CS', 'PH', 'SV', 'SH'].map((lang, i) => (
          <div key={i} className="w-24 h-24 glass-panel rounded-2xl flex items-center justify-center text-aquatic-400 text-3xl font-light">
            {lang}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Login;
