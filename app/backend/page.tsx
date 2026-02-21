
import { backendSteps } from '@/data/backend';
import RoadmapCard from '@/components/RoadmapCard';

export default function BackendPage() {
	return (
		<main className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-24">
			<div className="max-w-5xl mx-auto">
				<header className="mb-12">
					<h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
						Backend Roadmap
					</h1>
					<p className="text-slate-400 mt-4 text-lg">Мой путь изучения бэкенда</p>
				</header>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{backendSteps.map((step) => (
						<RoadmapCard key={step.id} step={step} />
					))}
				</div>
			</div>
		</main>
	);
}
