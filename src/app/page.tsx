"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection, ProductsSection, FeaturesSection } from "@/components/Sections";
import { products } from "@/data/products";

const defaultFeatures = [
  {
    icon: "🚚",
    title: "Быстрая доставка",
    description: "Доставим заказ в течение 1-3 дней",
  },
  {
    icon: "💳",
    title: "Удобная оплата",
    description: "Оплата картой, наличными или в рассрочку",
  },
  {
    icon: "🔄",
    title: "Легкий возврат",
    description: "Вернем деньги в течение 14 дней",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <HeroSection
          title="Добро пожаловать в MyShop!"
          description="Лучшие товары по отличным ценам. Найди то, что искал!"
          buttonText="Смотреть каталог"
        />

        <ProductsSection
          title="Популярные товары"
          products={products}
          viewAllLink="/catalog"
        />

        <FeaturesSection
          title="Почему выбирают нас"
          features={defaultFeatures}
        />
      </main>

      <Footer />
    </div>
  );
}
