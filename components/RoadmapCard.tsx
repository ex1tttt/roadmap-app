'use client'; // Обязательно в первой строке для интерактивности

import { useState } from 'react';
import { RoadmapStep } from '@/types/roadmap';

export default function RoadmapCard({ step }: { step: RoadmapStep }) {
  // Локальное состояние: пройден этап или нет
  const [isDone, setIsDone] = useState(step.status === 'completed');

  return (
    <div className={`p-6 bg-slate-900 border-2 rounded-2xl transition-all duration-500 ${
      isDone ? 'border-green-500/50 opacity-80' : 'border-slate-800 hover:border-blue-500'
    }`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className={`text-xl font-bold transition-all ${isDone ? 'text-slate-500 line-through' : 'text-white'}`}>
            {step.title}
          </h3>
        </div>
        
        {/* Интерактивный чекбокс */}
        <button 
          onClick={() => setIsDone(!isDone)}
          className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${
            isDone ? 'bg-green-500 border-green-500' : 'border-slate-600 hover:border-blue-500'
          }`}
        >
          {isDone && <span className="text-white text-xs">✓</span>}
        </button>
      </div>
      
      <p className="text-slate-400 text-sm mb-6">{step.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {step.links.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            target="_blank"
            className="text-xs bg-slate-800 text-slate-300 hover:bg-slate-700 px-3 py-2 rounded-lg border border-slate-700 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}