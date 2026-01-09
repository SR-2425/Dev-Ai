
import React from 'react';
import { User } from '../types';

const Settings: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="space-y-8 animate-in slide-in-from-top-4 duration-500 pb-20">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-white tracking-tight">Platform Settings</h1>
        <p className="text-slate-400">Customize your experience and manage data visibility.</p>
      </header>

      <div className="max-w-4xl space-y-8">
        {/* Profile Section */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">Profile Management</h3>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <img src={user.avatarUrl} className="w-24 h-24 rounded-2xl border-2 border-indigo-500/20 shadow-xl" alt="Profile" />
            <div className="flex-1 space-y-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                  <input type="text" defaultValue={user.name} className="w-full bg-slate-800 border-none rounded-lg p-2.5 text-sm" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">GitHub Username</label>
                  <input type="text" defaultValue={user.githubUsername} readOnly className="w-full bg-slate-800/50 border-none rounded-lg p-2.5 text-sm text-slate-500 cursor-not-allowed" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">Analytics & Privacy</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-800/20 rounded-xl">
              <div>
                <p className="font-semibold text-white">Public Profile Badge</p>
                <p className="text-sm text-slate-500">Allow others to see your contribution rank and badges.</p>
              </div>
              <div className="w-12 h-6 bg-indigo-600 rounded-full relative flex items-center px-1">
                <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-800/20 rounded-xl">
              <div>
                <p className="font-semibold text-white">Advanced Insights (Gemini AI)</p>
                <p className="text-sm text-slate-500">Use AI to generate personalized productivity tips based on your work.</p>
              </div>
              <div className="w-12 h-6 bg-indigo-600 rounded-full relative flex items-center px-1">
                <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">Notification Preferences</h3>
          <div className="space-y-4">
            {['Weekly Summary Email', 'Slack Activity Alerts', 'Achievement Milestones', 'Team Performance Digests'].map(pref => (
              <label key={pref} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-indigo-500" />
                <span className="text-slate-300 group-hover:text-white transition-colors">{pref}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="flex justify-end gap-4 pt-4">
          <button className="px-6 py-2.5 rounded-xl border border-slate-800 text-slate-400 font-bold hover:bg-slate-900">Cancel</button>
          <button className="px-8 py-2.5 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 shadow-xl shadow-indigo-600/20">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
