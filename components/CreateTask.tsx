'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function CreateTask() {
  const [title, setTitle] = useState('');

  const addTask = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) return alert('Войдите в аккаунт!');

    const { error } = await supabase
      .from('user_tasks')
      .insert([{ title, user_id: user.id }]);

    if (!error) setTitle(''); // Очищаем поле после добавления
  };

  return (
    <form onSubmit={addTask} className="mb-8 flex gap-2">
      <input 
        type="text" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Название новой задачи..."
        className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:border-blue-500 outline-none"
      />
      <button type="submit" className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg font-medium transition">
        Добавить
      </button>
    </form>
  );
}