"use client";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

// Компонент шапки
function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🛍️</span>
            <span className="text-xl font-bold text-gray-900">MyShop</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-900 font-medium hover:text-blue-600"
            >
              Главная
            </Link>
            <Link
              href="/catalog"
              className="text-gray-600 font-medium hover:text-blue-600"
            >
              Каталог
            </Link>
            <Link
              href="/about"
              className="text-gray-600 font-medium hover:text-blue-600"
            >
              О нас
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 font-medium hover:text-blue-600"
            >
              Войти
            </Link>
            <button className="relative p-2 text-gray-600 hover:text-blue-600">
              <span className="text-2xl">🛒</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Основной компонент страницы
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Герой-секция */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Добро пожаловать в MyShop!
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              Лучшие товары по отличным ценам. Найди то, что искал!
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Смотреть каталог
            </button>
          </div>
        </section>

        {/* Секция товаров */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Популярные товары
            </h2>
            <Link
              href="/catalog"
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              Смотреть все →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Преимущества */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <span className="text-4xl mb-4 block">🚚</span>
              <h3 className="font-semibold text-lg mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">
                Доставим заказ в течение 1-3 дней
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <span className="text-4xl mb-4 block">💳</span>
              <h3 className="font-semibold text-lg mb-2">
                Удобная оплата
              </h3>
              <p className="text-gray-600">
                Оплата картой, наличными или в рассрочку
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <span className="text-4xl mb-4 block">🔄</span>
              <h3 className="font-semibold text-lg mb-2">
                Легкий возврат
              </h3>
              <p className="text-gray-600">
                Вернем деньги в течение 14 дней
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-gray-900 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🛍️</span>
                <span className="text-xl font-bold">MyShop</span>
              </div>
              <p className="text-gray-400">
                Ваш надежный интернет-магазин
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-gray-400">Email: support@myshop.ru</p>
              <p className="text-gray-400">Тел: +7 (999) 000-00-00</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Telegram
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  VK
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2024 MyShop. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
