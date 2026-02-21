import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Убедись, что этот файл существует
import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";

// Исправляем ошибку "inter is not defined"
const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Dev Roadmap | Мой путь обучения",
  description: "Отслеживание прогресса в изучении Frontend и Backend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning на html и body спасает от ошибок расширений (Bitwarden, AdBlock и т.д.)
    <html lang="ru" suppressHydrationWarning>
      <body 
        className={`${inter.className} bg-[#020617] text-slate-50 antialiased`} 
        suppressHydrationWarning
      >
        {/* Навигация всегда сверху */}
        <Navbar />
        
        {/* Индикатор прогресса, который мы только что создали */}
        <ProgressBar />

        {/* Основной контент с отступом сверху (pt-24), 
            чтобы Navbar и ProgressBar не перекрывали заголовок 
        */}
        <main className="min-h-screen pt-24 pb-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

        {/* Здесь можно добавить Footer в будущем */}
      </body>
    </html>
  );
}