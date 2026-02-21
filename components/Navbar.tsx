import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Roadmap.io
        </Link>
        
        <div className="flex gap-6 text-sm font-medium text-slate-300">
          <Link href="/frontend" className="hover:text-blue-400 transition-colors">Frontend</Link>
          <Link href="/backend" className="hover:text-blue-400 transition-colors">Backend</Link>
          <Link href="/devops" className="hover:text-blue-400 transition-colors">DevOps</Link>
        </div>
      </div>
    </nav>
  );
}