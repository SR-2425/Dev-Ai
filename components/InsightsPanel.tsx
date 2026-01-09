
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const InsightsPanel: React.FC = () => {
  const [insight, setInsight] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInsight = async () => {
      const cached = sessionStorage.getItem('devpulse_ai_insight');
      if (cached) {
        setInsight(cached);
        setLoading(false);
        return;
      }

      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `Quick summary: 42 commits (+12%), 24 reviews, 4.2h/PR.`,
          config: {
            systemInstruction: 'You are a concise engineering lead. Give a 1-sentence productivity tip in all caps.',
            thinkingConfig: { thinkingBudget: 0 },
            temperature: 0.3,
          }
        });
        const text = response.text || 'VELOCITY WITHIN EXPECTED PARAMETERS. MAINTAIN CURRENT REVIEW DENSITY.';
        setInsight(text);
        sessionStorage.setItem('devpulse_ai_insight', text);
      } catch (err) {
        setInsight('FOCUS ON MAINTAINING CODE REVIEW INTEGRITY. SPRINT LOAD APPROACHING MAX CAPACITY.');
      } finally {
        setLoading(false);
      }
    };

    fetchInsight();
  }, []);

  return (
    <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-12 border-none relative overflow-hidden group rounded-2xl shadow-xl transition-colors">
      <div className="flex items-center gap-6 mb-10 border-b border-white/20 dark:border-slate-200 pb-8">
        <div className="w-4 h-4 bg-brand-500 animate-pulse"></div>
        <h3 className="text-[11px] font-black uppercase tracking-[0.5em] opacity-60">AI Core Insight Dispatch</h3>
      </div>

      {loading ? (
        <div className="space-y-4">
          <div className="h-4 bg-white/10 dark:bg-slate-100 w-full animate-pulse"></div>
          <div className="h-4 bg-white/10 dark:bg-slate-100 w-3/4 animate-pulse"></div>
        </div>
      ) : (
        <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight italic">
          “{insight}”
        </p>
      )}

      <div className="mt-12 flex justify-between items-center opacity-40">
        <span className="text-[9px] font-bold uppercase tracking-widest">Model: Gemini 3 Flash v.Alpha</span>
        <span className="text-[9px] font-bold uppercase tracking-widest">Status: Synchronized</span>
      </div>
    </div>
  );
};

export default InsightsPanel;
