
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
      rank: 'Pro', // Updated to match new hierarchy
      badgeLevel: 'Gold'
    };
    
    setIsAuthenticating(false);
    onLogin(mockUser);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden transition-colors">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="w-full max-w-2xl relative z-10 text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-flex w-16 h-16 bg-brand-600 rounded-2xl items-center justify-center text-white text-2xl font-bold shadow-lg">DP</div>
          <div className="space-y-3">
             <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Developer productivity <span className="text-brand-600">analysis and code insights</span>
             </h1>
             <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-lg mx-auto leading-relaxed">
                Connect your GitHub workflow to unlock high-fidelity analytics and team collaboration insights.
             </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <button
            onClick={handleGitHubLogin}
            disabled={isAuthenticating}
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl text-base font-bold shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 flex items-center gap-3"
          >
            {isAuthenticating ? (
              <div className="w-5 h-5 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
            )}
            <span>{isAuthenticating ? 'Connecting...' : 'Continue with GitHub'}</span>
          </button>
          
          <div className="flex gap-8 text-slate-400 dark:text-slate-600 font-bold text-[10px] uppercase tracking-widest">
            <span>Enterprise Security</span>
            <span>Private Analysis</span>
            <span>Real-time Sync</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
