import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16 py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🛍️</span>
              <span className="text-xl font-bold">MyShop</span>
            </div>
            <p className="text-gray-400">Ваш надежный интернет-магазин</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <p className="text-gray-400">Email: support@myshop.ru</p>
            <p className="text-gray-400">Тел: +7 (999) 000-00-00</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                Telegram
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                VK
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          © 2024 MyShop. Все права защищены.
        </div>
      </div>
    </footer>
  );
};
