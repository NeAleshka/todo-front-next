interface ValueCardProps {
  emoji: string;
  title: string;
  description: string;
}

const ValueCard = ({ emoji, title, description }: ValueCardProps) => {
  return (
    <div className="text-center p-6">
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const ValuesSection = () => {
  const values = [
    {
      emoji: "🎯",
      title: "Качество",
      description:
        "Мы тщательно отбираем каждый товар, чтобы гарантировать высокое качество и долговечность",
    },
    {
      emoji: "💡",
      title: "Инновации",
      description:
        "Постоянно внедряем новые технологии для улучшения пользовательского опыта",
    },
    {
      emoji: "",
      title: "Доверие",
      description:
        "Строим долгосрочные отношения с клиентами на основе честности и прозрачности",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Наши ценности
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};
