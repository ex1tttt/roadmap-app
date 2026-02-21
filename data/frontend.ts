import { RoadmapStep } from '@/types/roadmap';

export const frontendSteps: RoadmapStep[] = [
  {
    id: '1',
    title: 'HTML & CSS',
    description: 'Основы разметки страниц и их стилизации. Flexbox, Grid, адаптивность.',
    links: [
      { label: 'MDN HTML', url: 'https://developer.mozilla.org/ru/docs/Web/HTML' },
      { label: 'CSS Tricks', url: 'https://css-tricks.com' }
    ],
    status: 'completed'
  },
  {
    id: '2',
    title: 'JavaScript Fundamentals',
    description: 'Переменные, циклы, функции, массивы и работа с DOM.',
    links: [
      { label: 'Learn JS', url: 'https://learn.javascript.ru' }
    ],
    status: 'current'
  },
  {
    id: '3',
    title: 'React & Next.js',
    description: 'Современные библиотеки для создания мощных интерфейсов.',
    links: [
      { label: 'Next.js Docs', url: 'https://nextjs.org/docs' }
    ],
    status: 'upcoming'
  }
];