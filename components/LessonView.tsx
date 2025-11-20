import React, { useState } from 'react';
import { ModuleData } from '../types';
import { generateLessonContent } from '../services/geminiService';
import MarkdownRenderer from './MarkdownRenderer';
import { Sparkles, BookOpen, AlertCircle, Lightbulb, Briefcase, ArrowRight, HelpCircle } from 'lucide-react';

interface LessonViewProps {
  module: ModuleData;
}

const LessonView: React.FC<LessonViewProps> = ({ module }) => {
  const [aiContent, setAiContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateDeepDive = async () => {
    setLoading(true);
    setError(null);
    try {
      // We pass the specific module context to the service
      const content = await generateLessonContent(module);
      setAiContent(content);
    } catch (err) {
      setError("Failed to generate additional insights.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-20 animate-fadeIn">
      {/* Header Section */}
      <header className="mb-10 border-b border-slate-200 pb-6">
        <div className="flex items-center gap-2 text-brand-600 font-bold text-xs tracking-wide uppercase mb-3">
          <span className="bg-brand-100 px-2 py-1 rounded-md">Module {module.id}</span>
          <span className="text-slate-400">•</span>
          <span>Professional Certification</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4 leading-tight">
          {module.title}
        </h1>
        <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
          {module.subtitle}
        </p>
      </header>

      {/* Static "Book" Content - High Quality Pre-written text */}
      <div className="space-y-10">
        {/* Introduction / Overview */}
        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 w-40 h-40 bg-slate-50 rounded-bl-full -mr-10 -mt-10 z-0"></div>
           <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4 text-slate-800">
                  <BookOpen className="text-brand-600" size={24} />
                  <h2 className="text-xl font-bold font-serif">Core Concepts</h2>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                  {module.description}
              </p>
              
              {/* Render the detailed content sections */}
              <div className="space-y-8">
                  {module.content.map((section, idx) => (
                      <div key={idx} className="prose-section">
                          <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">{section.heading}</h3>
                          <MarkdownRenderer content={section.body} />
                      </div>
                  ))}
              </div>
           </div>
        </section>

        {/* Real Life Application Card */}
        <section className="bg-slate-900 text-slate-100 p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Briefcase size={120} />
            </div>
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                    <div className="bg-brand-500 p-2 rounded-lg text-white">
                        <Briefcase size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-white font-serif">In The Real World</h2>
                </div>
                <div className="prose prose-invert max-w-none">
                    <MarkdownRenderer content={module.realLifeApplication} />
                </div>
            </div>
        </section>

        {/* Key Topics & Exercises Grid */}
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                    Topics Covered
                </h4>
                <ul className="space-y-3">
                    {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                            <span className="text-brand-400 mt-1">•</span>
                            {topic}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Lightbulb size={14} />
                    Practical Exercise
                </h4>
                <p className="text-slate-800 font-medium italic leading-relaxed">
                    "{module.exercises}"
                </p>
                <div className="mt-4 text-xs text-amber-800 bg-amber-100 inline-block px-3 py-1 rounded-full">
                    Try this in the Playground
                </div>
            </div>
        </div>
      </div>

      {/* AI Tutor Section (Optional Expansion) */}
      <div className="mt-16 pt-10 border-t border-slate-200">
        <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-serif font-bold text-slate-900">Deep Dive & Analysis</h2>
             <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded border border-slate-200">AI Powered</span>
        </div>

        {!aiContent ? (
            <div className="bg-white border border-slate-200 border-dashed rounded-xl p-8 text-center">
                <div className="inline-flex bg-brand-50 p-3 rounded-full mb-4">
                    <Sparkles className="text-brand-500" size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Need more examples?</h3>
                <p className="text-slate-500 mb-6 max-w-lg mx-auto">
                    Ask our AI Tutor to generate expanded theory, specific code snippets, or a quiz based on the content of this module.
                </p>
                <button
                    onClick={handleGenerateDeepDive}
                    disabled={loading}
                    className={`
                        inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-sm hover:shadow-md
                        ${loading ? 'opacity-75 cursor-wait' : ''}
                    `}
                >
                     {loading ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Consulting AI...
                        </>
                    ) : (
                        <>
                            Expand this Lesson
                            <ArrowRight size={16} />
                        </>
                    )}
                </button>
                 {error && (
                    <div className="mt-4 text-red-500 text-sm flex items-center justify-center gap-2">
                        <AlertCircle size={14} />
                        {error}
                    </div>
                )}
            </div>
        ) : (
             <div className="bg-brand-50/50 border border-brand-100 rounded-xl p-8 relative animate-fadeIn">
                 <div className="absolute top-4 right-4">
                    <button onClick={() => setAiContent(null)} className="text-slate-400 hover:text-slate-600 text-xs underline">Clear</button>
                 </div>
                 <div className="flex items-center gap-2 mb-6 text-brand-800">
                     <HelpCircle size={20} />
                     <h3 className="font-bold">AI Expanded Content</h3>
                 </div>
                 <MarkdownRenderer content={aiContent} />
             </div>
        )}
      </div>

    </div>
  );
};

export default LessonView;