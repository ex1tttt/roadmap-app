'use client';

import { useState, useEffect } from 'react';
import { RoadmapStep } from '@/types/roadmap';
import { supabase } from '../lib/supabase';

export default function RoadmapCard({ step }: { step: RoadmapStep }) {
  // Состояние: выполнена задача или нет
  const [isDone, setIsDone] = useState(false);
  // Состояние загрузки (чтобы не дергалось при старте)
  const [isLoading, setIsLoading] = useState(true);

  // 1. Загружаем прогресс из базы данных при загрузке страницы
  useEffect(() => {
    async function fetchProgress() {
      try {
        const { data, error } = await supabase
          .from('steps')
          .select('is_completed')
          .eq('step_id', step.id)
          .maybeSingle();

        if (error) throw error;
        if (data) setIsDone(data.is_completed);
      } catch (err) {
        console.error('Детали ошибки:', err instanceof Error ? err.message : JSON.stringify(err));
      } finally {
        setIsLoading(false);
      }
    }

    fetchProgress();
  }, [step.id]);

  // 2. Функция переключения статуса
  const toggleStep = async () => {
    const newState = !isDone;
    setIsDone(newState); // Оптимистичное обновление (сразу меняем UI)

    try {
      const { error } = await supabase
        .from('steps')
        .upsert({ 
          step_id: step.id, 
          is_completed: newState,
          updated_at: new Date().toISOString()
        }, { onConflict: 'step_id' }); // Если ID совпадает — обновляем

      if (error) throw error;
    } catch (err) {
      console.error('Ошибка при сохранении:', err);
      setIsDone(!newState); // Если ошибка — откатываем назад
      alert('Не удалось сохранить прогресс. Проверьте соединение.');
    }
  };

  return (
    <div className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 ${
      isDone 
        ? 'bg-green-500/5 border-green-500/50 opacity-80' 
        : 'bg-slate-900/50 border-slate-800 hover:border-blue-500/50 hover:bg-slate-900'
    }`}>
      {/* Скелетон-загрузка, пока ждем ответа от базы */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-900/50 animate-pulse rounded-2xl z-10" />
      )}

      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className={`text-xl font-bold transition-all duration-300 ${
            isDone ? 'text-slate-500 line-through' : 'text-white'
          }`}>
            {step.title}
          </h3>
        </div>
        
        {/* Кнопка-чекбокс */}
        <button 
          onClick={toggleStep}
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
            isDone 
              ? 'bg-green-500 border-green-500 text-white scale-110' 
              : 'border-slate-600 text-transparent hover:border-blue-400'
          }`}
        >
          <span className="text-sm font-bold">✓</span>
        </button>
      </div>
      
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        {step.description}
      </p>
      
      {/* Ссылки на ресурсы */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {step.links.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] uppercase tracking-wider font-semibold bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white px-3 py-1.5 rounded-md border border-slate-700 transition-all"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}