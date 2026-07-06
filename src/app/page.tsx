"use client";
import { Features } from "@/components/Features";
import { HeroSection } from "@/components/HeroSection";
import { PopularProducts } from "@/components/PopularProducts";

// Основной компонент страницы
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
        <PopularProducts />
        <Features />
      </main>
    </div>
  );
}
