import Link from 'next/link';

export default function Home() {
  const categories = [
    { title: 'Frontend', desc: 'Интерфейсы и логика браузера', href: '/frontend', color: 'from-blue-500' },
    { title: 'Backend', desc: 'Серверы, базы данных и API', href: '/backend', color: 'from-green-500' },
    { title: 'DevOps', desc: 'Облака, CI/CD и сервера', href: '/devops', color: 'from-purple-500' },
  ];

  return (
    <main className="min-h-screen pt-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl font-black mb-4">Выбери свой путь</h1>
        <p className="text-slate-400 mb-12 text-lg">Актуальные навыки для разработчика в 2026 году</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href} className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all">
              <div className="bg-[#0f1115] p-8 rounded-[14px] h-full">
                <div className={`w-12 h-1 bg-gradient-to-r ${cat.color} to-transparent mb-6`} />
                <h2 className="text-2xl font-bold mb-2 transition-transform group-hover:translate-x-1">{cat.title}</h2>
                <p className="text-slate-400 text-sm">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}