export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  links: {
    label: string;
    url: string;
  }[];
  // Статус поможет нам визуально выделять этапы (пройдено/в процессе)
  status: 'completed' | 'current' | 'upcoming';
}