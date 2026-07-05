"use client";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PopularProducts } from "@/components/PopularProducts";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

// Основной компонент страницы
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
        <PopularProducts />
        <Features />
      </main>

      <Footer />
    </div>
  );
}
