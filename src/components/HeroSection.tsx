export const HeroSection = () => {
  return (
    <section className="mb-12">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Добро пожаловать в MyShop!
        </h1>
        <p className="text-lg md:text-xl mb-6 opacity-90">
          Лучшие товары по отличным ценам. Найди то, что искал!
        </p>
        <button
          type={"button"}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Смотреть каталог
        </button>
      </div>
    </section>
  );
};
