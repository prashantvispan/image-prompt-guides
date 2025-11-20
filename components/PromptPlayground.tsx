import React, { useState } from 'react';
import { generateCritique } from '../services/geminiService';
import { Send, MessageSquare, Loader2, CheckCircle } from 'lucide-react';
import { COURSE_MODULES } from '../constants';

const PromptPlayground: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);
  const [critique, setCritique] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!prompt.trim()) return;
    setIsAnalyzing(true);
    const moduleName = COURSE_MODULES.find(m => m.id === selectedModuleId)?.title || "General Prompting";
    const result = await generateCritique(prompt, moduleName);
    setCritique(result);
    setIsAnalyzing(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-4">Prompt Laboratory</h1>
        <p className="text-slate-600">Test your skills. Write a prompt based on what you've learned, and the AI will critique it for structure, clarity, and visual potential.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <label className="block text-sm font-bold text-slate-700 mb-2">Select Context (Module)</label>
                <select 
                    value={selectedModuleId} 
                    onChange={(e) => setSelectedModuleId(Number(e.target.value))}
                    className="w-full p-3 rounded-lg border border-slate-300 bg-slate-50 mb-6 focus:ring-2 focus:ring-brand-500 outline-none"
                >
                    {COURSE_MODULES.map(m => (
                        <option key={m.id} value={m.id}>{m.id}. {m.title}</option>
                    ))}
                </select>

                <label className="block text-sm font-bold text-slate-700 mb-2">Your Prompt</label>
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g. Cinematic portrait of a cyberpunk chef cooking noodles..."
                    className="w-full h-40 p-4 rounded-lg border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-brand-500 outline-none resize-none font-mono text-sm"
                />
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={handleAnalyze}
                        disabled={isAnalyzing || !prompt.trim()}
                        className={`flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors ${isAnalyzing ? 'opacity-70' : ''}`}
                    >
                        {isAnalyzing ? <Loader2 className="animate-spin" size={18}/> : <Send size={18} />}
                        Analyze Prompt
                    </button>
                </div>
            </div>
        </div>

        <div className="md:col-span-1">
            {critique ? (
                <div className="bg-brand-50 border border-brand-100 rounded-xl p-6 animate-fadeIn h-full">
                    <div className="flex items-center gap-2 text-brand-800 font-bold mb-4 border-b border-brand-200 pb-3">
                        <MessageSquare size={20} />
                        AI Feedback
                    </div>
                    <div className="prose prose-sm prose-blue">
                        {/* Render simple text, usually the AI output is plain text from our service function */}
                        <p className="whitespace-pre-wrap text-slate-700 text-sm leading-relaxed">{critique}</p>
                    </div>
                </div>
            ) : (
                <div className="bg-slate-50 border border-slate-200 border-dashed rounded-xl p-8 h-full flex flex-col items-center justify-center text-center text-slate-400">
                    <CheckCircle size={40} className="mb-4 opacity-20" />
                    <p className="text-sm">Submit a prompt to receive real-time feedback on your technique.</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default PromptPlayground;