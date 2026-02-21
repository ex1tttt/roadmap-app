import { frontendSteps } from '@/data/frontend';
import RoadmapCard from '@/components/RoadmapCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-24">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Frontend Roadmap
          </h1>
          <p className="text-slate-400 mt-4 text-lg">Мой путь обучения в 2026 году</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frontendSteps.map((step) => (
            <RoadmapCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </main>
  );
}