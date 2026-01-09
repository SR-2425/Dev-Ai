
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const InsightsPanel: React.FC = () => {
  const [insight, setInsight] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `Analyze this hypothetical developer data and give a 2-sentence productivity insight:
          - Commits: 42 (+12%)
          - PR reviews: 24 (high engagement)
          - Weekly Velocity: 4.2h per PR
          Keep it professional and encouraging.`,
          config: {
            systemInstruction: 'You are an elite engineering manager at a tech company.',
            temperature: 0.7,
          }
        });
        setInsight(response.text || 'Productivity is trending upward with a notable increase in code quality and peer review involvement.');
      } catch (err) {
        setInsight('Your contribution velocity is peaking! Focus on maintaining the high PR review quality seen in the last 48 hours.');
      } finally {
        setLoading(false);
      }
    };

    fetchInsight();
  }, []);

  return (
    <div className="bg-gradient-to-br from-indigo-900/20 to-slate-900 border border-indigo-500/20 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
      {/* Decorative pulse effect */}
      <div className="absolute -right-12 -top-12 w-32 h-32 bg-indigo-500/10 blur-3xl group-hover:bg-indigo-500/20 transition-all"></div>
      
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-indigo-600 rounded-lg text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight">AI Pulse Insight</h3>
      </div>

      {loading ? (
        <div className="space-y-3">
          <div className="h-4 bg-slate-800 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-slate-800 rounded w-4/5 animate-pulse"></div>
        </div>
      ) : (
        <p className="text-slate-300 leading-relaxed text-lg font-medium">
          "{insight}"
        </p>
      )}

      <div className="mt-6 flex gap-4">
        <button className="text-xs font-bold text-indigo-400 uppercase tracking-widest hover:text-indigo-300 transition-colors">
          Detailed Analysis →
        </button>
      </div>
    </div>
  );
};

export default InsightsPanel;
