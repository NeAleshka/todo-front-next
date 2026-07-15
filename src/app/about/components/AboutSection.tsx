export const AboutSection = () => {
  const stats = [
    { value: "10K+", label: "Довольных клиентов", color: "text-blue-600" },
    { value: "5000+", label: "Товаров в каталоге", color: "text-purple-600" },
    { value: "98%", label: "Положительных отзывов", color: "text-blue-600" },
    { value: "24/7", label: "Поддержка клиентов", color: "text-purple-600" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Наша история
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            MyShop был основан в 2020 году с простой миссией — сделать
            онлайн-шопинг доступным и удобным для каждого. Мы начинали как
            небольшой стартап, а сегодня обслуживаем тысячи клиентов по всей
            стране.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Наша команда постоянно работает над улучшением сервиса, расширением
            ассортимента и повышением качества обслуживания. Мы верим, что
            покупки должны приносить радость, а не стресс.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
