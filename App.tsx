
import React, { useState, useEffect, useCallback } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import Automate from './components/Automate';
import TeamPulse from './components/TeamPulse';
import Repositories from './components/Repositories';
import Integrations from './components/Integrations';
import Settings from './components/Settings';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Overview');
  const [enableTransitions, setEnableTransitions] = useState(() => {
    const saved = localStorage.getItem('devpulse_transitions');
    return saved === null ? true : saved === 'true';
  });
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('devpulse_theme');
    return (saved as 'light' | 'dark') || 'dark';
  });

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      const savedUser = localStorage.getItem('devpulse_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('devpulse_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('devpulse_transitions', String(enableTransitions));
  }, [enableTransitions]);

  const handleLogin = useCallback((mockUser: User) => {
    setUser(mockUser);
    localStorage.setItem('devpulse_user', JSON.stringify(mockUser));
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('devpulse_user');
    setActiveTab('Overview');
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const toggleTransitions = useCallback(() => {
    setEnableTransitions(prev => !prev);
  }, []);

  const renderContent = () => {
    if (!user) return null;
    const commonProps = { enableTransitions };
    
    // Inject custom classes if transitions are disabled
    const transitionClass = enableTransitions ? "" : "[&_*]:!animate-none [&_*]:!transition-none";

    return (
      <div className={transitionClass}>
        {(() => {
          switch (activeTab) {
            case 'Overview': return <Dashboard user={user} theme={theme} onThemeToggle={toggleTheme} />;
            case 'Automate': return <Automate />;
            case 'Team Pulse': return <TeamPulse />;
            case 'Repositories': return <Repositories />;
            case 'Integrations': return <Integrations />;
            case 'Settings': return (
              <Settings 
                user={user} 
                theme={theme} 
                onThemeToggle={toggleTheme} 
                enableTransitions={enableTransitions}
                onTransitionToggle={toggleTransitions}
              />
            );
            default: return <Dashboard user={user} theme={theme} onThemeToggle={toggleTheme} />;
          }
        })()}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-deep-950">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-2 border-aquatic-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-aquatic-400/50 font-bold uppercase tracking-[0.2em] text-[10px]">Initializing Logic Audit</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-deep-950 text-white selection:bg-aquatic-400/30 transition-colors`}>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Layout 
          user={user} 
          onLogout={handleLogout} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          enableTransitions={enableTransitions}
          onTransitionToggle={toggleTransitions}
        >
          {renderContent()}
        </Layout>
      )}
    </div>
  );
};

export default App;
