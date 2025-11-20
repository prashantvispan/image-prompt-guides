import React from 'react';

interface Props {
  content: string;
}

const MarkdownRenderer: React.FC<Props> = ({ content }) => {
  // A very simple markdown parser for the purpose of this demo without heavy libraries
  // In production, use 'react-markdown' or 'remark'
  
  const renderLine = (line: string, index: number) => {
    if (line.startsWith('### ')) {
      return <h3 key={index} className="text-xl font-serif font-bold text-brand-900 mt-6 mb-3">{line.replace('### ', '')}</h3>;
    }
    if (line.startsWith('## ')) {
      return <h2 key={index} className="text-2xl font-serif font-bold text-brand-800 mt-8 mb-4 border-b border-brand-100 pb-2">{line.replace('## ', '')}</h2>;
    }
    if (line.startsWith('# ')) {
      return <h1 key={index} className="text-3xl font-serif font-bold text-brand-900 mb-6">{line.replace('# ', '')}</h1>;
    }
    if (line.startsWith('- ') || line.startsWith('* ')) {
      return <li key={index} className="ml-4 list-disc text-slate-700 mb-1">{line.replace(/^[-*] /, '')}</li>;
    }
    if (line.startsWith('1. ')) {
       return <li key={index} className="ml-4 list-decimal text-slate-700 mb-1">{line.replace(/^\d+\. /, '')}</li>;
    }
    if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="font-bold text-slate-800 my-2">{line.replace(/\*\*/g, '')}</p>
    }
    if (line.trim() === '') {
      return <div key={index} className="h-2"></div>;
    }
    if (line.startsWith('```')) {
        return null; // Skip code fence markers for simplicity in this custom parser
    }
    
    // Handle code blocks roughly
    if (line.includes('`')) {
        const parts = line.split('`');
        return (
            <p key={index} className="mb-3 leading-relaxed text-slate-700">
                {parts.map((part, i) => i % 2 === 1 ? <code key={i} className="bg-slate-100 text-red-500 px-1 rounded text-sm font-mono">{part}</code> : part)}
            </p>
        )
    }

    return <p key={index} className="mb-3 leading-relaxed text-slate-700">{line}</p>;
  };

  const lines = content.split('\n');
  
  // Grouping for lists is complex in simple mapping, so we'll just render directly for this demo
  // A real markdown parser is recommended for production.
  return (
    <div className="prose max-w-none">
      {lines.map((line, idx) => renderLine(line, idx))}
    </div>
  );
};

export default MarkdownRenderer;