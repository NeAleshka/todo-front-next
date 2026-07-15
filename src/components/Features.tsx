import { type TeamMember, TeamMemberCard } from "@/app/about/components";

const features: TeamMember[] = [
  {
    name: "Быстрая доставка",
    emoji: "🚚",
    role: "Доставим заказ в течение 1-3 дней",
  },
  {
    name: "Удобная оплата",
    emoji: "💳",
    role: "Доставим заказ в течение 1-3 дней",
  },
  {
    name: "Легкий возврат",
    emoji: "🔄",
    role: "Вернем деньги в течение 14 дней",
  },
];

export const Features = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Почему выбирают нас
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map(({ name, role, emoji }) => (
          <TeamMemberCard key={name} name={name} role={role} emoji={emoji} />
        ))}
      </div>
    </section>
  );
};
