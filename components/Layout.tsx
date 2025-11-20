import React, { useState } from 'react';
import Sidebar from './Sidebar';
import LessonView from './LessonView';
import PromptPlayground from './PromptPlayground';
import { COURSE_MODULES } from '../constants';
import { AppView } from '../types';

const Layout: React.FC = () => {
  const [currentModuleId, setCurrentModuleId] = useState(1);
  const [currentView, setCurrentView] = useState<AppView>(AppView.COURSE);

  const currentModule = COURSE_MODULES.find(m => m.id === currentModuleId) || COURSE_MODULES[0];

  return (
    <div className="flex h-screen bg-slate-100 text-slate-900 font-sans overflow-hidden">
      <Sidebar 
        currentModuleId={currentModuleId} 
        onSelectModule={setCurrentModuleId}
        currentView={currentView}
        onChangeView={setCurrentView}
      />
      <main className="flex-1 overflow-y-auto h-full p-6 md:p-10 scroll-smooth">
        {currentView === AppView.COURSE && (
            <LessonView module={currentModule} />
        )}
        {currentView === AppView.PLAYGROUND && (
            <PromptPlayground />
        )}
      </main>
    </div>
  );
};

export default Layout;