import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Это поможет нам увидеть проблему в консоли браузера
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('КРИТИЧЕСКАЯ ОШИБКА: Переменные окружения не найдены!');
  console.log('Текущий URL:', supabaseUrl);
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.co', 
  supabaseAnonKey || 'placeholder'
);