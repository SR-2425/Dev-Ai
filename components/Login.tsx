
import React, { useState } from 'react';
import { User } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleGitHubLogin = async () => {
    setIsAuthenticating(true);
    // Simulate GitHub OAuth via Firebase redirect/popup
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockUser: User = {
      id: 'usr_123',
      name: 'Alex Dev',
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
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-emerald-600/10 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-md space-y-8 z-10">
        <div className="text-center space-y-4">
          <div className="inline-flex p-4 bg-indigo-600 rounded-2xl shadow-2xl shadow-indigo-600/20 mb-4 animate-bounce">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tighter">DevPulse</h1>
          <p className="text-slate-400 text-lg">Measure what matters in your engineering workflow.</p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-white text-center">Welcome Back</h2>
            <p className="text-sm text-slate-500 text-center">Login with your GitHub account to access your pulse analytics.</p>
          </div>

          <button
            onClick={handleGitHubLogin}
            disabled={isAuthenticating}
            className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-white hover:bg-slate-100 text-slate-950 font-bold rounded-2xl transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {isAuthenticating ? (
              <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            )}
            <span>{isAuthenticating ? 'Connecting...' : 'Continue with GitHub'}</span>
          </button>

          <p className="text-[10px] text-slate-600 text-center uppercase tracking-widest font-bold">
            Securely managed by Firebase Authentication
          </p>
        </div>

        <div className="flex justify-center gap-8">
          <div className="text-center">
            <p className="text-white font-bold">4.2k+</p>
            <p className="text-xs text-slate-500">Developers</p>
          </div>
          <div className="text-center">
            <p className="text-white font-bold">99.9%</p>
            <p className="text-xs text-slate-500">Uptime</p>
          </div>
          <div className="text-center">
            <p className="text-white font-bold">2M+</p>
            <p className="text-xs text-slate-500">PRs Analyzed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
