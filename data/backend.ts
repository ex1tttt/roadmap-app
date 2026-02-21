import { RoadmapStep } from '@/types/roadmap';

export const backendSteps: RoadmapStep[] = [
  {
    id: 'b1',
    title: 'Node.js & Runtime Basics',
    description: 'Событийная модель, работа с потоками, буферами и основами V8.',
    links: [
      { label: 'Node.js Docs', url: 'https://nodejs.org/ru/docs/' }
    ],
    status: 'current'
  },
  {
    id: 'b2',
    title: 'APIs & Express/Koa',
    description: 'Создание REST/GraphQL API, маршрутизация, middleware.',
    links: [
      { label: 'Express', url: 'https://expressjs.com' }
    ],
    status: 'current'
  },
  {
    id: 'b3',
    title: 'Databases & ORMs',
    description: 'SQL/NoSQL, проектирование схем, миграции и оптимизация запросов.',
    links: [
      { label: 'Postgres', url: 'https://www.postgresql.org' }
    ],
    status: 'upcoming'
  }
];
