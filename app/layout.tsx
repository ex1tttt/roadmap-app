import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Импортируем шрифт
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] }); // Создаем объект шрифта

export const metadata: Metadata = {
  title: "Roadmap App 2026",
  description: "My learning path",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}> {/* Теперь inter определен */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}