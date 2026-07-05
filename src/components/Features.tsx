export const Features = () => {
  return (
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
  );
};
