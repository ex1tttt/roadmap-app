'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase'; // Убедись, что путь совпадает с твоим рабочим импортом

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const totalSteps = 12; // Пока укажем вручную, позже сделаем динамически

  const fetchProgress = async () => {
    const { count, error } = await supabase
      .from('steps')
      .select('*', { count: 'exact', head: true })
      .eq('is_completed', true);

    if (!error && count !== null) {
      const percentage = (count / totalSteps) * 100;
      setProgress(Math.min(percentage, 100));
    }
  };

  useEffect(() => {
    fetchProgress();

    // Слушаем изменения в базе: если ты кликнул на карточку, полоска сразу дернется!
    const channel = supabase
      .channel('schema-db-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'steps' }, () => {
        fetchProgress();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="fixed top-[64px] left-0 w-full h-1.5 bg-slate-800/50 z-40">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(34,197,94,0.4)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}