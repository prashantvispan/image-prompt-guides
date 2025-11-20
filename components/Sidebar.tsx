import React from 'react';
import { COURSE_MODULES } from '../constants';
import { BookOpen, ChevronRight, LayoutGrid, PenTool } from 'lucide-react';
import { AppView } from '../types';

interface SidebarProps {
  currentModuleId: number;
  onSelectModule: (id: number) => void;
  currentView: AppView;
  onChangeView: (view: AppView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentModuleId, onSelectModule, currentView, onChangeView }) => {
  return (
    <div className="w-80 bg-slate-50 border-r border-slate-200 h-screen flex flex-col sticky top-0 overflow-y-auto">
      <div className="p-6 border-b border-slate-200 bg-white">
        <div className="flex items-center gap-3 mb-2">
            <div className="bg-brand-600 text-white p-2 rounded-lg">
                <BookOpen size={20} />
            </div>
            <h1 className="font-serif font-bold text-slate-900 text-lg leading-tight">Pro Prompting<br/><span className="text-brand-600 text-sm font-sans font-normal">Masterclass Edition</span></h1>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-8">
        <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Modules</h3>
            <div className="space-y-1">
            {COURSE_MODULES.map((module) => (
                <button
                key={module.id}
                onClick={() => {
                    onSelectModule(module.id);
                    onChangeView(AppView.COURSE);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg flex items-start gap-3 transition-all duration-200 group ${
                    currentModuleId === module.id && currentView === AppView.COURSE
                    ? 'bg-brand-50 text-brand-700 shadow-sm ring-1 ring-brand-200' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
                >
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mt-0.5 ${
                    currentModuleId === module.id && currentView === AppView.COURSE
                    ? 'bg-brand-200 text-brand-800' 
                    : 'bg-slate-200 text-slate-500 group-hover:bg-slate-300'
                }`}>
                    {module.id}
                </span>
                <span className="text-sm font-medium leading-snug">{module.title}</span>
                {currentModuleId === module.id && currentView === AppView.COURSE && <ChevronRight size={14} className="ml-auto mt-1 text-brand-500" />}
                </button>
            ))}
            </div>
        </div>
      </nav>

      <div className="p-4 border-t border-slate-200 bg-slate-50">
        <button 
            onClick={() => onChangeView(AppView.PLAYGROUND)}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                currentView === AppView.PLAYGROUND ? 'bg-brand-600 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
        >
            <PenTool size={18} />
            <span className="font-medium text-sm">Prompt Playground</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;