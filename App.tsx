
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

  const handleLogin = useCallback((mockUser: User) => {
    setUser(mockUser);
    localStorage.setItem('devpulse_user', JSON.stringify(mockUser));
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('devpulse_user');
    setActiveTab('Overview');
  }, []);

  const renderContent = () => {
    if (!user) return null;
    switch (activeTab) {
      case 'Overview': return <Dashboard user={user} />;
      case 'Automate': return <Automate />;
      case 'Team Pulse': return <TeamPulse />;
      case 'Repositories': return <Repositories />;
      case 'Integrations': return <Integrations />;
      case 'Settings': return <Settings user={user} />;
      default: return <Dashboard user={user} />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-slate-400 font-medium animate-pulse">Initializing DevPulse...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Layout user={user} onLogout={handleLogout} activeTab={activeTab} setActiveTab={setActiveTab}>
          {renderContent()}
        </Layout>
      )}
    </div>
  );
};

export default App;
